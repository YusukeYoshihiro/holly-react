import React from 'react';
import Layout from '../layouts/index';

const AboutPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">About Me</h1>
                </header>

                <div className="entry-body">
                  <p>
                    I'm YUSUKE YOSHIHIRO from Japan.
                <br/>
                A Front-End-Developper based in Vancouver.</p>
                  <p>
                  My terget:
                  To get involved in practical team projects in tech companies using framework to handle office software applications, e-commerce’s web applications or matching applications as a front-end-developer.
                </p>
                  <hr />
                  <p>Linked in: <a href="https://www.linkedin.com/in/yusuke-yoshihiro-ab46491b2">https://www.linkedin.com/in/yusuke-yoshihiro-ab46491b2</a></p>
                  <hr />
                  <h2>Let me join your field!</h2>
                </div>
              </div>
            </div>
            <div className="entry-media">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default AboutPage;
