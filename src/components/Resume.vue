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
            <div class="separator"></div>
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
            <n-scrollbar trigger="none">
                <div class="description">
                    <h1 class="title">Self Description</h1>
                    <div class="description-content">{{ selfDescription }}</div>
                    <div class="skills-info">
                        <h1 style="font-size: 24px;">
                            <n-icon color="#caf0f8">
                                <skill-level />
                            </n-icon>
                            Skills
                        </h1>
                        <ul>
                            <li v-for="(record, index) in skills" :key="index">
                                <div style="font-size: 16px;">{{ record.category }}</div>
                                <ul>
                                    <li style="font-size: 16px;" v-for="(skill, index) in record.skills" :key="index">
                                        {{ skill }}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="separator"></div>
                </div>
                <div class="other-info">
                    <h1 class="title">News</h1>
                    <n-scrollbar trigger="none">
                        <ul>
                            <li v-for="(record, index) in otherInfo" :key="index">
                                {{ record }}
                            </li>
                        </ul>
                    </n-scrollbar>
                    <div class="separator"></div>
                </div>
                <div class="education-record" v-if="educationInfoData.length > 0">
                    <h1 class="title">Education</h1>
                        <div class="education-item" v-for="(record, index) in educationInfoData" :key="index">
                            <div class="first-line">
                                <div style="display: flex; flex-direction: row; align-items: center;">
                                    <n-icon color="#caf0f8">
                                        <building />
                                    </n-icon>
                                    <h2>{{ record.school }}</h2>
                                </div>
                                <div>{{ record.major }}</div>
                            </div>
                            <div class="second-line">
                                <div>{{ record.degree }}</div>
                                <div>{{ record.graduation }}</div>
                            </div>
                            <div class="separator"></div>
                        </div>
                </div>
                <div class="employment-record" v-if="experienceInfoData.length > 0">
                    <h1 class="title">Employment</h1>
                    <div class="employment-item" v-for="(record, index) in experienceInfoData" :key="index">
                        <div class="first-line">
                            <div style="display: flex; flex-direction: row; align-items: center;">
                                <n-icon color="#caf0f8">
                                    <building />
                                </n-icon>
                                <h2>{{ record.company }}</h2>
                            </div>
                            <div>{{ record.title }}</div>
                        </div>
                        <div class="second-line">
                            <div>{{ record.location }}</div>
                            <div>{{ record.period }}</div>
                        </div>
                        <div class="third-line">
                            <div>{{ record.description }}</div>
                        </div>
                        <div class="separator"></div>
                    </div>
                </div>
                <div class="research-record" v-if="researchInfoData.length > 0">
                    <h1 class="title">Research</h1>
                    <div class="research-item" v-for="(record, index) in researchInfoData" :key="index">
                        <div class="first-line">
                            <div>{{ record.title }}</div>
                            <div>{{ record.publication }}</div>
                        </div>
                        <div class="second-line">
                            <div>{{ record.authors }}</div>
                            <a :href="record.link">{{ record.link }}</a>
                        </div>
                        <div class="separator">
                        </div>
                    </div>
                </div>
            </n-scrollbar>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { NAvatar, NIcon, NScrollbar} from 'naive-ui';
    import { SkillLevel, UserAvatarFilled, Building, Location, Email, PhoneApplication, LogoLinkedin, LogoGithub, LogoWechat } from '@vicons/carbon';
    import { ref, type Ref } from 'vue';
    import type { PersonalInfoData, ContactInfoData } from '@/types/PersonalInfoData';
    import { sampleContactInfoData, samplePersonalInfoData } from '@/example/personalInfo';
    import type { EducationInfoData, ExperienceInfoData, ResearchInfoData, ResumeInfoData, SkillsInfoData } from '@/types/ResumeInfoData';
    import { sampleResumeInfoData } from '@/example/resumeInfo';

    const personalInfoData: Ref<PersonalInfoData> = ref(samplePersonalInfoData);
    const contactInfoData: Ref<ContactInfoData> = ref(sampleContactInfoData);
    const resumeInfoData: Ref<ResumeInfoData> = ref(sampleResumeInfoData);

    const educationInfoData: Ref<EducationInfoData[]> = ref(resumeInfoData.value.educationInfo ?? []);
    const experienceInfoData: Ref<ExperienceInfoData[]> = ref(resumeInfoData.value.experienceInfo ?? []);
    const researchInfoData: Ref<ResearchInfoData[]> = ref(resumeInfoData.value.researchInfo ?? []);

    const selfDescription: Ref<string> = ref(resumeInfoData.value.selfDescription ?? '');
    const skills: Ref<SkillsInfoData[]> = ref(resumeInfoData.value.skillsInfo ?? []);
    const otherInfo: Ref<string[]> = ref(resumeInfoData.value.otherInfo ?? []);

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
        .separator {
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
        overflow: auto;
        padding-left: 32px;
        padding-top: 8px;
        .title {
            font-size: 36px;
            font-family: 'PingFang-SC';
            margin-bottom: 16px;
            font-weight: bold;
            border-bottom-style: solid;
        }
        .first-line {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-bottom: 16px;
            h2 {
                margin-left: 8px;
            }
        }
        .second-line {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
        .third-line {
            font-style: italic;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
        }
        .separator {
            width: 100%;
            height: 2px;
            background-color: #caf0f8;
            margin-top: 8px;
            margin-bottom: 8px;
        }
        .description {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            width: 90%;
            height: 50%;
            .description-content {
                font-size: 24px;
                font-family: 'PingFang-SC';
                width: 100%;
                height: 45%;
                overflow: auto;
            }
            .skills-info {
                margin-top: 16px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                width: 100%;
                height: 45%;
                ul {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    li {
                        margin-right: 32px;
                    }
                }
            }
        }
        .other-info {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            width: 90%;
            height: 15%;
            overflow: auto;
        }
        .education-record {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            width: 100%;
            height: 45%;
            margin-bottom: 2%;
            .education-item {
                display: flex;
                flex-direction: column;
                width: 90%;
            }
        }
        .employment-record {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            width: 100%;
            height: 30%;
            margin-bottom: 2%;
            .employment-item {
                display: flex;
                flex-direction: column;
                width: 90%;
            }
        }
        .research-record {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            width: 100%;
            .research-item {
                display: flex;
                flex-direction: column;
                width: 90%;
            }
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
        .resume-info {
            overflow: visible;
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