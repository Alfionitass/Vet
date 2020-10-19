import axios from "axios";

const configuration = {
  https: true,
  url: "https://warm-bastion-18573.herokuapp.com",
  endpoint: {
    // user
    user: {
      all : "/user", // [GET] all user or [DELETE] user
      self: "/user/edit", // [GET] user detail or [PUT] user
      register: "/user/register", // [POST] register user
      login: "/user/login", // [POST] login user
    },

    role: {
      self: "/role" // [GET] all roles
    }
  },
};

const user = (value = null) => {
  console.log("this is")
  console.log(value)
  // get method
  
  // if (method === "detail") {
  //   return axios.get(
  //     `${configuration.url}${configuration.endpoint.user.self}`,
  //     {
  //       headers: {
  //         token
  //       }
  //     }
  //   ).then(res => res)
  //   .catch(res => res.results)
  // }

  // if (method === "getuser") {
  //   return axios
  //     .get(
  //       `${configuration.url}${configuration.endpoint.user.edit}`,
  //       {
  //         headers: {
  //           token
  //         }
  //       }
  //     )
  //     .then(res => res)
  //     .catch(err => err.response);
  // }

  // if (method === "alluser") {
  //   return axios.get(
  //     `${configuration.url}${configuration.endpoint.user.alluser}`,
  //     {
  //       headers: {
  //         ...token,
  //       },
  //     }
  //   );
  // }

  // // post method
  // if (method === "register") {
  //   return axios
  //     .post(`${configuration.url}${configuration.endpoint.user.register}`, content)
  //     .then(res => res)
  //     .catch(err => err.response)
  // }

  // if (method === "login") {
  //   console.log(content)
  //   console.log(configuration.endpoint.user.login)
  //   return axios
  //     .post(`${configuration.url}${configuration.endpoint.user.login}`, content)
  //     .then((res) => res)
  //     .catch((err) => err.response
  //     );
  // }

  // // delete method
  // if (method === "delete") {
  //   return axios.delete(
  //     `${configuration.url}${configuration.endpoint.user.self}`,
  //     {
  //       headers: {
  //         ...token,
  //       },
  //     }
  //   );
  // }

  // update method
  // if (method === "edit") {
  //   return axios
  //     .put(
  //       `${configuration.url}${configuration.endpoint.user.edit}`,
  //       content,
  //       {
  //         headers: {
  //           token,
  //         },
  //       }
  //     ).then(res => res)
  //     .catch(err =>  err.response);
  // }
}

const movie = (method, content = null, token = null) => {
  // get method
  if (method === "detail") {
    return axios.get(
      `${configuration.url}`
    ).then(res => res)
  }

  if (method === "search") {
    return axios.get(
      `${configuration.url}${configuration.endpoint.movie.search.title}?title=${content}`
    ).then(res => res)
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
      `${configuration.url}${configuration.endpoint.review.self}?MovieId=${query}`,content,
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
  movie,
  review
};