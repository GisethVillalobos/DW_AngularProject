export class RouteDTO {
    constructor(
        public idRoute: number,
        public code: string,
        public stations: Array<string>,
    ) {}
}
