//elastic search engine

  var elasticsearch = require('elasticsearch');
  console.log('importing....elastic.....');
  var esclient_v17 = new elasticsearch.Client({
    host: '192.168.31.171:9200',
    log: 'trace',
    sniffOnStart: true,
    sniffInterval: 300000
  });



var ElasticDAO = function() {};

ElasticDAO.prototype.putMapping = function(index, type) {


   console.log('putMapping....elastic.....');
    var snowball = {
        'job' : {
            'properties' : {
                'mongoid': {'type':'string', 'index': 'not_analyzed'},
                'title' :  {'type': 'string', 'store': true, 'index': 'analyzed'},
                'skills':  {'type': 'string', 'store': true, 'index': 'analyzed'},
                'company': {'type': 'string', 'store': true, 'index': 'analyzed'},
                'city': {'type': 'string', 'store': true, 'index': 'analyzed'},
                'state': {'type': 'string', 'store': true, 'index': 'analyzed'},
                'zipcode': {'type': 'integer', 'store': true,  'index': 'not_analyzed'},
                'job_type': {'type': 'string', 'store': true, 'index': 'analyzed'},
                'position_type': {'type': 'string', 'index': 'analyzed'},
                'vacancies': {'type': 'integer'},
                'min_experience': {'type': 'string'},
                'education': {'type': 'string', 'store': true, 'index': 'analyzed'},
                'salary_min': {'type': 'integer', 'store': true, 'index': 'not_analyzed'},
                'salary_max': {'type': 'integer', 'store': true, 'index': 'not_analyzed'},
                'bonus': {'type': 'String',  'index': 'analyzed'},
                'category': {'type': 'string', 'store': true, 'index': 'analyzed'},
                'rank': {'type': 'integer', 'store': true, 'index': 'not_analyzed'},
                'create_date': {'type': 'date'},
                'last_update': {'type': 'date'},
                'description': {'type': 'string', 'store': true, 'index': 'analyzed'},
                'requirements': {'type': 'string', 'store': true, 'index': 'analyzed'},
                'companydesc': {'type': 'string', 'store': true, 'index': 'analyzed'},
                'detail_link': {'type': 'string', 'index': 'no'},
                'from_link': {'type': 'string', 'index': 'no'},
                'country': {'type': 'string', 'store': true, 'index': 'analyzed'}
            }
        }
    };

//delete index command in cli
// curl -XDELETE 'http://localhost:9200/greatejob/'
    esclient_v17.indices.exists({
        index: index
    },function(error, exist) {
        if(error){console.log(error);return;}
        if(exist == false){
            esclient_v17.indices.create({
                index: index
            },function(error, res) {
                if(error){console.log(error);return;}
                //create index ok now will mapping
                esclient_v17.indices.putMapping({
                    index: index,
                    type: type,
                    body: snowball
                },function(error, response) {
                    if(error){
                      console.log(error);
                      return;
                    }
                    console.log('ok putMapping ok!');
                });
            });
        }else{
          console.log('index already exist not need recreate or remapping!.. pls del manual when recreate')
          return;
        }
    });

};

ElasticDAO.prototype.addIndex =  function(index, type, indexid, data) {

    //search mongoid from index.
    esclient_v17.exists({
        index: index,
        type: type,
        id: indexid
    }, function(err, exist) {
        if(err){console.log(err); return false;}
        if(exist == false) {
            //mongoid not exist in index.
            esclient_v17.index({
                index: index,
                id: indexid,
                body: data
            },function(err, response) {
                if(err){
                  console.log(err);
                  return false;
                }
                console.log('ok index data ok data= ok!'+ JSON.stringify(data));
                return true;
            });
        }

    });


};

ElasticDAO.prototype.updateIndex = function(index, type, indexid, data) {
  //search mongoid from index.
  esclient_v17.exists({
      index: index,
      type: type,
      id: indexid
  }, function(err, exist) {
      if(err){console.log(err); return false;}
      if(exist == false) {
          //mongoid not exist in index.

          esclient_v17.update({
              index: index,
              type: type,
              id: indexid,
              body: {
                doc: data
              }
          },function(err, response) {
              if(err){
                console.log(err);
                return false;
              }
              console.log('ok update index ok! new data for update' + JSON.stringify(response));
              return true;
          });
       }
  });
};

ElasticDAO.prototype.deleteIndex = function(index, type, indexid) {
    esclient_v17.delete({
        index: index,
        type: type,
        id: indexid
    }, function ( err, response){
      if(err){
        console.log(err);
        return false;
      }
      //console.delete index ok
      console.log('delete ok indexid=' + indexid );
      return true;
    });
}

module.exports = new ElasticDAO();
