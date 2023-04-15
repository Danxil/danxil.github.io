export type PageType = 'experience' | 'code' | 'home' | 'cv';

export type CaseType = {
    _id: string;
    title: string;
    description: [];
}

export type ExperienceType = {
    _id: string;
    company: string;
    location: string;
    projects: {
        scrollId: string;
        title: string;
        role: string;
        startDate: string;
        endDate: string;
        tags: string[];
        responsibilities: {responsibility: []}[];
        description: [];
    }[];
    description: [];
}

export type SkillsType = {
    main: {
        [key: string]: string[]
    },
    second: {
        [key: string]: string[]
    }
}

export type MetaType = {
    summary: [],
    lookingFor: []
    education: []
}