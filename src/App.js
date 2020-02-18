import React from "react";
import { forwardRef, useEffect, useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import "./App.css";

import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function App() {
  useEffect(() => {
    // axios({ url: "", baseURL: "http://localhost:8080" })
    axios
      .get("/login")
      .then(data => {
        console.log("api call data is", data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div className="App">
      {/* <header className="App-header">sadasdx</header> */}
      <MaterialTable
        // onRowClick={e => {
        //   console.log("data in the row is", e);
        // }}
        onRowClick={(event, rowData, togglePanel) =>
          console.log("========> data is", rowData)
        }
        icons={tableIcons}
        columns={[
          { title: "FirstName", field: "name" },
          { title: "LastName", field: "surname" },
          { title: "Email", field: "birthYear" },
          {
            title: "Assigned To",
            field: "birthCity"
          }
        ]}
        data={[
          {
            name: "Mehmet1",
            surname: "1Baran",
            birthYear: 1981,
            birthCity: 14
          },
          {
            name: "Mehmet2",
            surname: "2Baran",
            birthYear: 1982,
            birthCity: 12
          },
          {
            name: "Mehmet3",
            surname: "3Baran",
            birthYear: 1983,
            birthCity: 32
          },
          { name: "Mehmet4", surname: "4Baran", birthYear: 1984, birthCity: 32 }
        ]}
        title="Contacts"
      />
    </div>
  );
}

export default App;
