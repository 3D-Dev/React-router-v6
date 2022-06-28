import { useEffect, useState } from "react";
import axios from "axios";
import { UserItem } from "./userItem";

export function Users() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    if (response.status === 200) {
      setUsers(response.data);
    }
  };
  useEffect(() => {
    fetchData().then();
  }, []);
  return (
    <>
      {users.map((item) => (
        <UserItem key={item.id} item={item} />
      ))}
    </>
  );
}
