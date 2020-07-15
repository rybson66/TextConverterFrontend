import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

import { TextToConvertDTO } from '../dto/text-to-convert-dto';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  private apiUrl = environment.apiUrl + "converter";

  constructor(private http: HttpClient) {
  }

  downloadCSV(text: string) {
    const url = this.apiUrl + "/DownloadCSV";

    let dto = new TextToConvertDTO();
    dto.text = text;

    return this.http.post(url, dto, { responseType: 'blob' }).subscribe(
      res => {
        var a = document.createElement("a");
        a.href = URL.createObjectURL(res);
        a.download = "text.csv";
        a.click();
      },
      err => this.handleError(err),
      () => { }
    );
  }

  downloadXML(text: string) {
    const url = this.apiUrl + "/DownloadXML";

    let dto = new TextToConvertDTO();
    dto.text = text;

    return this.http.post(url, dto, { responseType: 'blob' }).subscribe(
      res => {
        var a = document.createElement("a");
        a.href = URL.createObjectURL(res);
        a.download = "text.xml";
        a.click();
      },
      err => this.handleError(err),
      () => {}
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
