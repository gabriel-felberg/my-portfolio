import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex justify-center black h-28 border-b-2 border-white px-5 bg-black w-full fixed z-20">
      <div className="flex items-center justify-between max-w-7xl w-full text-white">
        <div className="flex flex-row items-center gap-10 text-lg font-bold">
          <figcaption className="rounded-3xl w-16 h-16">
            <Image
              alt="logo"
              src="https://github.com/gabriel-felberg.png"
              width={100}
              height={100}
              style={{ borderRadius: '30px' }}
            />
          </figcaption>
          <h1 className="text-2xl ">Gabriel Pereira</h1>
        </div>
        <nav className="">
          <ul className="flex gap-5 font-semibold text-xl">
            <li>
              <a href="#" className="hover:text-red-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400">
                Projetos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
