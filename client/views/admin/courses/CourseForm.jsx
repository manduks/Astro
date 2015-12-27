CourseForm = React.createClass({
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
                  <div className="file_upload_label">Elegir imagen</div>
                  <input type="file" name="upload" className="upload_field" title="Elegir imagen"/>
              </div>
            </div>
            <input type="submit" className="astro_button large" value= "Guardar"/>
        </form>
      </div>
    )
  }
});

/**
 * Duracion
 * title
 * Description
 * Video
 */
