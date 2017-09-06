var { MongoClient } = require('mongodb');

exports.aggregateReader = function(aggregate, filter, callback) {
    MongoClient.connect('mongodb://mongodb:27017/event_machine', function(err, db) {
        if(err) throw err;

        db.collection('aggregate_' + aggregate, function(err, collection) {
            if(err) throw err;
            collection.find(filter).toArray(callback);
        });

        db.close();
    });
};
