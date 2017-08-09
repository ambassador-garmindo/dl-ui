import { inject, Lazy } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Service } from './service';


@inject(Router, Service)
export class Edit {
    hasCancel = true;
    hasSave = true;
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }

    bind() {
        this.data = { machines: [] };
        this.error = {};
    }

    async activate(params) {
        var id = params.id;
        this.data = await this.service.getById(id);
    }

    cancel() {
        this.router.navigateToRoute('view', { id: this.data._id });
    }

    save() {
        this.service.update(this.data)
            .then(result => {
                this.cancel();
            })
            .catch(e => {
                this.error = e;
            })
    }
}