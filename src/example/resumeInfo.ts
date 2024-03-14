import type { ResumeInfoData } from '@/types/ResumeInfoData'

export const sampleResumeInfoData: ResumeInfoData = {
  selfDescription:
    'I am currently a PhD student at University of Tsukuba. My research focus is about retrieval-augmented generation of large language models.  My research interests include natural language processing and information retrieval. I previously worked as a front-end and android development engineer at Meituan Company.',
  otherInfo: [
    'I have been accepted as a PhD student at University of Tsukuba. (2024.04)',
    'I have left Meituan Company. (2023.08)'
  ],
  educationInfo: [
    {
      school: 'Jilin University',
      degree: 'Bachelor',
      major: 'Software Engineering',
      graduation: '2019'
    },
    {
      school: 'University of Tsukuba',
      degree: 'Master',
      major: 'Informatics',
      graduation: '2022'
    }
  ],
  experienceInfo: [
    {
      company: 'Meituan',
      title: 'Android Developer',
      location: 'Shanghai, China',
      period: '2022-2023',
      description: 'Worked on various projects of Meituan and Dianping.'
    }
  ],
  skillsInfo: [
    {
      category: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Frameworks',
      skills: ['Vue', 'ReactNative', 'Node.js', 'Android SDK', 'Pytorch']
    }
  ]
  // researchInfo: [
  //   {
  //     title: 'Efficient Algorithms for Deep Learning',
  //     authors: 'John Doe',
  //     publication: 'Nature',
  //     link: 'https://www.nature.com/articles/s41586-020-03165-9'
  //   }
  // ]
}
