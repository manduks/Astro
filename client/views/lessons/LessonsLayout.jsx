LessonsLayout = React.createClass({
  getInitialState() {
    return {
      lessons: [{
        title:'Que es react?',
        description:'Veamos que es React, una breve explication de que podemos hacer con esta libería.',
        duration:'9:34',
        image: 'img/es6.png',
        icon:'img/bookmark.png'
      },{
        title:'Que es react?',
        description:'Veamos que es React, una breve explication de que podemos hacer con esta libería.',
        duration:'9:35',
        image: 'img/es6.png',
        icon:'img/check.png'
      },{
        title:'Que es react?',
        description:'Veamos que es React, una breve explication de que podemos hacer con esta libería.',
        duration:'9:36',
        image: 'img/es6.png',
        icon:'img/bookmark.png'
      },{
        title:'Que es react?',
        description:'Veamos que es React, una breve explication de que podemos hacer con esta libería.',
        duration:'9:37',
        image: 'img/es6.png',
        icon:'img/check.png'
      },{
        title:'Que es react?',
        description:'Veamos que es React, una breve explication de que podemos hacer con esta libería.',
        duration:'9:38',
        image: 'img/es6.png',
        icon:'img/bookmark.png'
      }]
    };
  },
  render() {
    return (
      <section className="astro_main_container">
        <div className="astro_lessons_layout">
          <aside className="astro_lesson_course_info">
            <div className="astro_lesson_course_info_container">
              <span className="astro_lesson_course_info_container_title">REACT</span>
              <p>Aprende los principios basicos de esta asombrosa libreria</p>
              <span className="astro_lesson_course_info_container_duration">1hr 30 min</span>
            </div>
          </aside>
          <LessonsList/>
        </div>
      </section>
    )
  }
});
