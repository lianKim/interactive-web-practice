import React from "react";
import ApexChart from "react-apexcharts";
import styled from "styled-components";

export default function TimelineChart() {
  const series = [
    {
      data: [
        {
          x: "홍익대학교 영상영화 전공",
          y: [
            new Date("2013-03-04").getTime(),
            new Date("2019-02-13").getTime(),
          ],
        },
        {
          x: "제로베이스 프론트엔드 부트캠프 수료",
          y: [
            new Date("2022-07-01").getTime(),
            new Date("2022-12-31").getTime(),
          ],
        },
      ],
    },
  ];

  const options = {
    colors: ["#CAA4CC", "#F3331B", "#262D52"],
    fill: {
      opacity: 1,
    },
    chart: {
      width: "100%",
      fontFamily: "Halyard Display, Helvetica, Arial, sans-serif",
      foreColor: "lightgray",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 1000,
        },
      },
      selection: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
      zoomin: {
        enabled: false,
      },
      zoomout: {
        enabled: false,
      },
      pan: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        barHeight: 32,
        horizontal: true,
        borderRadius: 14,
        endingShape: "rounded",
        distributed: true,
        dataLabels: {
          hideOverflowingLabels: false,
          position: "bottom",
        },
      },
    },
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      offsetX: -56,
      offsetY: 30,
      style: {
        colors: ["#111"],
        fontSize: 16,
        fontWeight: 400,
      },
      formatter: function (val, opts) {
        const label = opts.w.globals.labels[opts.dataPointIndex];

        const startDate = new Date(val[0]).toISOString();
        const endDate = new Date(val[1]).toISOString();
        const period =
          `${startDate.slice(0, 4)}.${startDate.slice(5, 7)}` +
          " - " +
          `${endDate.slice(0, 4)}.${endDate.slice(5, 7)}`;

        return [label, period];
      },
    },
    xaxis: {
      type: "datetime",
      min: new Date("2013-01-01").getTime(),
      max: new Date().getTime(),
      position: "top",
      labels: {
        format: "yyyy",
        style: {
          fontSize: 16,
          fontWeight: 400,
        },
      },
      axisTicks: {
        show: true,
        borderType: "solid",
        color: "lightgray",
        height: 2,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      padding: {
        left: 10,
        right: 40,
      },
      show: true,
      borderColor: "lightgray",
      strokeDashArray: 5,
      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.9,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
        },
      },
    },
  };

  return (
    <ChartWrapper>
      <StyledApexChart
        options={options}
        series={series}
        type="rangeBar"
        height={series[0].data.length * 150}
      />
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  width: 90%;
`;

const StyledApexChart = styled(ApexChart)`
  /* && * {
    font-size: 16px;
    font-weight: normal;
  }

  && .apexcharts-datalabel * {
  }

  && .apexcharts-svg {
    overflow: visible;
  }

  && .chart-container {
    padding: 2rem;
    padding-right: 2.7rem;
  } */

  && .apexcharts-datalabel > tspan:last-child {
    color: red;
  }
`;
