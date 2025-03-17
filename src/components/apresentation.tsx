import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import image from '../../public/header-bg.svg'

export default function Apresentation() {
  return (
    <section className="relative bg-dark-gray border-white border-y-2 flex flex-col lg:flex-row items-center justify-evenly px-8 py-32 md:h-[35rem] h-[42rem]">
      {/* Texto à esquerda */}
      <div className="text-center  flex items-center flex-col text-white z-10">
        <h5 className="text-xl font-semibold text-white">
          Olá, meu nome é Gabriel Pereira ✋
        </h5>

        <h1 className="text-5xl font-bold text-white mt-4 leading-tight">
          Eu gosto de desenvolver <br /> e melhorar projetos
        </h1>

        <p className="text-lg text-white mt-4">
          Descubra neste ambiente meus melhores projetos e tecnologias
        </p>
        <Link
          href="https://github.com/gabriel-felberg"
          className="group text-center w-12 hover:w-52 h-12 mt-8 flex items-center rounded-full bg-white text-black overflow-hidden transition-all duration-300 shadow-lg"
        >
          <span className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300">
            <FaGithub className="text-2xl" />
          </span>
          <span className="absolute flex items-center  pl-12 opacity-0 text-black text-sm transition-all duration-300 group-hover:opacity-100">
            Ver todos os projetos
          </span>
        </Link>
      </div>

      {/* Imagem à direita */}
      <div className=" mt-12 lg:mt-0 mg:flex justify-center absolute -top-150 blur-md z-0 lg:relative lg:-top-0 lg:blur-none">
        <Image
          src={image}
          alt="Preview dos projetos"
          className="max-w-lg w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}
