LessonForm = React.createClass({
  mixins: [DOM],
  updateUserData (e) {
    /*const self = this;
    e.preventDefault();
    if (self.refs.userNameInput.value && self.refs.emailInput.value) {
      self.showOperationSpinner();
      Meteor.call('updateUserProfile', {
            name : self.refs.userNameInput.value,
            email: self.refs.emailInput.value
        }, function () {
            self.hideOperationSpinner();
        });
    }*/
  },
  render() {
    return (
      <div className="astro_form_component">
        <form className ="astro_form_component_content" onSubmit={this.updateUserData}>
            <div className="astro_form_component_content_textfield2">
              <input type="text" name="title" defaultValue="" autoComplete="off" placeholder="Título de la lección" required/>
            </div>
            <div className="astro_form_component_content_textfield2">
              <textarea rows="4" cols="50" name="description" autoComplete="off" placeholder="Descripción" required/>
            </div>
            <div className="astro_form_component_content_textfield2">
              <input type="text" name="duration" defaultValue="" autoComplete="off" placeholder="Duración" required/>
            </div>
            <div className="astro_form_component_content_textfield2">
              <div className="file_input_wrapper">
                  <div className="file_upload_label">Choose a file to upload</div>
                  <input type="file" name="upload" className="upload_field" title="Choose a file to upload"/>
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
