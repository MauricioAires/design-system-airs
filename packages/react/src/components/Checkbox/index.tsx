import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import * as S from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof S.CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <S.CheckboxContainer {...props}>
      <S.CheckboxIndicator asChild>
        <Check weight="bold" />
      </S.CheckboxIndicator>
    </S.CheckboxContainer>
  )
}
