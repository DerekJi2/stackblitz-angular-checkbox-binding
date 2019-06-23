import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';

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
    rules: this.mapToCheckboxArrayGroup(this.Rules)
  });

  get formRules() {
    return this.testForm.get('rules');
  }

  ngOnInit() {
    
  }

  private mapToCheckboxArrayGroup(data: string[]): FormArray {
    return this.fb.array(data.map((i) => {
      return this.fb.group({
        name: i,
        selected: false
      });
    }));
}

}
