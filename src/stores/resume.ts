import { sampleContactInfoData, samplePersonalInfoData } from '@/example/personalInfo'
import { sampleResumeInfoData } from '@/example/resumeInfo'
import type { ContactInfoData, PersonalInfoData } from '@/types/PersonalInfoData'
import type {
  EducationInfoData,
  ExperienceInfoData,
  ResearchInfoData,
  ResumeInfoData,
  SkillsInfoData
} from '@/types/ResumeInfoData'
import { defineStore } from 'pinia'
import { computed, ref, type ComputedRef, type Ref } from 'vue'

export const useResumeStore = defineStore('resume', () => {
  const personalInfoData: Ref<PersonalInfoData> = ref(samplePersonalInfoData)
  const contactInfoData: Ref<ContactInfoData> = ref(sampleContactInfoData)
  const resumeInfoData: Ref<ResumeInfoData> = ref(sampleResumeInfoData)

  const educationInfoData: ComputedRef<EducationInfoData[]> = computed(
    () => resumeInfoData.value.educationInfo ?? []
  )
  const experienceInfoData: ComputedRef<ExperienceInfoData[]> = computed(
    () => resumeInfoData.value.experienceInfo ?? []
  )
  const researchInfoData: ComputedRef<ResearchInfoData[]> = computed(
    () => resumeInfoData.value.researchInfo ?? []
  )
  const selfDescription: ComputedRef<string> = computed(
    () => resumeInfoData.value.selfDescription ?? ''
  )
  const skills: ComputedRef<SkillsInfoData[]> = computed(
    () => resumeInfoData.value.skillsInfo ?? []
  )
  const otherInfo: ComputedRef<string[]> = computed(() => resumeInfoData.value.otherInfo ?? [])

  return {
    personalInfoData,
    contactInfoData,
    resumeInfoData,
    educationInfoData,
    experienceInfoData,
    researchInfoData,
    selfDescription,
    skills,
    otherInfo
  }
})
