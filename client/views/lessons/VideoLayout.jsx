VideoLayout = React.createClass({
  mixins: [Utils],
  render() {
    return (
      <section className="astro_main_container">
        <div className="astro_video_hero">
          <span>
            <img src="http://localhost:3000/img//play.png"></img>
          </span>
          <div>
            <h2>Que es React?</h2>
            <p>Configurando nuestro entorno de desarrollo</p>
          </div>
        </div>
        <div className="astro_video_comments_info">
          <span>23 COMMENTS</span>
          <ul>
            <li>
              Nuevos
            </li>
            <li className="astro_video_comments_info_selected">
              Viejos
            </li>
          </ul>
        </div>
        <CommentsList/>
        <Commentform/>
        <Footer/>
      </section>
    )
  }
});
