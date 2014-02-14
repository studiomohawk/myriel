#!/usr/bin/env node

var fs = require('fs');

function getDate(format) {
  var today = new Date();
  var DD = today.getDate();
  var MM = today.getMonth() + 1; //January is 0!
  var YYYY = today.getFullYear();
  var hh = today.getHours();
  var mm = today.getMinutes();
  var ss = today.getSeconds();

  if (DD < 10) {
    DD = '0' + DD;
  }
  if (MM < 10) {
    MM = '0' + MM;
  }

  if (format === 'yyyymmdd') {
    return [YYYY, MM, DD].join('-');
  } else {
    return [MM, DD, YYYY, hh, mm, ss].join('-');
  }
}

var write = (function() {
  var title = process.env.npm_config_title;
  var date = getDate('yyyymmdd');
  var filename = title.replace(/\s+/g, '-').toLowerCase() + '.md';
  var path = "content/post/";
  var output = path + filename;
  var stream = fs.createWriteStream(output);
  console.log('Creating new post: ' + output);
  stream.once('open', function() {
    stream.write('---\n');
    stream.write('title: "' + title + '"\n');
    stream.write('description: "" \n');
    stream.write('date: "' + date + '"\n');
    stream.write('author: "Yuya Saito"\n');
    stream.write('---\n');
  });
})();
