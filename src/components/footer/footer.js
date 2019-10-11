import React from 'react'
import '../../scss/_footer.scss'
import { func } from 'prop-types';

const Footer = () => {

  return (


    <footer class="page-footer font-small special-color-dark pt-4">


      <div class="container">


        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a href='https://github.com/rtjohnson0' class="btn-floating btn-fb mx-1 waves-effect waves-light">
              <i class="fa fa-github"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href='https://twitter.com/ReggTheEngineer' class="btn-floating btn-tw mx-1 waves-effect waves-light">
              <i class="fa fa-twitter"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-gplus mx-1 waves-effect waves-light">
              <i class="fa fa-facebook"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href='https://www.linkedin.com/in/reginald-johnson-jr-9aa348120/' class="btn-floating btn-li mx-1 waves-effect waves-light">
              <i class="fa fa-linkedin"> </i>
            </a>
          </li>

        </ul>


      </div>



      <div class="footer-copyright text-center py-3">© 2018 Copyright: Reginald Johnson Jr
        <p>Last Modified:October 9, 2019</p>

      </div>


    </footer>


  );
}
export default Footer



