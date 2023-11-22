import { PageType } from '../types';

export type ExperiencePageParamsType = { 'scrollTo'?: string, 'cvType'?: string };
export type PageParamsType = ExperiencePageParamsType;

export type ActivePageType = { page: PageType; params: PageParamsType  };

export const setActivePage = (page: PageType, params: PageParamsType | {} = {}) => {
    window.history.pushState({}, '', `/?${new URLSearchParams(params).toString()}#${page !== 'home' ? page : ''}`);
};

export const getActivePage = (): ActivePageType => {
    const url = new URL(window.location.href);
    const path = url.hash.slice(1);

    const scrollTo = url.searchParams.get('scrollTo') || '';
    const cvType = url.searchParams.get('cvType') || '';

    switch (path) {
        case 'experience': 
        case 'code':
        case 'cv':
            return { page: path, params: { scrollTo, cvType }};
        default:
            return { page: 'home', params: {} }
    }
};
