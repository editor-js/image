import {make} from './ui';
import bgIcon from './svg/background.svg';
import borderIcon from './svg/border.svg';
import stretchedIcon from './svg/stretched.svg';

export default class Tunes {
  constructor({api, onChange}){
    this.api = api;
    this.onChange = onChange;
    this.buttons = [];
  }
  /**
   * Available Image tunes
   */
  static get tunes(){
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
   * @param {ImageToolData} toolData
   * @return {Element}
   */
  render(toolData) {
    let wrapper = make('div', this.CSS.wrapper);

    Tunes.tunes.forEach( tune => {
      let el = make('div', [this.CSS.buttonBase, this.CSS.button], {
        innerHTML: tune.icon
      });

      el.addEventListener('click', () => {
        this.tuneClicked(tune.name);
      });

      el.dataset.tune = tune.name;
      el.classList.toggle(this.CSS.buttonActive, toolData[tune.name]);

      this.buttons.push(el);

      wrapper.appendChild(el);
    });

    return wrapper;
  }

  /**
   * Clicks to one of the tunes
   * @param {string} tuneName - clicked tune name
   */
  tuneClicked(tuneName){
    let button = this.buttons.find(el => el.dataset.tune === tuneName);

    button.classList.toggle(this.CSS.buttonActive, !button.classList.contains(this.CSS.buttonActive));

    this.onChange(tuneName);
  }
}