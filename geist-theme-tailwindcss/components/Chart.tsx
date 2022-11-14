import * as React from 'react';

type Props = {
  children?: React.ReactNode;
};

export const ChartDonut: React.FC<Props> = () => {
  const chartData = {
    labels: ["Javascript", "Python", "C"],
    datasets: [
      {
        label: "Code Usage Dataset",
        data: [300, 500, 100],
        backgroundColor: [
          "rgb(133, 105, 241)",
          "rgb(164, 101, 241)",
          "rgb(101, 143, 241)"
        ],
        hoverOffset: 4
      }
    ]
  }
  const configDonut = {
    type: "donut",
    data: chartData,
    options: {}
  }
  var chartInstance = new Chart(
    document.getElementById("chartDonut"),
    configDonut
  )
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div className="py-3 px-5 bg-gray-50">Donut chart</div>
      <canvas className="p-10" id="chartDonut"></canvas>
    </div>
  )
}