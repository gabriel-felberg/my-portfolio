import Footer from '@/components/footer'
import Header from '@/components/header'
import Repositories from '@/components/repositories'
import stackData from '@/utils/iconLoader'
import Image from 'next/image'
import { ContainerImage } from '../components/containerImage'

export default function Home() {
  return (
    <>
      <Header />
      <ContainerImage />
      <div className="flex flex-col items-center p-10 gap-10 border-white border-y-2 bg-dark-gray">
        <h1 className="text-6xl font-bold text-light-gray">Minhas Stacks</h1>
        <div className="flex flex-wrap max-w-2xl gap-10 items-center justify-center">
          {Array.from({ length: 1 }, (_, i) => i + 1).map(
            () =>
              stackData?.map((elem) =>
                typeof elem.img === 'string' ? (
                  <Image
                    src={elem.img}
                    alt={elem.title}
                    key={elem.title}
                    className="drop-shadow-new-box select-none cursor-default"
                  />
                ) : (
                  <span key={elem.title}>
                    {elem.img({
                      size: 100,
                      className:
                        'text-light-gray hover:text-red-400 transition delay-150 hover:drop-shadow-new-box px-1.5 select-none cursor-default hover:delay-0',
                    })}
                  </span>
                ),
              ),
          )}
        </div>
      </div>
      <Repositories />
      <Footer />
    </>
  )
}
