import Image from 'next/image'

export default function Header() {
  return (
    <header className="black w-full h-5">
      <figcaption>
        <Image alt="logo" src="google.com" />
      </figcaption>
    </header>
  )
}
