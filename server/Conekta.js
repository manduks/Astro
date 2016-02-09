var conekta = Meteor.npmRequire('conekta'),
    Future = Meteor.npmRequire('fibers/future');
    COMPROPAGO_DEVELOPMENT_KEY = 'e58dc4e347211',
    COMPROPAGO_PRODUCTION_KEY = '0875847df0f31';

conekta.api_key = 'key_RzxqmGEsnUnRtiLa';
conekta.locale = 'es';

Meteor.methods({
  chargeCreditCard: function(chargeObject) {
    const course = chargeObject.course,
        user = Meteor.user(),
        future = new Future(),
        token = chargeObject && chargeObject.token;

    conekta.Charge.create({
      description: course.title,
      amount: course.price,
      currency: 'MXN',
      reference_id: course._id,
      card: token.id,
      conektaTokenId: token.id,
      details: {
        name: user.name,
        email: user.email,
        customer: {
          logged_in: true
        }
      }
    }, function(err, res) {
      if (err) {
        console.log(err);
        return future["return"](err)
      }
      return future["return"](res.toObject())
    });
    return future.wait();
  }
});
