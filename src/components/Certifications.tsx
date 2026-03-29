import { Shield, CheckCircle, Lock, ExternalLink } from 'lucide-react'

const certifications = [
  {
    id: 1,
    title: 'Salesforce Certified Administrator',
    issuer: 'Salesforce',
    year: '2024',
    color: '#00A1E0',
    iconBg: 'from-[#00A1E0] to-[#032D60]',
    badge: '☁️',
    active: true,
    verifyUrl: 'https://trailhead.salesforce.com/',
  },
  {
    id: 2,
    title: 'Salesforce Certified Platform Foundations',
    issuer: 'Salesforce',
    year: '2024',
    color: '#FF6B35',
    iconBg: 'from-[#FF6B35] to-[#c44a1e]',
    badge: '🏗️',
    active: true,
    verifyUrl: 'https://trailhead.salesforce.com/',
  },
  {
    id: 3,
    title: 'Platform App Builder',
    issuer: 'Salesforce · In Progress',
    year: 'Soon',
    color: '#9CA3AF',
    iconBg: 'from-gray-400 to-gray-500',
    badge: '🔧',
    active: false,
    verifyUrl: null,
  },
]

export default function Certifications() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider mb-2">
            Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white section-title section-title-center">
            Certifications
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Verified Salesforce credentials demonstrating expertise in administration and platform configuration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 transition-all duration-300 animate-fade-in-up ${
                cert.active
                  ? 'border-transparent hover:border-[#00A1E0] hover:-translate-y-1 shadow-card hover:shadow-card-hover cursor-pointer'
                  : 'border-gray-200 dark:border-gray-700 opacity-60'
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {!cert.active && (
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-gray-100 dark:bg-gray-700 rounded-full px-2.5 py-1">
                  <Lock className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-400 text-xs font-medium">In Progress</span>
                </div>
              )}

              {cert.active && (
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-green-50 dark:bg-green-900/30 rounded-full px-2.5 py-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span className="text-green-600 dark:text-green-400 text-xs font-medium">Certified</span>
                </div>
              )}

              {/* Badge icon */}
              <div className="mb-5">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cert.iconBg} flex items-center justify-center shadow-lg mx-auto`}
                  style={!cert.active ? { filter: 'grayscale(0.7)' } : {}}
                >
                  <div className="text-center">
                    <div className="text-3xl">{cert.badge}</div>
                  </div>
                </div>
              </div>

              {/* Decorative circles (like Trailhead badge rings) */}
              <div
                className="absolute top-6 left-6 w-24 h-24 rounded-full border-4 opacity-5"
                style={{ borderColor: cert.color }}
              />

              <div className="text-center">
                <h3
                  className={`font-display font-bold text-base leading-tight mb-1.5 ${
                    cert.active ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'
                  }`}
                >
                  {cert.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {cert.issuer} · {cert.year}
                </p>

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#00A1E0] hover:text-[#0085b8] text-sm font-medium transition-colors"
                    onClick={e => e.stopPropagation()}
                  >
                    <Shield className="w-3.5 h-3.5" />
                    Verify Credential
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
