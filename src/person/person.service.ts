import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PersonService {
    constructor(private readonly prismaService: PrismaService) {

    }

    prueba(id) {
        return "hola hpta" + id
    }
    async getPerson() {
        return await this.prismaService.persons.findMany({
            select: {
                document: true,
                id: true
            }
        }
        )
    }


}
