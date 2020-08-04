import React from 'react';
import Layout from '../layouts/index';

const MySkills = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">My Skills</h1>
                </header>

                <div className="entry-body">
                  <i className="fab fa-html5"></i><br/>
                  <i className="fab fa-css3"></i>
                  <p>HTML5/CSS3</p>
                  <i className="fab fa-js"></i>
                  <p>JavaScript/JQuery</p>
                  <i className="fab fa-bootstrap"></i>
                  <p>Boostraps</p>
                  <i className="fab fa-react"></i>
                  <p>React</p>
                  <i className="fas fa-database"></i>
                  <p>SQL</p>
                  <i className="fab fa-node-js"></i>
                  <p>node.js</p>
                  <i className="fab fa-npm"></i>
                  <p>npm</p>
                  <i className="fas fa-cogs"></i>
                  <p>API</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default MySkills;
