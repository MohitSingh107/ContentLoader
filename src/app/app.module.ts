import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HighlightTextDirective } from './searchword/highlight-text.directive';
import { SearchwordComponent } from './searchword/searchword.component';
import { CopyCodeDirective } from './copycode/copy-code.directive';
import { CopycodeComponent } from './copycode/copycode.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchwordComponent,
    CopycodeComponent,
    HighlightTextDirective,
    CopyCodeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }