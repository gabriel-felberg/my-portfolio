'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
// import { Flip } from 'react-toastify/dist/components'
import { z } from 'zod'

type FormValues = {
  title: string
  email: string
  message: string
}

const contactSchema = z.object({
  email: z.string().email('Digite um email válido'),
  title: z.string().nonempty('Título é obrigatório'),
  message: z.string().nonempty('Descrição é obrigatória'),
})

type IContact = z.infer<typeof contactSchema>

function activeToast(message: string | undefined): ReactNode {
  return toast.error(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    // transition: Flip,
  })
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
  })
  const onSubmit = handleSubmit((data: IContact) => alert(JSON.stringify(data)))

  useEffect(() => {
    if (errors.email) {
      activeToast(errors.email?.message)
    } else if (errors.title) {
      activeToast(errors.title?.message)
    } else if (errors.message) {
      activeToast(errors.message?.message)
    }
  }, [errors])

  return (
    <div className="w-full h-screen" id="contact">
      <div className="absolute w-screen h-screen -z-10 overflow-hidden bg-gradient-to-b from-[#1c1f20] via-[#040404] to-[#000]">
        <div className="h-full flex overflow-hidden justify-around">
          <div className="h-[2em] w-[3em] animate-spin-slow1 self-end bg-[#cfcbc5]"></div>
          <div className="h-[2.5em] w-[3em] animate-spin-slow2 self-end bg-[#cfcbc5]"></div>
          <div className="h-[1.5em] w-[2em] animate-spin-slow3 self-end bg-[#cfcbc5]"></div>
          <div className="h-[2em] w-[2em] animate-spin-slow4 self-end bg-[#cfcbc5]"></div>
          <div className="h-[2em] w-[3.5em] animate-spin-slow5 self-end bg-[#cfcbc5]"></div>
          <div className="h-[2.5em] w-[3.3em] animate-spin-slow6 self-end bg-[#cfcbc5]"></div>
          <div className="h-[3em] w-[3em] animate-spin-slow7 self-end bg-[#cfcbc5]"></div>
          <div className="h-[2.2em] w-[3em] animate-spin-slow8 self-end bg-[#cfcbc5]"></div>
        </div>
      </div>
      <div className="w-full h-screen flex items-center justify-center ">
        <form
          onSubmit={onSubmit}
          className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-[80%] transform transition-all duration-500 hover:shadow-md shadow-[#F2B90C]"
        >
          <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900">
            Entre em Contato!
          </h1>

          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              {...register('email')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none transition"
              placeholder="Exemplo@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Título
            </label>
            <input
              {...register('title')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none transition"
              placeholder="Gostaria de conversar"
            />
          </div>

          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Descrição
            </label>
            <textarea
              {...register('message')}
              className="w-full h-32 max-h-36 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none transition"
              placeholder="Estou interessado em seus serviços!"
            />
          </div>

          <input
            type="submit"
            value="Enviar"
            className="w-full bg-gradient-to-r bg-[#F2B90C] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-transform transform hover:scale-105 cursor-pointer"
          />
        </form>
      </div>
    </div>
  )
}
