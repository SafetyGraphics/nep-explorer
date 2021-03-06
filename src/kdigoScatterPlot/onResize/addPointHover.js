import { select } from 'd3';

export default function addPointHover() {
    this.marks
        .find(mark => mark.type === 'circle')
        .groups.selectAll('circle')
        .on('mouseover', function(d) {
            d3.select(this.parentNode)
                .select('.wc-data-mark')
                .classed('wc-highlighted', true);
        })
        .on('mouseout', function(d) {
            d3.select(this.parentNode)
                .select('.wc-data-mark')
                .classed('wc-highlighted', false);
        });

    if (this.containers.hasOwnProperty('hysteresisPlot')) {
        this.containers.hysteresisPlot
            .selectAll('circle')
            .on('mouseover', function(d) {
                d3.select(this.parentNode)
                    .select('.wc-hysteresis-point')
                    .classed('wc-highlighted', true);
            })
            .on('mouseout', function(d) {
                d3.select(this.parentNode)
                    .select('.wc-hysteresis-point')
                    .classed('wc-highlighted', false);
            });
    }
}
