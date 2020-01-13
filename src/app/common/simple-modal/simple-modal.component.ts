import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from '../jQuery.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
  @Input() title:string
  @Input() elementId:string
  @ViewChild('modalContainer',{static:true}) el:ElementRef
  constructor(@Inject(JQ_TOKEN) private $:any) { }

  ngOnInit() {
  }
  closeModal(){
    this.$(this.el.nativeElement).modal('hide');
  }
}
