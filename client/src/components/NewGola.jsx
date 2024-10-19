import React, { useState } from 'react';
import Onegoal from './Onegoal';

const NewGola = () => {
  const [gols, setGoals] = useState([
    { description: "buy new car", date: "22/04/2025" },
    { description: "buy new car", date: "22/04/2025" },
    { description: "buy new car", date: "22/04/2025" },
    { description: "buy new car", date: "22/04/2025" },
    { description: "buy new car", date: "22/04/2025" }
  ]);

  // State to control form visibility and new goal input
  const [showForm, setShowForm] = useState(false);
  const [newGoal, setNewGoal] = useState({ description: '', date: '' });

  // Function to handle new goal addition
  const handleAddGoal = () => {
    setGoals([...gols, newGoal]);  // Add new goal to the list
    setShowForm(false);  // Hide the form after submission
    setNewGoal({ description: '', date: '' });  // Reset the form input
  };

  return (
    <div style={{
      margin: "30px",
      borderRadius: "50px",
      padding: "15px",
      wordWrap: "break-word",
      minWidth: "350px",
      position: "relative",
      background: "linear-gradient(179.02deg, #cbaacb 12.26%, #FFFFFF 125.85%)"
    }}>
      {/* Existing goals */}
      {gols.map((goal, index) => (
        <Onegoal key={index} description={goal.description} date={goal.date} />
      ))}

      {/* Button to show the form */}
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
        <button 
          onClick={() => setShowForm(true)}  // Show the form when clicked
          style={{ padding: "10px 20px", borderRadius: "20px", border: "none", backgroundColor: "#A4F9C8", marginTop: "90px" }}>
          New Goal
        </button>
      </div>

      {/* New goal form */}
      {showForm && (
        <div style={{ position: "fixed", 
            top: 0,
            left: 0,
            width: "100vw", 
            height: "100vh", 
            display: "flex",
            justifyContent: "center", 
            alignItems: "center",     
            overflow: "hidden" , display:"flex", justifyContent:"center" , alignItems:"center", gap:"10px",
            
            
            }}>
                <div style={{ display:"flex",
                flexDirection:"column",
                padding:"40px",
                borderRadius:"50px",
                width:"400px" ,background: "linear-gradient(179.02deg, #cbaacb 12.26%, #FFFFFF 125.85%)"
}}>

                
          <div style={{display:"flex" , flexDirection:"row" , gap:"20px"}}>
          <label htmlFor="text" style={{fontWeight:"600", color:"#364F6B", marginRight:""}}>Goal name</label>
          
          <input
          id='text'
            type="text"
            placeholder="Description"
            value={newGoal.description}
            onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
            style={{ padding: "10px", borderRadius: "10px", marginRight: "px" }}
          />
          </div>
          <div style={{display:"flex" , flexDirection:"row", gap:"32px" }}>
          <label htmlFor="text" style={{fontWeight:"600", color:"#364F6B" }}>Deadline</label>

          <input
            type="date"
            value={newGoal.date}
            onChange={(e) => setNewGoal({ ...newGoal, date: e.target.value })}
            style={{ padding: "10px", borderRadius: "10px", marginRight: "10px" }}
          />
          </div>
          <button 
            onClick={handleAddGoal}  
            style={{ padding: "10px 20px", borderRadius: "20px", border: "none", backgroundColor: "#A4F9C8" }}>
            Add Goal
          </button>
        </div>
        </div>
      )}
    </div>
  );
};

export default NewGola;
