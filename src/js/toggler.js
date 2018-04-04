import forEach from './utils/forEach';

class Toggler {
  constructor(elem) {
    // this.isToggled = false;
    this.elem = elem;
    this.target = this.getTarget(this.elem);

    this.activeClass = 'is-toggled';
    this.enabledClass = 'has-toggler';

    const linked = elem.getAttribute('data-toggle-linked');
    this.linked = linked ? `[data-toggle-linked="${linked}"]` : false;

    const group = elem.getAttribute('data-toggle-group');
    this.group = group ? `[data-toggle-group="${group}"]` : false;

    this.handleElemClick = this.handleElemClick.bind(this);

    this.init();
  }

  init() {
    if (!this.target) {
      return;
    }
    this.addListeners();
    this.elem.classList.add(this.enabledClass);
    this.target.classList.add(this.enabledClass);
  }

  destroy() {
    this.elem.classList.remove(this.enabledClass);
    this.elem.classList.remove(this.activeClass);
    this.target.classList.remove(this.enabledClass);
    this.target.classList.remove(this.activeClass);
    this.elem.removeEventListener('click', this.handleElemClick);
  }

  addListeners() {
    this.elem.addEventListener('click', this.handleElemClick);
  }

  getTarget(elem) {
    const target = elem.getAttribute('data-toggle-target');
    return document.querySelector(target);
  }

  handleElemClick(e) {
    e.preventDefault();
    this.toggle();
  }

  closeGroup() {
    const items = document.querySelectorAll(this.group);
    if (items) {
      forEach(items, elem => {
        const target = this.getTarget(elem);
        this.close(elem, target);
      });
    }
  }

  toggleLinked() {
    const items = document.querySelectorAll(this.linked);
    if (items) {
      forEach(items, elem => {
        const target = this.getTarget(elem);
        if (this.isToggled(target)) {
          return this.close(elem, target);
        }
        this.open(elem, target);
      });
    }
  }

  open(elem, target) {
    if (target) {
      target.classList.add(this.activeClass);
    }
    if (elem) {
      elem.classList.add(this.activeClass);
      this.setAriaExpanded(elem, true);
    }
  }

  setAriaExpanded(elem, state) {
    if (elem.hasAttribute('aria-expanded')) {
      elem.setAttribute('aria-expanded', state);
    }
  }

  close(elem, target) {
    if (target) {
      target.classList.remove(this.activeClass);
    }
    if (elem) {
      elem.classList.remove(this.activeClass);
      this.setAriaExpanded(elem, false);
    }
  }

  isToggled(elem) {
    return elem.classList.contains(this.activeClass);
  }

  toggle() {
    if (!this.isToggled(this.target)) {
      if (this.group) {
        this.closeGroup();
      }

      if (this.linked) {
        this.toggleLinked();
      }

      return this.open(this.elem, this.target);
    }

    this.close(this.elem, this.target);
  }
}

const togglers = document.querySelectorAll('[data-toggle-target]');

forEach(togglers, elem => new Toggler(elem));

export default Toggler;
