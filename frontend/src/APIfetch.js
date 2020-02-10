import React from "react";
import "./App.css";
import Test from "./Test";

class ApiFetch extends React.Component {
  constructor() {
    super();
    this.state = {
      backendInformation: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/relation/json")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          backendInformation: data,
          isLoaded: true
        });
      });
  }
  render() {
    let { isLoaded, backendInformation } = this.state;
    const mapping = new Map();

    if (!isLoaded) {
      return <div>Laden...</div>;
    } else {
      backendInformation.map((item, index) => {
        const partOf = item.metadata.labels["app.kubernetes.io/part-of"];
        if (mapping.has(partOf)) {
          const value = mapping.get(partOf);
          value.push({
            name: item.metadata.name,
            partof: item.metadata.labels["app.kubernetes.io/part-of"],
            component: item.metadata.labels["app.kubernetes.io/component"],
            runtime: item.metadata.labels["app.openshift.io/runtime"],
            connectsto:
              item.metadata.annotations["app.openshift.io/connects-to"]
          });
        } else {
          mapping.set(partOf, [
            {
              name: item.metadata.name,
              partof: item.metadata.labels["app.kubernetes.io/part-of"],
              component: item.metadata.labels["app.kubernetes.io/component"],
              runtime: item.metadata.labels["app.openshift.io/runtime"],
              connectsto:
                item.metadata.annotations["app.openshift.io/connects-to"]
            }
          ]);
        }
      });
      return <Test mapping={mapping} />;
    }
  }
}

export default ApiFetch;
