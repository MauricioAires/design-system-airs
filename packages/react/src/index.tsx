import { styled } from './styles'

const Button = styled('button', {
  fontFamile: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  padding: '$4',
})

export function App() {
  return <Button>Hello World</Button>
}
