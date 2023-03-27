import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Lecture} from "./lecture";

@Component({
  selector: 'app-jumpbar',
  templateUrl: './jumpbar.component.html',
  styleUrls: ['./jumpbar.component.scss']
})
export class JumpbarComponent implements OnInit {
  lectures: Lecture[] = [
    {id: 1, name: 'grid'},
    {id: 2, name: 'position'},
    {id: 3, name: 'table'},
  ];
  currentLectureId: number = 0;
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.currentLectureId = 0;
  }
  next(): void {
    this.currentLectureId = this.currentLectureId + 1;
    const name = this.getLectureNameById(this.currentLectureId);
    this.router.navigate([name]);
  }

  previous(): void {
    this.currentLectureId = this.currentLectureId - 1;
    const name = this.getLectureNameById(this.currentLectureId);
    this.router.navigate([name]);
  }

  start() : void {
    this.currentLectureId = 1;
    const name = this.getLectureNameById(this.currentLectureId);
    this.router.navigate([name]);
  }

  end() : void {
    this.currentLectureId = this.lectures.length - 1;
    const name = this.getLectureNameById(this.currentLectureId);
    this.router.navigate([name]);
  }

  getLectureNameById(id: number): string {
    return `/${this.lectures.at(id)!.name!}`;
  }
}
