'use client'
import { ReposProvider } from '@/context/reposProvider'
import { ReactNode } from 'react'

export default function Provider({ children }: { children: ReactNode }) {
  return <ReposProvider>{children}</ReposProvider>
}
