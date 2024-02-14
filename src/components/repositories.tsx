'use client'
import { ReposContext } from '@/context/reposProvider'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { FaGithub, FaShare } from 'react-icons/fa'
import '../styles/containerImage.css'

export default function Repositories() {
  const { repos } = useContext(ReposContext)

  return (
    <div className="flex flex-col my-16 items-center">
      <h2 className="text-6xl font-bold mb-12">Meus Projetos</h2>
      <div className="max-w-[1200px] container flex-grow flex-wrap flex-row items-center justify-center gap-10 ">
        {repos?.map(
          (repository) =>
            repository.name !== 'gabriel-felberg' && (
              <div
                key={repository.id}
                className="flex flex-col bloco relative gap-5 text-white expand"
              >
                <Image
                  alt="image"
                  src={repository.image}
                  className="w-full h-full"
                />
                <div className="flex w-full h-full absolute bg-gradient-to-tr from-black to-transparent" />
                <div className="flex flex-col justify-end w-full h-full absolute gap-2 pl-2 pb-5">
                  <h1 className="text-4xl font-bold">{repository.name}</h1>
                  <div className="flex flex-row gap-5">
                    <p className="text-xl font-bold">Tecnologias:</p>
                    {repository.language ? (
                      <div>
                        <p>{repository.language}</p>
                      </div>
                    ) : (
                      <div>
                        <p>Não identificado</p>
                      </div>
                    )}
                  </div>
                  <p>{repository.description?.substring(0, 129)}</p>
                  <div className="flex flex-row gap-5">
                    <Link
                      target="_blank"
                      href={repository.html_url}
                      className="flex flex-row w-48 h-5 gap-2 items-center hover:text-red-600"
                    >
                      <FaGithub className="w-8 h-8" />
                      <p className="text-lg font-bold ">Código do Github</p>
                    </Link>
                    {repository.homepage && (
                      <Link
                        target="_blank"
                        href={`https://${repository.homepage}`}
                        className="flex flex-row w-48 h-5 gap-2 items-center hover:text-red-600"
                      >
                        <FaShare className="w-8 h-8" />
                        <p className="text-lg font-bold ">Aplicação</p>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ),
        )}
      </div>
      <div className="container">
        <div className="blocks">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
        </div>
      </div>
    </div>
  )
}
