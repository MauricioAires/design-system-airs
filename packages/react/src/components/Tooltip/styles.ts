import { styled } from '../../styles'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

export const Content = styled(TooltipPrimitive.Content, {
  borderRadius: '$sm',
  padding: '$3 $4',
  backgroundColor: '$gray900',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
  TooltipArrow: {
    fill: '$gray100',
  },
})
