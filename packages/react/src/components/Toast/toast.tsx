import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactElement,
  forwardRef,
} from 'react'
import { X } from 'phosphor-react'
import * as ToastPrimitives from '@radix-ui/react-toast'

import * as S from './styles'

export const ToastProvider = ToastPrimitives.Provider

export const ToastViewport = forwardRef<
  ElementRef<typeof ToastPrimitives.Viewport>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <S.Viewport ref={ref} className={className} {...props} />
))

ToastViewport.displayName = ToastPrimitives.Viewport.displayName

export const Toast = forwardRef<
  ElementRef<typeof ToastPrimitives.Root>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Root>
>(({ className, ...props }, ref) => {
  return <S.Content ref={ref} className={className} {...props} />
})

Toast.displayName = ToastPrimitives.Root.displayName

export const ToastAction = forwardRef<
  ElementRef<typeof ToastPrimitives.Action>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action ref={ref} className={className} {...props} />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

export const ToastClose = forwardRef<
  ElementRef<typeof ToastPrimitives.Close>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <S.Close ref={ref} className={className} toast-close="" {...props}>
    <X />
  </S.Close>
))

ToastClose.displayName = ToastPrimitives.Close.displayName

/**
 * Title
 */
export const ToastTitle = forwardRef<
  ElementRef<typeof ToastPrimitives.Title>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <S.Title ref={ref} className={className} {...props} />
))

ToastTitle.displayName = ToastPrimitives.Title.displayName

/**
 * Description
 */
export const ToastDescription = forwardRef<
  ElementRef<typeof ToastPrimitives.Description>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <S.Description ref={ref} className={className} {...props} />
))

ToastDescription.displayName = ToastPrimitives.Description.displayName

export type ToastProps = ComponentPropsWithoutRef<typeof Toast>

export type ToastActionElement = ReactElement<typeof ToastAction>
