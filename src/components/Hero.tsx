import { Award, Star, Map, TrendingUp, Download, ChevronRight } from 'lucide-react'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const stats = [
    { icon: Award, label: 'Badges', value: '169', color: '#FF6B35' },
    { icon: TrendingUp, label: 'Points', value: '129,575', color: '#00A1E0' },
    { icon: Map, label: 'Trails', value: '26', color: '#FF6B35' },
    { icon: Star, label: 'Rank', value: 'Ranger', color: '#FFB347' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden cloud-pattern"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#032D60] via-[#0070d2] to-[#00A1E0]" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-[#FF6B35]/10 blur-2xl" />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-white/5 blur-xl" />

      {/* Trail dots */}
      <div className="absolute inset-0 trail-pattern opacity-10" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 animate-fade-in-up">
            {/* Rank badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <RangerBadgeIcon />
              <span className="text-white text-sm font-medium">Ranger Rank</span>
              <span className="text-white/60 text-xs">· Trailhead</span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                Abdellatif
                <span className="block text-[#FF6B35]">Elbahri</span>
              </h1>
              <p className="mt-3 text-xl text-white/80 font-medium">
                Junior Salesforce Administrator
              </p>
            </div>

            <p className="text-white/70 text-base leading-relaxed max-w-lg">
              Salesforce Certified Administrator with a Bachelor's in Business Management.
              Passionate about helping teams work efficiently through process automation
              and clean data. Skilled in user management, security configuration, and
              using tools like Data Loader to ensure system accuracy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF6B35] text-white font-semibold hover:bg-[#e55a25] transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
              >
                View My Projects
                <ChevronRight className="w-4 h-4" />
              </button>
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold hover:bg-white/20 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Stats card */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
              {/* Trailhead logo area */}
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/15">
                <div className="w-10 h-10 rounded-xl bg-[#00A1E0] flex items-center justify-center">
                  <TrailheadIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Trailhead Profile</p>
                  <p className="text-white/55 text-xs">salesforce.com/trailblazer/abdellatifelbahri</p>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 rounded-xl p-4 text-center border border-white/10 hover:bg-white/15 transition-colors"
                    style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center"
                      style={{ backgroundColor: `${stat.color}25` }}
                    >
                      <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                    </div>
                    <p className="text-white font-bold text-xl font-display">{stat.value}</p>
                    <p className="text-white/60 text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Ranger badge visual */}
              <div className="mt-6 flex items-center justify-center">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#e55a00] flex items-center justify-center ranger-glow">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF8C54] to-[#FF6B35] flex items-center justify-center border-4 border-white/30">
                      <div className="text-center">
                        <div className="text-white text-lg">⭐</div>
                        <div className="text-white text-[8px] font-bold">RANGER</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map(stat => (
            <div
              key={stat.label}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/15"
            >
              <stat.icon className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
              <div>
                <p className="text-white font-bold font-display">{stat.value}</p>
                <p className="text-white/60 text-xs">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RangerBadgeIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#e55a00] flex items-center justify-center">
      <span className="text-white text-[8px]">★</span>
    </div>
  )
}

function TrailheadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}
