import axios from "axios";

const configuration = {
  https: true,
  url: "https://vet-booking.herokuapp.com",
  endpoint: {
    // user
    user: {
      all : "/user", // [GET] all user or [DELETE] user
      self: "/user/edit", // [GET] user detail or [PUT] user
      register: "/user/register", // [POST] register user
      login: "/user/login", // [POST] login user
    },

    role: {
      all: "/role" // [GET] all roles
    }
  },
};

const user = (method = null, value = null) => {
  console.log("this is")
  console.log(value)
  // get method
  
  if (method === "all") {
    console.log(`${configuration.url}${configuration.endpoint.user.all}`)
    return axios.get(
      `${configuration.url}${configuration.endpoint.user.all}`
    ).then(res => res)
    .catch(res => res.results)
  }
}

const role = (method) => {
  // get method
  if (method === "all") {
    return axios.get(
      `${configuration.url}${configuration.endpoint.role.all}`
    ).then(res => res)
    .catch(err => err.response)
  }
}

const review = (method, content = null, token = null, query = null) => {
  // get method
  if (method === "get") {
    return axios.get(
      `${configuration.url}${configuration.endpoint.review.self}`,
      {
        headers: {
          ...token,
        },
      }
    ).then(res => res)
  }

  if(method === "all") {
    return axios.get(
      `${configuration.url}${configuration.endpoint.review.self}/allreviews`,
      {
        headers: {
          ...token,
        },
      }
    ).then(res => res)
  }

  if (method === "post") {
    return axios.post(
      `${configuration.url}${configuration.endpoint.review.self}?MovieId=${query}`,
      content,
      {
        headers: {
          token
        },
      }
    ).then(res => res)
    .catch(err => err.response)
  }

  if (method === "edit") {
    console.log("TEST")
    return axios.put(
      `${configuration.url}${configuration.endpoint.review.self}?MovieId=${query}`,content,
      {
        headers: {
          token
        },
      }
    ).then(res => console.log(res))
    .catch(err => err.response)
  }

  if (method === "delete") {
    return axios.delete(
      `${configuration.url}${configuration.endpoint.review.self}?id=${query}`,
      {
        headers: {
          token
        },
      }
    ).then(res => res)
    .catch(err => err.response)
  }
}


export {
  user,
  role,
  review
};