import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@airs-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    content: 'Add to library',
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            width: '100%',
            height: 500,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {Story()}
        </div>
      )
    },
  ],
} as Meta<TooltipProps>

export const Basic: StoryObj<TooltipProps> = {
  args: {
    content: 'October 21 - Unavailable',
    children: (
      <span
        style={{
          color: 'white',
        }}
      >
        Tooltip will show on mouse enter.
      </span>
    ),
  },
}

export const Top: StoryObj<TooltipProps> = {
  args: {
    side: 'top',
    content: 'October 21 - Unavailable',
    children: (
      <span
        style={{
          color: 'white',
        }}
      >
        Tooltip will show top on mouse enter.
      </span>
    ),
  },
}

export const Bottom: StoryObj<TooltipProps> = {
  args: {
    side: 'bottom',
    content: 'October 21 - Unavailable',
    children: (
      <span
        style={{
          color: 'white',
        }}
      >
        Tooltip will show top on mouse enter.
      </span>
    ),
  },
}

export const Left: StoryObj<TooltipProps> = {
  args: {
    side: 'left',
    content: 'October 21 - Unavailable',
    children: (
      <span
        style={{
          color: 'white',
        }}
      >
        Tooltip will show left on mouse enter.
      </span>
    ),
  },
}
export const Right: StoryObj<TooltipProps> = {
  args: {
    side: 'right',
    content: 'October 21 - Unavailable',
    children: (
      <span
        style={{
          color: 'white',
        }}
      >
        Tooltip will show right on mouse enter.
      </span>
    ),
  },
}

export const AlwaysOpen: StoryObj<TooltipProps> = {
  args: {
    open: true,
    content: 'October 21 - Unavailable',
    children: <Button>21</Button>,
  },
}
