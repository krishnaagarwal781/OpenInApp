"use client";
import { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";

const UserGuestChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [fetchRights, setFetchRights] = useState("");
  const [tshirtMerchantQuantities, setTshirtMerchantQuantities] = useState([]);
  const [hoodieMerchantQuantities, setHoodieMerchantQuantities] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://backblockright.onrender.com/drm/getRights/",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.response);

        // Extract 'tshirtRights' and 'hoodieRights' merchant quantities
        const tshirtQuantities = [];
        const hoodieQuantities = [];
        response.data.response.forEach((item) => {
          tshirtQuantities.push(item.tshirtRights.merchantQuantity || 0);
          hoodieQuantities.push(item.hoodieRights.merchantQuantity || 0);
        });

        // Update state with the extracted quantities
        setTshirtMerchantQuantities(tshirtQuantities);
        setHoodieMerchantQuantities(hoodieQuantities);

        setFetchRights(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [setFetchRights]);

  useEffect(() => {
    // Data for the chart
    const data = {
      labels: Array.isArray(fetchRights) // Check if fetchRights is an array
        ? fetchRights.map((item, index) => `ID ${index}`)
        : [], // Provide an empty array as labels if fetchRights is not an array
      datasets: [
        {
          label: "T-Shirt Merchant Quantity",
          backgroundColor: "rgba(152, 216, 158, 1)",
          borderColor: "rgba(152, 216, 158, 1)",
          borderWidth: 1,
          data: tshirtMerchantQuantities,
        },
        {
          label: "Hoodie Merchant Quantity",
          backgroundColor: "rgba(238, 132, 132, 1)",
          borderColor: "rgba(238, 132, 132, 1)",
          borderWidth: 1,
          data: hoodieMerchantQuantities,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
          position: "below",
        },
      },
    };

    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });
  }, [tshirtMerchantQuantities, hoodieMerchantQuantities]);

  return (
    <div style={{ width: "80%", height: "90%", margin: "auto" }}>
      <canvas ref={chartRef} id="userGuestChart"></canvas>
    </div>
  );
};

export default UserGuestChart;
