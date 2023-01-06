import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ReactiveComponent } from './component/reactive/reactive.component';
import { FormsComponent } from './component/forms/forms.component';
import { FileUploadComponent } from './component/file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { NestedFormComponent } from './component/nested-form/nested-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProfileComponent,
    ReactiveComponent,
    FormsComponent,
    FileUploadComponent,
    NestedFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
