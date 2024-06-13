import React from "react";
import authService from "../../services/authService";
import { useState, useEffect } from "react";

export default function Profile() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
    console.log(users);
  }, []);
  const fetchUsers = async () => {
    debugger;
    const response = await authService.GetBooks();
    console.log(response.data.$values);
    setUsers(response.data.$values);
  };
  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))}
      </div>
      <div></div>
    </>
  );
}
