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

          <div class="container-project white-text">
            <h1 class="title display-3 text-center" style={font}>Projects<strong style={font2}>Page</strong></h1>
            <p class="lead string-1 text-center"><strong>The projects presented were created using various skills ranging from HTML, CSS, Javascript, React.Js, MySQL, Node.js, and Test Driven Development</strong></p>
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
            <h2 class="featurette-heading text-light text-md-center">Weather App</h2>
            <p class="lead font-weight-bold">Building a weather application that shows the weather conditions of a particular city when you supply the city and country by using an API key from a weather channel site.</p>
            <button type="button" class="btn btn-success"><a className='text-light' href='https://reggiesweatherapp.netlify.com/' target='_blank'>Go to page </a></button>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style={styles} src="images/weatherapp.png" data-holder-rendered="true" />

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
            <h2 class="featurette-heading text-center text-light">Number Guessing Game</h2>
            <p class="lead font-weight-bold">Created a React-App that allows the user to play a number guessing game from 1-100. When the user chooses a number too high or too low it will announce it at the top of the screen. When a user is correct it will announce it at the top and offer a new game.</p>
            <button type="button" class="btn btn-success"><a className='text-light' href='https://reggiesnumberguessinggame.netlify.com/' target='_blank'>Go to page </a></button>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="images/number-guessing.png" data-holder-rendered="true" style={styles} />
          </div>
        </div>

        <hr class="featurette-divider" />




        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading text-light text-center">Tic-Tac-Toe</h2>
            <p class="lead font-weight-bold">Lets you play tic-tac-toe,indicates when a player has won the game,stores a game’s history as a game progresses and allows players to review a game’s history and see previous versions of a game’s board.</p>
            <button type="button" class="btn btn-success"><a className='text-light' href='https://reggietictactoe.netlify.com/' target='_blank'>Go to page </a></button>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="images/tic-tac-toe.png" data-holder-rendered="true" style={styles} />
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