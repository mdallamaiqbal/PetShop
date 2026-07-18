import Link from "next/link";
import { PawPrint} from "lucide-react";
import { LogoFacebook, LogoLinkedin, LogoTelegram } from "@gravity-ui/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-100 bg-slate-50 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <PawPrint className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold text-slate-800">
                Pet<span className="text-emerald-600">Haven</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              Providing premium care and supplies for your beloved companions. Quality, love, and reliability in every product.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-emerald-600">Home</Link></li>
              <li><Link href="/collection" className="hover:text-emerald-600">Shop Collection</Link></li>
              <li><Link href="/about" className="hover:text-emerald-600">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/faq" className="hover:text-emerald-600">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-emerald-600">Shipping Info</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-600">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-4">Follow Us</h3>
             <div className="flex gap-4 mt-2">
              <a href="#" className="p-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-emerald-600 transition-colors">
                <LogoFacebook className="h-5 w-5" />
              </a>
              <a href="#"className="p-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-emerald-600 transition-colors">
                <LogoLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-emerald-600 transition-colors">
                <LogoTelegram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} PetHaven. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-emerald-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-emerald-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}