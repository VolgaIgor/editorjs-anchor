import tagIcon from './svg/tag.svg';

export default class AnchorTune {

    /**
     * Current anchor
     * @returns {bool}
     */
    static get isTune() {
        return true;
    }

    /**
     * Constructor
     *
     * @param api - Editor.js API
     * @param data - previously saved data
     */
    constructor({ api, data }) {
        this.api = api;
        this.data = {
            anchor: undefined
        };

        if (data && data.anchor) {
            this.anchor = data.anchor;
        }

        this._CSS = {
            classWrapper: 'cdx-search-field',
            classIcon: 'cdx-search-field__icon',
            classInput: 'cdx-search-field__input'
        };
    }

    /**
     * Current anchor
     * @returns {string}
     */
    get anchor() {
        return this.data.anchor || '';
    }

    /**
     * Set anchor
     * @param {string} anchor - anchor ID
     */
    set anchor(anchor) {
        // Allow only the following characters
        anchor = anchor.replace(/[^a-z0-9_-]/gi, '');

        if (anchor.length > 0) {
            this.data.anchor = anchor;
        } else {
            this.data.anchor = undefined;
        }
    }

    /**
     * Rendering tune wrapper
     * @returns {HTMLDivElement}
     */
    render() {
        const wrapper = document.createElement('div');
        wrapper.classList.add(this._CSS.classWrapper);

        const wrapperIcon = document.createElement('div');
        wrapperIcon.classList.add(this._CSS.classIcon);
        wrapperIcon.innerHTML = tagIcon;

        const wrapperInput = document.createElement('input');
        wrapperInput.placeholder = this.api.i18n.t('Anchor');
        wrapperInput.classList.add(this._CSS.classInput);
        wrapperInput.value = this.anchor;

        wrapperInput.addEventListener('input', (event) => {
            // Save anchor and remove invalid charachers
            this.anchor = event.target.value;
            event.target.value = this.anchor;
        });

        wrapper.appendChild(wrapperIcon);
        wrapper.appendChild(wrapperInput);

        return wrapper;
    }
    /**
     * Save
     * @returns {{anchor: string} | undefined}
     */
    save() {
        if (!this.data.anchor) {
            return undefined;
        }

        return this.data;
    }
}
