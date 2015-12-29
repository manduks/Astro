CourseForm = React.createClass({
  getInitialState() {
    return {
      imageInputLabel : 'Elegir imagen'
    }
  },
  render() {
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
              <div className="file_upload_label">{this.state.imageInputLabel}</div>
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
        console.log(e);
      }
      console.log(r);
      self.setState({imageInputLabel : 'manduks' })
    });
  }
});

/**
* Duracion
* title
* Description
* Video
*/
