import { Component, VERSION } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: any;
  comments: any;
  commentTrue: boolean = false;
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.getPosts().subscribe({
      next: (data) => {
        console.log(data);
        this.posts = data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  viewComments(id: number) {
    console.log('clicked' + ' ' + id);

    this.api.getComments(id).subscribe({
      next: async (data) => {
        this.comments = await data;
        this.commentTrue = true;
        console.log(data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  closeComments() {
    this.commentTrue = false;
  }
}
