import * as S from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size = 0, currentStep = 0 }: MultiStepProps) {
  return (
    <S.MultiStepContainer>
      <S.Label>
        Passo {currentStep} de {size}
      </S.Label>
      <S.Steps
        css={{
          '--steps-size': size,
        }}
      >
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <S.Step active={step <= currentStep} key={step} />
        ))}
      </S.Steps>
    </S.MultiStepContainer>
  )
}
