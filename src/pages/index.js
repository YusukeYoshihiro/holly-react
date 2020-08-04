import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

const IndexPage = () => {
  return (
    <Layout>
      <Hero
        title="Hi, I'm YUSUKE YOSHIHIR0"
        content="I'm a Front-End-Developer besed in Vancouver."
        illustration={HeroIllustration}
      />
    </Layout>
  )
}

export default IndexPage;
