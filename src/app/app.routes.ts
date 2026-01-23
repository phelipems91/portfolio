import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Introduction } from './sections/introduction/introduction';
import { About } from './sections/about/about';
import { Education } from './sections/education/education';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'introduction', component: Introduction },
    { path: 'about', component: About},
    { path: 'education', component: Education},
    { path: 'experience', component: Experience},
    { path: 'projects', component: Projects},
    { path: 'skills', component: Skills}
];
