import React from 'react';
import {useSelector} from 'react-redux';
import DashboardMarkup from './DashboardMarkup';

const Dashboard = props => {
  const {user} = useSelector(state => state.registerUser);

  return <DashboardMarkup {...props} name={user?.name} />;
};

export default Dashboard;
