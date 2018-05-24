import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  darkModeState: BehaviorSubject<boolean>;

  constructor() { 
    //TODO: IF THE USER IS SIGNED IN GET THE DEFAULT VALUE FROM fIREBASE
    this.darkModeState = new BehaviorSubject<boolean>(false);
  }
}
