import { BaseComponent } from '../base-component';
import './footer.scss';

export class Footer extends BaseComponent {
  constructor() {
    super('footer', ['footer']);

    this.element.innerHTML = `
    <div class="footer-wrap">

    <div class="github-wrap">
      <img class="github" src="../public/Octocat.png" alt="github">
      <a class="github-link" href="https://github.com/Nilender-Andrey">
      Link to my profile on github
      </a>
    </div>
    
    <p class="year">2021</p>

<a href="https://rs.school/js/"><img class="rs-school" src="../public/rs_school_js.svg" alt="rs school"></a>

</div>
`;
  }
}
