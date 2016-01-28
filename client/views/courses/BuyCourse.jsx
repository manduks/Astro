BuyCourse = React.createClass({
  mixins: [ReactRouter.History, Utils],
  componentDidMount(){
    if (!Session.get('currentCourse')){
      return this.history.pushState(null, '/app');
    }
    /*if (this.ownsCourse()) {
       return this.history.pushState(null, '/lessons/' + Session.get('currentCourse')._id);
    }*/
  },
  payWithCompropago() {
    alert('Compropago');
  },
  payWithPaypal() {
    alert('Paypal');
  },
  render() {
    return (
      <section className="astro_payment">
        <section className="astro_payment_container">
          <section className="astro_payment_left_container">
            <h1>COMPRAR CURSO</h1>
            <span>$200 MXN</span>
            <div>MeteorJS, Crea tu primer applicación lista para producción.</div>
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
              </section>
            </div>
          </section>
        </section>
      </section>
    )
  }
});
