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
  }
}
