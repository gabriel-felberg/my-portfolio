import axios from 'axios'
import { ReactNode, createContext, useMemo } from 'react'

interface IReposType {
  id: number
  name: string
  language: string
  description: string
  html_url: string
  homepage: string
}

export const ReposContext = createContext({} as { repos: IReposType[] })

export const ReposProvider = async ({ children }: { children: ReactNode }) => {
  // const [repos, setRepos] = useState({})
  const repos: IReposType[] = await useMemo(async () => {
    return (
      await axios.get('https://api.github.com/users/gabriel-felberg/repos')
    ).data
  }, [])

  console.log(repos)

  return (
    <ReposContext.Provider value={{ repos }}>{children}</ReposContext.Provider>
  )
}
