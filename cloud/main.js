//customize app cloud logic, all the public functions defined here will be accessible using the url:
//http://<host>/cloud/<function name>

var getWeather = require('./weather').getWeather;
var saveData = require('./databrowser').saveData;
var connectDB = require('./databrowser').connectDB;
var recordActivity = require('./record_activity').recordActivity;
var listActivity = require('./record_activity').listActivity;
var setUp = require('./setUp.js');
var dbUrl = 'mongodb://127.0.0.1:27017/test';
if(process.env && !process.env.FH_USE_LOCAL_DB && process.env.FH_MONGODB_CONN_URL){
  dbUrl = process.env.FH_MONGODB_CONN_URL;
}


//setUp(function (err,ok){
//   console.log("SET UP IS DONE",err);
//});

connectDB(dbUrl, function(){

});

exports.testDownload = function(params, cb) {


  $fh.cms.downloadField(params, function(err, res) {
    console.log('HERE1');
    console.log(arguments);
    console.log('HERE2');
    cb(err, res);
  });

}


exports.populate = function (params, callback){
  setUp(callback);
};


exports.hello = function(params, callback) {
  recordActivity({
    "action": "Client called Cloud App"
  }, function(err, docs) {
    return callback(null, {
      text: 'Hello from FeedHenry'
    });
  });
};

exports.getWeather = function(params, callback) {
  recordActivity({
    "action": "Cloud Weather Called"
  }, function(err, docs) {
    return getWeather(params, callback);
  });
};

exports.saveData = function(params, callback) {
  recordActivity({
    "action": "Save Data in Cloud"
  }, function(err, docs) {
    return saveData(params, callback);
  });
};

exports.recordActivity = function(params, callback) {
  return recordActivity(params, callback);
};

exports.listActivity = function(params, callback) {
  return listActivity(params, callback);
};

exports.getTime = function(params, callback) {
  return callback(null, {
    time: new Date().getTime()
  });
};
