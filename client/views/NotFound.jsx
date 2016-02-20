NotFound = React.createClass({
  mixins : [ReactRouter.History],
  render() {
    return (
      <div className="astro_404">
        <h1>La página no existe :(</h1>
        <label>404</label>
        <Button size="large" text="REGRESAR" onClick={this.handleBack}/>
      </div>
    )
  },
  handleBack() {
    this.history.pushState(null, '/app');
  }
});
