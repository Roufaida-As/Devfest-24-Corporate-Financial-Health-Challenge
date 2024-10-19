import { useState, useEffect } from "react";
import Sidebar from "/src/components/Dashboard/SideBar";
import Header from "/src/components/Dashboard/Header";

export default function Recommendation() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
 const user= localStorage.getItem('user')
   useEffect(() => {
    const userId = "your_user_id"; // Replace with dynamic user ID if needed
    fetch(`http://localhost:7000/recommendations/${userId}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.recommendations) {
          setRecommendations(data.recommendations);
        } else {
          console.error("Error fetching recommendations:", data.error);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Sidebar  
        profilePicture={user.img}
        fullName={user.name}
        email={user.email} />
      <div>
        <Header  
        user={{ name: user.name }} />
        <div>
          <h1>My Assistant</h1>
          <div>
            {loading ? (
              <p>Loading recommendations...</p>
            ) : (
              <ul>
                {Object.entries(recommendations).map(([category, message]) => (
                  <li key={category}>
                    <strong>{category}:</strong> {message}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
