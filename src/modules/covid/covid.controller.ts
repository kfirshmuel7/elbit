import {Body, Controller, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {CovidService} from './covid.service';
import {DailyConfirmedDto} from "./dto/daily-confirmed.dto";
import {DailyDifferenceDto} from "./dto/daily-difference.dto";
import HistoriesConfirmed = namespace.HistoriesConfirmed;


@Controller('covid')
export class CovidController {
    constructor(private covidService: CovidService) {
    }

    @Post('/dailyConfirmed')
    @UsePipes(ValidationPipe)
    dailyConfirmed(
        @Body() dailyConfirmedDto: DailyConfirmedDto,
    ): Promise<number> {
        return this.covidService.dailyConfirmed(dailyConfirmedDto);
    }

    @Post('/dailyDifference') 
    dailyDifference(
        @Body() dailyDifferenceDto: DailyDifferenceDto,
    ): Promise<number[]> {
        return this.covidService.dailyDifference(dailyDifferenceDto);
    }
}
