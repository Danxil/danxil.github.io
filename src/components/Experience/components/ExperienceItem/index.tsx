import { PortableText } from '@portabletext/react';
import moment from 'moment';
import imageUrlBuilder from '@sanity/image-url';
import { ForwardedRef, ReactNode, useImperativeHandle, useRef } from 'react';
import { ExperienceType } from '../../../../types';
import { client } from '../../../../utils/sanityClient';
import styles from './index.module.css'
import React from 'react';

const builder = imageUrlBuilder(client)

const portableTextComponents = {
    types: {
      image: ({ value }: { value: {} }) => {
        const url = builder.image(value).width(500).quality(100).dpr(2).auto('format').url();

        return <img src={url} className={styles.img} alt="" />;
        },
    },
    marks: {
        link: ({ children, value }: { children: ReactNode, value?: { href: string, blank: boolean } }) => {
          return (
            <a className={styles.link} href={value?.href} rel={value?.blank ? 'noreferrer' : ''} target={value?.blank ? '_blank' : '_self'}>
              {children}
            </a>
          )
        },
      },
  }
  
  const DATE_FORMAT = 'MMMM YYYY'

type ExperienceItemType = { data: ExperienceType };
export type RefType = {id: string; scrollIntoView: () => void };

const ExperienceItem = ({ data: { company, projects } }: ExperienceItemType, ref: ForwardedRef<RefType>) => {
    const divRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => {
        return {
            id: company.toLowerCase().replace(' ', '_'),
            scrollIntoView: () => divRef.current?.scrollIntoView({ behavior: 'smooth' }),
        };
    });

    return (
        <div className={styles.experienceItem} ref={divRef}>
            <h2 className={styles.companyTitle}>
                {company}
            </h2>
            <div>
                {
                    projects.map(({ scrollId, title, role, tags, startDate, endDate, responsibilities, description }) => (
                        <div className={styles.project} id={scrollId} key={scrollId}>
                            <h3 className={styles.projectTitle}>
                                <span className={styles.role}>{role}</span>
                                <span className={styles.projectName}>{title}</span>
                                <span></span>
                            </h3>
                            <div className={styles.date}>
                                <span>{`${moment(startDate).format(DATE_FORMAT)} - ${moment(endDate).format(DATE_FORMAT)}`}</span>
                            </div>
                            <div className={styles.description}>
                                <PortableText
                                    value={description}
                                    components={portableTextComponents}
                                />
                            </div>
                            <div className={styles.tags}>
                                {tags?.map(tag => <div key={tag} className={styles.tag}><span className={styles.tagText}>{tag}</span></div>)}
                            </div>
                            <div className={styles.responsibilities}>
                                <span className={styles.responsibilitiesTitle}>Responsibilities:</span>
                                <div className={styles.responsibilitiesList}>
                                    {
                                        responsibilities.map((item, index) => <div key={index} className={styles.responsibility}><PortableText
                                            value={item.responsibility}
                                            components={portableTextComponents}
                                        /></div>)
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default React.forwardRef<RefType, ExperienceItemType>(ExperienceItem);