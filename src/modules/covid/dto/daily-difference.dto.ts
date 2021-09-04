import {IsDateString, IsString} from 'class-validator';

export class DailyDifferenceDto {
    @IsString()
    sourceCountry: string;

    @IsString()
    targetcountry: string;

    @IsString()
    startDate: Date;

    @IsString()
    endDate: Date;
}
