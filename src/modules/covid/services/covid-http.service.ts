import {Injectable} from '@nestjs/common';
import axios, {AxiosResponse} from "axios";
import {CasesParams} from "../../../interfaces/cases-params";
import {HistoryParams} from "../../../interfaces/history-params";
import HistoriesConfirmed = namespace.HistoriesConfirmed;

@Injectable()
export class CovidHttpService {
    constructor() {
    }

    async getCovidCases(params: CasesParams): Promise<any> {
        return (await axios.get('https://covid-api.mmediagroup.fr/v1/cases', {params})).data;
    }

    async getCovidHistories(params: HistoryParams): Promise<HistoriesConfirmed> {
        return (await axios.get<HistoriesConfirmed>('https://covid-api.mmediagroup.fr/v1/history', {params})).data;
    }
}
