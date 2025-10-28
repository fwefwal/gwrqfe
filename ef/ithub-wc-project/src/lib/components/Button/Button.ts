const buttonStyles = `
  .button {
    box-sizing: border-box;
    font-size: var(--font-body-md);
    font-weight: var(--font-weight-button);
    cursor: pointer;
    padding: 0;

  }

  .button--primary {
    background: var(--color-blue-500);
    border: 2px solid var(--color-blue-500);
    border-radius: 12px;
    min-height: 44px;
    min-width: 180px;
    color: var(--color-white);
    cursor: point;

  }

  .button--secondary {
    background-color: white;
    color: #007AFF;
    border-radius: 12px 12px 12px 12px ;
    border-color: #007AFF;
    min-width:180px;
    min-height: 44px;
    cursor: point;

    .button--wp{
    color:blue;
    text-decoration: underline;
    text-decoration-color: blue;
    }

    
    .button--gg{
            cursor: point;
        border-color: blue;
        border-radius: 5px;
        width:44px;
        height:44px;
        // position: absolute;
        //   text-align: center;
      //  margin-text: 15px;
      background: white;
}
  }
  }
`

export default class ButtonComponent extends HTMLButtonElement {
  constructor() {
    super()
    this.addStylesheet()
    this.classList.add("button")
  }

  addStylesheet() {
    if (document.head.querySelector('#button-component-styles')) {
      return
    }

    const buttonStylesElement = document.createElement("style")
    buttonStylesElement.textContent = buttonStyles
    buttonStylesElement.setAttribute("id", "button-component-styles")

    document.head.appendChild(buttonStylesElement)
  }
}

customElements.define("button-component", ButtonComponent, { extends: "button" })
