'use strict';

const language = require("../model/language");

module.exports = {
  up: (models, mongoose) => {
   
    
      return models.language.insertMany([
        {
          _id: "66fa6187c8de5b5999edc5a7",
          language: "malayalam"
          
        }
      ]).then(res => {
      // Prints "1"
      console.log(res.insertedCount);
    });
  
  },

  down: (models, mongoose) => {

      return models.language.deleteMany({
        _id : {
          $in :[
            "66fa6187c8de5b5999edc5a7"
          ]
        }
      }

      ).then(res => {
      // Prints "1"
      console.log(res.deletedCount);
      });
  
  }
};
