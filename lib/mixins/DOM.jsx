DOM = {
  getEl (sel) {
    return document.querySelector(sel);
  },
  showModal() {
    this.getEl('dialog').setAttribute('open', '');
    this.getEl('main').classList.add('de-emphasized');
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
  }
}
