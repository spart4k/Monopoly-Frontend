const own = {
  namespaced: true,
  state: {
    isShow: true
  },
  getters: {
  },
  actions: {},
  mutations: {
    showMap(state, value) {
      state.isShow = value
    }
  },
}
export default own
