export type SimpleBarChart = {
    data?: any[]; // should be mandatory
    width: number | string;
    height: number | string;
    
    yAxisLabelText?: string;

    onBarClick?: (e: any) => void;
}
