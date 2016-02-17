Utils = {
  getEl (sel) {
    return document.querySelector(sel);
  },
  showModal() {
    this.getEl('dialog').setAttribute('open', '');
    this.getEl('main').classList.add('de-emphasized');
    this.getEl('main').addEventListener("click", this.hideModal);
  },
  hideModal() {
    var dialog = this.getEl('dialog'),
        main = this.getEl('main');

    if (dialog.close) {
  		dialog.close();
  	} else {
  		dialog.removeAttribute('open');
  	}
  	main.classList.remove('de-emphasized');
    this.getEl('main').removeEventListener("click", this.hideModal);
  },
  history() {
    return window.browserHistory;
  },
  showOperationSpinner() {
    let div = document.getElementById('operation_spinner');

    if (div) {
      return div.style.display = 'block';
    }

    div = document.createElement('div');
    div.id = 'operation_spinner';
    div.className = 'spinner operation_spinner';
    div.innerHTML = [
      '<div class="rect1"></div>',
      '<div class="rect2"></div>',
      '<div class="rect3"></div>',
      '<div class="rect4"></div>',
      '<div class="rect5"></div>'
    ].join ('');
    document.getElementById('App').appendChild(div);
  },
  hideOperationSpinner() {
    var div = document.getElementById('operation_spinner');
    if (div) {
      div.style.display = 'none';
    }
  },
  hmsToSecondsOnly(str) {
    var p = str.split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }
    return s;
  },
  secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
 },
 getCourseDuration (lessons) {
   const self = this;
   let duration = 0;
   lessons.forEach(function (l) {
     duration += self.hmsToSecondsOnly(l.duration);
   });
   return self.secondsToHms(duration);
 },
 ownsCourse(currentCourse) {
   const courses = (Session.get('currentUser') && Session.get('currentUser').courses) || [];
   currentCourse = currentCourse || Session.get('currentCourse');
   return courses.some(function (item) {
     return currentCourse._id === item;
   });
 },
 showAlert(type, text, callback) {
   const titles = {
     success: 'Excelente!',
     error  : 'Ups...',
     warning: 'Atención'
   };
   swal({
     title             : titles[type],
     text              : text,
     type              : type,
     howCancelButton   : true,
     confirmButtonColor: '#D7274D',
     allowOutsideClick : true,
     allowEscapeKey    : true,
     confirmButtonText : 'Aceptar',
   }, callback);
 },
 formatPrice(course) {
   var price = course.price ?  '$' + course.price + 'MXN': 'GRATIS';;
   if (this.ownsCourse(course)) {
     price  = 'Comprado';
   }
   return price;
 }
}
