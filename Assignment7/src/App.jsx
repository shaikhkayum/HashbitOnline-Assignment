import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
        );
        const data = await response.json();

        // Sorting the data in ascending order based on NRR
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        
        setTeams(sortedData);
      } catch (error) {
        console.error("Error fetching IPL data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>IPL Season 2022 Points Table</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id}>
              <td>{index + 1}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Tied}</td>
              <td>{team.NRR}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;