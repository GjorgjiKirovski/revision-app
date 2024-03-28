import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class LoggingInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Logging Interceptor ')
        console.log(req.headers);
        return next.handle(req).pipe(
            tap((event) => {
                console.log(event);
                if(event.type === HttpEventType.Response){
                    console.log('Incoming Response');
                    console.log(event.body);
                    console.log(event.headers);
                }
            })
        );
    }
}