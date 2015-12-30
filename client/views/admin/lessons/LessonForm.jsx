LessonForm = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState (){
    return {
      imageFile: '',
      videoFile: '',
    }
  },
  getMeteorData () {
    var sub = S3.collection;
    return {
      imageFile: S3.collection.find({ 'file.original_name': this.state.imageFile }).fetch()[0],
      videoFile: S3.collection.find({ 'file.original_name': this.state.videoFile }).fetch()[0]
    }
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
            <input type="text" name="title" defaultValue="" autoComplete="off" placeholder="Título de la lección" required/>
          </div>
          <div className="astro_form_component_content_textfield2">
            <input type="text" name="order" defaultValue="" autoComplete="off" placeholder="Orden" required/>
          </div>
          <div className="astro_form_component_content_textfield2">
            <textarea rows="4" cols="50" name="description" autoComplete="off" placeholder="Descripción" required/>
          </div>
          <div className="astro_form_component_content_textfield2">
            <input type="text" name="duration" defaultValue="" autoComplete="off" placeholder="Duración" required/>
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
  },
  uploadLessonImage() {
    const self = this,
    files =  this.refs.imageInput.files;

    this.setState({imageFile: files[0].name});

    S3.upload({
      files: files,
      path : 'lessons_assets'
    },function (e, r){
      if (e) {
        return console && console.log(e);
      }
      self.imageFileURL = r.url;
    });
  },
  uploadLessonVideo() {
    const self = this,
    files =  this.refs.videoInput.files;

    this.setState({videoFile: files[0].name});

    S3.upload({
      files: files,
      path : 'lessons_assets'
    },function (e, r){
      if (e) {
        return console && console.log(e);
      }
      self.videoFileURL = r.url;
    });
  }
});

/**
* Duracion
* title
* Description
* Video
*/
