DOM = {
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
  }
}
