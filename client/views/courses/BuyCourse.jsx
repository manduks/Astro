BuyCourse = React.createClass({
  /*mixins: [ReactMeteorData, Utils],
  getMeteorData () {
    return {
      selectedCourse: Session.get('currentCourse'),
    }
  },*/
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
            <span>$649 MN</span>
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
