import React from "react";
import Chart from "react-apexcharts";
import { Card } from "antd";
import "./Analytics.css";

interface Series2 {
  name: string;
  data: number[];
}

interface Options2 {
  type: string;
  plotOptions: {
    bar: {
      horizontal: boolean;
    };
  };
  labels?: string[];
}

const options = {
  labels: ["IT", "Sales", "Admin"],
  type: "pie",
  options: {
    legend: {
      position: "bottom",
    },
  },
};

const series: number[] = [300, 200, 500];

const series2: Series2[] = [
  {
    name: "IT",
    data: [31, 40, 28],
  },
  {
    name: "Sales",
    data: [51, 42, 109],
  },
  {
    name: "Admin",
    data: [21, 22, 10],
  },
];

const options2: Options2 = {
  type: "bar",
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  labels: ['Jan', 'Feb', 'March']
};

const Analytics: React.FC = () => {
  return (
    <>
      <div className="analyticsdata">
        <Card style={{ width: 400 }}>
          <Chart
            options={options}
            series={series}
            type="pie"
            width={300}
            height={300}
          />
        </Card>
        <Card style={{ width: 400 }}>
          <Chart
            options={options2}
            series={series2}
            type="area"
            width={300}
            height={300}
          />
        </Card>
      </div>
    </>
  );
};

export default Analytics;
