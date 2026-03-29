import { useState } from 'react'
import { Mail, Phone, MapPin, ExternalLink, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'abdallatifelbahri09@gmail.com',
    href: 'mailto:abdallatifelbahri09@gmail.com',
    color: '#00A1E0',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+212 696 775 405',
    href: 'tel:+212696775405',
    color: '#10B981',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sidi Maarouf, Casablanca, Morocco',
    href: null,
    color: '#FF6B35',
  },
  {
    icon: ExternalLink,
    label: 'LinkedIn',
    value: 'abdellatif-elbahri',
    href: 'https://linkedin.com/in/abdellatif-elbahri/',
    color: '#0A66C2',
  },
]

function TrailheadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission — replace with real handler later
    await new Promise(r => setTimeout(r, 1200))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider mb-2">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white section-title section-title-center">
            Contact Me
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Have a Salesforce project or opportunity? I'd love to connect and explore how I can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-5">
              Let's Connect
            </h3>

            {contactInfo.map(item => (
              <div
                key={item.label}
                className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-[#00A1E0]/40 transition-all hover:shadow-sm"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${item.color}18` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-[#00A1E0] transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">{item.value}</p>
                  )}
                </div>
                {item.href?.startsWith('http') && (
                  <ExternalLink className="w-4 h-4 text-gray-300 dark:text-gray-600 flex-shrink-0" />
                )}
              </div>
            ))}

            {/* Trailhead link */}
            <div className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-[#FF6B35]/40 transition-all hover:shadow-sm">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#FF6B35]/15">
                <TrailheadIcon className="w-5 h-5 text-[#FF6B35]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">Trailhead</p>
                <a
                  href="https://salesforce.com/trailblazer/abdellatifelbahri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-[#FF6B35] transition-colors truncate block"
                >
                  trailblazer/abdellatifelbahri
                </a>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-300 dark:text-gray-600 flex-shrink-0" />
            </div>
          </div>

          {/* Contact form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 shadow-card">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                    className="mt-6 text-[#00A1E0] text-sm font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A1E0]/40 focus:border-[#00A1E0] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A1E0]/40 focus:border-[#00A1E0] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A1E0]/40 focus:border-[#00A1E0] transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00A1E0] text-white font-semibold hover:bg-[#0085b8] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
