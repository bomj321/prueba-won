import React, { Component } from "react";
import { Layout } from "../components/Layout";
import DashboardProduct from "../components/DashboardProduct";

export class Dashboard extends Component {
  render() {
    return (
      <Layout>
        <DashboardProduct />
      </Layout>
    );
  }
}

export default Dashboard;
