import { computed, inject, Injectable, signal } from '@angular/core';
import { posts } from './post-data';
import { Post } from './post';
import { HttpClient, HttpParams } from '@angular/common/http';

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
