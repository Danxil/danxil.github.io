import { RefObject, useEffect, useRef } from 'react';
import { HOME_PRESENT_DELAY } from '../../constants';
import { ExperienceType } from '../../types';
import { createHash } from '../../utils/hash';
import { getActivePage } from '../../utils/ulrManager';
import ExperienceItem, { RefType } from './components/ExperienceItem';
import styles from './index.module.css'

const currentPage = getActivePage();

const Experience = ({ data }: { data: ExperienceType[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<{ [key: string]: () => void }>({});

    useEffect(() => {
        if (!data.length || !currentPage.params || !currentPage.params.scrollTo || !containerRef.current) return;
        
        setTimeout(() => {
            if (!data.length || !currentPage.params || !currentPage.params.scrollTo || !containerRef.current || !listRef.current[currentPage.params.scrollTo]) return;

            listRef.current[currentPage.params.scrollTo]();
        }, HOME_PRESENT_DELAY - 100)
    }, [data]);

    return (
        <div className={styles.container} ref={containerRef}>
            {
                data.map((data, i) => (
                    <ExperienceItem
                        key={createHash(`${data.company}${data.projects[0]?.startDate}`)}
                        data={data}
                        ref={(item: RefType) => {
                            if (!item) return;

                            listRef.current[item.id] = item.scrollIntoView;
                        }}
                    />
                ))
            }
        </div>
    )
}

export default Experience;