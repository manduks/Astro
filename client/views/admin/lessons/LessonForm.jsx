LessonForm = React.createClass({
  mixins: [ReactMeteorData, ReactRouter.History, React.addons.LinkedStateMixin, DOM],
  getInitialState (){
    var lesson = Session.get('currentLesson') || {};
    return {
      _id        : lesson._id,
      title      : lesson.title,
      description: lesson.description,
      imageFile  : lesson.imageFile,
      videoFile  : lesson.videoFile,
      duration   : lesson.duration
    };
  },
  getMeteorData () {
    var sub = S3.collection;
    return {
      imageFile: S3.collection.find({ 'file.original_name': this.state.imageFile }).fetch()[0],
      videoFile: S3.collection.find({ 'file.original_name': this.state.videoFile }).fetch()[0]
    }
  },
  uploadLessonImage() {
    const files =  this.refs.imageInput.files;
    this.uploadFile(files, 'imageFile');
  },
  uploadLessonVideo() {
    const files =  this.refs.videoInput.files;
    this.uploadFile(files, 'videoFile');
  },
  uploadFile (files, varName) {
    const self = this;
    let obj = {};
    S3.upload({
      files: files,
      path : 'lessons_assets'
    },function (e, r){
      if (e) {
        return console && console.log(e);
      }
      obj[varName] = r.url;
      self.setState(obj);
    });
  },
  addOrUpdateLesson(e) {
    const state = this.state,
    self = this;
    e.preventDefault();
    self.showOperationSpinner();
    Meteor.call('addLesson', {
      _id          : state._id,
      title        : state.title.trim(),
      description  : state.description.trim(),
      order        : state.order.trim(),
      duration     : state.duration.trim(),
      imageFile    : state.imageFile,
      videoFile    : state.videoFile
    }, this.afterSaveLesson);
  },
  afterSaveCourse() {
    this.hideOperationSpinner();
    this.setState({id: null, title: null, description: null, order: null, duration: null, imageFile: null, videoFile: null});
    this.history.pushState(null, '/admin');
  },
  render() {
    let imageFile = this.data.imageFile;
    let imageInputLabel = imageFile? (imageFile.percent_uploaded + ' %') : 'Elegir imagen';
    let videoFile = this.data.videoFile;
    let videoInputLabel = videoFile? (videoFile.percent_uploaded + ' %') : 'Elegir video';

    if (imageFile && (imageFile.percent_uploaded >= 100)) {
      imageInputLabel = 'Imagen lista 100%';
    }
    if (videoFile && (videoFile.percent_uploaded >= 100)) {
      videoInputLabel = 'Video listo 100%';
    }
    return (
      <div className="astro_form_component">
        <form className ="astro_form_component_content" onSubmit={this.addOrUpdateLesson}>
          <div className="astro_form_component_content_textfield2">
            <input type="text" name="title" valueLink={this.linkState('title')}  autoComplete="off" placeholder="Título de la lección" required/>
          </div>
          <div className="astro_form_component_content_textfield2">
            <input type="text" name="order" valueLink={this.linkState('order')} autoComplete="off" placeholder="Orden" required/>
          </div>
          <div className="astro_form_component_content_textfield2">
            <textarea rows="4" cols="50" name="description" valueLink={this.linkState('description')} autoComplete="off" placeholder="Descripción" required/>
          </div>
          <div className="astro_form_component_content_textfield2">
            <input type="text" name="duration" valueLink={this.linkState('duration')} autoComplete="off" placeholder="Duración" required/>
          </div>
          <div className="astro_form_component_content_textfield2">
            <div className="file_input_wrapper">
              <div className="file_upload_label">{imageInputLabel}</div>
              <input type="file" name="uploadImage" ref="imageInput" onChange={this.uploadLessonImage} className="upload_field" title="Elegir imagen"/>
            </div>
            <div className="file_input_wrapper">
              <div className="file_upload_label">{videoInputLabel}</div>
              <input type="file" name="uploadVideo" ref="videoInput" onChange={this.uploadLessonVideo} className="upload_field" title="Elegir video"/>
            </div>
          </div>
          <input type="submit" className="astro_button large" value= "Guardar"/>
        </form>
      </div>
    )
  }
});
