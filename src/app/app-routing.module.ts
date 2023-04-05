import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GETComponent } from './get/get.component';
import { POSTComponent } from './post/post.component';
import { PUTComponent } from './put/put.component';
import { DELETEComponent } from './delete/delete.component';

const routes: Routes = [
{path:'Get', component: GETComponent},
{path: 'Post', component: POSTComponent},
{path: 'Put', component: PUTComponent},
{path: 'Delete', component: DELETEComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
