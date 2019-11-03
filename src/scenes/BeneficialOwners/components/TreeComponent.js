import React, { Component } from "react";
import { Chart } from "react-google-charts";
import SampleData from "../../../constants/SampleData";

export class TreeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    let processedData = [
      ["id", "childLabel", "parent", "size", { role: "style" }]
    ];
    let idCount = 0;
    let currentParent = 0;
    let companies = [];
    Object.entries(SampleData).forEach(([key, value]) => {
      processedData.push([idCount, key, -1, value[0][key]["individuals"].length + value[0][key]["companies"].length, "black"]);
      currentParent = idCount;
      idCount++;
      Object.entries(value[0][key]["individuals"]).forEach((item, index) => {
        processedData.push([
          idCount,
          item[1]["name"] + " " + item[1]["shares"] + "%",
          currentParent,
          1,
          "black"
        ]);
        idCount++;
      });
      Object.entries(value[0][key]["companies"]).forEach((item, index) => {
        processedData.push([idCount, item[1], currentParent, value[index + 1][item[1]]["individuals"].length, "black"]);
        companies.push({ name: item[1], id: idCount });
        idCount++;
      });
      for (let i = 1; i <= companies.length; i++) {
        currentParent = companies[i - 1]["id"];
        Object.entries(
          value[i][companies[i - 1]["name"]]["individuals"]
        ).forEach((item, index) => {
          processedData.push([
            idCount,
            item[1]["name"] + " " + item[1]["shares"] + "%",
            currentParent,
            1,
            "black"
          ]);
          idCount++;
        });
      }
    });
    console.log(processedData);
    this.setState({
      data: processedData
    });
  }

  render() {
    return (
      <Chart
        className="Tree-Diagram"
        width={"200vw"}
        height={"90vh"}
        chartType="WordTree"
        loader={<div>Loading Chart</div>}
        data={this.state.data}
        options={{
          colors: ["red", "blue", "black"],
          backgroundColor: "transparent",
          wordtree: {
            format: "explicit",
            type: "suffix",
          },
          animation: {
            startup: true,
            easing: "linear",
            duration: 1500
          }
        }}
        //   rootProps={{ 'data-testid': '2' }}
      />
    );
  }
}

export default TreeComponent;
