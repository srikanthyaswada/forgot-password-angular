import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { apiUrls } from '../api.urls';

@Injectable({
  providedIn: 'root'
  })

export class AuthService
{
  http = inject(HttpClient);

  registerService(registerObj: any)
  {
    return this.http.post<any>(`${apiUrls.authServiceApi}register`,registerObj);
  }

  loginService(loginObj: any)
  {
    return this.http.post<any>(`${apiUrls.authServiceApi}login`,loginObj);
  }

  sendEmailService (email: string)
  {
    return this.http.post<any>(`${apiUrls.authServiceApi}sendEmail`, email);
  }

  resetPasswordService(resetObj: any)
  {
    return this.http.post<any>(`${apiUrls.authServiceApi}resetPassword`, resetObj);
  }

}
