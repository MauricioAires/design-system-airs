import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { TooltipContentProps } from '@radix-ui/react-tooltip'

import * as S from './styles'
import { Text } from '../Text'

export interface TooltipProps extends TooltipContentProps {
  content: string
  open: boolean
  defaultOpen: boolean
  onOpenChange?: (open: boolean) => void
}

export function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  side = 'top',
  onOpenChange,
  ...props
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <S.Content side={side} align="center" {...props}>
          <Text size="sm">{content}</Text>
          <TooltipPrimitive.Arrow
            className="TooltipArrow "
            width={11}
            height={5}
          />
        </S.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
