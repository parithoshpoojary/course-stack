import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { LearningsComponent } from './learnings/learnings.component';
import { MentorsComponent } from './mentors/mentors.component';
import { FeaturesComponent } from './features/features.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent, },
  
  { path: 'login', component: LoginComponent, },
  
  { path: 'signup', component: SignupComponent, },

  { path: 'courses', component: CoursesComponent, },

  { path: 'course-page', component: CoursePageComponent, },

  { path: 'learnings', component: LearningsComponent,},

  { path: 'mentors', component: MentorsComponent, },

  { path: 'features', component: FeaturesComponent, }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FooterComponent,
    TaskbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CoursesComponent,
    CoursePageComponent,
    LearningsComponent,
    MentorsComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
