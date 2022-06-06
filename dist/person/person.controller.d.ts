import { PersonService } from './person.service';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    getPeople(): Promise<{
        document: string;
        id: number;
    }[]>;
    getId(id: string): string;
    getCrear(): Promise<import(".prisma/client").persons>;
}
