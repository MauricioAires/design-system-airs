import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@airs-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/MauricioAires.png',
    alt: 'Mauricio Aires',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
