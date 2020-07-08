import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ContentRenderer from '../components/ContentRenderer';

const dateConfig = { month: 'short', year: 'numeric' };

export default function Projects() {
    const { data } = useStaticQuery(query);

    return (
        <section className='container'>
            <h2 className='title'>{data.title}</h2>
            {data.content.map((props, i) => <ContentRenderer dateConfig={dateConfig} key={i} { ...props }/>)}
        </section>
    );
}

const query = graphql`
    {
        data: contentfulQuerable(slug: { eq: "projects" }) {
            content {
                ...contentFragment
            }
            title
        }
    }
`;