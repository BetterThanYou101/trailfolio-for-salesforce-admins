// ============================================================
// PROJECT DATA — Edit this array to update the Projects section
// Each project card is defined here. Fields:
//   id        — unique string identifier
//   type      — category tag (e.g., "Flow", "Validation Rule")
//   icon      — emoji icon shown on the card
//   title     — card heading
//   description — short blurb about the project
//   difficulty  — "Beginner" | "Intermediate" | "Advanced"
//   comingSoon  — true = shows "Coming Soon" ribbon, false = live project
//   detailUrl   — link for "View Details" button (null if coming soon)
// ============================================================

export interface Project {
  id: string
  type: string
  icon: string
  title: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  comingSoon: boolean
  detailUrl: string | null
}

export const projects: Project[] = [
  {
    id: 'flow-record-triggered',
    type: 'Flow',
    icon: '⚡',
    title: 'Record-Triggered Flow',
    description:
      'Automated business process triggered on record creation/update. Details coming soon.',
    difficulty: 'Intermediate',
    comingSoon: true,
    detailUrl: null,
  },
  {
    id: 'flow-screen',
    type: 'Flow',
    icon: '🖥️',
    title: 'Screen Flow',
    description:
      'Guided user experience built with Screen Flow for streamlined data entry. Details coming soon.',
    difficulty: 'Intermediate',
    comingSoon: true,
    detailUrl: null,
  },
  {
    id: 'validation-rule',
    type: 'Validation Rule',
    icon: '✅',
    title: 'Validation Rule',
    description:
      'Custom validation logic to enforce data quality and business rules. Details coming soon.',
    difficulty: 'Beginner',
    comingSoon: true,
    detailUrl: null,
  },
  {
    id: 'approval-process',
    type: 'Approval Process',
    icon: '📋',
    title: 'Approval Process',
    description:
      'Multi-step approval workflow with automated notifications and routing. Details coming soon.',
    difficulty: 'Advanced',
    comingSoon: true,
    detailUrl: null,
  },
  {
    id: 'custom-object',
    type: 'Custom Object & Fields',
    icon: '🗄️',
    title: 'Custom Object & Fields',
    description:
      'Designed custom data model with objects, fields, and relationships. Details coming soon.',
    difficulty: 'Beginner',
    comingSoon: true,
    detailUrl: null,
  },
  {
    id: 'reports-dashboards',
    type: 'Reports & Dashboards',
    icon: '📊',
    title: 'Reports & Dashboards',
    description:
      'Dynamic dashboard with KPI tracking and scheduled report delivery. Details coming soon.',
    difficulty: 'Intermediate',
    comingSoon: true,
    detailUrl: null,
  },
  {
    id: 'permission-set',
    type: 'Permission Set',
    icon: '🔐',
    title: 'Permission Set',
    description:
      'Granular access control configuration using Permission Sets and Groups. Details coming soon.',
    difficulty: 'Beginner',
    comingSoon: true,
    detailUrl: null,
  },
]
