import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employees';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListserviceService {

  private url: string = "https://getmeroof.com/prodapi/save_search_projects/?save_search=%7B%22uniqueIds%22:[%22AR0-5adc8388f826a0105d034b79%22],%22seo_pattern%22:0,%22projectFilters%22:%7B%22bhk%22:%7B%22bedrooms%22:[],%22bathrooms%22:[],%22balconies%22:[]%7D,%22minPrice%22:%22-1%22,%22maxPrice%22:%22-1%22,%22minRatePerSqft%22:%22-1%22,%22maxRatePerSqft%22:%22-1%22,%22status%22:[],%22builders%22:[],%22localities%22:[],%22more%22:%7B%22minSuperBuiltArea%22:%22-1%22,%22maxSuperBuiltArea%22:%22-1%22,%22minCarpetArea%22:%22-1%22,%22maxCarpetArea%22:%22-1%22,%22isAffordable%22:false,%22region%22:%22-1%22%7D,%22rera%22:false,%22meta%22:%7B%7D%7D,%22saveSearchName%22:%22%22,%22pageNo%22:0,%22saveSearchId%22:%22%22,%22projectSortBy%22:%225%22,%22propertySortBy%22:%221%22,%22propertyFilters%22:%7B%22more%22:%7B%22bhk%22:%7B%22bedrooms%22:[],%22bathrooms%22:[],%22balconies%22:[]%7D,%22furnishing%22:[],%22propertyType%22:[],%22sellerType%22:[]%7D,%22area%22:%7B%22maxCarpetArea%22:%22%22,%22maxSuperBuiltArea%22:%22%22,%22minCarpetArea%22:%22%22,%22minSuperBuiltArea%22:%22%22%7D,%22minPrice%22:%22%22,%22maxPrice%22:%22%22,%22possession%22:[],%22floor%22:[],%22facing%22:[],%22projects%22:[]%7D,%22globalCityId%22:%22100%22,%22cityId%22:%220%22,%22isScoreGenerated%22:false,%22mode%22:0,%22properties_page_no%22:0,%22propertyScorePreference%22:%7B%22city%22:%220%22,%22rate%22:%220%22,%22rate_limit_min%22:-1,%22rate_limit_max%22:-1,%22total_price_min%22:-1,%22total_price_max%22:-1,%22super_built_up_area_min%22:-1,%22super_built_up_area_max%22:-1,%22bedroom%22:-1,%22bathroom%22:-1,%22balcony%22:-1,%22possession_by%22:%22-1%22,%22mh_amenities%22:[],%22gth_amenities%22:[],%22location%22:[],%22distance_from_location%22:-1,%22meta%22:%7B%7D%7D%7D&user_id=5c343fedb9b06d0620555b85&device=WEB&current_url=/projects?saveSearchParams=eyJ1bmlxdWVJZHMiOlsiQVIwLTVhZGM4Mzg4ZjgyNmEwMTA1ZDAzNGI3OSJdLCJzZW9fcGF0dGVybiI6MCwicHJvamVjdEZpbHRlcnMiOnsiYmhrIjp7ImJlZHJvb21zIjpbXSwiYmF0aHJvb21zIjpbXSwiYmFsY29uaWVzIjpbXX0sIm1pblByaWNlIjoiLTEiLCJtYXhQcmljZSI6Ii0xIiwibWluUmF0ZVBlclNxZnQiOiItMSIsIm1heFJhdGVQZXJTcWZ0IjoiLTEiLCJzdGF0dXMiOltdLCJidWlsZGVycyI6W10sImxvY2FsaXRpZXMiOltdLCJtb3JlIjp7Im1pblN1cGVyQnVpbHRBcmVhIjoiLTEiLCJtYXhTdXBlckJ1aWx0QXJlYSI6Ii0xIiwibWluQ2FycGV0QXJlYSI6Ii0xIiwibWF4Q2FycGV0QXJlYSI6Ii0xIiwiaXNBZmZvcmRhYmxlIjpmYWxzZSwicmVnaW9uIjoiLTEifSwicmVyYSI6ZmFsc2UsIm1ldGEiOnt9fSwic2F2ZVNlYXJjaE5hbWUiOiIiLCJwYWdlTm8iOjAsInNhdmVTZWFyY2hJZCI6IiIsInByb2plY3RTb3J0QnkiOiI1IiwicHJvcGVydHlTb3J0QnkiOiIxIiwicHJvcGVydHlGaWx0ZXJzIjp7Im1vcmUiOnsiYmhrIjp7ImJlZHJvb21zIjpbXSwiYmF0aHJvb21zIjpbXSwiYmFsY29uaWVzIjpbXX0sImZ1cm5pc2hpbmciOltdLCJwcm9wZXJ0eVR5cGUiOltdLCJzZWxsZXJUeXBlIjpbXX0sImFyZWEiOnsibWF4Q2FycGV0QXJlYSI6IiIsIm1heFN1cGVyQnVpbHRBcmVhIjoiIiwibWluQ2FycGV0QXJlYSI6IiIsIm1pblN1cGVyQnVpbHRBcmVhIjoiIn0sIm1pblByaWNlIjoiIiwibWF4UHJpY2UiOiIiLCJwb3NzZXNzaW9uIjpbXSwiZmxvb3IiOltdLCJmYWNpbmciOltdLCJwcm9qZWN0cyI6W119LCJnbG9iYWxDaXR5SWQiOiIxMDAiLCJjaXR5SWQiOiIwIiwiaXNTY29yZUdlbmVyYXRlZCI6ZmFsc2UsIm1vZGUiOjAsInByb3BlcnRpZXNfcGFnZV9ubyI6MCwicHJvcGVydHlTY29yZVByZWZlcmVuY2UiOnsiY2l0eSI6IjAiLCJyYXRlIjoiMCIsInJhdGVfbGltaXRfbWluIjotMSwicmF0ZV9saW1pdF9tYXgiOi0xLCJ0b3RhbF9wcmljZV9taW4iOi0xLCJ0b3RhbF9wcmljZV9tYXgiOi0xLCJzdXBlcl9idWlsdF91cF9hcmVhX21pbiI6LTEsInN1cGVyX2J1aWx0X3VwX2FyZWFfbWF4IjotMSwiYmVkcm9vbSI6LTEsImJhdGhyb29tIjotMSwiYmFsY29ueSI6LTEsInBvc3Nlc3Npb25fYnkiOiItMSIsIm1oX2FtZW5pdGllcyI6W10sImd0aF9hbWVuaXRpZXMiOltdLCJsb2NhdGlvbiI6W10sImRpc3RhbmNlX2Zyb21fbG9jYXRpb24iOi0xLCJtZXRhIjp7fX19";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    
    return this.http.get<IEmployee[]>(this.url);
    // return 
  }
}
