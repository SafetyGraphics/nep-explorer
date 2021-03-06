import highlightPoint from './displayParticipant/highlightPoint';
import drawHysteresisPlot from './displayParticipant/drawHysteresisPlot';
import updateDetailsHeader from './displayParticipant/updateDetailsHeader';
import displayClearButton from './displayParticipant/displayClearButton';
import displayParticipantDetails from './displayParticipant/displayParticipantDetails';
import drawTimeSeriesCharts from './displayParticipant/drawTimeSeriesCharts';

export default function displayParticipant() {
    const nepExplorer = this.nepExplorer;

    if (nepExplorer.participant) {
        nepExplorer.data.participant = nepExplorer.data.participants.find(
            d => d.key === nepExplorer.participant
        );
        highlightPoint.call(this);
        drawHysteresisPlot.call(this);
        updateDetailsHeader.call(this);
        displayClearButton.call(this);
        displayParticipantDetails.call(this);
        drawTimeSeriesCharts.call(this);
    }
}
