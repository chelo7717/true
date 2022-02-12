import { HttpClient } from "@angular/common/http";
import { Injectable, TemplateRef } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class SearchService{
    constructor(private readonly http : HttpClient){}

    search(term: string):Observable<any>{
        const params={
            action:'query',
            format: 'json',
            list:'search',
            srsearch: term,
            utf8:'1',
            origin: '*',
        }
        return this.http.get<any>(environment.api,{params:params})
    }
}