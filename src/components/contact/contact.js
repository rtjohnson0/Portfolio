import React from 'react'
import '/Users/reginaldjohnsonjr/Documents/Website-Port/reggie-portfolio/src/scss/_contact.scss'

const Contact = () => {
  return (
    <main role='main'>
      <div class="jumbotron text-center bg-dark">
        <div class="container">
          <h1 class="featurette-heading text-light text-center">Contact Me!</h1>

          <form action='mailto:reggiejohnson1997@gmail.com'>
            <input name="name" type="text" class="feedback-input" placeholder="Name" />
            <input name="email" type="text" class="feedback-input" placeholder="Email" />
            <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
            <input type="submit" value="SUBMIT" />
          </form>
        </div>
      </div>
    </main>
  )
}

export default Contact