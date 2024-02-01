'use client'
import { ReposContext } from '@/context/reposProvider'
import Link from 'next/link'
import { useContext } from 'react'
import { FaGithub, FaShare } from 'react-icons/fa'

export default function Repositories() {
  const { repos } = useContext(ReposContext)
  console.log(repos)

  return (
    <div className="my-16">
      <h2 className="text-6xl font-bold mb-12">Meus Projetos</h2>
      <div className="flex flex-col gap-16">
        {repos?.map(
          (repository) =>
            repository.name !== 'gabriel-felberg' && (
              <div
                key={repository.id}
                className="flex flex-col gap-5 text-white"
              >
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
            ),
        )}
      </div>
    </div>
  )
}
