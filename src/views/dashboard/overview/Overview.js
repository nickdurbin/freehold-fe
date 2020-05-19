import React from 'react';
import { useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import PropertyStatusChart from './PropertyStatusChart';
import dashboardman from '../../../assets/svg/dashboard-whatsinthebox.svg';
import mapWorkOrdersToArray from './helpers/workOrderHelper';
import PropertyStatusCards from './PropertyStatusCards';
import WorkOrderCard from './WorkOrderCard';
import propertyListHelper from './helpers/propertyListHelper';

export default function Overview() {
  const workOrderList = useSelector(state => state.workOrderReducer.workOrders);
  const propertyList = useSelector(state => state.propReducer.properties);
  const currentUser = useSelector(state => state.firebase.profile);
  const workOrderTotalArray = mapWorkOrdersToArray(workOrderList);
  const propertyTotalArray = propertyListHelper(propertyList);

  return (
    <div className="overview">
      <h1>
        {!currentUser
          ? 'Dashboard of Freehold'
          : `Welcome to your dashboard, ${currentUser.firstName}`}{' '}
        {currentUser.lastName}
      </h1>
      <Divider />
      {propertyList.length > 0 ? (
        <>
          <div className="property-status-row">
            <PropertyStatusChart propertyTotalArray={propertyTotalArray} />
            <PropertyStatusCards
              propertyTotalArray={propertyTotalArray}
              propertyList={propertyList}
            />
          </div>
          <WorkOrderCard workOrderTotalArray={workOrderTotalArray} />
        </>
      ) : (
        <>
          <div className="dashboard-no-info">
            <img src={dashboardman} alt="Man Holding Box" />
            <h3>No Work Orders Or Properties Listed </h3>
          </div>
        </>
      )}
    </div>
  );
}
