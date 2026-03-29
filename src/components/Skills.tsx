import { useEffect, useRef, useState } from 'react'
import { Settings, Database, Zap, BarChart2 } from 'lucide-react'

const skillCategories = [
  {
    id: 'config',
    icon: Settings,
    title: 'Salesforce Configuration',
    color: '#00A1E0',
    skills: [
      { name: 'Security & Sharing Rules', level: 88 },
      { name: 'Object Management', level: 92 },
      { name: 'User Management & Role Hierarchies', level: 90 },
      { name: 'Record Types & Relationships', level: 85 },
    ],
  },
  {
    id: 'data',
    icon: Database,
    title: 'Data Management Tools',
    color: '#FF6B35',
    skills: [
      { name: 'Data Loader', level: 82 },
      { name: 'Salesforce Inspector', level: 78 },
      { name: 'Excel (VLOOKUP, Pivot Tables)', level: 85 },
    ],
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Automation & Logic',
    color: '#8B5CF6',
    skills: [
      { name: 'Flow Builder (Record-Triggered, Screen Flows, Scheduled Paths)', level: 80 },
      { name: 'Validation Rules & Formula Fields', level: 87 },
      { name: 'Duplicate Management Rules', level: 75 },
    ],
  },
  {
    id: 'reporting',
    icon: BarChart2,
    title: 'Reporting & Analytics',
    color: '#10B981',
    skills: [
      { name: 'Reports & Dashboards', level: 88 },
      { name: 'Dynamic Dashboards', level: 80 },
      { name: 'Financial Reconciliation', level: 72 },
    ],
  },
]

function SkillBar({ name, level, color, animate }: { name: string; level: number; color: string; animate: boolean }) {
  return (
    <div className="skill-item">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full progress-bar"
          style={{
            '--progress-width': `${level}%`,
            backgroundColor: color,
            width: animate ? `${level}%` : '0%',
            transition: animate ? 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          } as React.CSSProperties}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [animated])

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider mb-2">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white section-title section-title-center">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Technical proficiency across Salesforce administration, automation, and data management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${cat.color}18` }}
                >
                  <cat.icon className="w-5 h-5" style={{ color: cat.color }} />
                </div>
                <h3 className="font-display font-semibold text-gray-900 dark:text-white">
                  {cat.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {cat.skills.map(skill => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    animate={animated}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {[
            { range: '70–79%', label: 'Proficient', color: '#6B7280' },
            { range: '80–89%', label: 'Advanced', color: '#00A1E0' },
            { range: '90–100%', label: 'Expert', color: '#FF6B35' },
          ].map(l => (
            <div key={l.label} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: l.color }} />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">{l.range}</span> · {l.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
