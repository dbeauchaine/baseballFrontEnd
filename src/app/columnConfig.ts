export interface ColumnConfig {
    columnName:string;
    headerTooltip?:string;
    displayFormat?:DisplayFormat;
    numberFormat?:NumberFormat;
}

export enum DisplayFormat{
    Logo = "Logo"
}

export enum NumberFormat{
    Decimal = "Decimal",
    Era = "Era"
}