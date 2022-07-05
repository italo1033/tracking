import React, { useState } from "react";
import Main from "./main";
import TrackingResult from "./TrackingResult";

function SharingDate() {
    const [dateV, setDatev] = useState([]);
    const save = (value) => {
        let list= [...dateV]
        list.push(value)
        setDatev(list);

    }

  return (
    <>
      <Main /> {/* saveData={save} */}
      {/* <TrackingResult data={dateV} /> */}
    </>
  );
}

export default SharingDate;