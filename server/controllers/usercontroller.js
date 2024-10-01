const user= require("../db/model/user")
const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;
const genere = require('../db/model/genere');
const language=require("../db/model/language")

exports.addmovies = async (req, res) => {
    try {
        let body = req.body;
        console.log("data from request:", body);

        let body_genere = body.genere;

        let genere_collection= await genere.findOne({genere : body_genere});
        let genere_id = genere_collection._id;
        console.log("genere_id : ",genere_id);
        body.genere = genere_id;


        let body_language = body.language;
        let language_collection= await language.findOne({language : body_language});
        let language_id = language_collection._id;
        console.log("language_id : ",language_id);
        body.language = language_id;

        const addedMovie = await user.create(body);

        if (addedMovie) {
            let response = success_function({
                statusCode: 201,
                message: "Movie added",
            });

            res.status(response.statusCode).send(response);
            return;
        } else {
            let response = error_function({
                statusCode: 400,
                message: "Movie addition failed",
            });
            res.status(response.statusCode).send(response);
            return;
        }
    } catch (error) {
        console.log("error:", error);

        let response = error_function({
            statusCode: 400,
            message: error.message ? error.message : "Something went wrong",
        });

        res.status(response.statusCode).send(response);
        return;
    }
};

exports.view = async (req, res) => {
    let section; // Declare section outside the try block
    try {
        section = await user.find().populate("genere");
        console.log("section:", section);

        let response = success_function({
            success: true,
            statusCode: 200,
            message: "movies retrieved",
            data: section,
        });
        res.status(response.statusCode).send(response);
    } catch (error) {
        console.error("Error fetching movies:", error); // Log the error for debugging

        let response = error_function({
            success: false,
            statusCode: 400,
            message: "Error fetching movies",
            data: null, // You may want to set data to null or omit it
        });
        res.status(response.statusCode).send(response);
    }
};


