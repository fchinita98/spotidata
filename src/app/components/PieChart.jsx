"use client";
import '../../css/piechart.css';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar os componentes necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
    const data = {
        //labels: ['% Artista', '% Total'],
        datasets: [{
            label: 'My First Dataset',
            data: [5, 95],
            backgroundColor: [
                '#bb1afb',
                '#521f90',
            ],
            hoverOffset: 4
        }]
    };

    return (
        <div className="pc-box">
            <h2 className="pc-text">% Artista vs Total</h2>
            <div className="piechart">
                <Pie data={data} />
            </div>
        </div>
    );
}

export default PieChart;