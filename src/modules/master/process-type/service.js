import { inject, Lazy } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { RestService } from '../../../utils/rest-service';
import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api";


const serviceUri = 'master/process-types';

export class Service extends RestService {

    constructor(http, aggregator, config, endpoint) {
        super(http, aggregator, config, "core");
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
        var endpoint = `${serviceUri}/${data._id}`;
        return super.put(endpoint, data);
      }
    
      delete(data) {
        var endpoint = `${serviceUri}/${data._id}`;
        return super.delete(endpoint, data);
      }
    
      getByCode(code) {
        var endpoint = `${serviceUri}?keyword=${code}`;
        return super.get(endpoint);
      }

      getOrderById(id, select) {
        var config = Container.instance.get(Config);
        var _endpoint = config.getEndpoint("core");
        var _serviceUri = `master/order-types/${id}`;

        return _endpoint.find(_serviceUri)
            .then(result => {
                return result.data;
            });
    }
}