import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { SearchData } from "../SearchData";
import DatePicker from "./DatePicker";
import Button from "@material-ui/core/Button";

export default class Top extends Component {
  render() {
    return (
      <div className="attendance_top">
        <Autocomplete
          className="attendance_search_root"
          options={SearchData}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField {...params} label="Search Employee" variant="outlined" className="attendance_search" />
          )}
        />
        <DatePicker />
        <Button variant="contained" color="primary" className="attendance_override">
          SAVE
        </Button>
      </div>
    );
  }
}
