export interface ColumnConfig {
    columnName:string;
    tooltip?:string;
    displayFormat?:DisplayFormat;
}

export enum DisplayFormat{
    Logo = "Logo"
}