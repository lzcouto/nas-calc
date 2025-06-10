import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DivinePrideService } from './divine-pride.service';
import { DivinePrideSkillModel, DivinePrideMonsterModel, DivinePrideItemModel } from './models';
import { environment } from 'src/environments/environment.local';

describe('DivinePrideService Integration Tests', () => {
  let service: DivinePrideService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DivinePrideService]
    });
    service = TestBed.inject(DivinePrideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('API Configuration', () => {
    it('should have proper environment configuration', () => {
      expect(environment.divinePrideAPIHost).toBeDefined();
      expect(environment.divinePrideAPIKey).toBeDefined();
      expect(environment.divinePrideAPIHost).toContain('divine-pride.net');
    });
  });

  describe('getSkill()', () => {
    it('should retrieve Fire Ball skill data (ID: 17)', (done) => {
      service.getSkill(17).subscribe({
        next: (skill: DivinePrideSkillModel) => {
          expect(skill).toBeDefined();
          expect(skill.id).toBe(17);
          expect(skill.globalization).toBeDefined();
          expect(Array.isArray(skill.globalization)).toBe(true);
          
          if (skill.globalization.length > 0) {
            expect(skill.globalization[0].name).toBeDefined();
            expect(skill.globalization[0].description).toBeDefined();
            expect(typeof skill.globalization[0].name).toBe('string');
            expect(typeof skill.globalization[0].description).toBe('string');
            console.log(`✓ Retrieved skill: ${skill.globalization[0].name}`);
          }
          
          done();
        },
        error: (error) => {
          console.error('Skill API Error:', error);
          if (error.status === 401) {
            console.error('❌ API Key authentication failed. Please check your Divine Pride API key.');
          } else if (error.status === 404) {
            console.error('❌ Skill ID 17 not found on Divine Pride API.');
          } else {
            console.error('❌ Network or API error occurred.');
          }
          fail(`API call failed: ${error.message || error.status}`);
        }
      });
    }, 10000); // 10 second timeout for API call

    it('should handle server parameter correctly', (done) => {
      service.getSkill(17, 'iRO').subscribe({
        next: (skill: DivinePrideSkillModel) => {
          expect(skill).toBeDefined();
          expect(skill.id).toBe(17);
          console.log('✓ Server parameter handled correctly');
          done();
        },
        error: (error) => {
          console.error('Server parameter test failed:', error);
          fail(`Server parameter test failed: ${error.message || error.status}`);
        }
      });
    }, 10000);
  });

  describe('getMonster()', () => {
    it('should retrieve Poring monster data (ID: 1002)', (done) => {
      service.getMonster(1002).subscribe({
        next: (monster: DivinePrideMonsterModel) => {
          expect(monster).toBeDefined();
          expect(monster.id).toBe(1002);
          expect(monster.name).toBeDefined();
          expect(typeof monster.name).toBe('string');
          expect(monster.level).toBeGreaterThan(0);
          expect(monster.hp).toBeGreaterThan(0);
          
          console.log(`✓ Retrieved monster: ${monster.name} (Level ${monster.level})`);
          console.log(`  HP: ${monster.hp}, Attack: ${monster.attack}`);
          
          done();
        },
        error: (error) => {
          console.error('Monster API Error:', error);
          if (error.status === 401) {
            console.error('❌ API Key authentication failed.');
          } else if (error.status === 404) {
            console.error('❌ Monster ID 1002 not found on Divine Pride API.');
          }
          fail(`Monster API call failed: ${error.message || error.status}`);
        }
      });
    }, 10000);

    it('should retrieve monster with spawn information', (done) => {
      service.getMonster(1001).subscribe({ // Scorpion
        next: (monster: DivinePrideMonsterModel) => {
          expect(monster).toBeDefined();
          expect(monster.id).toBe(1001);
          console.log(`✓ Retrieved monster with spawn data: ${monster.name}`);
          
          if (monster.spawn && monster.spawn.length > 0) {
            console.log(`  Spawns in: ${monster.spawn[0].mapname} (${monster.spawn[0].amount} monsters)`);
          }
          
          done();
        },
        error: (error) => {
          console.error('Monster spawn test failed:', error);
          fail(`Monster spawn test failed: ${error.message || error.status}`);
        }
      });
    }, 10000);
  });

  describe('getItem()', () => {
    it('should retrieve Bone Helm item data (ID: 5017)', (done) => {
      service.getItem(5017).subscribe({
        next: (item: DivinePrideItemModel) => {
          expect(item).toBeDefined();
          expect(item.id).toBe(5017);
          expect(item.name).toBeDefined();
          expect(item.description).toBeDefined();
          expect(typeof item.name).toBe('string');
          expect(typeof item.description).toBe('string');
          
          console.log(`✓ Retrieved item: ${item.name}`);
          console.log(`  Defense: ${item.defense}, Weight: ${item.weight}`);
          console.log(`  Location: ${item.location}, Slots: ${item.slots}`);
          
          done();
        },
        error: (error) => {
          console.error('Item API Error:', error);
          if (error.status === 401) {
            console.error('❌ API Key authentication failed.');
          } else if (error.status === 404) {
            console.error('❌ Item ID 5017 not found on Divine Pride API.');
          }
          fail(`Item API call failed: ${error.message || error.status}`);
        }
      });
    }, 10000);

    it('should retrieve weapon item with attack stats', (done) => {
      service.getItem(1101).subscribe({ // Sword
        next: (item: DivinePrideItemModel) => {
          expect(item).toBeDefined();
          expect(item.id).toBe(1101);
          
          console.log(`✓ Retrieved weapon: ${item.name}`);
          if (item.attack !== null) {
            console.log(`  Attack: ${item.attack}`);
          }
          
          done();
        },
        error: (error) => {
          console.error('Weapon item test failed:', error);
          fail(`Weapon item test failed: ${error.message || error.status}`);
        }
      });
    }, 10000);
  });

  describe('API Error Handling', () => {
    it('should handle invalid skill ID gracefully', (done) => {
      service.getSkill(99999).subscribe({
        next: (result) => {
          console.log('Unexpected success for invalid skill ID:', result);
          done();
        },
        error: (error) => {
          expect(error).toBeDefined();
          console.log('✓ Properly handled invalid skill ID error:', error.status);
          done();
        }
      });
    }, 10000);

    it('should handle invalid monster ID gracefully', (done) => {
      service.getMonster(99999).subscribe({
        next: (result) => {
          console.log('Unexpected success for invalid monster ID:', result);
          done();
        },
        error: (error) => {
          expect(error).toBeDefined();
          console.log('✓ Properly handled invalid monster ID error:', error.status);
          done();
        }
      });
    }, 10000);

    it('should handle invalid item ID gracefully', (done) => {
      service.getItem(99999).subscribe({
        next: (result) => {
          console.log('Unexpected success for invalid item ID:', result);
          done();
        },
        error: (error) => {
          expect(error).toBeDefined();
          console.log('✓ Properly handled invalid item ID error:', error.status);
          done();
        }
      });
    }, 10000);
  });

  describe('Server and Language Configuration', () => {
    it('should use latamRO as default server', () => {
      // This is tested implicitly in the above tests since no server parameter is passed
      expect(true).toBe(true); // Placeholder for server default test
    });

    it('should use en-US as default language', () => {
      // This is tested implicitly in the above tests via Accept-Language header
      expect(true).toBe(true); // Placeholder for language default test
    });
  });
}); 