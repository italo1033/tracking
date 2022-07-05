import * as React from "react";
import {Timeline, TimelineEvent} from 'react-event-timeline';
import { FaTruck } from "react-icons/fa";
import { ImArrowRight } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import '../style/track.css'


function TrackingResult({ dataTracking }) {
  if(!dataTracking || dataTracking.length === 0) return null

  const icons = (status) => {
    if(status === "Postado"){
      return(
        <ImArrowDown  size={20}/>
      )
    }else if(status === "Encaminhado"){
      return(
        <ImArrowRight  size={20}  />
      )

    }else if(status === "Saiu para entrega."){
      return(
        <FaTruck  size={20}/>
      )

    }else if(status === "Entregue"){
      return(
        <IoCheckmarkCircleSharp  size={25}  />
      )
    }
  }



  return (
    <div className="TrackGeral">
      <h1>Rastreamento</h1>
      <div className="ContainerTracking">
        <ul className="list-group">
          {dataTracking.map(item => {
            const {status, data, cidade, cidadeenviador} = item;

            const valueData= data.split('T');
            const dataFinal = valueData[0];
            return (
              <li key={status} >
                <Timeline>
                      <TimelineEvent title={status}
                                    createdAt={dataFinal}
                                    icon={icons(status)}
                                    titleStyle={{color:"#8229ff", fontSize:20}}
                                    iconColor='#8229ff'                               
                      >
                          <span><label>de:</label> {cidade}</span> <br/>
                          <span><label>para:</label> {cidadeenviador}</span> <br/>
                      </TimelineEvent>
              </Timeline>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TrackingResult;