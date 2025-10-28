import './Button'
import type { ButtonMeta, ButtonStory } from './types'
// @ts-ignore
import iconX from './assets/icon-x.svg'

export const PrimaryButton: ButtonStory = {
  args: {
    label: "Submit",
    variant: "primary"
  }
}

export const SecondaryButton: ButtonStory = {
  args: {
    label: "Submit",
    variant: "secondary"
  }
}

export const IconButton: ButtonStory = {
  args: {
    variant: "icon"
  }
}

export const LotusButton: ButtonStory = {
  args: {
    label: "Submit",
    variant: "wp"
  }
}

export default {
  title: "Components/Button",
  render: ({ label, variant }) => variant === "icon"
    ? `<button is="button-component" class="button--${variant}" 
        style = "
        cursor: point;
        border-color: blue;
        border-radius: 5px;
        width:44px;
        height:44px;
        // position: absolute;
        //   text-align: center;
        //  margin-text: 15px;
        background: white;
        ">
          <img src="${iconX}" alt="button icon" style="
              width: 16px;
              height: 16px;
              margin: 20px;
              top: 55%; 
              left: 50%;
              transform: translate(-50%, -50%);
            " />
      </button>`
    : `<button is="button-component" class="button--${variant}">${label}</button>`
} satisfies ButtonMeta
