import React from "react";
import shipmentsFromFile from "../data/shipments.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  styles from "../css/Tabel.module.css"

function Table() { 
  const [shipments, setShipments] = useState(shipmentsFromFile);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const navigate = useNavigate(); 
  const [displayInput, setDisplayInput] = useState(false)
  const [trackingNumber, setTrackingNumber] = useState('');
  

const DetailBtn = (orderNo) => {
  navigate(`/Detail/${orderNo}`);
};

  const deleteShipment = (orderNoToDelete) => {
     const updatedShipments = shipments.filter(
    (shipment) => shipment.orderNo !== orderNoToDelete
  );
  
  setShipments(updatedShipments);
  };

  const handleFilter = (filterOption) => {
    setSelectedFilter(filterOption);

    const filteredShipments = shipmentsFromFile.filter((shipment) =>
      shipment.status.includes(filterOption)
    );

    setShipments(filteredShipments);
    setShowDropdown(false); 
  };

  const handleTrackingNumberSearch = () => {
    if (trackingNumber.trim() === '') {
      // If tracking number is empty, reset the filter and show all shipments
      setShipments(shipmentsFromFile);
    } else {
      // Otherwise, filter by tracking number
      const filteredShipments = shipmentsFromFile.filter(
        (shipment) => shipment.trackingNo === trackingNumber
      );
      setShipments(filteredShipments);
    }
    setDisplayInput(false); // Hide the input box after applying the filter
    setTrackingNumber(''); // Reset the tracking number input
  };
  
  
  
  
  
  
  


  return (
    <div className={styles["table-container"]}>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th>Order No</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Tracking No
            <img className={styles['search2']} src="./search.png" alt="Search" 
            onClick={() => {handleTrackingNumberSearch();
            setDisplayInput(true); 
            }} /> <br />
            {displayInput && (
            <input 
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className={styles['short-input']}
             />
             )}
            </th>
            <th onClick={() => setShowDropdown(!showDropdown)} >Status
            <img className={styles['search2']} src="./upside-down.png" alt="Search"/>
            {showDropdown && (
            <div className={styles['filter-dropdown']}>
            <button className={selectedFilter === 'Delivered' ? styles['selected-filter'] : ''}
            onClick={() => handleFilter('Delivered')}>Delivered</button><br />
            <button className={selectedFilter === 'In Transit' ? styles['selected-filter'] : ''}
            onClick={() => handleFilter('In Transit')}>In Transit</button><br />
            <button className={selectedFilter === 'Shipped' ? styles['selected-filter'] : ''}
            onClick={() => handleFilter('Shipped')}>Shipped</button>
          </div>
          )}
          </th> 
            <th>Consignee</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
       {shipments.map((shipment,) =>  
       <tr key={shipment.orderNo} >
       <td>{shipment.orderNo} </td>
       <td>{shipment.date} </td>
       <td>{shipment.customer} </td>
       <td>{shipment.trackingNo} </td>
       <td>{shipment.status} </td>
       <td>{shipment.consignee} </td>
      <td>
     <div style={{ display: 'flex', alignItems: 'center' }}>
    <div onClick={() => deleteShipment(shipment.orderNo)} style={{ cursor: 'pointer', marginRight: '20px',}} >
    <img src="/trash.png" alt="Delete" style={{ width: '20px', height: '20px' }}/>
    </div>
    <div onClick={() => DetailBtn(shipment.orderNo)}  style={{ cursor: 'pointer' }} >
    <img src="/edit.png" alt="Retweet" style={{ width: '20px', height: '20px' }} />
    </div>
    </div>
    </td>
    </tr>
    )}
    </tbody>
    </table>
    </div>
  );
}


export default Table;


