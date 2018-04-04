import forEach from './utils/forEach';
import decodeHtml from './utils/decodeHtml';

class VideoSwap {
  constructor(elem) {
    this.elem = elem;
    this.content = elem.querySelector('.js-video-content');
    this.link = elem.querySelector('.js-video-link');
    this.iframe = elem.getAttribute('data-video');

    this.activeClass = 'has-video';

    this.handleVideoEmbedClick = this.handleVideoEmbedClick.bind(this);
  }

  init() {
    this.addListeners();
  }

  addListeners() {
    this.link.addEventListener('click', this.handleVideoEmbedClick);
  }

  handleVideoEmbedClick(e) {
    e.preventDefault();

    this.elem.classList.add(this.activeClass);

    const html = decodeHtml(this.iframe);

    if (this.iframe) {
      this.content.innerHTML = html || this.iframe;
    }
  }
}

const elems = document.querySelectorAll('.js-video');

if (elems) {
  forEach(elems, elem => {
    const videoSwapper = new VideoSwap(elem);
    videoSwapper.init();
  });
}

export default VideoSwap;
