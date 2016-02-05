BuyCourse = React.createClass({
  mixins: [
    ReactRouter.History, Utils
  ],
  componentDidMount() {
    if (!Session.get('currentCourse')) {
      return this.history.pushState(null, '/app');
    }
    /*if (this.ownsCourse()) {
       return this.history.pushState(null, '/lessons/' + Session.get('currentCourse')._id);
    }*/
  },
  payWithCompropago() {
    const course = Session.get('currentCourse'),
          user = Session.get('currentUser'),
    obj = {
      "product_price": course.price,
      "product_name": course.title,
      "product_id": course._id,
      "image_url": course.imageFile,
      "customer_name": user.name,
      "customer_email": user.email
    };
    Meteor.call('compropagoCharge', obj, function(error, result) {
      var instructions;
      if (error) {
        console.log('Error', 'No pudimos procesar la petición de pago, intentalo de nuevo ...');
      } else {
        console.log(result);
        instructions = result.payment_instructions;
      }
    });
  },
  payWithPaypal() {
    this.refs.paypalForm.submit();
  },
  render() {
    var course = Session.get('currentCourse');
    return (
      <section className="astro_payment">
        <section className="astro_payment_container">
          <section className="astro_payment_left_container">
            <h1>COMPRAR CURSO</h1>
            <span>${course.price}</span>
            <div>{course.title + ', ' + course.description}</div>
          </section>
          <section className="astro_payment_right_container">
            <h1>Puedes pagar con</h1>
            <div>
              <section className="astro_payment_button" onClick={this.payWithCompropago}>
                <img src="http://localhost:3000/img/compropago-logo2.png"/>
              </section>
            </div>
            <div>
              <section className="astro_payment_button" onClick={this.payWithPaypal}>
                <img src="http://localhost:3000/img/paypal-logo2.png"/>
                <form ref="paypalForm" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick"/>
                  <input type="hidden" name="hosted_button_id" value={course.paypalId}/>
                </form>
              </section>
            </div>
          </section>
        </section>
      </section>
    )
  }
});
