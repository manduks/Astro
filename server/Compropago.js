var request = Meteor.npmRequire('request'),
  COMPROPAGO_DEVELOPMENT_KEY = 'e58dc4e347211',
  COMPROPAGO_PRODUCTION_KEY = '0875847df0f31';

Meteor.methods({
  compropagoCharge: function(chargeObject) {
    var auth = new Buffer(COMPROPAGO_DEVELOPMENT_KEY + ':').toString('base64');
    var options = {
      url: 'https://api.compropago.com/v1/charges',
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + auth,
        'Accept': 'application/compropago',
        'Content-Type': 'application/json'
      },
      data: chargeObject
    };
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        return body;
      }
      console.log(error);
    });
  }
});
