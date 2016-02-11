var conekta = Meteor.npmRequire('conekta'),
    Future = Meteor.npmRequire('fibers/future');

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
    }, Meteor.bindEnvironment(function(err, res) {
      if (err) {
        console.log(err);
        return future["return"](err)
      }
      //agregamos el usuario al curso
      Meteor.users.update({
        _id : Meteor.userId()
      },{
        $push: {courses: course._id}
      });
      return future["return"](res.toObject())
    }));
    return future.wait();
  }
});
