import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { ICheckBoxItem } from '../models/checkbox-item.interface'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  LookupTypes = [ 'BD', 'PM', 'MW', 'PSC', 'PS' ];
  dbTypes = [ 'BD', 'PSC' ];

  constructor(
    private fb: FormBuilder,
  ) {}
  
  testForm = this.fb.group({
    title: [ 'Campbelltown' ],
    rules: this.getTypesFormArray()
  });

  get formRules() {
    return this.testForm.get('rules') as FormArray;
  }

  ngOnInit() {
    
  }

  getTypesFormArray(): FormArray {
    const groups: FormGroup[] = [];

    this.LookupTypes.forEach((type) => {
      const item: ICheckBoxItem = {
        id: type,
        selected: this.dbTypes.indexOf(type) >= 0,
        name: type
      };
      const group = this.fb.group(item);
      groups.push(group);
    });

    return this.fb.array(groups);
  }

}
