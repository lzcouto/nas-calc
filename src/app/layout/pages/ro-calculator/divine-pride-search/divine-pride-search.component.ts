import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DivinePrideService } from '../../../../api-services/divine-pride.service';
import { DivinePrideItemModel } from '../../../../api-services/models/divine-pride-item.model';

@Component({
  selector: 'app-divine-pride-search',
  templateUrl: './divine-pride-search.component.html',
  styleUrls: ['../ro-calculator.component.css', './divine-pride-search.component.css'],
})
export class DivinePrideSearchComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  isShowSearchDialog = false;
  itemId: number | null = null;
  isLoading = false;
  searchResult: DivinePrideItemModel | null = null;
  formattedResult: string = '';
  errorMessage: string = '';
  parsedDescription: string = '';
  formattedDescription: { text: string; isHighlight: boolean; color?: string; isLineBreak?: boolean }[] = [];
  extractedStats: { [key: string]: string } = {};
  extractedEffects: string[] = [];

  constructor(private divinePrideService: DivinePrideService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onSearch() {
    if (!this.itemId || this.itemId <= 0) {
      this.errorMessage = 'Please enter a valid item ID';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.searchResult = null;
    this.formattedResult = '';

    this.subscription = this.divinePrideService.getItem(this.itemId).subscribe({
      next: (result: DivinePrideItemModel) => {
        this.searchResult = result;
        this.formattedResult = JSON.stringify(result, null, 2);
        this.parseDescription(result.description);
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = `Error fetching item data: ${error.message || 'Unknown error'}`;
        this.isLoading = false;
      }
    });
  }

  onClearSearch() {
    this.itemId = null;
    this.searchResult = null;
    this.formattedResult = '';
    this.errorMessage = '';
    this.parsedDescription = '';
    this.formattedDescription = [];
    this.extractedStats = {};
    this.extractedEffects = [];
  }

  private parseDescription(description: string) {
    if (!description) {
      this.parsedDescription = '';
      this.formattedDescription = [];
      this.extractedStats = {};
      this.extractedEffects = [];
      return;
    }

    // Initialize extraction objects
    this.extractedStats = {};
    this.extractedEffects = [];

    // First split by line breaks (try both \n and \\n)
    let lines = description.split('\n');
    if (lines.length === 1) {
      lines = description.split('\\n');
    }

    // Extract structured information from all lines but keep everything in description too
    for (const line of lines) {
      if (!line.trim()) continue;

      // Check for structured information (English patterns for LATAM server)
      const structuredPatterns = [
        { key: 'type', regex: /Type:\s*\^(?:777777|7777)(.+?)\^000000/i },
        { key: 'attack', regex: /Attack:\s*\^(?:777777|7777)(\d+)\^000000/i },
        { key: 'weight', regex: /Weight:\s*\^(?:777777|7777)(\d+)\^000000/i },
        { key: 'weaponLevel', regex: /Weapon level:\s*\^(?:777777|7777)(\d+)\^000000/i },
        { key: 'requiredLevel', regex: /Level required:\s*\^(?:777777|7777)(\d+)\^000000/i },
        { key: 'defense', regex: /Defense:\s*\^(?:777777|7777)(\d+)\^000000/i }
      ];

      // Special handling for classes (can have different color patterns)
      const classesMatch = line.match(/Classes:\s*\^?[0-9A-Fa-f]{4,6}(.+?)\^000000/i);
      if (classesMatch) {
        this.extractedStats['classes'] = classesMatch[1].trim();
      }

      // Extract structured information for table
      for (const pattern of structuredPatterns) {
        const match = line.match(pattern.regex);
        if (match) {
          this.extractedStats[pattern.key] = match[1].trim();
        }
      }

      // Extract effects (blue text)
      const effectMatch = line.match(/\^0000ff(.+?)\^000000/i);
      if (effectMatch) {
        this.extractedEffects.push(effectMatch[1].trim());
      }
    }

    // Parse the FULL description for display with line breaks (keep everything)
    const parts: { text: string; isHighlight: boolean; color?: string; isLineBreak?: boolean }[] = [];
    
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      const line = lines[lineIndex].trim();
      
      if (lineIndex > 0 && line) {
        // Add line break before each line except the first
        parts.push({ text: '<br>', isHighlight: false, isLineBreak: true });
      }
      
      if (line) {
        // Parse color codes in this line (handle both 4 and 6 digit codes)
        const colorPattern = /\^([0-9A-Fa-f]{4,6})(.*?)\^([0-9A-Fa-f]{6})/g;
        let lastIndex = 0;
        let match;
        
        while ((match = colorPattern.exec(line)) !== null) {
          // Add any text before this color match
          if (match.index > lastIndex) {
            const beforeText = line.substring(lastIndex, match.index).trim();
            if (beforeText) {
              // Add spacing after colons for better formatting
              const formattedBeforeText = beforeText.replace(/:/g, ':     ');
              parts.push({ 
                text: formattedBeforeText, 
                isHighlight: false,
                color: '#ffffff'
              });
            }
          }
          
          const startColor = match[1];
          const coloredText = match[2];
          
          // Determine the color based on start color
          let textColor = '#ffffff';
          if (startColor === '0000ff' || startColor === '0000FF') {
            textColor = '#0066ff';
          } else if (startColor === '777777' || startColor === '7777') {
            textColor = '#888888';
          }
          
          if (coloredText.trim()) {
            // Add spacing after colons for better formatting
            const formattedText = coloredText.replace(/:/g, ':     ');
            parts.push({
              text: formattedText,
              isHighlight: false,
              color: textColor
            });
          }
          
          lastIndex = colorPattern.lastIndex;
        }
        
        // Add any remaining text after the last color match
        if (lastIndex < line.length) {
          const remainingText = line.substring(lastIndex).trim();
          if (remainingText) {
            // Add spacing after colons for better formatting
            const formattedRemainingText = remainingText.replace(/:/g, ':     ');
            parts.push({ 
              text: formattedRemainingText, 
              isHighlight: false,
              color: '#ffffff'
            });
          }
        }
      }
    }
    
    this.formattedDescription = parts;
    
    // Create a clean version for display
    this.parsedDescription = parts
      .filter(p => !p.isLineBreak)
      .map(p => p.text)
      .join(' ');
  }

  showDialog() {
    this.isShowSearchDialog = true;
  }

  onDialogHide() {
    this.onClearSearch();
  }

  onImageError(event: any) {
    // Hide the image if it fails to load
    (event.target as HTMLImageElement).style.display = 'none';
  }

  onTitleIconError(event: any) {
    // Hide the title icon if it fails to load
    (event.target as HTMLImageElement).style.display = 'none';
  }

  getItemTypeText(itemTypeId: number): string {
    const itemTypes: Record<number, string> = {
      1: 'Weapon',
      2: 'Armor', 
      3: 'Headgear',
      4: 'Accessory',
      5: 'Card',
      6: 'Consumable',
      7: 'Misc',
      8: 'Ammo',
      9: 'Shadow Equipment'
    };
    return itemTypes[itemTypeId] || `Type ${itemTypeId}`;
  }

  getJobClassText(jobFlag: number): string {
    if (jobFlag === 0) return 'None';
    if (jobFlag === -1 || jobFlag === 4294967295) return 'All Classes';
    
    // This is a simplified version - full job parsing would require the complete job bit flags
    const jobNames = [];
    if (jobFlag & 1) jobNames.push('Novice');
    if (jobFlag & 2) jobNames.push('Swordman');
    if (jobFlag & 4) jobNames.push('Magician');
    if (jobFlag & 8) jobNames.push('Archer');
    if (jobFlag & 16) jobNames.push('Acolyte');
    if (jobFlag & 32) jobNames.push('Merchant');
    if (jobFlag & 64) jobNames.push('Thief');
    
    return jobNames.length > 0 ? jobNames.join(', ') : `Job Flag: ${jobFlag}`;
  }
} 