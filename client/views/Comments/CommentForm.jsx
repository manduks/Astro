Commentform = React.createClass({
  render() {
    return (
      <div className="astro_comments_form">
        <div className="astro_comments_form_avatar">
          <img src="img/es6.png"></img>
        </div>
        <div className="astro_comments_form_textfield">
          <input type="text" name="comment"> </input>
        </div>
        <Button text="Enviar" size="medium"/>
      </div>
    )
  }
});
