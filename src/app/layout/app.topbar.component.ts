import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  styleUrls: ['./app.topbar.component.css'],
  providers: [ConfirmationService, MessageService, DialogService],
})
export class AppTopBarComponent implements OnInit, OnDestroy {

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  visibleInfo: boolean = false;
  visibleReference = false;
  env = environment;

  infos = [
    'Item, monster, and skill data comes from "divine-pride" website',
    'Change theme using the Config button on the right-center',
    'Saved data is stored in the browser; clearing browser data will delete it',
    'Conditions marked as "every skill learning" require clicking upgrade in "Learn to get bonuses" to get bonus; if not available, bonus defaults to Lv MAX',
    'Options in weapon row are always available and can be used for "What if" scenarios',
    'My Magical Element in options = Increases magical elemental damage...',
    'Two-handed weapon comparison does not yet support left-hand changes',
    'Jobs 61-64, 66-69 may have incorrect bonuses due to missing data',
    'Tab "Summary" shows what you equipped/which skills you upgraded/all calculations',
    'Tab "Equipments Summary" shows item bonuses overview',
    'Tab "Item Descriptions" shows individual item bonuses and descriptions (for verifying correct bonuses)',
  ];

  references: { label: string; link: string; writer: string; date?: string; }[] = [
    {
      label: 'Jobs Improvement Bundle Update (20 June 2024)',
      writer: 'RO GGT',
      link: 'https://ro.gnjoy.in.th/bundleupdate13',
    },
    {
      label: 'Old Headgear & Enchant Improve',
      writer: 'RO GGT',
      link: 'https://ro.gnjoy.in.th/old-headgear-enchant-improve',
    },
    {
      label: 'New Elemental Table Adjustment',
      writer: 'RO GGT',
      link: 'https://ro.gnjoy.in.th/new-elemental-table-adjustment',
    },
    {
      label: 'Quarter 1 Class Improvement 2024',
      writer: 'RO GGT',
      link: 'https://ro.gnjoy.in.th/quarter-1-class-improvement-2024',
    },
    {
      label: 'Bonus JOB LV.70',
      writer: 'RO GGT',
      link: 'https://ro.gnjoy.in.th/newyear_adventure_2024/assets/img/additional/Ragnarok-Today/POP-UP-Job-BONUS.jpg',
    },
    {
      label: 'Class Improvement [Sura, Warlock, Minstrel&Wanderer]',
      writer: 'RO GGT',
      link: 'https://ro.gnjoy.in.th/class-improvement-sura-warlock-minstrelwanderer',
    },
    {
      label: 'Skills Balance (1st, 2nd and transcendent classes skills)',
      writer: 'RO GGT',
      link: 'https://ro.gnjoy.in.th/skills-balance-1st-2nd-and-transcendent-classes-skills',
    },
    {
      label: 'Geffen Magic Tournament Enchant System Update!',
      writer: 'RO GGT',
      link: 'https://ro.gnjoy.in.th/geffen-magic-tournament-enchant-system-update',
    },
    {
      label: 'Develop note ! Balance Skill - Extended Class Level Cap Expansion',
      writer: 'RO GGT',
      link: 'https://ro.gnjoy.in.th/develop-note-extended',
    },
    {
      label: 'Items & Monsters & Skill infomation',
      writer: 'DIVINE PRIDE',
      link: 'https://www.divine-pride.net/',
    },
    {
      label: 'Skill infomation',
      writer: 'IRO Wiki',
      link: 'https://irowiki.org/wiki/Main_Page',
    },
    {
      label: 'ATK',
      writer: 'IRO Wiki',
      link: 'https://irowiki.org/wiki/ATK',
    },
    {
      label: 'MATK',
      writer: 'IRO Wiki',
      link: 'https://irowiki.org/wiki/MATK',
    },
    {
      label: 'Malangdo Enchants',
      writer: 'IRO Wiki',
      link: 'https://irowiki.org/wiki/Malangdo_Enchants',
    },
    {
      label: 'KRO : Jobs improvement project',
      writer: 'Sigma',
      link: 'https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project',
    },
    {
      label: 'KRO : Episode 17.2 enchant info : Automatic equipment and Sin weapons.',
      writer: 'Sigma',
      link: 'https://www.divine-pride.net/forum/index.php?/topic/4176-kro-episode-172-enchant-info-automatic-equipment-and-sin-weapons',
    },
    {
      label: 'KRO : Glast Heim challenge mode enchant',
      writer: 'Sigma',
      link: 'https://www.divine-pride.net/forum/index.php?/topic/3879-kro-glast-heim-challenge-mode-enchant/',
    },
    {
      label: 'KRO : Thanatos Tower revamp',
      writer: 'Sigma',
      link: 'https://www.divine-pride.net/forum/index.php?/topic/4277-kro-thanatos-tower-revamp/',
    },
    {
      label: 'KRO : Illusion of Under Water',
      writer: 'Sigma',
      link: 'https://www.divine-pride.net/forum/index.php?/topic/4319-kro-illusion-of-under-water',
    },
    {
      label: 'RO Podcast EP 7 : KRO Patchnote Q4 Review + Debuff Discussion',
      writer: 'Sigma the fallen',
      link: 'https://www.youtube.com/live/xUiYYi6o6gA?si=EdJvXnchwtionL_4&t=1515',
    },
    {
      label: 'Class 4 Skills V2',
      writer: 'Sigma the fallen',
      link: 'https://sigmathefallen.blogspot.com/',
    },
    {
      label: 'Deep Dive into Renewal Stats Part I : Matk & Mdef',
      writer: 'Sigma the fallen',
      link: 'https://web.facebook.com/notes/3202008843255644/',
    },
    {
      label: 'Enchantment System',
      writer: 'Hazy Forest',
      link: 'https://hazyforest.com/equipment:enchantment_system',
    },
    {
      label: 'Enchant Deadly Poison (EDP) Guide',
      writer: 'Assing',
      link: 'https://www.pingbooster.com/th/blog/detail/ragnarok-online-edp-enchant-deadly-poison-assassin',
    },
    {
      label: 'Assassin Hidden Properties: How to Maximize Damage (Please enable subtitles for complete information)',
      writer: '/\\ssing (Assing)',
      link: 'https://youtu.be/WvSbULJ2CGU?si=Ae5vY9teaGZDXSRB',
    },
    {
      label: 'Enchants',
      writer: 'trifectaro.com',
      link: 'https://trifectaro.com/mediawiki/index.php/Enchants',
    },
    {
      label: 'Open-source RO emulator',
      writer: 'rAthena',
      link: 'https://github.com/rathena/rathena',
    },
    // {
    //   label: '',
    //   writer: '',
    //   link: '',
    // },
  ];

  updates: { v: string; date: string; logs: string[]; }[] = [
    {
      v: '0.2.0-BETA',
      date: new Date().toLocaleDateString('en-US'),
      logs: [
        "Divine Pride API Service: Added external API integration for Ragnarok Online game data",
        "New service endpoints: getSkill(), getMonster(), getItem() with real-time data from Divine Pride API",
        "Complete TypeScript models for API responses: skills, monsters, and items",
        "Environment-based API key configuration with support for multiple servers (defaults to latamRO)",
        "Comprehensive integration tests with real API calls using actual game data",
      ],
    },
    {
      v: '0.1.5-BETA',
      date: new Date().toLocaleDateString('en-US'),
      logs: [
        "Complete Thai text elimination: comprehensive cleanup removing all remaining Thai text from calculator interface",
        "UI text translation: accuracy/penetration labels, monster location names, skill descriptions, and system messages",
        "Enhanced English consistency: standardized terminology across all calculator components and battle summaries",
        "Code comment translation: converted Thai developer comments to English for better maintainability",
      ],
    },
    {
      v: '0.1.4-BETA',
      date: new Date().toLocaleDateString('en-US'),
      logs: [
        "Navbar clean-up: moved References button to footer, repositioned version to right side",
        "Updated website title to 'Ragnarok Online LATAM Calculator'",
        "Icon consistency fix: standardized all topbar icons to 1.25rem size with CSS rules",
        "Converted home button from tab menu to regular button for consistency",
        "Enhanced footer: added References functionality while preserving attribution layout",
        "Code optimization: removed unused tab properties, reduced bundle size by 11.73 kB",
      ],
    },
    {
      v: '0.1.3-BETA',
      date: new Date().toLocaleDateString('en-US'),
      logs: [
        "Major navbar redesign: moved Calculator to far left as home icon only, removed green selection bar",
        "Improved spacing between search icon and Items text, enhanced Settings cogwheel sizing",
        "Made footer text 'NITROBLISSERINO ATTACK SQUAD @ ROLA' bold and italic",
        "Complete Thai text translation: penetration labels, skill names, reference titles, and author names",
        "CSS cleanup: removed problematic border styling causing visual issues",
      ],
    },
    {
      v: '0.1.2-BETA',
      date: new Date().toLocaleDateString('en-US'),
      logs: [
        "Fixed topbar right-side positioning by moving Calculator, Items, and Settings buttons to layout-topbar-menu container",
      ],
    },
    {
      v: '0.1.1-BETA',
      date: new Date().toLocaleDateString('en-US'),
      logs: [
        "Fixed topbar right-side elements positioning to ensure they align all the way to the right edge",
      ],
    },
    {
      v: '0.1.0-BETA',
      date: new Date().toLocaleDateString('en-US'),
      logs: [
        "Initial beta release",
        "Removed support functionality", 
        "Reset version to 0.0.1-BETA",
        "Reorganized topbar layout: Version/Bell/References on left, Calculator/Items/Settings on right",
        "Updated footer attribution to 'NITROBLISSERINO ATTACK SQUAD @ ROLA' with Tong Calc credit",
      ],
    },
  ];
  localVersion = localStorage.getItem('version') || '';
  lastestVersion = this.updates[0].v;

  unreadVersion = this.updates.findIndex((a) => a.v === this.localVersion);
  showUnreadVersion = this.unreadVersion === -1 ? this.updates.length + 1 : this.unreadVersion;

  visibleUpdate = this.lastestVersion !== this.localVersion;

  obs = [] as Subscription[];

  constructor(
    public layoutService: LayoutService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnDestroy(): void {
    for (const subscription of this.obs) {
      subscription?.unsubscribe();
    }
  }

  ngOnInit(): void {
    // Removed authentication functionality
  }



  showUpdateDialog() {
    this.visibleUpdate = true;
  }

  showReferenceDialog() {
    this.visibleReference = true;
  }

  onHideUpdateDialog() {
    // localStorage.setItem('version', this.updates[0].v);
    // this.showUnreadVersion = 0;
  }

  onReadUpdateClick(version: string) {
    localStorage.setItem('version', version);
    this.unreadVersion = this.updates.findIndex((a) => a.v === version);
    this.showUnreadVersion = this.unreadVersion === -1 ? this.updates.length + 1 : this.unreadVersion;
  }

  showInfoDialog() {
    this.visibleInfo = true;
  }

  showItemSearchDialog() {
    this.layoutService.showItemSearchDialog();
  }

  showConfigSidebar() {
    this.layoutService.showConfigSidebar();
  }

  private waitConfirm(message: string, icon?: string) {
    return new Promise((res) => {
      this.confirmationService.confirm({
        message: message,
        header: 'Confirmation',
        icon: icon || 'pi pi-exclamation-triangle',
        accept: () => {
          res(true);
        },
        reject: () => {
          console.log('reject confirm');
          res(false);
        },
      });
    });
  }
}
