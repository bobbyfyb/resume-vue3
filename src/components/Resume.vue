<template>
    <div class="resume-container">
        <div class="personal-info-container">
            <n-avatar :size="200">
                <n-icon color="#000">
                    <user-avatar-filled />
                </n-icon>
            </n-avatar>
            <div class="personal-info">
                <n-scrollbar trigger="none">
                    <div
                        class="info-item" 
                        v-for="(value, key, index) in personalInfoData" 
                        :key="index"
                        >
                        <div v-if="key === 'name'">
                            <h1>{{ value }}</h1>
                        </div>
                        <div v-else>
                            <div>
                                <n-icon v-if="key === 'coporation'" color="#caf0f8">
                                    <building />
                                </n-icon>
                                <n-icon v-if="key === 'location'" color="#caf0f8">
                                    <location />
                                </n-icon>
                                {{ key }}
                            </div>
                            <div>{{ value }}</div>
                        </div>
                    </div>
                </n-scrollbar>
            </div>
            <div class="seperator"></div>
            <div class="contact-info">
                <n-scrollbar trigger="none">
                    <div
                        class="info-item" 
                        v-for="(value, key, index) in contactInfoData" 
                        :key="index"
                        >
                        <div>
                            <div>
                                <n-icon v-if="key === 'email'">
                                    <email />
                                </n-icon>
                                <n-icon v-if="key === 'phone'">
                                    <phone-application />
                                </n-icon>
                                <n-icon v-if="key === 'linkedin'">
                                    <logo-linkedin />
                                </n-icon>
                                <n-icon v-if="key === 'github'">
                                    <logo-github />
                                </n-icon>
                                <n-icon v-if="key === 'wechat'">
                                    <logo-wechat />
                                </n-icon>
                                {{ key }}
                            </div>
                            <a v-if="key === 'github' || key === 'linkedin' || key === 'website'" :href="value">{{ value }}</a>
                            <a v-else-if="key === 'email'" :href="'mailto:' + value">{{ value }}</a>
                            <div v-else>{{ value }}</div>
                        </div>              
                    </div>
                </n-scrollbar>
            </div>
        </div>
        <div class="resume-info">
            <div class="education-record"></div>
            <div class="employment-record"></div>
            <div class="research-focus"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { NAvatar, NIcon, NScrollbar} from 'naive-ui';
import { UserAvatarFilled, Building, Location, Email, PhoneApplication, LogoLinkedin, LogoGithub, LogoWechat } from '@vicons/carbon';
import { ref, type Ref } from 'vue';
import type { PersonalInfoData, ContactInfoData } from '@/types/PersonalInfoData';
import { sampleContactInfoData, samplePersonalInfoData } from '@/example/personalInfo';
import type { EducationInfoData, ExperienceInfoData, ResearchInfoData, ResumeInfoData } from '@/types/ResumeInfoData';
import { sampleResumeInfoData } from '@/example/resumeInfo';

const personalInfoData: Ref<PersonalInfoData> = ref(samplePersonalInfoData);
const contactInfoData: Ref<ContactInfoData> = ref(sampleContactInfoData);
const resumeInfoData: Ref<ResumeInfoData> = ref(sampleResumeInfoData);

const educationInfoData: Ref<EducationInfoData> = ref(resumeInfoData.value.educationInfo ?? {});
const experienceInfoData: Ref<ExperienceInfoData> = ref(resumeInfoData.value.experienceInfo ?? {});
const researchInfoData: Ref<ResearchInfoData> = ref(resumeInfoData.value.researchInfo ?? {});


</script>

<style lang="less" scoped>
::-webkit-scrollbar {
  display: none;
}

.resume-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    min-width: 90vw;
    height: 80vh;
    background: #FEFAE0;
    .personal-info-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        max-width: 30%;
        height: 100%;
        padding: 16px;
        .personal-info {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top: 8px;
            width: 100%;
            overflow: auto;
        }
        .info-item {
                margin-bottom: 12px;
                font-size: 16px;
                font-family: 'PingFang-SC';
                width: 90%;
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;
                text-overflow: ellipsis;
                justify-content: space-between;
            }
        .seperator {
            width: 100%;
            height: 2px;
            background-color: #caf0f8;
            margin-top: 8px;
            margin-bottom: 8px;
        }
        .contact-info {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top: 8px;
            width: 100%;
            overflow: auto;
        }
    }
    .resume-info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: #DDA15E;
        width: 100%;
        height: 100%;
        margin-left: 2%;
        .education-record {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            // background-color: yellow;
            width: 100%;
            // height: 30%;
            margin-bottom: 2%;
        }
        .employment-record {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            // background-color: red;
            width: 100%;
            // height: 30%;
            margin-bottom: 2%;
        }
        .research-focus {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            // background-color: purple;
            width: 100%;
            // height: 30%;
        }
    }
}

@media(max-width: 640px){
    .resume-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 90vw;
        height: 100vh;
        overflow: scroll;
        .personal-info-container {
            min-width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        }
    }
}

@media(prefers-color-scheme: dark){
    .resume-container {
        background: #283618;
        .resume-info {
            background-color: #606C38;
        }
    }
}
</style>