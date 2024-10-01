const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
async function mongoconnect(){
    try {
        console.log("mongodb uri:",process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("database connection  established");

    } catch (error) {
        console.log("database connection failed")

    }
}
module.exports=mongoconnect;