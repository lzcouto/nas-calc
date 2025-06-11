import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export abstract class BaseAPIService {
  protected abstract readonly http: HttpClient;

  protected get<T = any>(url: string) {
    return this.http.get<T>(url).pipe(
      catchError((err) => {
        console.error({ err });
        return throwError(() => err);
      }),
    );
  }

  protected post<T = any, K = any>(url: string, body: K) {
    return this.http.post<T>(url, body).pipe(
      catchError((err) => {
        console.error({ err });
        return throwError(() => err);
      }),
    );
  }

  protected delete<T = any>(url: string) {
    return this.http.delete<T>(url).pipe(
      catchError((err) => {
        console.error({ err });
        return throwError(() => err);
      }),
    );
  }
}
