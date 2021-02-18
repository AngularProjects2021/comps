import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  closeResult = '';
//Element get access of current or native element
  constructor(private modalService: NgbModal, private el:ElementRef) {
    console.log(el);
  }
  ngOnInit() {
    //append host to body element
    // document.body.appendChild(this.el.nativeElement);
  }

  open(content) {
    let options: any = {
      size: 'dialog-centered',
      windowClass: 'my-class'

    };
    this.modalService.open(content, options).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
