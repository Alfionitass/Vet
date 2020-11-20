import axios from "axios";

const configuration = {
  https: true,
  url: "https://vet-booking.herokuapp.com",
  endpoint: {
    // user
    user: {
      all: "/user", // [GET] all user or [DELETE] user
      self: "/user/edit", // [GET] user detail or [PUT] user
      register: "/user/register", // [POST] register user
      login: "/user/login", // [POST] login user
    },

    role: {
      all: "/role", // [GET] all roles
    },

    animaltype: {
      all: "/animal-type", // [GET], [POST], [DELETE] animal type
    },

    animal: {
      all: "/animal", // [GET] all animal or [DELETE] animal
      add: "/animal/add", // [POST] add animal
      user: "/animal/user", // [GET] user animal detail
      delete: "/animal/remove", // [DELETE] animal by id
    },

    clinic: {
      all: "/clinic", // [GET] all clinic or [DELETE] clinic
      add: "/clinic/add", // [POST] add animal
      delete: "/clinic/remove", // [DELETE] clinic by id
      facility: "clinic/facility", // [POST] and [DELETE] clinic facility
      filter: "clinic/filter", // [GET] filter by city
    },

    schedule: {
      all: "/schedule", // [GET] all animal or [DELETE] animal
    },

    reservation: {
      all: "/reservation", // [GET] all reservation
      find: "/reservation/form", // [GET] form reservation by id
      show: "/reservation/choose", // [POST] to get data veterinary/ doctor from reservation by id to create reservation by id
      create: "/reservation/create", // [POST] create reservation and get data create reservation by scheduleId
      patient: "/reservation/find-patient", // [GET] all reservation by  patient
    },
  },
};
//version 1.0.1
const reservation = ({
  method = null,
  data = null,
  access_token = null,
  id = null,
}) => {
  if (method === "all") {
    return axios
      .get(`${configuration.url}${configuration.endpoint.reservation.all}`)
      .then((res) => res)
      .catch((err) => err.response);
  }

  if (method === "find") {
    console.log(id)
    return axios
      .get(
        `${configuration.url}${configuration.endpoint.reservation.find}/${id}`
      )
      .then((res) => res)
      .catch((err) => err.response);
  }

  if (method === "show") {
    return axios
      .post(
        `${configuration.url}${configuration.endpoint.reservation.show}/${id}`,
        data,
        {
          headers: {
            access_token,
          },
        }
      )
      .then((res) => res)
      .catch((err) => err.response);
  }

  if (method === "create") {
    return axios.post(
      `${configuration.url}${configuration.endpoint.reservation.create}/${id}`, 
      data,
      {
        headers: {
          access_token
        }
      }
    ).then(res => res)
      .catch(err => err.response)
  }

  if (method === "appointment") {
    return axios
      .get(`${configuration.url}/reservation/${data}`, {
        headers: {
          access_token,
        },
      })
      .then((res) => res)
      .catch((err) => err.response);
  }

  if (method === "updateAppointment") {
    return axios
      .get(`${configuration.url}/reservation/${data}`, {
        headers: {
          access_token,
        },
      })
      .then((res) => res)
      .catch((err) => err.response);
  }

  if (method === "apprroveApt") {
    return axios.put(`${configuration.url}/reservation/approved/${data}`, {
      headers: {
        access_token,
      },
    }).then((res) => res)
    .catch((err) => err.response);
  }

  if (method === "rejectApt") {
    return axios.put(`${configuration.url}/reservation/rejected/${data}`, {
      headers: {
        access_token,
      },
    }).then((res) => res)
    .catch((err) => err.response);
  }
};

const user = ({ method = null, data = null, access_token = null }) => {
  // get method
  if (method === "all") {
    return axios
      .get(`${configuration.url}${configuration.endpoint.user.all}`)
      .then((res) => res)
      .catch((res) => res.response);
  }

  if (method === "register") {
    return axios
      .post(`${configuration.url}${configuration.endpoint.user.register}`, data)
      .then((res) => res)
      .catch((res) => res.response);
  }

  if (method === "login") {
    return axios
      .post(`${configuration.url}${configuration.endpoint.user.login}`, data)
      .then((res) => res)
      .catch((res) => res.response);
  }

  if (method === "self") {
    return axios
      .get(`${configuration.url}${configuration.endpoint.user.self}`, {
        headers: {
          access_token,
        },
      })
      .then((res) => res)
      .catch((res) => res.response);
  }

  if (method === "edit") {
    return axios
      .put(`${configuration.url}${configuration.endpoint.user.self}`, data, {
        headers: {
          access_token,
        },
      })
      .then((res) => res)
      .catch((res) => res.response);
  }

  if (method === "delete") {
    return axios
      .post(`${configuration.url}${configuration.endpoint.user.all}`, {
        headers: {
          access_token,
        },
      })
      .then((res) => res)
      .catch((res) => res.response);
  }
};

const role = (method) => {
  // get method
  if (method === "all") {
    return axios
      .get(`${configuration.url}${configuration.endpoint.role.all}`)
      .then((res) => res)
      .catch((err) => err.response);
  }
};

const animaltype = ({ method = null, data = null, access_token = null }) => {
  if (method === "all") {
    return axios
      .get(`${configuration.url}${configuration.endpoint.animaltype.all}`)
      .then((res) => res)
      .catch((err) => err.response);
  }

  if (method === "add") {
    return axios
      .post(
        `${configuration.url}${configuration.endpoint.animaltype.all}`,
        data
      )
      .then((res) => res)
      .catch((err) => err.response);
  }

  if (method === "delete") {
    return axios
      .delete(
        `${configuration.url}${configuration.endpoint.animaltype.all}`,
        data,
        {
          headers: {
            access_token,
          },
        }
      )
      .then((res) => res)
      .catch((err) => err.response);
  }
};

const animal = ({
  method = null,
  data = null,
  access_token = null,
  query = null,
}) => {
  if (method === "all") {
    return axios
      .get(`${configuration.url}${configuration.endpoint.animal.all}`)
      .then((res) => res)
      .catch((err) => err.response);
  }

  if (method === "add") {
    console.log(data)
    return axios
      .post(`${configuration.url}${configuration.endpoint.animal.add}`, data, {
        headers: {
          access_token,
        },
      })
      .then((res) => res)
      .catch((err) => err.response);
  }

  if (method === "self") {
    return axios
      .get(`${configuration.url}${configuration.endpoint.animal.user}`, {
        headers: {
          access_token,
        },
      })
      .then((res) => res)
      .catch((err) => err.response);
  }

  if (method === "delete") {
    return axios
      .delete(
        `${configuration.url}${configuration.endpoint.animal.delete}/${query.id}`,
        {
          headers: {
            access_token,
          },
        }
      )
      .then((res) => res)
      .catch((err) => err.response);
  }
};

const clinic = ({
  method = null,
  data = null,
  access_token = null,
  query = null,
}) => {
  if (method === "all") {
    return axios
      .get(`${configuration.url}${configuration.endpoint.clinic.all}`)
      .then((res) => res)
      .catch((err) => err.response);
  }

  if (method === "add") {
    return axios
      .post(`${configuration.url}${configuration.endpoint.clinic.add}`, data, {
        headers: {
          access_token,
        },
      })
      .then((res) => res)
      .catch((err) => err.response);
  }

  if (method === "delete") {
    return axios
      .delete(
        `${configuration.url}${configuration.endpoint.clinic.delete}/${query.id}`,
        {
          headers: {
            access_token,
          },
        }
      )
      .then((res) => res)
      .catch((err) => err.response);
  }

  if (method === "fadd") {
    return axios
      .post(
        `${configuration.url}${configuration.endpoint.clinic.facility}`,
        data,
        {
          headers: {
            access_token,
          },
        }
      )
      .then((res) => res)
      .catch((err) => err.response);
  }

  if (method === "fdelete") {
    return axios
      .post(
        `${configuration.url}${configuration.endpoint.clinic.facility}`,
        data,
        {
          headers: {
            access_token,
          },
        }
      )
      .then((res) => res)
      .catch((err) => err.response);
  }

  if (method === "ffilter") {
    return axios
      .get(
        `${configuration.url}${configuration.endpoint.clinic.filter}/?city:${query.city}`,
        data,
        {
          headers: {
            access_token,
          },
        }
      )
      .then((res) => res)
      .catch((err) => err.response);
  }
};

const schedule = ({
  method = null,
  data = null,
  access_token = null,
  query = null,
}) => {
  if (method === "all") {
    return axios
      .get(`${configuration.url}${configuration.endpoint.schedule.all}`)
      .then((res) => res)
      .catch((err) => err.response);
  }

  if (method === "filter") {
    return axios
      .get(
        `${configuration.url}${configuration.endpoint.schedule.all}/${query.id}`,
        data
      )
      .then((res) => res)
      .catch((err) => err.response);
  }
};

export { user, role, clinic, animaltype, animal, schedule, reservation };
