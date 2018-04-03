class FormFile {
  constructor(elem) {
    this.elem = elem;
    this.input = this.elem.querySelector('input[type="file"]');
    this.label = this.elem.querySelector('label');
    this.labelVal = this.label.innerHTML;

    this.init();
  }

  init() {
    this.addListeners();
  }

  addListeners() {
    this.elem.addEventListener('change', this.handleChange);
  }

  handleChange(event) {
    let fileName = '';
    if (this.input.files && this.input.files.length > 1) {
      fileName = (
        this.input.getAttribute('data-multiple-caption') || ''
      ).replace('{count}', this.input.files.length);
    } else {
      fileName = e.target.value.split('\\').pop();
    }

    if (fileName) {
      this.label.querySelector('span').innerHTML = fileName;
    } else {
      this.label.innerHTML = this.labelVal;
    }
  }
}

const elems = document.querySelectorAll('.js-form-file');

if (elems) {
  [].forEach.call(elems, elem => new FormFile(elem));
}

export default FormFile;
