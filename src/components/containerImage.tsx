'use client'
// import stackData from '@/utils/iconLoader'
// import { ReposContext } from '@/context/reposProvider'
// import { useContext } from 'react'
import '../styles/containerImage.css'

export const ContainerImage = () => {
  // const { stackData } = useContext(ReposContext)
  // const lines = Array.from({ length: 23 }, (_, i) => i + 1)
  // const icons = Array.from({ length: 8 }, (_, i) => i + 1)

  return (
    <section className="flex items-center justify-center max-h-150 pt-28">
      {/* <Image
        src={image}
        alt="gif"
        layout="fill"
        className="select-none w-full h-full object-cover"
        loading="eager"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          userSelect: 'none',
        }}
      /> */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="select-none w-full h-full object-cover"
        src="/videos/Animacao.mp4"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          userSelect: 'none',
        }}
      ></video>
      {/* <div className="row mt-10">
        <>
          {lines.map((elem) => (
            <div className="flex" key={elem}>
              {icons.map(
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
                            'text-red-950 hover:text-red-400 transition delay-150 hover:drop-shadow-new-box px-1.5 select-none cursor-default hover:delay-0',
                        })}
                      </span>
                    ),
                  ),
              )}
            </div>
          ))}
        </>
      </div> */}
      <div className="bg-black justify-center max-w-2xl z-10 border-2 rounded-lg border-white absolute opacity-90 text-white p-10 gap-8 flex flex-col">
        <h1 className="font-bold text-5xl ">
          Criando experiências por meio da tecnologia
        </h1>
        <p className="font-semibold text-xl">
          Sou Desenvolvedor Web Full Stack formado na Kenzie Academy Brasil,
          participando de diversos projetos, resolvendo problemas de alto nível
          e procurando desenvolver novas habilidades
        </p>
        <div className="flex sm:flex-col md:flex-row gap-10 pl-5">
          <button className="p-5 text-xl font-bold">Projetos</button>
          <button className="bg-white rounded-md text-black text-xl font-bold p-5">
            Tecnologias
          </button>
        </div>
      </div>
    </section>
  )
}
// 'use client'

// import stackData from '@/utils/iconLoader'
// import Image from 'next/image'
// import { useState } from 'react'
// // import InfiniteScroll from 'react-infinite-scroll-component'
// import '../styles/containerImage.css'

// export const ContainerImage = () => {
//   const [items, setItems] = useState(
//     Array.from({ length: 23 }, (_, i) => i + 1),
//   )

//   return (
//     <section className="relative flex items-center justify-center max-h-150 pt-28">
//       {/* <InfiniteScroll
//         dataLength={items.length}
//         next={fetchMoreData}
//         hasMore={true} // Defina como `true` se houver mais itens para carregar
//         loader={<h4>Loading...</h4>} // Componente de carregamento exibido enquanto carrega mais itens
//         endMessage={<p>End of List</p>} // Mensagem exibida quando não há mais itens para carregar
//       > */}
//       <div className="row">
//         {Array.from({ length: 8 }, (_, i) => i + 1).map((elem) => (
//           <div className="flex" key={elem}>
//             {stackData?.map((elem) =>
//               typeof elem.img === 'string' ? (
//                 <Image
//                   src={elem.img}
//                   alt={elem.title}
//                   key={elem.title}
//                   className="drop-shadow-new-box select-none cursor-default"
//                 />
//               ) : (
//                 <span key={elem.title}>
//                   {elem.img({
//                     size: 100,
//                     className:
//                       'text-red-950 hover:text-red-400 transition delay-150 hover:drop-shadow-new-box px-1.5 select-none cursor-default hover:delay-0',
//                   })}
//                 </span>
//               ),
//             )}
//           </div>
//         ))}
//       </div>
//       {/* </InfiniteScroll> */}
//       {/* Conteúdo restante do componente aqui */}
//     </section>
//   )
// }
