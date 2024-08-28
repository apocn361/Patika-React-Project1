import axios from "axios";

async function getData(user_id) {
  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + user_id
  );

  const { data: posts } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + user_id &&
      "https://jsonplaceholder.typicode.com/posts?id=" + user_id
  );

  console.log("users :", users);
  console.log("posts : ", posts);
}

export default getData;
