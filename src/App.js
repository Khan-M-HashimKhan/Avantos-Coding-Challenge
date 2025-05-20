import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { getGraph } from './api.js';
import './App.css';

function App() {

  const [forms, setForms] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const graph = await getGraph();
        setForms(graph.nodes || []);
      } catch (err) {
        console.log(err);
        setError('Failed to load form graph.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="p-4">Loading forms...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;


  return (
    <div className="App">
    </div>
  );
}

export default App;
