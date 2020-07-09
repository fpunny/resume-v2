import React from 'react';
import classnames from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import iconmap from './iconmap';
import styles from './Header.module.scss';

export default function Header() {
  const { site, media } = useStaticQuery(query);
  return (
    <header className={classnames(styles.container, 'container')}>
      <div className={styles.head}>
        <h1 className={styles.title}>{site.siteMetadata.author}</h1>
        <p className={styles.blurb}>{site.siteMetadata.blurb}</p>
      </div>
      <ul className={styles.items}>
        {media.content.map(({ contentfulid, description, href, label }) => {
          const Icon = iconmap[contentfulid];
          return (
            <li className={styles.item} key={contentfulid}>
              <a
                aria-label={description.description}
                rel='noreferrer noopenner'
                className={styles.link}
                target='_blank'
                href={href}
              >
                <Icon className={styles.icon} />
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

const query = graphql`
  {
    site {
      siteMetadata {
        author
        blurb
      }
    }
    media: contentfulQuerable(slug: { eq: "contact-info" }) {
      content {
        ...Link
      }
      title
      slug
    }
  }

  fragment Link on ContentfulLink {
    description {
      description
    }
    label
    href
    contentfulid
  }
`;
