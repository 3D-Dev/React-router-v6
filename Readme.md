# React-Router-V6 & useNavigate & BrowserRouter & Axios

## Installing
```js
npm install
```

## add the following import statement:
```js
import { BrowserRouter,Route,Routes } from 'react-router-dom';
```

## <Route element>
```js
<Route path="/" element={<Users />} />
<Route path="/detail/:id" exact element={<UserDetail />} />
```

## implemented the module of geting *json data from url using axios
```js
  const fetchData = async () => {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    if (response.status === 200) {
      setUsers(response.data);
    }
  };
```
