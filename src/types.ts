export type PageType = 'experience' | 'code' | 'home';

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