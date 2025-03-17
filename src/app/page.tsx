'use client'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Repositories from '@/components/repositories'

import 'react-toastify/dist/ReactToastify.css'

import Apresentation from '@/components/apresentation'
import { ContainerImage } from '../components/containerImage'
import Stacks from '@/components/stacks'

export default function Home() {
  return (
    <>
      <Header />
      <ContainerImage />
      <Apresentation />
      <Stacks />
      <Repositories />
      <Contact />
      <Footer />
    </>
  )
}
