import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toaster, useToast } from '@airs-ui/react'

export default {
  title: 'Data Display/Toaster',
  component: Toaster,
  decorators: [
    (Story) => {
      const { toast } = useToast()

      return (
        <div
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'white',
          }}
        >
          <Button
            onClick={() =>
              toast({
                title: 'Agendamento realizado',
                description: 'Quarta-feira, 23 de Outubro às 16h',
              })
            }
          >
            Criar agendamento
          </Button>

          {Story()}
        </div>
      )
    },
  ],
} as Meta<any>

export const Primary: StoryObj<any> = {}
