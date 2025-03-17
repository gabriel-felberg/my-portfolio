import { ReposContext } from '@/context/reposProvider'
import stackData from '@/utils/iconLoader'
import Image from 'next/image'
import { useContext } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'

export default function Stacks() {
  const { screenWidth } = useContext(ReposContext)
  const stacksPerPage = screenWidth >= 768 ? 22 : screenWidth >= 768 ? 12 : 8
  const pages = Math.ceil(stackData.length / stacksPerPage)

  function scrollCarousel(direction: number) {
    const carousel: HTMLElement | null = document.getElementById('carousel')
    const scrollAmount = carousel!.offsetWidth // Mover o equivalente à largura visível
    carousel?.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' })
  }

  return (
    <>
      <div className="w-full relative flex justify-start ml-14 bottom-10 animate-gravite-object">
        <div className="absolute w-16 h-16 top-2 sm:w-20 sm:h-20 sm:-top-0 xl:-top-10 xl:w-40 xl:h-40 bg-white rotate-45 "></div>
      </div>
      <div
        id="stacks"
        className="flex flex-col items-center justify-center p-7 sm:p-10 gap-10 border-white border-y-2 bg-dark-gray"
      >
        <h1 className="text-5xl mt-5 lg:text-6xl xl:text-6xl font-bold text-light-gray">
          Minhas Stacks
        </h1>
        <div className="flex relative w-full max-w-4xl overflow-hidden justify-center">
          {screenWidth < 768 ? (
            <>
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-200"
                onClick={() => scrollCarousel(-1)}
              >
                <FaChevronLeft />
              </button>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-200"
                onClick={() => scrollCarousel(1)}
              >
                <FaChevronRight />
              </button>
            </>
          ) : null}
          <div
            id="carousel"
            className="flex overflow-hidden scroll-smooth no-scrollbar w-[40rem]"
          >
            {Array.from({ length: pages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="flex flex-wrap justify-center gap-4 w-full p-5 sm:p-0 md:p-0 lg:p-0 xl:p-0 shrink-0"
                style={{ flexGrow: 1 }}
              >
                {stackData
                  .slice(
                    pageIndex * stacksPerPage,
                    (pageIndex + 1) * stacksPerPage,
                  )
                  .map((elem, index) =>
                    typeof elem.img === 'string' ? (
                      <Image
                        src={elem.img}
                        alt={elem.title}
                        key={index}
                        className="drop-shadow-new-box select-none cursor-default"
                        width={100}
                        height={100}
                      />
                    ) : (
                      <span key={index}>
                        {elem.img({
                          size: 100,
                          className:
                            'text-light-gray hover:text-[#F2B90C] transition delay-150 hover:drop-shadow-new-box px-1.5 select-none cursor-default hover:delay-0',
                        })}
                      </span>
                    ),
                  )}
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-20 h-20 bg-white">
          <div className="w-20 h-20 bg-white rotate-45 flex justify-center items-center">
            <FiChevronRight className="rotate-45 w-10 h-10" />
          </div>
        </div>
        <div className="w-full relative flex justify-end animate-gravite-object">
          <div className="absolute w-16 h-16 top-2 sm:w-20 sm:h-20 sm:-top-0 xl:-top-10 xl:w-40 xl:h-40 bg-white rotate-45"></div>
        </div>
      </div>
    </>
  )
}
