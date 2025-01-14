import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import axios from 'axios';
import SubHeader from './components/SubHeader';
import TableData from './components/TableData';
import Track from './components/Track';
import View from './components/View';

const App = () => {
  const initialColumn = [
    'Equipment Name', 'Category', 'Type', 
    'Equipment Location', 'Description', 
    'Last updated date', 'Last updated by', 
    'Deactivated Date', 'Status', 'Action'
  ];
  
  const [data, setData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visible,setVisible] = useState('table');
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM3MjA4NDU2LCJpYXQiOjE3MzY3NzY0NTYsImp0aSI6ImRhMWRhODllMjI5MjRlYzBiYjljNGYyOGJmZGJiNjQ2IiwidXNlcl9pZCI6MSwiZmlyc3RfbmFtZSI6ImFkbWluIiwibGFzdF9uYW1lIjoic29jaWFscm9vdHMiLCJlbWFpbCI6ImFkbWluQHNvY2lhbHJvb3RzLmFpIiwiaXNfcmVnaXN0ZXJlZCI6dHJ1ZSwicm9sZSI6ImFkbWluIiwiY2F0ZWdvcnlfYWRkZWQiOmZhbHNlLCJkb2N1bWVudF91cGxvYWQiOnRydWUsInVzZXJpbmZvIjp7ImlkIjoyLCJwaG9uZV9udW1iZXIiOiI5MDkwOTA5MDkwIiwic2Vjb25kYXJ5X3Bob25lX251bWJlciI6IjkwOTA5MDkwOTAiLCJwcm9mZXNzaW9uYWxfYmlvIjpudWxsLCJqb2JfdGl0bGUiOm51bGwsImN1cnJlbnRfZW1wbG95ZXIiOm51bGwsImluZHVzdHJ5X3R5cGUiOm51bGwsImxpbmtlZF9pbiI6InVuZGVmaW5lZCIsImhpZ2hlc3RfZGVncmVlIjpudWxsLCJmaWVsZF9vZl9zdHVkeSI6bnVsbCwiaW5zdGl0dXRpb25fbmFtZSI6bnVsbCwiaW5zdGl0dXRpb25fbG9jYXRpb24iOm51bGwsImFyZWFzX29mX2V4cGVydGlzZSI6bnVsbCwiY29uZmlkZW50X2FyZWFzX29mX2V4cGVydGlzZSI6bnVsbCwicHJldl9tZW50b3JzaGlwIjpmYWxzZSwibWVudG9yX2V4cF9kZXNjIjoiIiwiaW50ZXJlc3RlZF9tZW50ZWVfdHlwZSI6bnVsbCwiY29tbXVuaWNhdGlvbl9tb2RlIjpudWxsLCJhdmFpbGFiaWxpdHlfZnJlcXVlbmN5IjpudWxsLCJtZW50b3JzaGlwX2FjaGlldmVtZW50IjoiIiwibWVudG9yX2V4cGVjdGF0aW9ucyI6IiIsIm1heF9tZW50ZWVfY291bnQiOm51bGwsInByZWZfbWVudG9yc2hpcF9kdXJhdGlvbiI6bnVsbCwiYWRkaXRpb25hbF9pbmZvIjoiIiwiYWRkcmVzcyI6IiIsImxvY2F0aW9uIjoiQ2hlbm5haSIsInNvY2lhbF9tZWRpYSI6bnVsbCwicmV2aWV3YW5kcmF0aW5nIjpmYWxzZSwieWVhcnNfb2ZfZXhwZXJpZW5jZSI6IjAiLCJnZW5kZXIiOiJtYWxlIiwic3RhcnRfYXV0b19hcHByb3ZhbF9zdGF0dXMiOmZhbHNlLCJhcHByb3ZlX2RhdGUiOm51bGwsImFwcHJvdmVfc3RhdHVzIjoiYWNjZXB0IiwiY3JlYXRlZF9hdCI6IjIwMjQtMTItMTlUMTc6NTI6MTAuNjM1MjY0WiIsInVwZGF0ZWRfYXQiOiIyMDI0LTEyLTI3VDE0OjA4OjU3LjI3NjgwMFoiLCJtZW50b3JfZmlsZV91cGxvYWQiOnRydWUsInN0YXJ0X2F1dG9fYXBwcm92YWxfcHJvdmlkZWRfYnkiOm51bGwsImFwcHJvdmVfYnkiOm51bGx9fQ.vVLYndxpzDcHQRNbk4QY0Z3Z1uPaFQjJQ25x-JFpTrs';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://vms-backend.dataterrain-dev.net/api/equipment', {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        setData(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const handleAction=(e,type,row)=>{
    if(type==='view'){
      setVisible('viewForm');
      setRowData(row)
    }else{
      setVisible('TrackForm');
    }
  }

  return (
    <>
      <Header />
      <SubHeader setVisible={setVisible}/>
      {error && <div>Error fetching data: {error.message}</div>}
      {visible === "table" && (
        <TableData initialColumn={initialColumn} data={data} handleAction={handleAction}/>
      )}
      {visible === "TrackForm" && (
        <Track setVisible={setVisible}/>
      )}
      {visible === "viewForm" && (
        <View setVisible={setVisible} rowData={rowData}/>
      )}
    </>
  );
};

export default App;
