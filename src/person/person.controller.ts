import { Body, Controller, Get, Param } from '@nestjs/common';
import { query } from 'express';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
    constructor(private readonly personService: PersonService) {
    }

    @Get()
    getPeople() {
        return this.personService.getPerson()
    }
    @Get('dead/:id')
    getId(@Param('id') id:string):string {
        return this.personService.prueba(id)
    
    }
   
}

