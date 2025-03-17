'use client'
import { ReposContext } from '@/context/reposProvider'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

export default function Repositories() {
  const { repos } = useContext(ReposContext)

  return (
    <div className="flex flex-col my-16 items-center px-4" id="projects">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
        Meus Projetos
      </h2>
      <div className="max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos?.map(
          (repository) =>
            repository.name !== 'gabriel-felberg' && (
              <div
                key={repository.id}
                className="relative flex flex-col rounded-2xl overflow-hidden shadow-lg bg-gray-900 backdrop-blur-md text-white 
                transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:backdrop-blur-none cursor-pointer "
              >
                <Image
                  alt="image"
                  src={repository.image}
                  className="w-full h-52 object-cover"
                />
                {repository.homepage && (
                  <Link
                    target="_blank"
                    href={repository.homepage}
                    className="absolute inset-0 z-10"
                  />
                )}
                <section className="absolute bg-gradient-to-tr from-black to-transparent transition-opacity duration-500 hover:opacity-0"></section>
                <div className="absolute bottom-0 p-4">
                  <h1 className="text-lg md:text-xl font-bold">
                    {repository.name}
                  </h1>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <h3 className="text-sm font-semibold">Tecnologias:</h3>
                    <h4 className="text-sm">
                      {repository.language || 'Não identificado'}
                    </h4>
                  </div>
                  <p className="text-sm mt-2">
                    {repository.description?.substring(0, 129)}
                  </p>
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  )
}
