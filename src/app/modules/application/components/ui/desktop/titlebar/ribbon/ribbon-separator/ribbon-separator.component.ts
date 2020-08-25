import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ribbon-separator',
  templateUrl: './ribbon-separator.component.html',
  styleUrls: ['./ribbon-separator.component.css']
})
export class RibbonSeparatorComponent implements OnInit {
  @Input() ribbonSize;
  @Input() direction;

  constructor() { }

  ngOnInit(): void {

  }

}
