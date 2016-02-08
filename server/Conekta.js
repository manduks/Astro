var conekta = Meteor.npmRequire('conekta'),
    Future = Meteor.npmRequire('fibers/future');
    COMPROPAGO_DEVELOPMENT_KEY = 'e58dc4e347211',
    COMPROPAGO_PRODUCTION_KEY = '0875847df0f31';

conekta.api_key = 'key_eYvWV7gSDkNYXsmr';
conekta.locale = 'es';

Meteor.methods({
  chargeCreditCard: function(chargeObject) {
    var course = chargeObject.course,
        user = Meteor.user(),
        future = new Future();

    conekta.Charge.create({
      description: course.title,
      amount: course.price,
      currency: 'MXN',
      reference_id: course._id,
      card: chargeObject.number,
      details: {
        name: user.name,
        email: user.email,
        customer: {
          logged_in: true
        }
      }
    }, function(err, res) {
      if (err) {
        return future["return"](err, null)
      }
      return future["return"](null, res.toObject())
    });
    return future.wait();
  }
});
