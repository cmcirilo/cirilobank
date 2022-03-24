export interface Transfer {
    id?: number | string;
    value: number;
    target: number | string;
    date?: string;
}