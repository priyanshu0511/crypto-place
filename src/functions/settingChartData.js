export const settingChartData = (setChartData, prices1, prices2) => {
    const labels = prices1.map((price) =>
      new Date(price[0]).toLocaleDateString()
    );
    const dataset1 = prices1.map((price) => price[1]);
    const dataset2 = prices2.map((price) => price[1]);
  
    setChartData({
      labels,
      datasets: [
        {
          label: "Crypto 1",
          data: dataset1,
          borderColor: "#3a80e9",
          borderWidth: 1,
          tension: 0.25,
          fill: false,
          pointRadius: 0
        },
        {
          label: "Crypto 2",
          data: dataset2,
          borderColor: "#ff5733",
          borderWidth: 1,
          tension: 0.25,
          fill: false,
          pointRadius: 0
        },
      ],
    });
  };
  