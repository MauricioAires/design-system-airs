import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@airs-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'select',
      },
      defaultValue: 'md',
    },
  },
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
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    disabled: true,
    placeholder: 'Type your name',
  },
}
export const Medium: StoryObj<TextInputProps> = {
  args: {
    size: 'md',
    placeholder: 'Type your name',
  },
}
export const Small: StoryObj<TextInputProps> = {
  args: {
    size: 'sm',
    placeholder: 'Type your name',
  },
}
