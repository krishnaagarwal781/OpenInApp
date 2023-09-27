import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

const DoughnutChart = () => {
  const [fetchRights, setFetchRights] = useState("");
  const [dynamicData, setDynamicData] = useState([0, 0, 0]); // Initialize with default values

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://backblockright.onrender.com/drm/getRights/",
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.response);

        // Filter the response data to include items where at least one rightsGiven is false
        const filteredRights = response.data.response.filter((item) => {
          return (
            (item.capRights.merchantQuantity > 0 &&
              item.capRights.rightsGiven === false) ||
            (item.tshirtRights.merchantQuantity > 0 &&
              item.tshirtRights.rightsGiven === false) ||
            (item.hoodieRights.merchantQuantity > 0 &&
              item.hoodieRights.rightsGiven === false) ||
            (item.mugRights.merchantQuantity > 0 &&
              item.mugRights.rightsGiven === false)
          );
        });

        // Update dynamicData with the value you want
        if (filteredRights.length > 2) {
          setDynamicData([
            filteredRights[2]["capRights"]["merchantQuantity"],
            filteredRights[2]["hoodieRights"]["merchantQuantity"], // Replace with your other static values
            filteredRights[2]["tshirtRights"]["merchantQuantity"], // Replace with your other static values
          ]);
        }

        setFetchRights(filteredRights);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [setFetchRights]);

  const data = {
    labels: ["Cap", "Hoodies", "T-shirts"],
    datasets: [
      {
        data: dynamicData, // Use the dynamicData variable here
        backgroundColor: ["#EE8484", "#98D89E", "#F6DC7D"],
        hoverBackgroundColor: ["#EE8484", "#98D89E", "#F6DC7D"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: "50%", height: "50%", margin: "auto" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
