const own = {
  namespaced: true,
  state: {
    own: [
      {
        street: 'red',
        pos: 0,
        type: 'street',
        title: {
          text: 'Маяковского',
          color: '#000',
          background: '#FF0000'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        street: 'blue',
        pos: 0,
        type: 'street',
        title: {
          text: 'Арбат',
          color: '#fff',
          background: '#1E1AFF'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      }
    ],
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
