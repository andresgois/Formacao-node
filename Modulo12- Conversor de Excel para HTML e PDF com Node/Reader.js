const fs = require('fs');
const util = require('util');

class Reader{

  constructor(){
    this.reader = util.promisify(fs.readFile);
  }

  async Read(filepath){
    try {
      return await this.reader(filepath, "utf-8");
    } catch (error) {
      console.log("Error:  "+error);
    }
  }

  // Read(filepath){
  //   fs.readFile(filepath, "utf-8", (err, data) => {
  //     if(err){
  //       console.log("Error: "+err);
  //     }else{
  //       console.log(data);
  //     }
  //   });
  // }
}

module.exports = Reader;