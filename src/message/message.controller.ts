import { Controller,Get,Post ,Body,Param} from '@nestjs/common';

@Controller('message')
export class MessageController {
    @Get()
    listen(){
    }
    @Post()
    create(@Body() body:any){
        console.log(body)
    }
    @Get("/:id")
    getSingle(@Param('id') id: string ){
        console.log(id)
    }

}
