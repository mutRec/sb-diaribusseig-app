import { Component } from '@angular/core';
import { faCirclePlus, faList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  faCirclePlus = faCirclePlus
  faList = faList

}
