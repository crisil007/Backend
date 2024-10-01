const genere = require('../model/genere');
'use strict';

module.exports = {
  up: (models, mongoose) => {
    
      return models.genere.insertMany([
        {
          _id: "66fa55ffc8de5b5999edc598",
          genere: "comedy"
        }
        
      ]).then(res => {
      // Prints "1"
      console.log(res.insertedCount);
    });
   
  },

  down: (models, mongoose) => {
    
      return models.genere.deleteMany({
        _id : {
          $in :[
            "66fa55ffc8de5b5999edc598"
          ]
        }
      }).then(res => {
      // Prints "1"
      console.log(res.deletedCount);
      });
    
  }
};
