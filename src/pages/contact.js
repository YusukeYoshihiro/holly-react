import React from 'react';
import Layout from '../layouts/index';


const ContactPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">Contact</h1>
                </header>

                <div className="entry-body">
                  <i className="glyphicon glyphicon-envelope"></i><a href="yusuke.10.25.@gmailcom"><p>yusuke.10.25.@gmail.com</p></a><br/>
                  <i className="fas fa-phone"></i><a href="6043414851"><p>604-341-4851</p></a><br/>
                  <i className="fas fa-map-marker-alt"></i><p>550 Pacific Street, Vancouver, BC, V6Z 3E6</p>

                  
                  
                </div>

                
                

              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ContactPage;
