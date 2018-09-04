import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ArtPageComponent } from './art-page/art-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ArtModalComponent } from './art-modal/art-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProjectsPageComponent,
    ArtPageComponent,
    ResumePageComponent,
    AboutPageComponent,
    ProjectPageComponent,
    ArtModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
