import { useState, useEffect } from 'react';
import "../App.css";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (response.ok) {
          const users = await response.json();
          setUsers(users);
        } else {
          console.error('Error fetching users:', response.status);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="user-cards-container">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
          <p>Phone Number: {user.phoneNumber}</p>
          <p>User ID: {user.id}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;