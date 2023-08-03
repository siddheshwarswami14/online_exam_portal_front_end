import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";


//const TOKEN_HEADER = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{

    constructor(private login:LoginService)
    {

    }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler): 
        Observable<HttpEvent<any>> {

            //add the jwt token (localStoresage) request

            let authReq =req;

            const token=this.login.getToken();
            console.log('inside interceptor');
            if(token!= null)
            {
                //authReq=authReq.clone({setHeaders:{TOKEN_HEADER:`Bearer ${token}`},
                authReq = authReq.clone({
                    setHeaders:{ Authorization:`Bearer ${token}`},                
            });


            }
            return next.handle(authReq);




        //throw new Error("Method not implemented.");
    }
    
}

export const authInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,

    },
];