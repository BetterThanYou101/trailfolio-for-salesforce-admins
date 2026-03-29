import { ExternalLink, Clock } from 'lucide-react'
import { projects } from '../data/projects'

const difficultyConfig = {
  Beginner: { bg: 'bg-green-100 dark:bg-green-900/40', text: 'text-green-700 dark:text-green-400', dot: 'bg-green-500' },
  Intermediate: { bg: 'bg-[#00A1E0]/10 dark:bg-[#00A1E0]/20', text: 'text-[#0085b8] dark:text-[#5bcaff]', dot: 'bg-[#00A1E0]' },
  Advanced: { bg: 'bg-[#FF6B35]/10 dark:bg-[#FF6B35]/20', text: 'text-[#c44a1e] dark:text-[#ff9066]', dot: 'bg-[#FF6B35]' },
}

const typeColors: Record<string, string> = {
  'Flow': '#00A1E0',
  'Validation Rule': '#10B981',
  'Approval Process': '#8B5CF6',
  'Custom Object & Fields': '#FF6B35',
  'Reports & Dashboards': '#F59E0B',
  'Permission Set': '#EF4444',
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white section-title section-title-center">
            Salesforce Projects
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Real-world Salesforce implementations showcasing automation, data management, and configuration skills.
            Project details being added — check back soon!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((project, i) => {
            const diff = difficultyConfig[project.difficulty]
            const typeColor = typeColors[project.type] || '#00A1E0'

            return (
              <div
                key={project.id}
                className="project-card relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-card animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Coming soon ribbon */}
                {project.comingSoon && (
                  <div className="ribbon">Coming Soon</div>
                )}

                {/* Card top color bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: typeColor }}
                />

                <div className="p-5 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{ backgroundColor: `${typeColor}18` }}
                  >
                    {project.icon}
                  </div>

                  {/* Type tag */}
                  <div className="mb-2">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        color: typeColor,
                        backgroundColor: `${typeColor}15`,
                      }}
                    >
                      {project.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-gray-900 dark:text-white text-base mb-2 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50 dark:border-gray-700/50">
                    {/* Difficulty badge */}
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${diff.bg} ${diff.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${diff.dot}`} />
                      {project.difficulty}
                    </span>

                    {/* Action button */}
                    {project.comingSoon ? (
                      <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        Pending
                      </span>
                    ) : (
                      <a
                        href={project.detailUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[#00A1E0] hover:text-[#0085b8] font-semibold transition-colors"
                      >
                        View Details
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Edit tip */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#00A1E0]/8 dark:bg-[#00A1E0]/15 border border-[#00A1E0]/20 rounded-xl px-4 py-2.5">
            <span className="text-[#00A1E0] text-sm">
              💡 <span className="font-medium">Tip:</span> Edit <code className="bg-[#00A1E0]/10 px-1.5 py-0.5 rounded text-xs">src/data/projects.ts</code> to add or update project details.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
