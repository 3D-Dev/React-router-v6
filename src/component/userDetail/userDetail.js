import { UserItem } from "../users/userItem";
import { useLocation } from 'react-router-dom'

export function UserDetail(props) {
  const location = useLocation()
  return (
    <>
      <UserItem item={location.state} />
    </>
  );
}
