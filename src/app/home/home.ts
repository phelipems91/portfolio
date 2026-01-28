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
  isDark = false;

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.enableDark();
    } else {
      this.enableLight();
    }
  }

  toggleTheme(): void {
    this.isDark ? this.enableLight() : this.enableDark();
  }

  enableDark(): void {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    this.isDark = true;
  }

  enableLight(): void {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    localStorage.setItem('theme', 'light');
    this.isDark = false;
  }
}
