import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [ReactiveFormsModule, QuillModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      editorContent: ['']
    });
  }

  ngOnInit(): void {
    // Load initial data from local storage if available
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      const editorControl = this.form.get('editorContent');
      if (editorControl) {
        editorControl.setValue(savedContent);
      }
    }

    // Save the content to local storage whenever it changes
    this.form.get('editorContent')?.valueChanges.subscribe(value => {
      localStorage.setItem('editorContent', value);
    });
  }
}