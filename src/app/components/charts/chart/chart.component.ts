import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as d3 from 'd3';
import { Charts } from '../../../models/data.model';
import { format } from 'date-fns';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() index: number;
  @ViewChild('svg') private svg: ElementRef;

  @Input() chart: Charts;
  @Input() chartsAmount: number | null = 4;
  @Input() chartsColor: string | null = '#e5c308';
  @Input() chartsType: string | null = 'line';
  @Input() mergeChartData: boolean = false;

  chartAmount: number = 4;
  chartId: string;
  ngOnInit(): void {
    this.chartId = `chart-${this.index}`;
  }

  ngOnChanges() {
    this.graph.selectAll('*').remove();
    this.displayChart(this.chart.data);
  }

  ngAfterViewInit() {
    this.plot();
    this.displayChart(this.chart.data);
  }

  private graph: any;
  private margin = 50;
  private width = 400 - this.margin * 2;
  private height = 250 - this.margin * 2;

  private plot(): void {
    this.graph = d3
      .select(`div#${this.chartId}`)
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private displayChart(data: any[]): void {
    // X-axis scale
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(data.map((d) => format(d.date, 'dd/MM/yyyy')))
      .padding(0.2);

    // X-axis
    this.graph
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    // Y-axis scale
    const y = d3.scaleLinear().domain([0, 100]).range([this.height, 0]);

    // Y-axis
    this.graph.append('g').call(d3.axisLeft(y));

    // title
    this.graph
      .append('text')
      .attr('class', 'title')
      .attr('x', this.width / 2)
      .attr('y', this.margin - 75)
      .attr('text-anchor', 'middle')
      .text(this.chart.title);

    if (this.chartsType == 'line') {
      this.displayLine(data, x, y);
    } else {
      this.displayBar(data, x, y);
    }
  }

  private displayLine(data: any[], x: any, y: any): void {
    this.graph
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', this.chartsColor)
      .attr('stroke-width', 1.5)
      .attr(
        'd',
        d3
          .line()
          // unfortunatelly, d3 still has wrong type, d should be ChartData
          .x((d: any) => x(format(d.date, 'dd/MM/yyyy')) as any)
          .y((d: any) => y(d.value))
      );
  }

  private displayBar(data: any[], x: any, y: any): void {
    this.graph
      .selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('title', 123)
      .attr('x', (d: any) => x(format(d.date, 'dd/MM/yyyy')))
      .attr('y', (d: any) => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', (d: any) => this.height - y(d.value))
      .attr('fill', this.chartsColor);
  }
}
