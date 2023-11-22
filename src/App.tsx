import { useQuery } from 'react-query';
import styles from './App.module.css';
import Portfolio from './components/Portfolio';
import Home, { MenuItemType } from './components/Home';
import Positioning from './components/Positioning';
import { ElementType } from './components/Positioning/types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { CaseType, ExperienceType, MetaType, PageType, SkillsType } from './types';
import { client } from './utils/sanityClient';
import Experience from './components/Experience';
import clsx from 'clsx';
import { getActivePage, setActivePage } from './utils/ulrManager';
import { HOME_PRESENT_DELAY } from './constants';
import CV from './components/CV';

const currentPage = getActivePage();

function App() {
  const mobileView = window.innerWidth < 1000;

  const [activeElementId, setActiveElementId] = useState<PageType>('home');
  const [myCodeOpen, setMyCodeOpen] = useState(false);

  const { data: casesData } = useQuery<CaseType[]>("cases", async () => {
    const result = await client.fetch('*[_type == "case"] | order(_createdAt asc)');

    return result;
  });

  const { data: experienceData } = useQuery<ExperienceType[]>("experience", async () => {
    const result = await client.fetch('*[_type == "experience"] | order((projects | order(startDate desc)[0]).startDate desc)');

    return result;
  });

  const { data: slillsData } = useQuery<SkillsType>("skills", async () => {
    const result = await client.fetch('*[_type == "skills"][0]');

    return result;
  });

  const { data: metaData } = useQuery<MetaType>("meta", async () => {
    const result = await client.fetch('*[_type == "meta"][0]');

    return result;
  });

  const goToHome = useCallback(() => {
    if (activeElementId === 'home') return;

    setActiveElementId('home')
    setActivePage('home', currentPage.params);

    if (mobileView) return;

    setMyCodeOpen(false);
  }, [mobileView, setMyCodeOpen, activeElementId]);

  const goToMyCode = useCallback(() => {
    if (activeElementId === 'code') return;

    setActiveElementId('code');
    setActivePage('code', currentPage.params);

    if (mobileView) return;

    setTimeout(() => setMyCodeOpen(true), 300);
  }, [mobileView, setMyCodeOpen, activeElementId]);

  const goToMyExperience = useCallback(() => {
    if (activeElementId === 'experience') return;

    setActiveElementId('experience');
    setActivePage('experience', currentPage.params);

    if (mobileView) return;

    setMyCodeOpen(false);
  }, [activeElementId])

  const menuItems = useMemo<MenuItemType[]>(() => [
    {
      title: 'My Code',
      onClick: goToMyCode,
      active: activeElementId === 'code',
    },
    {
      title: 'My Experience',
      onClick: goToMyExperience,
      active: activeElementId === 'experience',
    },
    // {
    //   title: 'Contacts',
    //   onClick: goToHome
    // },
  ], [goToMyCode, goToHome, goToMyExperience])

    
  const elements: ElementType[] = useMemo(() => [
    {
      node: <Experience data={experienceData || []} />,
      id: 'myExperience',
      className: clsx(styles.experienceScreen, activeElementId === 'experience' && styles.experienceScreenActive),
    },
    {
      node: <Home menuItems={menuItems} active={activeElementId === 'home'} rightSidebarMode={!mobileView && activeElementId === 'experience'} />,
      id: 'home',
      className: clsx(
        styles.homeScreen,
        activeElementId === 'home' && styles.homeScreenActive,
        activeElementId === 'experience' && !mobileView && styles.homeScreenRightSidebar
      ),
    },
    {
      node: casesData?.length ? <Portfolio open={mobileView ? true : myCodeOpen} data={casesData || []} /> : null,
      id: 'myCode',
      className: clsx(styles.myCodeScreen, activeElementId === 'code' && styles.myCodeScreenActive),
    }
  ], [activeElementId, myCodeOpen, casesData, menuItems, experienceData]);


  useEffect(() => {
    if (currentPage.page === 'cv') return;

    setTimeout(() => {
      if (currentPage.page === 'experience') goToMyExperience();
      else goToMyCode();
      
    }, HOME_PRESENT_DELAY)
  }, []);
  
  if (currentPage.page === 'cv') {
    if (!experienceData || !slillsData || !metaData) return null;
    else return <CV experience={experienceData || []} skills={slillsData}  meta={metaData} />;
  }

  return (
      <div className={styles.app}>
        <Positioning activeId={activeElementId} elements={elements} />
      </div>

  );
}

export default App;
