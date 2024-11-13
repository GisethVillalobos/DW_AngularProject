export class ScheduleDTO {
    constructor(
        public idSchedule: number,
        public days: Array<string>,
        public timeStart: string, //HH:mm
        public timeEnd: string, //HH:mm
    ) {}
}
