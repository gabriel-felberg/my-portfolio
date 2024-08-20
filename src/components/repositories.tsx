'use client'
import { ReposContext } from '@/context/reposProvider'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import '../styles/projectsCards.css'

export default function Repositories() {
  const { repos } = useContext(ReposContext)
  // console.log(repose)

  return (
    <div className="flex flex-col my-16 items-center">
      <h2 className="text-6xl font-bold mb-12">Meus Projetos</h2>
      <div className="max-w-[1200px] container flex-grow flex-wrap flex-row items-center justify-center gap-10 ">
        {repos?.map(
          (repository) =>
            repository.name !== 'gabriel-felberg' && (
              <div
                key={repository.id}
                className="flex flex-col bloco relative gap-5 text-white"
              >
                <Image
                  alt="image"
                  src={repository.image}
                  className="w-full h-full rounded-2xl"
                />
                {repository.homepage && (
                  <Link
                    target="_blank"
                    href={repository.homepage}
                    className="flex absolute w-full h-full z-10"
                  />
                )}
                <section className="flex w-full h-full absolute bg-gradient-to-tr from-black to-transparent rounded-2xl" />
                <div className="flex flex-col trasition justify-end w-full h-full absolute gap-2 ml-5 mt-3">
                  <h1 className="text-4xl font-bold">{repository.name}</h1>
                  <div className="flex flex-row gap-5">
                    <h3 className="text-xl font-bold">Tecnologias:</h3>
                    {repository.language ? (
                      <div>
                        <h4>{repository.language}</h4>
                      </div>
                    ) : (
                      <div>
                        <h4>Não identificado</h4>
                      </div>
                    )}
                  </div>
                  <p className="max-w-xs description">
                    {repository.description?.substring(0, 129)}
                  </p>
                  {/* <div className="flex flex-row gap-5">
                    <Link
                      target="_blank"
                      href={repository.html_url}
                      className="flex flex-row w-48 h-5 gap-2 items-center hover:text-red-600"
                    >
                      <FaGithub className="w-8 h-8" />
                      <p className="text-lg font-bold ">Código do Github</p>
                    </Link>
                  </div> */}
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  )
}
