CourseForm = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData () {
    var sub = S3.collection;
    return {
      files: S3.collection.find().fetch()
    }
  },
  getInitialState: function() {
    return {title: '', file: '', description: '', lessonNumber: '', duration: ''};
  },
  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
  },
  handleDescriptionChange: function(e) {
    this.setState({description: e.target.value});
  },
  handleLessonNumberChange: function(e) {
    this.setState({lessonNumber: e.target.value});
  },
  handleDurationChange: function(e) {
    this.setState({duration: e.target.value});
  },
  uploadCourseImageChange: function(e) {
    var self = this,
      files =  this.refs.imageInput.files;
    S3.upload({
      files: files,
      path : 'courses_assets'
    },function(err,r){
      console.log(arguments);
      if (err) {
        return console && console.log(err);
      }
      //console.log(r);
      self.fileURL = r.url;
      self.setState({file: r.url});
    });
  },
  render() {
    let file = this.data.files[this.data.files.length - 1];
    let imageInputLabel = file ? (file.percent_uploaded + ' %') : 'Elegir imagen';

    if (file && (file.percent_uploaded >= 100)) {
      imageInputLabel = 'Archivo listo 100%';
    }
    return (
      <div className="astro_form_component">
        <form className ="astro_form_component_content" onSubmit={this.addOrUpdateCourse}>
          <div className="astro_form_component_content_textfield2">
            <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} autoComplete="off" placeholder="Título del curso" required/>
          </div>
          <div className="astro_form_component_content_textfield2">
            <textarea rows="4" cols="50" name="description" value={this.state.description} onChange={this.handleDescriptionChange} autoComplete="off" placeholder="Descripción" required/>
          </div>
          <div className="astro_form_component_content_textfield2">
            <input type="text" name="lessonNumber" value={this.state.lessonNumber} onChange={this.handleLessonNumberChange} autoComplete="off" placeholder="Número de lecciones" required/>
          </div>
          <div className="astro_form_component_content_textfield2">
            <input type="text" name="duration" value={this.state.duration} onChange={this.handleDurationChange} autoComplete="off" placeholder="Duración" required/>
          </div>
          <div className="astro_form_component_content_textfield2">
            <div className="file_input_wrapper">
              <div className="file_upload_label">{imageInputLabel}</div>
              <input type="file" name="upload" ref="imageInput" onChange={this.uploadCourseImageChange} className="upload_field" title="Elegir imagen"/>
            </div>
          </div>
          <input type="submit" className="astro_button large" value= "Guardar"/>
        </form>
      </div>
    )
  },
  addOrUpdateCourse(e) {
    e.preventDefault();
    var title = this.state.title.trim();
    var description = this.state.description.trim();
    var lessonNumber = this.state.lessonNumber.trim();
    var duration = this.state.duration.trim();

    console.log(this.state);
    console.log(self.fileURL);
    //TODO: validations
    // TODO: send request to save the server
    this.setState({title: '', file: '', description: '', lessonNumber: '', duration: ''});

  }
});

/**
* Duracion
* title
* Description
* Video
*/
