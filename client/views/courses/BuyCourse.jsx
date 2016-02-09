BuyCourse = React.createClass({
  mixins: [
    ReactRouter.History, React.addons.LinkedStateMixin, Utils
  ],
  getInitialState() {
    return {
      name  : 'Armando Gonzalez',
      number: '4242424242424242',
      month : 02,
      year  : 2016,
      cvc   : '232',
      course: ''
    }
  },
  componentDidMount() {
    if (!Session.get('currentCourse')) {
      return this.history.pushState(null, '/app');
    }
  },
  handleChangeMonth(newValue){
    this.setState({month: newValue});
  },
  handleChangeYear(newValue){
    this.setState({year: newValue});
  },
  payWithOxxo() {
    alert('Oxxo');
  },
  payWithCC(e) {
    e.preventDefault();
    Conekta.setPublishableKey('key_MxhSqdJdtsmBy64o');
    this.state.course = Session.get('currentCourse');
    this.showOperationSpinner();
    Conekta.token.create(this.refs.CCForm, this.conektaSuccessResponseHandler, this.conektaErrorResponseHandler);
  },
  conektaSuccessResponseHandler(token) {
    const self = this;
    this.state.token = token;
    Meteor.call('chargeCreditCard', this.state, function(error, result) {
      if (error) {
        console.log('Error', 'No pudimos procesar la petición de pago, intentalo de nuevo ...');
      } else {
        self.hideOperationSpinner();
        if (result.object === 'error'){
          self.showAlert('error', result.message_to_purchaser);
        } else {
          self.showAlert('success', result.status);
        }
      }
    });
  },
  conektaErrorResponseHandler(error) {
    this.showAlert('error', error.message_to_purchaser);
    this.hideOperationSpinner();
  },
  render() {
    const course = Session.get('currentCourse'),
    valueLinkMonth = {
      value: this.state.month,
      requestChange: this.handleChangeMonth
    },
    valueLinkYear = {
      value: this.state.year,
      requestChange: this.handleChangeYear
    };

    return (
      <section className="astro_payment">
        <section className="astro_payment_container">
          <section className="astro_payment_left_container">
            <h1>COMPRAR CURSO</h1>
            <span>${course.price}</span>
            <div>{course.title + ', ' + course.description}</div>
          </section>
          <section className="astro_payment_right_container">
            <div className="astro_pay_with_cc">
              <form ref="CCForm" className="astro_payment_form" onSubmit={this.payWithCC}>
                <h1>Pagar con Tarjeta</h1>
                <div>
                  <input type="text" name="name" valueLink={this.linkState('name')} autoComplete="off" placeholder="Nombre del tarjetahabiente" data-conekta="card[name]" required/>
                </div>
                <div>
                  <input type="text" name="number" valueLink={this.linkState('number')} autoComplete="off" placeholder="Número de tarjeta de crédito" data-conekta="card[number]" required/>
                </div>
                <span>Fecha de expiracion MM/AAAA</span>
                <div className="astro_payment_form_expiration_date">
                  <select valueLink={valueLinkMonth} data-conekta="card[exp_month]" >
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="05">04</option>
                    <option value="06">05</option>
                    <option value="07">06</option>
                    <option value="08">07</option>
                    <option value="09">08</option>
                    <option value="10">09</option>
                    <option value="11">10</option>
                    <option value="12">11</option>
                    <option value="12">12</option>
                  </select>
                  <select valueLink={valueLinkYear} data-conekta="card[exp_year]">
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>
                <div>
                  <input  type="text" name="cvc" size="4" autoComplete="off" valueLink={this.linkState('cvc')}  placeholder="CVC/CVV" data-conekta="card[cvc]" required/>
                </div>
                <input type="submit" className="astro_payment_button payWithCC" value= "Pagar"/>
              </form>
            </div>
            <div className="astro_pay_with_other">
              <h2>
                <span>o pagar con</span>
              </h2>
              <section className="astro_payment_button" onClick={this.payWithOxxo}>
                <img src="http://localhost:3000/img/oxxo.png" width="76px"/>
              </section>
            </div>
          </section>
        </section>
      </section>
    )
  }
});
