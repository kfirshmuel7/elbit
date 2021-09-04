import {Module} from '@nestjs/common';
import {CovidController} from './covid.controller';
import {CovidService} from './covid.service';
import {CovidHttpService} from "./services/covid-http.service";

@Module({
    controllers: [CovidController,
    ],
    providers: [
        CovidService,
        CovidHttpService,
    ],
})
export class CovidModule {
}
