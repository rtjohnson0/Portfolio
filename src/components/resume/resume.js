import React from 'react'
import '../../scss/_resume.scss'


const Resume = () => {
    return(
       
        <section class="resume-section p-3 p-lg-5 d-flex justify-content-center bg-dark" id="experience">
           
      <div class="w-100">
        <h2 class="mb-5 text-light">Experience</h2>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0 text-light">Apprentice Junior Web Developer</h3>
            <div class="subheading mb-3 text-light"><h5>RoadToHire</h5></div>
            <p className='text-light'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary text-light">June 2019 - Present</span>
          </div>
        </div>
        <hr />

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0 text-light">Tech Services</h3>
            <div class="subheading mb-3 text-light"><h5>Staples</h5></div>
            <p className='text-light'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary text-light">August 2018 - February 2019</span>
          </div>
        </div>
      <hr />
        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0 text-light">Electrical Engineering Intern</h3>
            <div class="subheading mb-3 text-light"><h5>Fairfax Fire Department</h5></div>
            <p className='text-light'>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary text-light">May 2017 - August 2017</span>
          </div>
        </div>
        <div class="w-100">
        
        <h2 class="mb-5 text-light">Education</h2>
        
       
        <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div class="resume-content">
            <h3 class="mb-0 text-light">Frostburg State University</h3>
            <div class="subheading mb-3 text-light">Electrical Engineering</div>
            <p className='text-light'>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary text-light">August 2015 - December 2018</span>
            </div>
          </div>
        </div>
        <hr />
       
      </div>

    </section>
    )



}
export default Resume;