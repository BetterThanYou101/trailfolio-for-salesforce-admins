import { Cloud, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#032D60] dark:bg-gray-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00A1E0] to-[#0070d2] flex items-center justify-center">
              <Cloud className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-white text-lg">
              Trail<span className="text-[#00A1E0]">folio</span>
            </span>
          </div>

          <p className="text-white/50 text-sm text-center">
            © 2024 Abdellatif Elbahri · Junior Salesforce Administrator
          </p>

          <p className="text-white/40 text-xs flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-[#FF6B35]" /> inspired by Trailhead
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-white/30 text-xs">
            Salesforce, Trailhead, and related marks are trademarks of Salesforce, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
