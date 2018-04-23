import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  // Components
  declarations: [
    AppComponent,
    UserComponent
  ],
  // Modules
  imports: [
    BrowserModule
  ],
  // Services
  providers: [],
  // Core app component (Normally prefilled)
  bootstrap: [AppComponent]
})
export class AppModule { }
