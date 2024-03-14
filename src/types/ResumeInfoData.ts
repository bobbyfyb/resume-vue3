export interface ResumeInfoData {
  selfDescription?: string
  otherInfo?: string[]
  educationInfo?: EducationInfoData[] | null
  experienceInfo?: ExperienceInfoData[] | null
  skillsInfo?: SkillsInfoData[] | null
  researchInfo?: ResearchInfoData[] | null
}

export interface EducationInfoData {
  school?: string
  degree?: string
  major?: string
  graduation?: string
}

export interface ExperienceInfoData {
  company?: string
  title?: string
  location?: string
  period?: string
  description?: string
}

export interface SkillsInfoData {
  category?: string
  skills?: string[]
}

export interface ResearchInfoData {
  title?: string
  authors?: string
  publication?: string
  link?: string
}
