import { IsString } from 'class-validator';

export class DailyConfirmedDto {
  @IsString()
  countryName: string;

  @IsString()
  date: Date;
}
