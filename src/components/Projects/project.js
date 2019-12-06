import React from 'react'

const Projects = () => {
  let styles = {
    height: '300px',
    width: '100%'

  }
  let font = {
    fontWeight: '100'
  }
  let font2 = {
    fontWeight: '600'
  }
  return (
    <main role="main-project">
      <div id="cover">
        <div class="jumbotron-project jumbotron-fluid">

          <div class="container-project container-fluid white-text">
            <h1 class="title display-3 text-center" style={font}>Project<strong style={font2}>Page</strong></h1>
            <p class="lead string-1 text-center"><strong>The projects presented were created using various skills ranging from HTML, CSS, Javascript, React.Js, MySQL, MongoDB, Node.js, and Test Driven Development</strong></p>
            <section>

              <div className='text-wrapping'>

                <svg class="arrows">
                  <path class="a1" d="M0 0 L30 32 L60 0"></path>
                  <path class="a2" d="M0 20 L30 52 L60 20"></path>
                  <path class="a3" d="M0 40 L30 72 L60 40"></path>



                </svg>
              </div>
            </section>

          </div>
        </div>
      </div>


      <div className='content'></div>

      <div className='container'>



        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading text-light text-md-center">Gateway Project</h2>
            <p class="lead font-weight-bold">The first website I ever made. This project has HTML, CSS and was built in 6 weeks of learning about the new languages. The gateway project was created through Codepen.io</p>
            <button type="button" class="btn btn-success"><a className='text-light' href='https://codepen.io/Rtjohnson0/project/full/AbBgqE' target='_blank'>Go to page </a></button>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style={styles} src="images/gateway.png" data-holder-rendered="true" />

          </div>
        </div>

        <hr class="featurette-divider" />




        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading text-light text-center">Lifesports Hack-A-Thon</h2>
            <p class="lead text-dark font-weight-bold">Road To Hire Hackathon's task was to build a UI for LifeSports while connecting it to our own MongoDB Atlas Database. This task was built and launched on Heroku by a team of 3 people.</p>
            <button type="button" class="btn btn-success"><a className='text-light' href='https://lifesportssiliconvalley.herokuapp.com/' target='_blank'>Go to page </a></button>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="images/lifesports.png" data-holder-rendered="true" style={styles} />
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading text-center text-light">Ecommerce Site</h2>
            <p class="lead font-weight-bold">Created a React-App that allows the user to view all gaming products for EB Games. This has MySql, Node, React.Js, and TDD. This was my first full-stack project.</p>
            <button type="button" class="btn btn-success"><a className='text-light' href='https://github.com/rtjohnson0/Ecommerce-Project  ' target='_blank'>Go to page </a></button>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="images/ecom-demo.png" data-holder-rendered="true" style={styles} />
          </div>
        </div>

        <hr class="featurette-divider" />




        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading text-light text-center">Ecom + PWA</h2>
            <p class="lead font-weight-bold">The task was to build a UI for my products page while connecting it to my own MongoDB Atlas Database. Only allowing the admin to login and see the products to manipulate them if needed. Created a PWA to allow anyone to add this to their home screen on their phone! This task was built and launched on Heroku by Reginald Johnson Jr</p>
            <button type="button" class="btn btn-success"><a className='text-light' href='https://authreggie.herokuapp.com/' target='_blank'>Go to page </a></button>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="images/EBGAMES.png" data-holder-rendered="true" style={styles} />
          </div>
        </div>

        <hr class="featurette-divider" />






      </div>
      <footer class="container">
        <p class="float-right"><a href="#">Back to top</a></p>

      </footer>
    </main>

  )



}
export default Projects