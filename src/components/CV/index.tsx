import { PortableText } from "@portabletext/react";
import moment from "moment";
import { useMemo } from "react";
import { ExperienceType, MetaType, SkillsType } from "../../types";
import { getScrollId } from "../../utils";
import styles from "./styles";

type ExperienceToRenderType = ExperienceType & {
    roles: string[],
    tags: string[],
    dateStart: string,
    dateEnd: string,
}

function onlyUnique(value: any, index: any, array: any) {
  return array.indexOf(value) === index;
}

const DATE_FORMAT = 'MMMM YYYY';

const getExperienceLink = (company: string) => `${window.location.origin}?scrollTo=${getScrollId(company)}#experience`;

const CV = ({ experience, skills, meta }: { experience: ExperienceType[], skills: SkillsType, meta: MetaType }) => {
    const experienceToRender = useMemo<ExperienceToRenderType[]>(() => experience.map(exp => ({
        ...exp,
        roles: exp.projects.map(proj => proj.role).flat().filter(onlyUnique),
        tags: exp.projects.map(proj => proj.tags).flat().filter(onlyUnique),
        dateStart: exp.projects.map(proj => proj.startDate).filter(onlyUnique).sort((a, b) => a > b ? 1 : -1)[0],
        dateEnd: exp.projects.map(proj => proj.endDate).filter(onlyUnique).sort((a, b) => b > a ? 1 : -1)[0],
    })), [])

    console.log(11, skills)

    return <div style={styles.bg}>
        <div style={styles.container}>
            <div style={styles.columns} >
                <div style={styles.left}>
                    <h1>Vadym Bondarenko</h1>
                    <div style={styles.contacts}>
                        <p><b>Location:</b> Tulsa (OK), USA</p>
                        <p><b>Imigration status:</b> Green Card (sponsorship is not required)</p>
                        <p><b>Phone:</b> +1 (539) 292-3558</p>
                        <p><b>Email:</b> vadym.bondarenko.ggggaa@gmail.com</p>
                    </div>
                    <div style={styles.slogan}>I have been working in software development since 2012</div>
                    <div style={styles.myCode}>
                        <b>My code:</b> <i>{window.location.origin}</i>
                    </div>
                    <div style={styles.summary}>
                        <PortableText value={meta.summary} />
                    </div>
                    <div style={styles.skills}>
                        <h1>Skills</h1>
                        {
                            ['main', 'second'].map((skillsBlockKey) => (
                                skills[skillsBlockKey].map((skillsGroup, index) => (
                                    <div style={styles.skillsBlock}>
                                        {
                                            skillsGroup.skills.map(skill => (
                                                <span style={{ ...styles.skill }}>
                                                    {skill}
                                                </span>
                                            ))
                                        }
                                    </div>
                                ))
                            ))
                        }
                    </div>
                    <div style={styles.education}>
                        <h1>Education</h1>
                        <PortableText value={meta.education} />
                    </div>
                </div>
                <div style={styles.right}>
                    <h1>Experience</h1>
                        {
                            experienceToRender.map(({ company, description, projects, tags, roles, dateStart, dateEnd }, index) => (
                                <div style={{ ...styles.experienceItem}}>
                                    <div style={styles.companyHeader}>
                                        <span style={styles.role}>{roles.join(', ')}</span>
                                        <span style={styles.companyTitle}>{company}</span>
                                    </div>
                                    <div style={styles.dateRange}>
                                        <div>
                                            Start date: {moment(dateStart).format(DATE_FORMAT)}
                                        </div>
                                        <div>
                                            End date: {moment(dateEnd).format(DATE_FORMAT)}
                                        </div>
                                    </div>
                                    <div>
                                        <div style={styles.tags}>
                                            <b>Used technologies:</b> {
                                                tags.map((tag, index) => <span style={styles.tag}>{tag}{index !== tags.length - 1 ? ', ' : ''}</span>)
                                            }
                                        </div>
                                    </div>
                                    <div style={styles.detailsLink}><b>Details on my website:</b> <i>{getExperienceLink(company)}</i></div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                <div>
            </div>
        </div>
    </div>
};

export default CV