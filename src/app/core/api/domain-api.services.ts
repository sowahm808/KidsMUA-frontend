import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { PageRequest, PageResult } from './api.models';
export interface NamedResourceDto { id: string; name: string; status?: string; updatedAt?: string; }
abstract class ResourceApiService extends BaseApiService { protected abstract resource: string; list<T extends NamedResourceDto>(request: PageRequest): Observable<PageResult<T>> { const params = new URLSearchParams({ pageIndex: String(request.pageIndex), pageSize: String(request.pageSize), ...(request.sort ? { sort: request.sort } : {}), ...(request.filter ? { filter: request.filter } : {}) }); return this.get<PageResult<T>>(`/${this.resource}?${params}`); } getById<T>(id: string): Observable<T> { return this.get<T>(`/${this.resource}/${encodeURIComponent(id)}`); } }
@Injectable({providedIn:'root'}) export class UsersApiService extends ResourceApiService{protected resource='users';}
@Injectable({providedIn:'root'}) export class ParentsApiService extends ResourceApiService{protected resource='parents';}
@Injectable({providedIn:'root'}) export class ReadingChampionsApiService extends ResourceApiService{protected resource='reading-champions';}
@Injectable({providedIn:'root'}) export class ChurchesApiService extends ResourceApiService{protected resource='churches';}
@Injectable({providedIn:'root'}) export class CampaignsApiService extends ResourceApiService{protected resource='campaigns';}
@Injectable({providedIn:'root'}) export class ConsentApiService extends ResourceApiService{protected resource='consent';}
@Injectable({providedIn:'root'}) export class CurriculumApiService extends ResourceApiService{protected resource='curriculum';}
@Injectable({providedIn:'root'}) export class LearningPacksApiService extends ResourceApiService{protected resource='learning-packs';}
@Injectable({providedIn:'root'}) export class AssessmentsApiService extends ResourceApiService{protected resource='assessments';}
@Injectable({providedIn:'root'}) export class ProgressApiService extends ResourceApiService{protected resource='progress';}
@Injectable({providedIn:'root'}) export class StarsApiService extends ResourceApiService{protected resource='stars';}
@Injectable({providedIn:'root'}) export class BadgesApiService extends ResourceApiService{protected resource='badges';}
@Injectable({providedIn:'root'}) export class RewardsApiService extends ResourceApiService{protected resource='rewards';}
@Injectable({providedIn:'root'}) export class DonationsApiService extends ResourceApiService{protected resource='donations';}
@Injectable({providedIn:'root'}) export class EncouragementApiService extends ResourceApiService{protected resource='encouragement';}
@Injectable({providedIn:'root'}) export class NotificationsApiService extends ResourceApiService{protected resource='notifications';}
@Injectable({providedIn:'root'}) export class CertificatesApiService extends ResourceApiService{protected resource='certificates';}
@Injectable({providedIn:'root'}) export class ReportsApiService extends ResourceApiService{protected resource='reports';}
@Injectable({providedIn:'root'}) export class SafeguardingApiService extends ResourceApiService{protected resource='safeguarding';}
@Injectable({providedIn:'root'}) export class FilesApiService extends ResourceApiService{protected resource='files';}
@Injectable({providedIn:'root'}) export class AdminApiService extends ResourceApiService{protected resource='admin';}
