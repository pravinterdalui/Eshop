import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ReactiveComponent } from './component/reactive/reactive.component';
import { FormsComponent } from './component/forms/forms.component';
import { FileUploadComponent } from './component/file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { NestedFormComponent } from './component/nested-form/nested-form.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ObservableComponent } from './component/observable/observable.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProfileComponent,
    ReactiveComponent,
    FormsComponent,
    FileUploadComponent,
    NestedFormComponent,
    PaginationComponent,
    ObservableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
