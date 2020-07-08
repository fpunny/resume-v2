import React, { useState, useEffect } from "react";
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import Education from "../sections/Education";
import Projects from "../sections/Projects";
import Layout from "../components/Layout";
import Header from "../sections/Header";
import Skills from "../sections/Skills";
import Menu from "../components/Menu";
import Work from "../sections/Work";
import Seo from '../components/Seo';

export const darkContext = React.createContext({ get: false, set() { } });
export default function IndexPage() {
  const [dark, setDark] = useState();
  useEffect(() => setDark(localStorage.getItem('dark_mode')), []);
  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [ dark ]);
  const { site } = useStaticQuery(query);

  return (
    <darkContext.Provider value={{ get: dark, set: setDark }}>
      <Seo title={site.siteMetadata.author} />
      <Helmet>
        <link rel='preload' as='font' type='font/woff2' href='/fonts/Avenir-Medium.woff2' />
        <link rel='preload' as='font' type='font/woff2' href='/fonts/Avenir-Light.woff2' />
      </Helmet>
      <Layout
        seo={{
          title: site.siteMetadata.author
        }}
        header={<Header />}
        education={<Education />}
        projects={<Projects />}
        skills={<Skills />}
        work={<Work />}
      />
      <Menu/>
    </darkContext.Provider>
  );
}

const query = graphql`
{
  site {
    siteMetadata {
      author
    }
  }
}
`;
