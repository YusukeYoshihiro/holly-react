import React from 'react';
import Layout from '../layouts/index';

const FaqsPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">Projects</h1>
                </header>

                <div className="entry-body">
                  <p>The Lacrosse Projects</p>
                  <p>Link: <a href="https://zackguerra.github.io/lacrosseproject/">https://zackguerra.github.io/lacrosseproject/</a></p><br/>


                  <p>The Cricktet Projects</p>
                  <p>Link: <a href="https://sachiko1995.github.io/CricketWestVan/">https://sachiko1995.github.io/CricketWestVan/</a></p><br/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default FaqsPage;
