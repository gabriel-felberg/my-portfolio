'use client'
import { StaticImageData } from 'next/image'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import {
  SiCss3,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import kezieBurguer from './../utils/image/KezieBurguer.jpg'
import webchool from './../utils/image/WebSchool.jpg'
import image from './../utils/image/image.jpg'
import kenzieHub from './../utils/image/kenzieHub.jpg'
export interface IImage {
  img: string | IconType
  title: string
}

export interface IReposType {
  id: number
  name: string
  image: StaticImageData
  language: string
  description: string
  html_url: string
  homepage: string
}

export const ReposContext = createContext(
  {} as { repos: IReposType[]; repose: number; stackData: IImage[] },
)

export const ReposProvider = ({ children }: { children: ReactNode }) => {
  const [repose, setRepos] = useState(0)
  useEffect(() => {
    setRepos((res) => res + 1)
  }, [])

  const repos: IReposType[] = [
    {
      id: 1,
      name: 'Webchool',
      image: webchool,
      language: '',
      description:
        'programa de reintegração social, que busca trazer à realidade escolástica das crianças',
      html_url: 'https://web-school-psi.vercel.app/',
      homepage: 'https://web-school-psi.vercel.app/',
    },
    {
      id: 2,
      name: 'Kenzie Burguer',
      image: kezieBurguer,
      language: '',
      description:
        'Kenzie Burger é uma plataforma de e-commerce especializada em oferecer uma experiência única de compra de hambúrgueres artesanais.',
      html_url: '',
      homepage: 'https://burger-house-4tk73203g-topfirebr3.vercel.app/',
    },
    {
      id: 3,
      name: '',
      image,
      language: '',
      description: '',
      html_url: '',
      homepage: '',
    },
    {
      id: 4,
      name: '',
      image,
      language: '',
      description: '',
      html_url: '',
      homepage: '',
    },
    {
      id: 5,
      name: '',
      image,
      language: '',
      description: '',
      html_url: '',
      homepage: '',
    },
    {
      id: 6,
      name: 'Kenzie Hub',
      image: kenzieHub,
      language: 'Typescript',
      description:
        ' Centralize e gerencie todas as suas tecnologias em um único espaço melhore sua produtividade e organização.',
      html_url: '',
      homepage: 'https://kenzie-hub-organization.vercel.app/',
    },
  ]

  const stackData: IImage[] = [
    { title: 'HTML', img: SiHtml5 },
    { title: 'CSS', img: SiCss3 },
    { title: 'JS', img: SiJavascript },
    { title: 'Node JS', img: SiNodedotjs },
    { title: 'Styled Components', img: SiStyledcomponents },
    { title: 'React', img: SiReact },
    { title: 'Redux', img: SiRedux },
    { title: 'Tailwind', img: SiTailwindcss },
    { title: 'Postgres', img: SiPostgresql },
    { title: 'Python', img: SiPython },
    { title: 'Docker', img: SiDocker },
    { title: 'Heroku', img: SiHeroku },
    { title: 'Vercel', img: SiVercel },
    { title: 'Typescript', img: SiTypescript },
    { title: 'Jest', img: SiJest },
    { title: 'Trello', img: SiTrello },
    { title: 'Next', img: SiNextdotjs },
    { title: 'Mongodb', img: SiMongodb },
    { title: 'Prisma', img: SiPrisma },
    { title: 'Figma', img: SiFigma },
    { title: 'Git', img: SiGit },
    { title: 'Github', img: SiGithub },
  ]

  // console.log(repos)

  return (
    <ReposContext.Provider value={{ repos, repose, stackData }}>
      {children}
    </ReposContext.Provider>
  )
}
