export class RouteDTO {
    constructor(
        public idRoute: number | null,
        public code: string,
        public stations: Array<string>,
    ) {}
}
