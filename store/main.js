const state = {
  users: []
}
const mutations = {
  SET_USERS (state, users) {
    state.users = users
  },

  REMOVE_USER (state, id) {
    const newArr = state.users.filter(item => item.id !== id)
    state.users = newArr
  },

  ADD_USER (state, user) {
    const newId = state.users.length + 1
    // emulation fakeUser
    const mockUserData = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    }
    // emulation fakeUser

    mockUserData.id = newId
    mockUserData.name = user.name
    mockUserData.email = user.email

    state.users.push(mockUserData)
  }
}

const actions = {
  async FETCH_USERS ({ commit }) {
    const response = await this.$axios.$get('https://jsonplaceholder.typicode.com/users', {
      params: {
        _limit: 10,
        _start: 0
      }
    })
    commit('SET_USERS', response)
  }
}

export default {
  state,
  mutations,
  actions
}