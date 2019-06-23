import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  readonly Rules = [
    'BD',
    'PM',
    'MW',
    'PSC',
    'PS',
  ];

  constructor(
    private fb: FormBuilder,
  ) {}
  
  testForm = this.fb.group({
    title: [ 'Campbelltown' ],
    rules: this.fb.array(
      this.Rules.map(() => false)
    )
  });
}
