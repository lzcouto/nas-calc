import { Component } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {
    visibleReference = false;
    
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
    ];
    
    constructor(public layoutService: LayoutService) { }
    
    showReferenceDialog() {
        this.visibleReference = true;
    }
}
