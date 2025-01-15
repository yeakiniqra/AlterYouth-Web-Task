import Link from 'next/link'
import { FiFacebook,FiInstagram } from 'react-icons/fi'

export default function Footer() {
  const getFullYear = () => new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Navigation Links */}
          <div>
            <h2 className="text-lg mb-4 text-black">Learn About AlterYouth</h2>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-800 hover:text-gray-900">
                Home
              </Link>
              <Link href="/about" className="block text-gray-800 hover:text-gray-900">
                About us
              </Link>
              <Link href="/how-it-works" className="block text-gray-800 hover:text-gray-900">
                How it works
              </Link>
              <Link href="/policy" className="block text-gray-800 hover:text-gray-900">
                Scholarship Policy
              </Link>
              <Link href="/app" className="block text-gray-800 hover:text-gray-900">
                Get the app
              </Link>
            </nav>
          </div>

          {/* Tagline - Hidden on mobile, shown on md and up */}
          <div className="hidden md:flex items-end justify-end">
            <p className="text-gray-600">Towards a literate Bangladesh</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t gap-4">
          {/* Copyright and Legal Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-600">
            <p>© {getFullYear()} AlterYouth Limited</p>
            <div className="flex items-center gap-4">
              <Link href="/terms" className="hover:text-gray-900">
                Terms of Service
              </Link>
              <span className="hidden md:inline">•</span>
              <Link href="/privacy" className="hover:text-gray-900">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link 
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <span className="sr-only">Facebook</span>
              <FiFacebook className="w-5 h-5" />
            </Link>
            <Link 
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <span className="sr-only">Instagram</span>
              <FiInstagram className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Tagline - Shown on mobile only */}
        <div className="md:hidden text-center mt-8">
          <p className="text-gray-600">Towards a literate Bangladesh</p>
        </div>
      </div>
    </footer>
  )
}

