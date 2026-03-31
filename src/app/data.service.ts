import { inject, Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  posts = signal<Post[]>([]);
  http = inject(HttpClient);

  url = 'https://jsonplaceholder.typicode.com/posts'

  loadPosts() {
    this.http.get<Post[]>(this.url).subscribe((post: Post[]) => this.posts.set(post))
  }

  getPostById(postId: number) {
    return this.posts().find(post => post.id === postId);
  }
}

  //retrieves posts by combination of userId and id just for demo purpose
  // getPostByIds(userId:number, id: number): Observable<Post[]>{
  //   const params = new HttpParams().set('userId', userId).set('id', id);
  //   return this.http.get<Post[]>(this.url, {params});
  // }

