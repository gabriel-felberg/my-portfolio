import { ReposContext } from '@/context/reposProvider'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState, useEffect } from 'react'
import { IoMenu } from 'react-icons/io5'

export default function Header() {
  const { screenWidth } = useContext(ReposContext)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)
  const [isHidden, setIsHidden] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setIsHidden(currentScroll > lastScroll)
      setLastScroll(currentScroll)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  return (
    <header
      className={`flex h-28 border-b-2 w-screen border-white bg-black fixed z-20 shadow-[#F2B90C] shadow-lg hover:shadow-sm transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex items-center justify-around sm:gap-72 md:gap-80 w-full text-white px-5 md:px-10 lg:px-10 xl:px-10">
        <div className="flex items-center gap-10 text-lg font-bold">
          <figure className="rounded-3xl w-16 h-16 md:h-16  overflow-hidden">
            <Image
              alt="Logo do Gabriel Pereira"
              src="https://github.com/gabriel-felberg.png"
              width={100}
              height={100}
              className="rounded-3xl"
            />
          </figure>
          <h1 className="text-2xl">Gabriel Pereira</h1>
        </div>

        {screenWidth < 1040 ? (
          <>
            <button
              aria-label="Abrir menu de navegação"
              onClick={toggleMenu}
              className="w-10 h-10 focus:outline-none"
            >
              <IoMenu className="w-full h-full" />
            </button>
            {isMenuOpen && (
              <nav className="absolute top-28 right-5 bg-black border-2 border-white rounded-lg shadow-lg p-5">
                <ul className="flex flex-col gap-5 font-semibold text-xl">
                  <li>
                    <Link href="#" className=" hover:text-[#F2B90C]">
                      Início
                    </Link>
                  </li>
                  <li>
                    <Link href="#projects" className="hover:text-[#F2B90C]">
                      Projetos
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="hover:text-[#F2B90C]">
                      Contato
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </>
        ) : (
          <nav>
            <ul className="flex gap-5 font-semibold text-xl">
              <li>
                <Link href="#" className="hover:text-[#F2B90C]">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-[#F2B90C]">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#F2B90C]">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
