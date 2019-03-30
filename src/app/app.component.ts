import { Component } from '@angular/core';
// https://www.npmjs.com/package/angular-ng-autocomplete
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'name';
  data = [
    {
      id: 1,
      name: 'Usa'
    },
    {
      id: 2,
      name: 'England'
    },
    {
      id: 1,
      name: 'Usa'
    },
    {
      id: 2,
      name: 'England'
    },
    {
      id: 1,
      name: 'Usa'
    },
    {
      id: 2,
      name: 'England'
    },
    {
      id: 1,
      name: 'Usa'
    },
    {
      id: 2,
      name: 'England'
    },
    {
      id: 1,
      name: 'Usa'
    },
    {
      id: 2,
      name: 'England'
    },
    {
      id: 1,
      name: 'Usa'
    },
    {
      id: 2,
      name: 'England'
    }
 ];
  // states = [
  //   {
  //     name: 'Arkansas',
  //     population: '2.978M',
  //     flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
  //   },
  //   {
  //     name: 'California',
  //     population: '39.14M',
  //     flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
  //   },
  //   {
  //     name: 'Florida',
  //     population: '20.27M',
  //     flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
  //   },
  //   {
  //     name: 'Texas',
  //     population: '27.47M',
  //     flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
  //   }
  // ];
  constructor() { }

  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e){
    // do something when input is focused
  }
}
