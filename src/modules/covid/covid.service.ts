import {Injectable} from '@nestjs/common';
import {DailyDifferenceDto} from "./dto/daily-difference.dto";
import {CovidHttpService} from "./services/covid-http.service";
import {Observable} from "rxjs";
import HistoriesConfirmed = namespace.HistoriesConfirmed;
import { DailyConfirmedDto } from './dto/daily-confirmed.dto';

@Injectable()
export class CovidService {
    
    constructor(private covidHttpService: CovidHttpService) {
    }

    async getCasesConfirmed(countryName?: string): Promise<number> {
        const obj = await this.covidHttpService.getCovidCases({country: countryName})
        console.log(obj);
        return 1
    }

    async getHistoryConfirmed(countryName?: string): Promise<any> {
        return await this.covidHttpService.getCovidHistories({country: countryName, status: 'Confirmed'})
    }

    async dailyDifference(dailyDifferenceDto: DailyDifferenceDto): Promise<number[]> {
        //request to the covid server for the sourceCountry
        const history: HistoriesConfirmed = await this.getHistoryConfirmed(dailyDifferenceDto.sourceCountry);
        //request to the covid server for the targetcountry
        const obj2: HistoriesConfirmed = await this.getHistoryConfirmed(dailyDifferenceDto.targetcountry);
        let arr = new Array<number>(0); 
        let flag=0;
        for(const [key,value] of Object.entries(history.All.dates)){
            if(key===dailyDifferenceDto.endDate.toString())
                flag=1;
            if(flag){
                arr.push(value);
                if(key===dailyDifferenceDto.startDate.toString())
                    break;
            }
        }
        for(const [key,value] of Object.entries(history.All.dates)){
            if(key===dailyDifferenceDto.endDate.toString())
                flag=1;
            if(flag){
                arr.push(value);
                if(key===dailyDifferenceDto.startDate.toString())
                    break;
            }
        }
        
        return arr; 
    }



    async dailyConfirmed(dailyConfirmedDto: DailyConfirmedDto): Promise<number> {
        const history: HistoriesConfirmed = await this.getHistoryConfirmed(dailyConfirmedDto.countryName);
        let flag =0;   
        let confirmed;
        for(const [key,value] of Object.entries(history.All.dates)) {
            if(key===dailyConfirmedDto.date.toString()){
                confirmed=value;
                flag=1;
                continue; 
            }
            if( flag)
                return(confirmed-value);
       }      
        return -1;
    }
}
