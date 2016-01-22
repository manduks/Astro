CourseForm = React.createClass({
  mixins: [ReactMeteorData, ReactRouter.History, React.addons.LinkedStateMixin, Utils],
  getMeteorData() {
    return {
      files: S3.collection.find().fetch()
    }
  },
  getInitialState() {
    var course = Session.get('currentCourse') || {};
    return {
      _id          : course._id,
      title        : course.title,
      imageFile    : course.imageFile,
      description  : course.description,
      price        : course.price
    };
  },
  uploadCourseImageChange(e) {
    var self = this,
      files =  this.refs.imageInput.files;

    self.showOperationSpinner();
    S3.upload({
      files: files,
      path : 'courses_assets'
    },function(err,r){
      if (err) {
        return console && console.log(err);
      }
      self.setState({imageFile: r.url});
      self.hideOperationSpinner();
    });
  },
  addOrUpdateCourse(e) {
    const state = this.state,
    self = this;

    e.preventDefault();
    self.showOperationSpinner();
    Meteor.call('addCourse', {
      _id          : state._id,
      title        : state.title.trim(),
      description  : state.description.trim(),
      price        : state.price.trim(),
      image        : state.imageFile,
      lessons      : []
    }, this.afterSaveCourse);
  },
  afterSaveCourse() {
    this.hideOperationSpinner();
    this.history.pushState(null, '/admin');
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
            <input type="text" name="title" valueLink={this.linkState('title')} autoComplete="off" placeholder="Título del curso" required/>
          </div>
          <div className="astro_form_component_content_textfield2">
            <textarea rows="4" cols="50" name="description" valueLink={this.linkState('description')} autoComplete="off" placeholder="Descripción" required/>
          </div>
          <div className="astro_form_component_content_textfield2">
            <input type="text" name="price" valueLink={this.linkState('price')} autoComplete="off" placeholder="Precio en pesos" required/>
          </div>
          <div className="astro_form_component_content_textfield2">
            <div className="file_input_wrapper">
              <div className="file_upload_label">{imageInputLabel}</div>
              <input type="file" name="upload" ref="imageInput" onChange={this.uploadCourseImageChange} className="upload_field" title="Elegir imagen" required/>
            </div>
          </div>
          <input type="submit" className="astro_button large" value= "Guardar"/>
        </form>
      </div>
    )
  }
});
