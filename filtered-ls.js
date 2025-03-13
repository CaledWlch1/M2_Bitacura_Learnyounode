var fs = require('fs');
var path = require('path');
    
module.exports = function (dir, ext, callback) {

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err);

    list = list.filter(function (file) {
      return path.extname(file) === '.' + ext;
    });

    callback(null, list);
  });
};


var fs = require('fs');
var buffer = fs.readdir(process.argv[2],function(err,list){
    var len = list.length;
    var ext = process.argv[3];
    for(var i=0;i<len;i++){
        if(list[i].indexOf('.'+ext)!=-1)
            console.log(list[i]);
    }
});
    