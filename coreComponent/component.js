const TYPES = require('../../utils').componentTypes;

module.exports.CoreComponent = class BannerComponent {
  
  /**
   *
   *
   * @static
   * @return {*} 
   */
  static getCategory() {
    return 'Miscellaneous';
  }

  /**
   *
   *
   * @static
   * @return {*} 
   */
  static getDescription() {
    return 'Basic resuable core component';
  }
  
  /**
   *
   *
   * @static
   * @return {*} 
   */
  static getDefault() {
    return {
      title: 'Welcome your customers!',
      content: 'Banners are a great way to get your customers attention, and display critical information.',

      styles: {
        base: {
          width: '100%',
          height: "inherit",
        },
  
        overlay: {
          width: "100%",
          height: "100%",
          
          color: "white",

          padding: "100px",
          "background-color": "rgba(0,0,0,0.5)"
        },

        title: {
          "margin-top": "50px"
        }
      }
    }
  }

  /**
   *
   *
   * @static
   * @param {*} component
   * @return {*} 
   */
  static render(component) {
    const TYPES = require('../../utils.js').componentTypes;

    return `
      <div style='${TYPES.getStyles(component, "base")}' class='banner base'>
        <div style='${TYPES.getStyles(component, "overlay")}' class='overlay'>
          <div style='${TYPES.getStyles(component, "content")}' class='content'>
            <div class='container'>
              <h2 style='${TYPES.getStyles(component, 'title')}'>
                ${component.title}
              </h2>
              <p style='${TYPES.getStyles(component, 'body')}'>
                ${component.content}
              </p>
            </div>
          </div>
        </div>
      </div>  
    `;
  }

  /**
   * Creates an instance of BannerComponent.
   * @param {*} component
   */
  constructor(component) {
    this.type = 'bannerComponent';

    this.hasOverlay = false;
    this.backgroundType = 'colour';

    this.title = '';
    this.content = '';
    this.buttons = [];

    this.layout = {};
    this.styles = {
      base: {
        width: '100%',
        "min-height": "650px",
        padding: "100px"
      },

      overlay: {
        width: "100%",
        height: "100%",
        
        "background-color": "rgba(0,0,0,0.5)"
      }
    }

    if(component.title) {
      this.title = component.title;
    }

    if(component.content) {
      this.content = component.content;
    }

    if(component.styles) {
      this.styles = component.styles;
    }

    if(component.buttons) {
      this.buttons = component.buttons;
    }

    if(component.backgroundType) {
      this.backgroundType = component.backgroundType;
    }

    this.editorUi = this.defineEditorUI();
  }

  /**
   *
   *
   * @return {*} 
   */
  defineEditorUI() {
    const TYPES = require('../../utils.js').componentTypes;
    const ui = new TYPES.EditorUI();

    ui.addSection(new TYPES.EditorUISection('Banner Content', [
      new TYPES.EditorUIAttribute({
        label: 'Update Title',
        uiInputType: 'text',

        targetAttribute: 'title'
      }), 

      new TYPES.EditorUIAttribute({
        label: 'Update Content',
        uiInputType: 'textarea',

        targetAttribute: 'content'
      })
    ]));

    // ui.addSection(new TYPES.EditorUISection('Banner Background', [
    //   new TYPES.EditorUIAttribute({
    //     label: 'Change background type',
    //     uiInputType: 'selector',
    //     uiInputSelectOptions: {
    //       'Background Colour': 'colour',
    //       'Background Image': 'image'
    //     },

    //     targetAttribute: 'backgroundType'
    //   }),

    //   new TYPES.EditorUIAttribute({
    //     label: 'Select Background Colour',
    //     uiInputType: 'colour',

    //     // only display backgroundType colour is selected.
    //     requires: [{
    //       attribute: 'backgroundType',
    //       equalTo: 'colour'
    //     }],

    //     isStylesAttribute: true,
    //     targetStyleElement: 'base',
    //     targetAttribute: 'background-color'
    //   })
    // ], {

    //   dropdown: true
    // }));

    return ui;
  }

}