import { inject, Lazy } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { RestService } from '../../../../utils/rest-service';


const serviceUri = 'finishing-printing/monitoring-specification-machine';
const serviceUriMachineType = "master/machine-types"

export class Service extends RestService {

    constructor(http, aggregator, config, endpoint) {
        super(http, aggregator, config, "production-azure");
    }


    search(info) {
        var endpoint = `${serviceUri}`;
        return super.list(endpoint, info);
    }

    getById(id) {
        var endpoint = `${serviceUri}/${id}`;
        return super.get(endpoint);
    }

    create(data) {
        var endpoint = `${serviceUri}`;
        return super.post(endpoint, data);
    }

    update(data) {
        var endpoint = `${serviceUri}/${data.Id}`;
        return super.put(endpoint, data);
    }

    delete(data) {
        var endpoint = `${serviceUri}/${data.Id}`;
        return super.delete(endpoint, data);
    }

    getByCode(code) {
        var endpoint = `${serviceUri}?keyword=${code}`;
        return super.get(endpoint);
    }

    getMachineType(id) {
        var endpoint = `${serviceUriMachineType}/${id}`;
        return super.get(endpoint);
    }

}