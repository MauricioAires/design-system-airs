import { styled, keyframes } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$4',
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + $space$1))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + $space$1))` },
})

export const Content = styled(Toast.Root, {
  border: '1px solid $gray500',
  padding: '$3 $5',
  borderRadius: '$sm',
  listStyle: 'none',
  width: 'auto',
  minWidth: '360px',
  background: '$gray900',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const Title = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  fontFamily: '$default',
  fontWeight: '$bold',
  lineHeight: '$base',
})

export const Description = styled(Toast.Description, {
  margin: 0,
  color: '$gray100',
  fontSize: '$sm',
  fontFamily: '$default',
  lineHeight: '$base',
})

export const Close = styled(Toast.Close, {
  color: '$gray200',
  fontSize: '$md',
  fontFamily: '$default',
  lineHeight: 0,
  background: 'transparent',
  border: 0,
  cursor: 'pointer',
  transition: 'color 300ms ease-in-out',

  '&:hover': { color: '$gray100' },
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})
