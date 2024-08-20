// 'use server'
import { IconType } from 'react-icons'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiStyledcomponents,
  SiReact,
  SiRedux,
  SiPostgresql,
  SiTailwindcss,
  SiPython,
  SiJest,
  SiDocker,
  SiHeroku,
  SiVercel,
  SiTypescript,
  SiTrello,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiFigma,
  SiGit,
  SiGithub,
} from 'react-icons/si'
export interface IImage {
  img: string | IconType
  title: string
}

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

export default stackData
