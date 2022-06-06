import { PrismaService } from 'nestjs-prisma';
export declare class PersonService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    prueba(id: any): string;
    getPerson(): Promise<{
        document: string;
        id: number;
    }[]>;
    createPerson(): Promise<import(".prisma/client").persons>;
}
