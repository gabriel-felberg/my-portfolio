'use client'
import Image from 'next/image'
import { IImage } from '../utils/iconLoader'

// import LazyLoad from 'react-lazy-load';

interface IIstack {
  stack: IImage[]
}

const ImageComponent = ({ stack }: IIstack) => {
  // console.log(stack)

  return (
    <div className="flex">
      {Array.from({ length: 15 }, (_, i) => i + 1).map(
        () =>
          stack?.map((elem) =>
            typeof elem.img === 'string' ? (
              <Image
                src={elem.img}
                alt={elem.title}
                key={elem.title}
                className="drop-shadow-new-box select-none cursor-default"
              />
            ) : (
              <span className="" key={elem.title}>
                {elem.img({
                  size: 100,
                  className:
                    'text-red-950 hover:text-red-400 transition delay-150 hover:drop-shadow-new-box px-1.5 select-none cursor-default hover:delay-0',
                })}
              </span>
            ),
          ),
      )}
    </div>
  )
}
export default ImageComponent
