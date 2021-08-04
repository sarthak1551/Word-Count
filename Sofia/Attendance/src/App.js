import React from "react";
import "./App.css";
import Grid from "./components/Grid";
import Mid from "./components/Mid";
import Top from "./components/Top";

export default function App() {
  return (
    <div className="attendance_root">
      <Top />
      <Mid />
      <Grid />
    </div>
  );
}
