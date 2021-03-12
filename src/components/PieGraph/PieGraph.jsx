import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPieGraph } from "./PieGraph.actions";
import style from "./PieGraph.module.scss";
import Chart from "react-apexcharts";

const pieOptions = {
  chart: {
    type: "pie",
  },
  labels: [],
  title: {
    text: "Sample pie",
    align: "left",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 400,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

const PieGraph = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((rootReducer) => rootReducer.pieGraphState);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    dispatch(loadPieGraph());
  }, []);

  useEffect(() => {
    if (data) {
      setSeries(data.list);
    }
  }, [data]);
  const options = { ...pieOptions, labels: series.map((x) => x.title) };
  return (
    <div className={style.Graph}>
      <Chart
        options={options}
        series={series.map((x) => parseInt(x.views))}
        type="pie"
      />
    </div>
  );
};
export default PieGraph;
