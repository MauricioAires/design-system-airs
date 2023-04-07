import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@airs-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span
          style={{
            color: 'white',
          }}
        >
          Testando o elemento Box
        </span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
