import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//import { RoutingComponent } from './routing/routing.component';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { GETComponent } from './get/get.component';
import { POSTComponent } from './post/post.component';
import { PUTComponent } from './put/put.component';
import { DELETEComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    //RoutingComponent,
    GETComponent,
    POSTComponent,
    PUTComponent,
    DELETEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
