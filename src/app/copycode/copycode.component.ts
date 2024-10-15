import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-copycode',
  templateUrl: './copycode.component.html',
  styleUrl: './copycode.component.css'
})
export class CopycodeComponent {
  @ViewChild('codeContent') codeContent!: ElementRef;  // Correctly declare ViewChild
  @ViewChild('codeContent2') codeContent2!: ElementRef;  // Correctly declare ViewChild

  // This will be called after the view and child elements have been initialized
  ngAfterViewInit() { }

  // Method to get the inner text of the code block
  getCodeText(): string {
    if (this.codeContent) {
      return this.codeContent.nativeElement.innerText;  // Access content safely
    } else {
      // alert("failed to copy")
      return '';  // Fallback if ViewChild is not yet initialized
    }
  }
  getCodeText2(): string {
    if (this.codeContent2) {
      return this.codeContent2.nativeElement.innerText;  // Access content safely
    } else {
      // alert("failed to copy")
      return '';  // Fallback if ViewChild is not yet initialized
    }

  }

}
