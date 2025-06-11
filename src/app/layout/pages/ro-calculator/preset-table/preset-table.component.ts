import { Component, OnDestroy, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ItemTypeEnum } from '../../../../constants/item-type.enum';
import { ClassID, ClassIcon } from '../../../../jobs/_class-name';
import { ConfirmationService, MessageService } from 'primeng/api';
import { getClassDropdownList } from '../../../../jobs/_class-list';

const displayMainItemKeys = [
  ItemTypeEnum.weapon,
  ItemTypeEnum.leftWeapon,
  ItemTypeEnum.shield,
  ItemTypeEnum.headUpper,
  ItemTypeEnum.headMiddle,
  ItemTypeEnum.headLower,
  ItemTypeEnum.armor,
  ItemTypeEnum.garment,
  ItemTypeEnum.boot,
  ItemTypeEnum.accRight,
  ItemTypeEnum.accLeft,
];
const allowHidden = {
  [ItemTypeEnum.leftWeapon]: true,
  [ItemTypeEnum.shield]: true,
};
const displayCostumeItemKeys = [
  ItemTypeEnum.costumeEnchantUpper,
  ItemTypeEnum.costumeEnchantMiddle,
  ItemTypeEnum.costumeEnchantLower,
  ItemTypeEnum.costumeEnchantGarment,
  ItemTypeEnum.costumeEnchantGarment4,
];
const displayShadowItemKeys = [
  ItemTypeEnum.shadowWeapon,
  ItemTypeEnum.shadowArmor,
  ItemTypeEnum.shadowShield,
  ItemTypeEnum.shadowBoot,
  ItemTypeEnum.shadowEarring,
  ItemTypeEnum.shadowPendant,
];

@Component({
  selector: 'app-preset-table',
  templateUrl: './preset-table.component.html',
  styleUrls: ['../ro-calculator.component.css'],
})
export class PresetTableComponent implements OnInit, OnDestroy {
  presets: any[] = [];
  selectedPreset = undefined;
  model = {} as any;
  displayMainItems = [] as any[];
  displayCostumeItems = [] as any[];
  displayShadowItems = [] as any[];
  classLabelMap = ClassID;
  classList = getClassDropdownList();
  selectedClassIdFilter = undefined;

  items = this.dynamicDialogConfig.data.items;
  jobIconMap = { ...ClassIcon };

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    public ref: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig,
  ) {}

  ngOnDestroy(): void {
    // No subscriptions to clean up in local-only version
  }

  ngOnInit() {
    this.setPresetList();
  }

  private getPresets() {
    return this.dynamicDialogConfig.data.getPresetFn();
  }

  private setPresetList() {
    this.presets = this.getPresets();
  }

  private getCurrentPreset() {
    return this.presets.find((a) => a.id === this.selectedPreset);
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

  onSelectPreset(isLocal: boolean) {
    if (isLocal) {
      this.model = this.presets.find((a) => a.value === this.selectedPreset)?.model || {};
    }

    this.displayMainItems = displayMainItemKeys
      .map((itemType) => {
        const itemId = this.model[itemType];
        if (!itemId) {
          return { itemType, cardIds: [], enchantIds: [], isHidden: allowHidden[itemType] || false };
        }

        const refine = this.model[`${itemType}Refine`];
        const cardIds =
          itemType === ItemTypeEnum.weapon
            ? [this.model[ItemTypeEnum.weaponCard1], this.model[ItemTypeEnum.weaponCard2], this.model[ItemTypeEnum.weaponCard3], this.model[ItemTypeEnum.weaponCard4]]
            : itemType === ItemTypeEnum.leftWeapon
            ? [
                this.model[ItemTypeEnum.leftWeaponCard1],
                this.model[ItemTypeEnum.leftWeaponCard2],
                this.model[ItemTypeEnum.leftWeaponCard3],
                this.model[ItemTypeEnum.leftWeaponCard4],
              ]
            : [this.model[`${itemType}Card`]];

        const enchantIds = [this.model[`${itemType}Enchant1`], this.model[`${itemType}Enchant2`], this.model[`${itemType}Enchant3`]];

        return {
          itemType,
          mainId: itemId,
          isHead: itemType === ItemTypeEnum.headUpper || itemType === ItemTypeEnum.headMiddle,
          refineTxt: refine > 0 ? `+${refine}` : '',
          cardIds: cardIds.filter(Boolean),
          enchantIds: enchantIds.filter(Boolean),
        };
      })
      .filter((a) => !a.isHidden);

    this.displayCostumeItems = displayCostumeItemKeys.map((itemType) => {
      const itemId = this.model[itemType];
      if (!itemId) {
        return { itemType };
      }

      return {
        itemType,
        mainId: itemId,
      };
    });

    this.displayShadowItems = displayShadowItemKeys.map((itemType) => {
      const itemId = this.model[itemType];
      if (!itemId) {
        return { itemType };
      }

      const refine = this.model[`${itemType}Refine`];

      return {
        itemType,
        mainId: itemId,
        refineTxt: refine > 0 ? `+${refine}` : '',
      };
    });
  }

  onLoadPresetClick() {
    if (this.selectedPreset) {
      this.dynamicDialogConfig.data.loadPresetFn(this.selectedPreset);
    }
  }

  getItemLabel(itemId: number) {
    return this.items[itemId]?.name || 'empty';
  }

  removePreset(targetPresetLabel: string) {
    const removedSets = this.getPresets().filter((a) => a.value !== targetPresetLabel);
    this.dynamicDialogConfig.data.savePresetListFn(removedSets);
    this.dynamicDialogConfig.data.setPresetListFn();
    this.setPresetList();

    this.messageService.add({
      severity: 'success',
      summary: 'Confirmed',
      detail: `"${targetPresetLabel}" was removed.`,
    });
  }

  deletePreset() {
    const preset = this.getCurrentPreset();
    if (!preset) return;

    this.waitConfirm(`Delete "${preset.value}" ?`).then((isConfirm) => {
      if (isConfirm) {
        this.removePreset(preset.value);
      }
    });
  }

  onClassFilterChange() {
    // Filter functionality can be added here if needed
  }
} 