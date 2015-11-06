LessonsList = React.createClass({
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
      <div className="astro_lessons_list">
        {this.state.lessons.map(function (lesson) {
          return <LessonItem  key={lesson.duration} lesson={lesson}/>;
        }, this)}
      </div>
    )
  }
});
