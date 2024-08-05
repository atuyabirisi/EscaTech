import { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
// import axios from "axios";
import "chart.js/auto";

// interface Data {
//   course: string;
//   score: number;
// }

const GraphAnalytics = () => {
  const [chartData, setChartData] = useState({} as any);
  const [loading, setLoading] = useState(true);
  const data = [
    { course: "DBMS", score: 34 },
    { course: "SAD", score: 24 },
    { course: "CALCUS", score: 54 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your API endpoint
        //

        // Transform the data into a format suitable for the chart
        const labels = data.map((item) => item.course);
        const scores = data.map((item) => item.score);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Student Scores",
              data: scores,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "",
              borderWidth: 0,
            },
          ],
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-5">
      <div className="text-center">
        <h6>PERFORMANCE TREND</h6>
      </div>
      <Radar
        data={chartData}
        options={{ responsive: true, maintainAspectRatio: true }}
      />
    </div>
  );
};

export default GraphAnalytics;
