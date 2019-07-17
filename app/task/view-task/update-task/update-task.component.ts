import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {DialogModule} from 'primeng/dialog';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}
  
  @Input() oldname = "";
  @Input() showPopup="false"
  @Output() close = new EventEmitter<string>();
  @Output() onOpenPopups = new EventEmitter<string>();

  ngOnInit() {
      // copy all inputs to avoid polluting them
    //  this.newname = this.oldname; 
  }

  ok() {
     // this.close.emit(this.newname);
  }

  cancel() {
      this.onOpenPopups.emit(null);
  }
  onOpenPopup(){
    this.onOpenPopups.emit();
  }
}
