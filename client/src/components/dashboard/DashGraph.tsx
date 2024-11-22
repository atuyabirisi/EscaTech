import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

export default function DashGraph() {
  const [chartData, setChartData] = useState({} as any);
  const [loading, setLoading] = useState(true);
  const data = [
    { services: "Repair", sales: 34 },
    { services: "Installation", sales: 24 },
    { services: "Maintainance", sales: 54 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const labels = data.map((item) => item.services);
        const scores = data.map((item) => item.sales);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Sales",
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
    <div>
      <div className="text-center">
        <h6>PERFORMANCE TREND</h6>
      </div>
      <div
        className="d-flex flex-column align-items-center px-3"
        style={{ maxHeight: "500px", overflowY: "scroll" }}
      >
        <Bar
          data={chartData}
          options={{ responsive: true, maintainAspectRatio: true }}
        />
      </div>
    </div>
  );
}
