import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@airs-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
          }}
        >
          <Text size="sm">Username</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
    placeholder: 'Type your name',
  },
}
