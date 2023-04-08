import { styled } from '../../styles'
import { Text } from '../Text'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: 'xs',
  },
})

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$10',
  marginTop: '$1',
})

export const Step = styled('div', {
  background: '$gray600',
  height: '$1',
  borderRadius: '$px',

  variants: {
    active: {
      true: {
        background: '$gray100',
      },
    },
  },
})
