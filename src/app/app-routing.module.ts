import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './component/file-upload/file-upload.component';
import { FormsComponent } from './component/forms/forms.component';
import { NestedFormComponent } from './component/nested-form/nested-form.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { ReactiveComponent } from './component/reactive/reactive.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveComponent
},

{
    path: 'form',
    component: FormsComponent
},
{
  path: 'file-upload',
  component: FileUploadComponent
},
{
  path: 'pagination',
  component: PaginationComponent
},
{
  path: 'nested-form',
  component: NestedFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
