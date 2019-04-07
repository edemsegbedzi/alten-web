import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewContainerRef} from '@angular/core';
import * as shape from 'd3-shape';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import {Customer} from '../Customer';
import {Vehicle} from '../Vehicle';
import {TooltipService} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit, OnChanges {
    private _customer: Customer;
    private nodes = [{id: '0', label: 'Central Node', position: 'Connected Cars'}];
    private edges = [];


    @Input()
    set customer(customers: Customer) {
        this._customer = customers;
        if (typeof this._customer !== 'undefined') {
            for(const vehicle of this._customer.vehicles) {
                this.nodes.push ({
                    id: String(vehicle.id),
                    label: vehicle.regNum,
                    position: vehicle.vin
                });
                if(vehicle.status === "connected"){
                    this.edges.push({
                        source: '0',
                        target: String(vehicle.id)
                    });
                }

            }
            this.showGraph();

        }
    }

    get customer(): Customer { return this._customer; }


    title = 'alten-web';
    hierarchialGraph = {nodes: [], links: []};
    curve = shape.curveBundle.beta(1);
    // curve = shape.curveLinear;

    public ngOnInit(): void {
    }

    showGraph() {
        this.hierarchialGraph.nodes =  this.nodes;
        this.hierarchialGraph.links = this.edges ;
    }

    ngOnChanges(changes: SimpleChanges): void {
        for (const propName in changes) {
            this._customer =  changes[propName].currentValue;
        }
    }




}
