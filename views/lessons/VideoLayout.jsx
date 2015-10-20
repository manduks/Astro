VideoLayout = React.createClass({
  mixins: [DOM],
  render() {
    return (
      <div className="astro_main_content">
        <Toolbar/>
        <section className="astro_main_container">
          <div className="astro_video_hero">
            <span>
              <img src="img/play.png"></img>
            </span>
            <div>
              <h2>Que es REact?</h2>
              <p>Configurando nuestro entorno de desarrollo</p>
            </div>
          </div>
          <div className="astro_video_comments_info">
            <span>23 COMMENTS</span>
            <ul>
              <li>
                Newest
              </li>
              <li className="astro_video_comments_info_selected">
                Oldest
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
});
