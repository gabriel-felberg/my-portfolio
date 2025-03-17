import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  const userData = {
    nameUser: 'Gabriel Pereira',
    linkedinUser: 'gabrielpereirafelberg',
    instagramUser: 'ggabriel.pereira',
    facebookUser: 'profile.php?id=100004755489605',
  }

  return (
    <footer className="bg-black text-white py-6 px-4 border-t-2 border-gray-600">
      <div className="flex flex-col items-center md:justify-between gap-6">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-lg font-bold">Siga-me nas redes sociais:</h3>
          <div className="flex gap-4">
            <Link
              target="_blank"
              href={`https://instagram.com/${userData.instagramUser}`}
            >
              <FaInstagram className="w-10 h-10 bg-[#973c7e] border-[#973c7e] hover:text-[#973c7e] hover:bg-black border text-white rounded-xl p-2 transition-all" />
            </Link>
            <Link
              target="_blank"
              href={`https://fb.com/${userData.facebookUser}`}
            >
              <FaFacebookF className="w-10 h-10 bg-[#506ccf] border-[#506ccf] hover:text-[#506ccf] hover:bg-black border text-white rounded-xl p-2 transition-all" />
            </Link>
            <Link
              target="_blank"
              href={`https://linkedin.com/in/${userData.linkedinUser}`}
            >
              <FaLinkedinIn className="w-10 h-10 bg-[#0e76a8] border-[#0e76a8] hover:text-[#0e76a8] hover:bg-black border text-white rounded-xl p-2 transition-all" />
            </Link>
          </div>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="mt-6 text-center border-t border-gray-600 pt-4 text-sm">
        © {new Date().getFullYear()} {userData.nameUser}. Todos os direitos
        reservados.
      </div>
    </footer>
  )
}
