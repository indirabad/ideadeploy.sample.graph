import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadLinearGraph } from "./LinearGraph.actions";
import style from "./LinearGraph.module.scss";
import Chart from "react-apexcharts";

const linearOptions = {
  chart: {
    type: "line",
    zoom: {
      autoScaleYaxis: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  title: {
    text: "Sample date linear graph",
    align: "left",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5,
    },
  },
  xaxis: {
    type: "datetime",
    tickAmount: 5,
  },
};

const LinearGraph = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((rootReducer) => rootReducer.linearGraphState);
  const [series, setSeries] = useState([]);
  useEffect(() => {}, []);

  useEffect(() => {
    if (data) {
      const result = data.list.map((x) => ({
        ...x,
        name: x.title,
        data: x.data.map((y) => [y[0], y[1]]),
      }));
      setSeries(result);
    }
  }, [data]);

  useEffect(() => {
    dispatch(loadLinearGraph());
  }, []);

  return (
    <div className={style.Graph}>
      <Chart options={linearOptions} series={series} type="line" />
    </div>
  );
};
export default LinearGraph;
