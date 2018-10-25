import {make} from './ui';
import bgIcon from './svg/background.svg';
import borderIcon from './svg/border.svg';
import stretchedIcon from './svg/stretched.svg';

export default class Tunes {
  constructor({api}){
    this.api = api;
  }
  /**
   * Available Image tunes
   */
  get tunes(){
    return [
      {
        name: 'withBorder',
        icon: borderIcon
      },
      {
        name: 'stretched',
        icon: stretchedIcon
      },
      {
        name: 'withBackground',
        icon: bgIcon
      },
    ]
  }

  get CSS() {
    return {
      wrapper: '',
      buttonBase: this.api.styles.settingsButton,
      button: 'image-tool__tune',
      buttonActive: this.api.styles.settingsButtonActive,
    }
  }

  /**
   * Makes buttons with tunes: add background, add border, stretch image
   * @return {Element}
   */
  render() {
    let wrapper = make('div', this.CSS.wrapper);

    this.tunes.forEach( tune => {
      let el = make('div', [this.CSS.buttonBase, this.CSS.button], {
        innerHTML: tune.icon
      });

      el.addEventListener('click', () => {
        this.tuneClicked(tune.name);
      });

      // el.classList.toggle(this.CSS.buttonActive, this.data[tune.name]);

      wrapper.appendChild(el);
    });

    return wrapper;
  }

  /**
   * Clicks to one of the tunes
   * @param {string} tuneName - clicked tune name
   */
  tuneClicked(tuneName){
    console.log('clicked', tuneName);
  }

}