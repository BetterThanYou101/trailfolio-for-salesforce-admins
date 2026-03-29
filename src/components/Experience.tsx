import { Briefcase, GraduationCap, BookOpen, MapPin } from 'lucide-react'

const timelineItems = [
  {
    type: 'learning',
    icon: BookOpen,
    iconColor: '#FF6B35',
    iconBg: 'from-[#FF6B35] to-[#e55a00]',
    title: 'Trailhead Self-Learning',
    subtitle: 'Ranger Rank',
    period: '2024 – Present',
    location: 'Salesforce Trailhead',
    description: 'Achieved Ranger rank with 169 badges, 129,575 points across 26 trails. Continuous learning in Salesforce administration, automation, and security.',
    tags: ['169 Badges', '26 Trails', 'Ranger'],
  },
  {
    type: 'work',
    icon: Briefcase,
    iconColor: '#00A1E0',
    iconBg: 'from-[#00A1E0] to-[#0070d2]',
    title: 'INES S.A',
    subtitle: 'Accounting Intern',
    period: '2023',
    location: 'Casablanca, Morocco',
    description: 'Supported accounting operations, financial data entry, and reconciliation processes. Gained hands-on experience with financial management systems.',
    tags: ['Accounting', 'Finance', 'Data Entry'],
  },
  {
    type: 'education',
    icon: GraduationCap,
    iconColor: '#8B5CF6',
    iconBg: 'from-[#8B5CF6] to-[#6D28D9]',
    title: 'SIST / Cardiff Metropolitan University',
    subtitle: 'BA Business Management · Finance Major',
    period: '2021 – 2024',
    location: 'Casablanca, Morocco',
    description: 'Bachelor of Arts in Business Management with a major in Finance. Developed strong analytical, financial modeling, and business operations skills.',
    tags: ['Business Management', 'Finance', 'BA'],
  },
  {
    type: 'education',
    icon: GraduationCap,
    iconColor: '#10B981',
    iconBg: 'from-[#10B981] to-[#059669]',
    title: 'SIST / NCC Education',
    subtitle: 'Computer Science',
    period: '2020 – 2021',
    location: 'Casablanca, Morocco',
    description: 'Foundation in Computer Science covering programming fundamentals, databases, and IT systems — providing the technical grounding for Salesforce administration.',
    tags: ['Computer Science', 'Programming', 'Databases'],
  },
  {
    type: 'work',
    icon: Briefcase,
    iconColor: '#F59E0B',
    iconBg: 'from-[#F59E0B] to-[#D97706]',
    title: 'SAHARA MÉTAL SARL',
    subtitle: 'Sales and Stock Assistant',
    period: '2019',
    location: 'Casablanca, Morocco',
    description: 'Managed sales support and stock inventory operations. Experience with customer relations, stock management, and operational data tracking.',
    tags: ['Sales', 'Inventory', 'Operations'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider mb-2">
            Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white section-title section-title-center">
            Experience & Education
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A trail of professional experience and academic milestones on the path to Salesforce expertise.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00A1E0] via-[#FF6B35] to-[#8B5CF6] opacity-30 transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {timelineItems.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-6 animate-fade-in-up ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {/* Timeline dot — desktop centered */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.iconBg} flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-gray-900`}
                  >
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Mobile dot */}
                <div className="md:hidden flex-shrink-0 z-10">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.iconBg} flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-gray-900`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content card */}
                <div className={`flex-1 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 hover:border-[#00A1E0]/40 transition-colors shadow-sm hover:shadow-md">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-gray-900 dark:text-white text-base leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm font-medium mt-0.5" style={{ color: item.iconColor }}>
                          {item.subtitle}
                        </p>
                      </div>
                      <span className="flex-shrink-0 text-xs font-semibold bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-300 px-2.5 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500 text-xs mb-3">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-md font-medium"
                          style={{
                            color: item.iconColor,
                            backgroundColor: `${item.iconColor}15`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side on desktop */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
