var pdf = require('html-pdf');


class PDFWriter{
  static WritePDF(filename, html){
    pdf.create(html,{}).toFile(filename, (err) => {
      return false;
    });
  }
}

module.exports = PDFWriter;