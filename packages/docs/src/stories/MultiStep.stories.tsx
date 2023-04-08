import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@airs-ui/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
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
          {Story()}
        </Box>
      )
    },
  ],
  args: {
    currentStep: 1,
    size: 4,
  },
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const MidFull: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 2,
  },
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 4,
  },
}
