import { ComponentProps, ElementRef, forwardRef } from 'react'
import * as S from './styles'

export interface TextInputProps
  extends Omit<ComponentProps<typeof S.Input>, 'size'>,
    Pick<ComponentProps<typeof S.TextInputContainer>, 'size'> {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof S.Input>, TextInputProps>(
  ({ prefix, size, ...props }: TextInputProps, ref) => {
    return (
      <S.TextInputContainer size={size}>
        {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
        <S.Input ref={ref} {...props} />
      </S.TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
