import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ContentRenderer from '../components/ContentRenderer';

const dateConfig = { month: 'short', year: 'numeric' };

export default function Work() {
    const { data } = useStaticQuery(query);

    return (
        <section className='container'>
            <h2 className='title'>{data.title}</h2>
            {data.content.map(props => <ContentRenderer dateConfig={dateConfig} { ...props }/>)}
        </section>
    );
}

const query = graphql`
    {
        data: contentfulQuerable(slug: { eq: "work" }) {
            content {
                ...contentFragment
            }
            title
        }
    }
`;