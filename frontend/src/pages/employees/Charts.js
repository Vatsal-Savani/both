import React, { useEffect, useState } from "react";
import { fetchWorkState } from "../../apis/fetchWorkState";
import { fetchGenderRatio } from "../../apis/fetchGenderRatio";
import { fetchDepartmentRatio } from "../../apis/fetchDepartmentRatio";
import WorkStatusChart from "../../components/WorkStatusChart";

const Charts = () => {
  const [workStates, setWorkStates] = useState([]);
  const [genderRatio, setGenderRatio] = useState([]);
  const [departmentData, setDepartmentData] = useState([]);

  useEffect(() => {
    fetchWorkState(setWorkStates);
    fetchGenderRatio(setGenderRatio);
    fetchDepartmentRatio(setDepartmentData);
  }, []);

  const newData = [
    { id: 0, value: 550, label: "series A" },
    { id: 1, value: 300, label: "series B" },
    { id: 2, value: 1, label: "series C" },
    { id: 3, value: 1, label: "series C" },
    { id: 4, value: 1, label: "series C" },
  ];

  return (
    <>
      <div>
        <WorkStatusChart data={workStates} />
        <WorkStatusChart data={genderRatio} />
        <WorkStatusChart data={departmentData} />
        {/* <NewChart data={newData} /> */}
      </div>
    </>
  );
};

export default Charts;
