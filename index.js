var request = require('request');

/**
 * Search GBIF occurrences.
 *
 * @param  {String} scientificName
 * @return {String}
 */
function search(scientificName) {
  var base_url = 'http://api.gbif.org/v1/occurrence/search';
  var params = { scientificName:scientificName, limit:10 };

  var res = request({
    url:base_url,
    qs:params,
    method:"GET"
    }, function (error, response, body) {
      if (response.statusCode != 200) {
        console.log('error: ', response.statusCode)
      };
  });

  return res.response;
  // return JSON.parse(res.response.body);
}

// scientificName = "Helianthus"

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });

exports.search = search;
