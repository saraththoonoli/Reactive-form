import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-reg',
  templateUrl: './book-reg.component.html',
  styleUrls: ['./book-reg.component.scss']
})
export class BookRegComponent {

  bookForm: any = FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }


  createForm() {
    this.bookForm = this.fb.group({
      bookName: ['', Validators.required,Validators.min(2)],
      author: ['', Validators.required],
      publication: [''],
      price: [[Validators.required, Validators.min(0)]],
      genre: [''],
      publishedDate: ['', Validators.required],
      country: [''],
      description: [''],
    });
  }
  onSubmit() {
    if (this.bookForm.valid) {
      console.log('Form submitted:', this.bookForm.value);
      alert('submitted successfully')
      this.bookForm.reset();
    } else {
      console.log('Form is invalid. Please check the fields.');
      alert('Enter full details')
    }

  }

}
