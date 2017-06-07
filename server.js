var express = require('express');
var dateformat = require('dateformat');
var app = express();

app.get("/:val", function(req, res){
    var val = req.params.val;
    var unix = + new Date(val);
    var natural;
    var ret = {unix:null, natural:null};
    console.log(val);
    if(unix){
        console.log("natural entered");
        console.log(+ new Date(val));    
        natural = dateformat(unix, "mmmm dS, yyyy");
        console.log(natural);
        ret.unix = unix;
        ret.natural = natural;
    }
    else{
        if(isNumeric(val)){
            console.log("unix entered");
            natural = dateformat(Number(val), "mmmm dS, yyyy");
            console.log(natural);
            ret.unix = Number(val);
            ret.natural = natural;
        }
        else{
            console.log("invalid");
        }
        
    }

    res.send(ret);
    
});

app.listen(8080);

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}