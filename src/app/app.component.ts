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
    rules: this.fb.array(this.getTypesFormGroups())
  });

  get rules() {
    return this.testForm.get('rules') as FormArray;
  }

  ngOnInit() {
    
  }

  getTypes(): ICheckBoxItem[] {
    let checkboxes: ICheckBoxItem[] = [];
    this.LookupTypes.forEach((type) => {
      const item: ICheckBoxItem = {
        id: type,
        selected: this.dbTypes.indexOf(type) >= 0,
        name: type
      }
      checkboxes.push(item);
    });
    return checkboxes;
  }

  getTypesFormGroups(): FormGroup[] {
    const checkboxes = this.getTypes();
    const groups: FormGroup[] = [];
    checkboxes.forEach((box) => {
      const group = this.fb.group(box);
      groups.push(group);
    });

    return groups;
  }
}
