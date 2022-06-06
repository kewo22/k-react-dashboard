export type SimpleBarChart = {
    data?: any[]; // should be mandatory
    width?: number | string;// should be mandatory
    height?: number | string;// should be mandatory
    yAxisDataKey?: string;// should be mandatory
    xAxisDataKey?: string;// should be mandatory

    yAxisLabelText?: string;

    onBarClick?: (e: any) => void;
}
