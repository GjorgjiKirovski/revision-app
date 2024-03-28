import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject, map, catchError, throwError, tap} from "rxjs";

@Injectable({providedIn:'root'})
export class PostsService {

    error = new Subject<string>()

    constructor(private http: HttpClient){}

    createAndStorePost(title:string, content:string){
        const postData: Post = { title:title, content:content }
        return this.http.post<{ name: string }>(
            'https://app-revision-default-rtdb.europe-west1.firebasedatabase.app/posts.json', 
            postData,
            {
                observe: 'response'
            }
        ).subscribe(responseData => {
                console.log(responseData);
            }, error => {
                this.error.next(error.message)
            }
        )
    }

    fetchPosts(){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty')
        searchParams = searchParams.append('custom', 'key')
        return this.http
        .get<{ [key:string]:Post }>(
            'https://app-revision-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
            {
                headers: new HttpHeaders({
                    'Custom-Header' : 'Hello',
                    'KIFLINJA': 'kifla'
                }),
                params: searchParams
            }
            
        ).pipe(
          map(responseData => {
            const postsArray: Post[] = [];
            for(const key in responseData){
              if(responseData.hasOwnProperty(key)){
                postsArray.push({...responseData[key], id: key});
              }
            }
            return postsArray;
          }),
          catchError(errorRes => {
            //Send to analytics server
            return throwError(errorRes);
          })
        )
    }

    clearPosts(){
        return this.http.delete(
            'https://app-revision-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
            {
                observe: 'events',
                responseType :'json'
            }
        ).pipe(
            tap((event) => {
                console.log(event);
                if(event.type === HttpEventType.Sent){
                    console.log('Request sent')
                }
                if(event.type === HttpEventType.Response){
                    console.log(event.body)
                }
            })
        )
    }
}