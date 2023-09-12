import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import shipmentsFromFile from '../data/shipments.json';
import styles from "../css/Detail.module.css";

function Detail() {
const {orderNo} = useParams();

const found = shipmentsFromFile.find(shipment => shipment.orderNo === orderNo); 

const index = shipmentsFromFile.findIndex((shipment) => shipment.orderNo === orderNo);

const orderNoRef = useRef();
const dateRef = useRef();
const customerRef = useRef();
const trackingNoRef = useRef();
const consigneeRef = useRef();
const statusRef = useRef();
const navigate = useNavigate();

  const change = () => {
    const updateShipm = {
      "orderNo": orderNoRef.current.value ,
      "date": dateRef.current.value ,
      "customer": customerRef.current.value ,
      "trackingNo": trackingNoRef.current.value ,
      "status": consigneeRef.current.value ,
      "consignee": statusRef.current.value
    }
    shipmentsFromFile[index]= updateShipm;
      navigate("/");
    
  }
  
  if (!found) {
    return <div>Shipment not found</div>;
  };

  return (
    <div className={styles.container}>
       <h2 className="head">SHIPMENT DETAILS</h2>
      <label>order</label> <br />
      <input ref={orderNoRef} type="text" defaultValue={found.orderNo}  /> <br />
      <label> date </label>  <br />
      <input ref={dateRef} type="text" defaultValue={found.date} /> <br />
      <label> costomer </label>  <br />
      <input ref={customerRef} type="text" defaultValue={found.customer} /> <br />
      <label> tracking </label>  <br />
      <input ref={trackingNoRef} type="text" defaultValue={found.trackingNo} /> <br />
      <label> consignee </label>  <br />
      <input ref={consigneeRef} type="text" defaultValue={found.consignee} /> <br />
      <label> status </label>  <br />
      <input ref={statusRef} type="text" defaultValue={found.status} /> <br />
      <button onClick={change} >Update</button> <br />
      <br />
  </div>
  );
}
 
export default Detail;

