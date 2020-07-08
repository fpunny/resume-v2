import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Education from "../sections/Education";
import Projects from "../sections/Projects";
import Layout from "../components/Layout";
import Header from "../sections/Header";
import Skills from "../sections/Skills";
import Work from "../sections/Work";

export default function IndexPage() {
  const { site } = useStaticQuery(query);
  return (
    <Layout
      seo={{
        title: site.siteMetadata.author
      }}
      header={<Header/>}
      education={<Education/>}
      projects={<Projects/>}
      skills={<Skills/>}
      work={<Work/>}
    />
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
