import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { STATUS_TODO } from 'src/app/core/const/todos'

@Component({
  selector: 'app-buttons-status',
  templateUrl: './buttons-status.component.html',
  styleUrls: []
})
export class ButtonsStatusComponent implements OnInit {
  @Input() currentState?: { _id: number, name: string }
  @Output() newState = new EventEmitter<number>()
  statuses = Object.values(STATUS_TODO)

  constructor() { }

  ngOnInit(): void { }

  changeState(_id: number, newState: string) {
    this.currentState = { _id, name: newState }
    this.newState.emit(_id)
  }

  // This function changes style of the background color style of the button
  getStatusClass(): string {
    const selectedStatus = this.statuses.find(status => status?.id === this.currentState?._id)
    return (selectedStatus ? selectedStatus.bgColor : '')
  }
}
