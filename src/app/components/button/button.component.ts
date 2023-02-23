import {Component, Input} from '@angular/core';

@Component({
  selector: 'pc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text: string = '';
  @Input() color: string = 'primary';
  @Input() icon: string = '';

}
