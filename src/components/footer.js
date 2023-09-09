import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <footer className='container'>
      <div className='about-info'>
        <div className='about'>
          <h3>ABOUT US</h3>
          <h2>We are committed to delivering only the best</h2>
          <p>As a leading digital transformation services company, we harness the potential of Artificial Intelligence, Cloud, IoT, Robotics, Data Analytics, and other Emerging Technologies. We are a global technology provider who assists businesses to accelerate their digital transformation journey while achieving efficiency, scalability, and lower cost of ownership.</p>
        </div>
        <div>
          <h3>Follow us on</h3>
          <FontAwesomeIcon icon={faFacebook} className="icon-color" />
          <FontAwesomeIcon icon={faTwitter} className="icon-color" />
          <FontAwesomeIcon icon={faInstagram} className="icon-color" />
        </div>
      </div>
      <div className='links'>
        <div>

          <ul>
            <p > Design </p>
            <li > UX Research</li>
            <li> UX Design</li>
            <li > UI Design</li>
            <li> Design Audit</li>
            <li> Usability Testing</li>

          </ul>
        </div>


        <div>

          <ul>
            <p > Application Development </p>
            <li > Mobile & Web Application</li>
            <li> E-Commerce</li>
            <li > Enterprise Application</li>
            <li>  Custom Application</li>
            <li> SAAS Implementation</li>
            <li> Agile Methodology</li>
            <li>Azure Devops </li>
            <li> Cloud Applications</li>

          </ul>
        </div>

        <div>

          <ul>
            <p >Cloud </p>
            <li > Desktop as a Service</li>
            <li> Intuit Authorised Hosting</li>
            <li >Online Backup Solutions </li>
            <li> Application Hosting</li>
            <li> Microsoft cloud Services</li>


          </ul>
        </div>

        <div>

          <ul>
            <p > IT Services </p>
            <li > Managed Services </li>
            <li> Professional Consulting</li>
            <li >Infrastructure Outsourcing </li>
            <li>  24/7 Technical Support</li>
            <li>Microsoft Managed Services </li>


          </ul>
        </div>
        <div>

          <ul>
            <p >System & Software </p>
            <li > DevOps</li>
            <li> Quality Engineering</li>
            <li > Embedded Services</li>
            <li> Data Engineering</li>


          </ul>
        </div>
        <div>

          <ul>
            <p > Cybersecurity</p>
            <li > Managed Detection and Response</li>
            <li> Threat & vulnerability Management </li>
            <li > Governance, Risk, and Compliance</li>
            <li >  Data Privacy and Protection</li>
            <li > IOT/OT Security</li>
            <li> Security Implementation Services </li>


          </ul>
        </div>
        <div>

          <ul>
            <p >Products </p>
            <li > Virtualization </li>
            <li >  Email Hosting</li>
            <li > Online Backup Solution</li>
            <li > Network Security</li>
            <li > Enterprise Content</li>
            <li > Enterprise Content Management Solution</li>



          </ul>
        </div>
        <div>

          <ul>
            <p >Financial & accounting services </p>
            <li > Financial and Accounting Services</li>
            <li > Integrations & Implementations</li>
            <li > Shared Services</li>
          </ul>
        </div>

        <div>

          <ul>
            <p > Document Management Systems </p>
            <li > Document Management Software</li>
            <li > Document Scanning Services</li>
            <li >Automated Electronic Forms </li>
            <li > High-Speed Scanners</li>
            <li > Custom Document Management Software</li>
          </ul>
        </div>

        <div>

          <ul>
            <p > Strategy Services </p>
            <li > Digital Transformation</li>
            <li > Digital Transformation</li>
            <li > Microsoft Power BI</li>
          </ul>
        </div>
      </div>
      <div className='links2'>
        <div>
          <p>
            Insights</p>
          <ul>
            <li>
              Success Stories </li>
            <li>Blogs</li>
            <li>Updates </li>
          </ul>
        </div>
        <div>
          <p>Information</p>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <p>Careers</p>
          <ul>
            <li>Opening</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer