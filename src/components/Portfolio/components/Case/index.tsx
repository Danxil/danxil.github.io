import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import clsx from 'clsx';
import { ReactNode, useCallback } from 'react';
import { CaseType } from '../../../../types';
import { client } from '../../../../utils/sanityClient';
import styles from './index.module.css';

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
  

const Case = ({ _id, title, description, active, onPress }: CaseType & { active: boolean; onPress: (id: CaseType['_id']) => void }) => {
    const onPressCb = useCallback(() => {
        onPress(_id);
    }, [onPress, _id]);

    return <div className={clsx(styles.case, active && styles.active)} onClick={onPressCb}>
        <div className={styles.titleWrapper}>
            <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.content}>
            <h1 className={styles.contentTitle}>{title}</h1>
            <PortableText
                value={description}
                components={portableTextComponents}
            />
        </div>
    </div>
};

export default Case;
