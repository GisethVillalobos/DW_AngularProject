import { Assignment } from "./assignment.model";

export class Schedule {
    idSchedule!: number;
    days!: Array<string>;
    timeStart!: string; //HH:mm
    timeEnd!: string; //HH:mm
    assignments!: Set<Assignment>
}
