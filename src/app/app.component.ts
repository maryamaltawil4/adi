import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditorComponent } from "./editor/editor.component";
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EditorComponent ,ReactiveFormsModule, QuillModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
