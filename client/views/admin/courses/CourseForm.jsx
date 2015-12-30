CourseForm = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData () {
    var sub = S3.collection;
    return {
      files: S3.collection.find().fetch()
    }
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
            <input type="text" name="title" defaultValue="" autoComplete="off" placeholder="Título del curso" required/>
          </div>
          <div className="astro_form_component_content_textfield2">
            <textarea rows="4" cols="50" name="description" autoComplete="off" placeholder="Descripción" required/>
          </div>
          <div className="astro_form_component_content_textfield2">
            <input type="text" name="duration" defaultValue="" autoComplete="off" placeholder="Número de lecciones" required/>
          </div>
          <div className="astro_form_component_content_textfield2">
            <input type="text" name="duration" defaultValue="" autoComplete="off" placeholder="Duración" required/>
          </div>
          <div className="astro_form_component_content_textfield2">
            <div className="file_input_wrapper">
              <div className="file_upload_label">{imageInputLabel}</div>
              <input type="file" name="upload" ref="imageInput" onChange={this.uploadCourseImage} className="upload_field" title="Elegir imagen"/>
            </div>
          </div>
          <input type="submit" className="astro_button large" value= "Guardar"/>
        </form>
      </div>
    )
  },
  uploadCourseImage() {
    var self = this,
      files =  this.refs.imageInput.files;
    S3.upload({
      files: files,
      path : 'courses_assets'
    },function(e,r){
      console.log(arguments);
      if (e) {
        return console && console.log(e);
      }
      //console.log(r);
      self.fileURL = r.url;
    });
  }
});

/**
* Duracion
* title
* Description
* Video
*/
