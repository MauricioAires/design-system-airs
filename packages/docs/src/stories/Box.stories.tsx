import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@airs-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Box Content</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
