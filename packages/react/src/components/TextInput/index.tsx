import { ComponentProps, ElementRef, forwardRef } from 'react'
import * as S from './styles'

export interface TextInputProps extends ComponentProps<typeof S.Input> {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof S.Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <S.TextInputContainer>
        {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
        <S.Input ref={ref} {...props} />
      </S.TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
