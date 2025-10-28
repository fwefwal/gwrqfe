import type { Meta, StoryObj } from '@storybook/web-components-vite'

type Args = {
  Text: "submit",
  label: string,
  variant: "primary" | "secondary" | "icon" | "link" | "gg" | "wp"
}

export type ButtonStory = StoryObj<Args>
export type ButtonMeta = Meta<Args>
