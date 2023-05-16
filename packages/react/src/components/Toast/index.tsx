import { useToast } from '../../hooks/use-toast'

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './toast'

import * as S from './styles'

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <S.Header>
              {title && <ToastTitle>{title}</ToastTitle>} <ToastClose />
            </S.Header>
            {description && <ToastDescription>{description}</ToastDescription>}
            {action}
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
