var bodyParser = Meteor.npmRequire('body-parser');

Picker.middleware(bodyParser.json());
Picker.middleware(bodyParser.urlencoded({
  extended: false
}));

Picker.route('/webhook', function(params, req, res, next) {
  var responseData = typeof req.body == 'string' ? JSON.parse(req.body) : req.body,
    user = null,
    ids = null;
  if (responseData.type == 'charge.paid') {
    /*user = responseData.data && responseData.data.object && responseData.data.object.details;
    ids = responseData.data && && responseData.data.object && && responseData.data.object.reference_id;
    ids = ids && ids.split('-');*/

    ids = ['m3PmKscrQALruayWq', 'CnuKikjSB9xYDzRo7']
    user = {
      email: 'iam@armando.mx'
    };
    if (user && ids) {
      Meteor.users.update({
        _id: ids[1]
      }, {
        $push: {
          courses: ids[0]
        }
      });

      Meteor.Mailgun.send({
        to: user.email,
        from: 'soporte@codetlan.com',
        subject: 'Bienvenido al curso de React JS',
        text: 'Te damos la bienvenida al curso de react'
      });
    }
  }
  res.end();
});
