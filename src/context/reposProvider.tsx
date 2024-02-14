// import axios from 'axios'
import { ReactNode, createContext, useMemo } from 'react'
import image from './../utils/image/image.jpg'
import { StaticImageData } from 'next/image'

export interface IReposType {
  id: number
  name: string
  image: StaticImageData
  language: string
  description: string
  html_url: string
  homepage: string
}

export const ReposContext = createContext({} as { repos: IReposType[] })

export const ReposProvider = async ({ children }: { children: ReactNode }) => {
  // const [repos, setRepos] = useState({})
  const repos: IReposType[] = await useMemo(async () => {
    // return (
    //   await axios.get('https://api.github.com/users/gabriel-felberg/repos')
    // ).data
    return [
      {
        id: 1,
        name: '',
        image,
        language: '',
        description: '',
        html_url: '',
        homepage: '',
      },
      {
        id: 2,
        name: '',
        image,
        language: '',
        description: '',
        html_url: '',
        homepage: '',
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
        name: '',
        image,
        language: '',
        description: '',
        html_url: '',
        homepage: '',
      },
    ]
  }, [])

  console.log(repos)

  return (
    <ReposContext.Provider value={{ repos }}>{children}</ReposContext.Provider>
  )
}
