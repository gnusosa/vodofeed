App.filter('nil', function() {
    return function(input, scope) {
        if (input){
            return " ";
        } else {
            return input;
        }
    }
});
App.filter('minutes', function() {
    return function(input, scope) {
        if (input!=null)
            return Math.floor(input / 60) + ' min';
    }
});
App.filter('capitalize', function() {
    return function(input, scope) {
        if (input!=null)
            return input.substring(0,1).toUpperCase()+input.substring(1);
    }
});
App.filter('bytestosize', function() {
    return function(input,scope){
        var precision = 2;
        var kilobyte = 1024;
        var megabyte = kilobyte * 1024;
        var gigabyte = megabyte * 1024;
        var terabyte = gigabyte * 1024;
       
        if ((input >= 0) && (input < kilobyte)) {
            return input + ' B';
     
        } else if ((input >= kilobyte) && (input < megabyte)) {
            return (input / kilobyte).toFixed(precision) + ' KB';
     
        } else if ((input >= megabyte) && (input < gigabyte)) {
            return (input / megabyte).toFixed(precision) + ' MB';
     
        } else if ((input >= gigabyte) && (input < terabyte)) {
            return (input / gigabyte).toFixed(precision) + ' GB';
     
        } else if (input >= terabyte) {
            return (input / terabyte).toFixed(precision) + ' TB';
     
        } else {
            return input + ' B';
        }
    }
});
App.filter('cleandate', function () {
  return function (input, scope) {
    var arraystr = input.split('-');
    var output;
    var blankValue = "";
    var dString = new Date(Date.parse(arraystr[0]+"-"+arraystr[1]+"-"+arraystr[2]+"T"+arraystr[3]));
    output = dString.toDateString() + " " + dString.getHours() + ":" + dString.getMinutes();
    return output.search("Invalid Date") >= 0 ? blankValue : output;
    }
});
