import React from 'react'
import '../../scss/_jumbotron.scss'


const Jumbotron = () => {



  return (
    <main role='main'>
      <div class="jumbotron text-center bg-dark">
        <div class="container">

          <h1 class="jumbotron-heading white-text">Reginald Johnson Jr</h1>
          <img className='rounded-circle' src='https://media.licdn.com/dms/image/C4E03AQE68h7rsiV0LA/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=nPjih8NKbpKFwkG3HsJM8iYda-GShYiLx-zMW2stMmE' height='250' width='250' alt='Reginald Johnson profile' />
          <h2 className='white-text'>Software Engineer</h2>
          <div className='text-wrap'>
            <p class="lead text-muted text-center"><span className='white-text'>An ambitious web developer, who has established his skills from an intense and rigorous training under Red Ventures for 6 months. Learning multiple languages from Front-End Languages (HTML,CSS,JavaScript,React.JS) to Back-End Languages (mySQL, node.js, C#). Learning professional development while also working along side mentors who work for Red Ventures.</span></p>




          </div>

        </div>
        <hr />
      </div>
    </main>


  )


}
export default Jumbotron