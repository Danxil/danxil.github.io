import { PortableText } from "@portabletext/react";
import moment from "moment";
import { useMemo } from "react";
import { ExperienceType, MetaType, SkillsType } from "../../types";
import { getScrollId } from "../../utils";
import styles from "./styles";
import { getActivePage } from "../../utils/ulrManager";

type ExperienceToRenderType = ExperienceType & {
    roles: string[],
    tags: string[],
    dateStart: string,
    dateEnd: string,
    responsibilities: {responsibility: []}[],
}

function onlyUnique(value: any, index: any, array: any) {
  return array.indexOf(value) === index;
}

const DATE_FORMAT = 'MMMM YYYY';

const getExperienceLink = (company: string) => `${window.location.origin}?scrollTo=${getScrollId(company)}#experience`;

const { params: { cvType } } = getActivePage();

const longCvType = cvType === 'long';

const portableTextComponents = {
    types: {

    },
    marks: {},
  }

const CV = ({ experience, skills, meta }: { experience: ExperienceType[], skills: SkillsType, meta: MetaType }) => {
    const experienceToRender = useMemo<ExperienceToRenderType[]>(() => experience.map(exp => ({
        ...exp,
        roles: exp.projects.map(proj => proj.role).flat().filter(onlyUnique),
        tags: exp.projects.map(proj => proj.tags).flat().filter(onlyUnique),
        dateStart: exp.projects.map(proj => proj.startDate).filter(onlyUnique).sort((a, b) => a > b ? 1 : -1)[0],
        dateEnd: exp.projects.map(proj => proj.endDate).filter(onlyUnique).sort((a, b) => b > a ? 1 : -1)[0],
        responsibilities: exp.projects.map(proj => proj.responsibilities).flat().filter(onlyUnique),
    })), [])

    console.log('longCvType', longCvType)

    return <div style={styles.bg}>
        <div style={styles.container}>
            <div style={!longCvType ? styles.columnsShort : {}} >
                <div style={!longCvType ? styles.left : {}}>
                    <h1>Vadym Bondarenko</h1>
                    <div style={styles.contacts}>
                        <PortableText value={meta.topInfo} />
                    </div>
                    <div style={styles.summary}>
                        <h1>Summary</h1>
                        <PortableText value={meta.summary} />
                    </div>
                </div>
                <div style={!longCvType ? styles.right : {}}>
                    <h1>Experience</h1>
                    {
                        experienceToRender.map(({ company, tags, roles, dateStart, dateEnd, responsibilities }, index) => (
                            <div style={{ ...styles.experienceItem, ...(longCvType ? styles.longExperienceItem : {}) }}>
                                <div style={styles.companyHeader}>
                                    <div>
                                        <div style={styles.role}>
                                            <span style={styles.experienceLabel}>Role: </span>
                                            <b>{roles.join(', ')}</b>
                                        </div>
                                        <div style={styles.companyTitle}>
                                            <span style={styles.experienceLabel}>Company: </span><b>{company}</b>
                                        </div>
                                    </div>
                                    <div style={styles.dateRange}>
                                        <div>
                                            Start date: {moment(dateStart).format(DATE_FORMAT)}
                                        </div>
                                        <div>
                                            End date: {moment(dateEnd).format(DATE_FORMAT)}
                                        </div>
                                    </div>
                                </div>
                                {
                                    longCvType && (
                                        <div style={styles.responsibilities}>
                                        <b>Responsibilities:</b>
                                        <div>
                                            {
                                                responsibilities.map((item, index) => <div key={index}><PortableText
                                                    value={item.responsibility}
                                                    components={portableTextComponents}
                                                /></div>)
                                            }
                                        </div>
                                    </div>
                                    )
                                }
                                <div>
                                    <div style={styles.tags}>
                                        <b>Used technologies:</b> {
                                            tags.map((tag, index) => <span style={styles.tag}>{tag}{index !== tags.length - 1 ? ', ' : ''}</span>)
                                        }
                                    </div>
                                </div>
                                { !longCvType && <div style={styles.detailsLink}><b>Details on my website:</b> <i>{getExperienceLink(company)}</i></div> }
                            </div>
                        ))
                    }
                    <div style={styles.education}>
                        <h1>Education</h1>
                        <PortableText value={meta.education} />
                    </div>
                        </div>
                    </div>
                <div>
            </div>
        </div>
    </div>
};

export default CV