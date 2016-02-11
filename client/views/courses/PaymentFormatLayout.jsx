PaymentFormatLayout = React.createClass({
  mixins: [Utils, ReactMeteorData],
  getMeteorData () {
    let sub = Meteor.subscribe("courses"),
        courseId = this.props.params && this.props.params.courseId;
    return {
      course: Courses.find({_id: courseId}).fetch()[0],
      loadingCourse: !sub.ready()
    }
  },
  render() {
    var barcodeId = this.props.params && this.props.params.barcodeId,
        course    = this.data.course,
        barcode   = 'http://s3.amazonaws.com/cash_payment_barcodes/'+ barcodeId +'.png';

    if (!course || this.loadingCourse) {
        return <Loader></Loader>
    }

    return (
        <main>
            <section className="astro_print_format_container">
              <h1>CODETLAN</h1>
              <span>${course.price} MXN</span>
              <div>{course.title + ', ' + course.description}</div>
              <img src={barcode}/>
              <section className="astro_print_format_instructions">
                <ul>
                  <li>* Presentar este formato en el Oxxo de tu preferencia.</li>
                  <li>* Este formato de pago caducará en tres días.</li>
                  <li>* Puedes enviar este link, para que alguien pague.</li>
                </ul>
              </section>
              <div className="print_action" onClick={window.print}>Imprimir</div>
            </section>
        </main>
    )
  }
});
