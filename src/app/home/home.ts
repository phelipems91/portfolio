import { Component } from '@angular/core';
import { Introduction } from "../sections/introduction/introduction";
import { About } from "../sections/about/about";
import { Projects } from "../sections/projects/projects";
import { Skills } from "../sections/skills/skills";
import { Experience } from "../sections/experience/experience";
import { Education } from "../sections/education/education";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [Introduction, About, Projects, Skills, Experience, Education],
})
export class Home {

}
