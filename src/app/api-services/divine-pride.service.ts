import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DivinePrideSkillModel, DivinePrideMonsterModel, DivinePrideItemModel } from './models';

@Injectable({
  providedIn: 'root'
})
export class DivinePrideService {
  private readonly baseUrl = environment.divinePrideAPIHost;
  private readonly apiKey = environment.divinePrideAPIKey;
  private readonly defaultServer = 'bRO';
  private readonly defaultLanguage = 'en-US';

  constructor(private http: HttpClient) {}

  /**
   * Get skill data by ID from Divine Pride API
   * @param skillId The skill ID to retrieve
   * @param server Optional server override (defaults to bRO)
   * @returns Observable<DivinePrideSkillModel>
   */
  getSkill(skillId: number, server: string = this.defaultServer): Observable<DivinePrideSkillModel> {
    const url = `${this.baseUrl}/database/Skill/${skillId}`;
    const params = {
      apiKey: this.apiKey,
      ...(server && { server })
    };

    const headers = {
      'Accept-Language': this.defaultLanguage
    };

    return this.http.get<DivinePrideSkillModel>(url, { params, headers });
  }

  /**
   * Get monster data by ID from Divine Pride API
   * @param monsterId The monster ID to retrieve
   * @param server Optional server override (defaults to bRO)
   * @returns Observable<DivinePrideMonsterModel>
   */
  getMonster(monsterId: number, server: string = this.defaultServer): Observable<DivinePrideMonsterModel> {
    const url = `${this.baseUrl}/database/Monster/${monsterId}`;
    const params = {
      apiKey: this.apiKey,
      ...(server && { server })
    };

    const headers = {
      'Accept-Language': this.defaultLanguage
    };

    return this.http.get<DivinePrideMonsterModel>(url, { params, headers });
  }

  /**
   * Get item data by ID from Divine Pride API
   * @param itemId The item ID to retrieve
   * @param server Optional server override (defaults to bRO)
   * @returns Observable<DivinePrideItemModel>
   */
  getItem(itemId: number, server: string = this.defaultServer): Observable<DivinePrideItemModel> {
    const url = `${this.baseUrl}/database/Item/${itemId}`;
    const params = {
      apiKey: this.apiKey,
      ...(server && { server })
    };

    const headers = {
      'Accept-Language': this.defaultLanguage
    };

    return this.http.get<DivinePrideItemModel>(url, { params, headers });
  }
} 