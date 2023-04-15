import { PageType } from '../types';

export type ExperiencePageParamsType = { 'scrollTo': string };
export type PageParamsType = ExperiencePageParamsType;

export type ActivePageType = { page: PageType; params?: PageParamsType  };

export const setActivePage = (page: PageType, params: PageParamsType | {} = {}) => {
    window.history.pushState({}, '', `/?${new URLSearchParams(params).toString()}#${page !== 'home' ? page : ''}`);
};

export const getActivePage = (): ActivePageType => {
    const url = new URL(window.location.href);
    const path = url.hash.slice(1);

    const scrollTo = url.searchParams.get('scrollTo');

    switch (path) {
        case 'experience': 
        case 'code':
            return { page: path, ...( scrollTo ? { params: { scrollTo } } : {})};
        default:
            return { page: 'home' }
    }
};
