import React from 'react'
import agens from "../assets/agens.png"
import img from "../assets/img1.png"
import img1 from "../assets/img2.png"
import img2 from "../assets/keyfeatures.png"
import img3 from "../assets/agens1.png"
import img4 from "../assets/data.png"
import img5 from "../assets/prof.png"
import img6 from "../assets/auditing.png"
import img7 from "../assets/p1.png"
import img8 from "../assets/p2.png"
export default function Home() {
  return (
    <div className='homewrapper'>
        <div className='homeContainer'>
            <div className='homeHeaderWrapper'>
              <img src={agens} alt='image'/>  
            </div>
      
        <div className='homedesWrapper'>
            <h2>An integration of Bitnine’s DB technology and PG expertise</h2>
            <p>AgensSQL is an all-new relational DBMS based on PostgreSQL, with years of expertise<br/>
and knowledge accumulated through database research and development.</p>
            <p>The enterprise package, along with AgensSQL engine, is an all-in-one solution that ensures<br/>
the efficiency and scalability of data management.</p>
            <p>Get AgensSQL now for stable operation and management services at a reduced<br/>
maintenance cost.</p>
        </div>
        <div className='homeBtnWrapper'>
         <button>Contact</button>
         <button>brochure</button>
         <button>blog</button>
        </div>
        </div>
        <div className='packagesWrapper'>
            <div className='packagesContainer'>
             <img src={img}/>
             <img src={img1}/>
            </div>
        </div>
        <div className='featuresWrapper'>
         <div className='feturesContiner'>
            <h2>Key features </h2>
            <p>Manage your data with Agens Enterprise Package<br/>
Essential enterprise features such as high availability and sharding are provided</p>
          <div className='keyfeaturesimgWrapper'>
            <img src={img2}/>
          </div>
         </div>
        </div>
        <div className='engineWrapper'>
         <div className='engineContainer'>
            <div className='engineHeaderContainer'>
                <img src={img3}/>
            </div>
            <div className='engineSubHeaderContainer'>
                <h3>Enhanced Data Security</h3>
            </div>
            <div className='engineParaContainer'>
                <p>AgensSQL is a PostgreSQL-based DBMS<br/>
that guarantees optimal security and stability.</p>
            </div>
            <div className='engineFuncsWrapper'>
                <div className='imgCard'>
                    <img src={img5}/>
                    <div className='carddesWrapper'>
                  <ul>
                    <li>user password policy reinforces login security</li>
                    <li>excessive failed login attempts lock an account</li>
                    <li>define rules for password complexity</li>
                  </ul>
                </div>
                </div>
                <div className='imgCard'>
                <img src={img4}/>
                <div className='carddesWrapper'>
                  <ul>
                   <li>enhanced data security of user personal information</li>
                   <li>resolve privacy issues in preparation for security audits</li>
                   <li>encryption or masking with unidentifiable special characters</li>
                  </ul>
                </div>
                </div>
                <div className='imgCard'>
                <img src={img6}/>
                <div className='carddesWrapper'>
                  <ul>
                    <li>monitors database activities and collects data</li>
                    <li>traces object accessed or DDL & DML statements executed by a user</li>
                    <li>records all actions in logs</li>
                  </ul>
                </div>
                </div>
            </div>
         </div>
        </div>
        <div className='agensWrapper'>
          <div className='agensContainer'>
            <div className='agensHeaderWrapper'> <h1>Agens Enterprise Package</h1>
            <p>Agens Enterprise Package comes with a high availability management server that<br/>
supports backup and data monitoring dashboard that helps enterprise customers manage their data efficiently.</p>
            </div>
            <div className='inneragensContainer'>
              <div className='rightinneragensContainer'>
                <div className='rightinneragensHeaderContainer'> 
                  <h3>Agens HA Manager</h3>
                  <h4><span>HA Clustering</span> – Failover/Failback, Load-balancing</h4>
                </div>
                <div className='rightinneragensImgContainer'>
                <img src={img7}/>
                <img src={img8}/>
                </div>
              </div>
              <div className='leftinneragensContainer'>
              <div className='leftinneragensHeaderContainer'><h3>Agens Enterprise Manager</h3></div>
              <div className='leftinneragensflipCardContainer'>
                  <div className='flipCard'>
                      <div className='front'>
                        <p>Backup/Restore</p>
                      </div>
                      <div className='back'>
                        <ul>
                          <li>provides a convenient interface for backup & restore</li>
                          <li>provides backup & restore features for DB and table objects</li>
                        </ul>
                      </div>
                  </div>
                  <div className='flipCard'>
                      <div className='front'>
                        <p>DB Monitaring Dashboard</p>
                      </div>
                      <div className='back'>
                        <ul>
                          <li>monitors real-time session & transaction lock</li>
                          <li>provides status for server CPU & memory</li>
                        </ul>
                      </div>
                  </div>
                  <div className='flipCard'>
                      <div className='front'>
                        <p>Schedule Management</p>
                      </div>
                      <div className='back'>
                        <ul>
                          <li>provides module for script, SQL job, and scheduling management</li>
                          <li>provides UX dedicated to scheduling</li>
                        </ul>
                      </div>
                  </div>
                  <div className='flipCard'>
                      <div className='front'>
                        <p>Database audit</p>
                      </div>
                      <div className='back'>
                        <ul>
                          <li>enables auditing via user interface</li>
                          <li>view audit results via user interface</li>
                        </ul>
                      </div>
                  </div>
                  <div className='flipCard'>
                      <div className='front'>
                        <p>SQL monitoring</p>
                      </div>
                      <div className='back'>
                        <ul>
                          <li>collects query statistics required for performance analysis</li>
                          <li>extracts monitoring results in query</li>
                        </ul>
                      </div>
                  </div>
                  <div className='flipCard'>
                      <div className='front'>
                        <p>perfomance management</p>
                      </div>
                      <div className='back'>
                        <ul>
                          <li>monitors and collects operation status & statistical data</li>
                          <li>provides status reports required for improving performance</li>
                        </ul>
                      </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
        <div className='footerContainer'>
          <div className='footerBarWrapper'>
          <ul>
                <li className='active list'>product
                <ul>
                    <li>graph database</li>
                    <li>relational database</li>
                </ul>
                </li>
                <li className='active list'>use cases</li>
                <li className='list'>services</li>
                <li className='list'>resources
                    <ul>
                        <li>documentation</li>
                        <li>learn</li>
                    </ul>
                </li>
                <li className='list'>blog</li>
                <li className='list'>company
                    <ul>
                        <li>about us</li>
                        <li>contact</li>
                    </ul>
                </li>
            </ul>
          </div>
          <div className='baseFooterWrapper'>
            <div className='copyRightWrpper'>
              <p> 2023 by Bitnine Global Inc. All Rights Reserved.</p>
            </div>
            <div className='footerIconWrapper'></div>
          </div>
        </div>
        </footer>
    </div>
  )
}
