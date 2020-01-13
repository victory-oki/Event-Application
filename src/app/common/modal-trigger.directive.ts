import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  el:HTMLElement
  @Input('modal-trigger') modalId:string
  constructor(@Inject(JQ_TOKEN) private $:any,private ref:ElementRef) {
    this.el = ref.nativeElement;
   }

  ngOnInit(){
    this.el.addEventListener('click',(e)=>{
      this.$(`#${this.modalId}`).modal({});
    })
  }
}
