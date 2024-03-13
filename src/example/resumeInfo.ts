import type { ResumeInfoData } from '@/types/ResumeInfoData'

export const sampleResumeInfoData: ResumeInfoData = {
  educationInfo: [
    {
      school: 'Harvard University',
      degree: 'PhD in Computer Science',
      major: 'Artificial Intelligence',
      graduation: '2022'
    },
    {
      school: 'MIT',
      degree: 'BSc in Computer Science',
      major: 'Software Engineering',
      graduation: '2018'
    }
  ],
  experienceInfo: [
    {
      company: 'Google',
      title: 'Software Engineer',
      location: 'Mountain View, CA',
      period: '2018-2022',
      description: 'Worked on various projects in the Google Search team.'
    }
  ],
  skillsInfo: [
    {
      category: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Frameworks',
      skills: ['React', 'Node.js', 'Express']
    }
  ],
  researchInfo: [
    {
      title: 'Efficient Algorithms for Deep Learning',
      authors: 'John Doe',
      publication: 'Nature',
      link: 'https://www.nature.com/articles/s41586-020-03165-9'
    }
  ]
}
