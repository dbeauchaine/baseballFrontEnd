export interface ColumnConfig {
    columnName:string;
    headerTooltip?:string;
    displayFormat?:DisplayFormat;
}

export enum DisplayFormat{
    Logo = "Logo"
}