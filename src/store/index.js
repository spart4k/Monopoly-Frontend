import Vue from 'vue'
import Vuex from 'vuex'
import own from './own/index'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    list: [],
    groups: [
      {
        id: 0,
        title: 'Выполнить'
      },
      {
        id: 1,
        title: 'Выполняется'
      },
      {
        id: 2,
        title: 'Выполнена'
      }
    ],
    theme: 'light',
    pageName: '',
    headerTransitionMode: 'fade-route',
    routeTransitionMode: 'router-view'
  },
  mutations: {
    setList(state, list) {
      state.list = list
      //localStorage.setItem('list', JSON.stringify(list))
    },
    setPageName(state, name) {
      state.pageName = name
    },
    setHeaderTransitionMode(state, mode) {
      state.headerTransitionMode = mode
    },
    setRouteTransitionMode(state, mode) {
      state.routeTransitionMode = mode
    },
    changeTheme(state, theme) {
      localStorage.setItem('theme', theme)
      let mainColor = '';
      let mainBackground = '';
      state.theme = theme
      switch (theme) {
        case 'dark':
          mainColor = '#fff';
          mainBackground = '#272626';
          break;
        case 'light':
          mainColor = '#272626';
          mainBackground = '#fff';
          break;
      }
      document.documentElement.style.setProperty("--mainColor", mainColor);
      document.documentElement.style.setProperty("--mainSubBackground", mainColor);
      document.documentElement.style.setProperty("--mainBackground", mainBackground);
    }
  },
  actions: {
    async getList({ commit }, params) {
      console.log(params)
      const promise = await new Promise(function(resolve, reject) {
        // эта функция выполнится автоматически, при вызове new Promise

        // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
        try {
          let list = JSON.parse(localStorage.getItem('list'))
          // Проверка на булево значение квери параметра removed
          console.log(list)
          if (list && params?.isDeleted) list = list.filter((el) => el.isDeleted)
          else if (list) list = list?.filter((el) => !el.isDeleted)
          console.log(list)
          setTimeout(() => resolve(
            //console.log(this)
            list
          ), 1000);
        } catch(err) {
          reject(
            err
          )
          //console.log(reject)
        }
      });
      commit('setList', promise)
      return promise
    },
    async getTask(_, id) {
      console.log(id)
      const promise = await new Promise(function(resolve, reject) {
        // эта функция выполнится автоматически, при вызове new Promise

        // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
        try {
          const list = JSON.parse(localStorage.getItem('list'))
          const task = list.find((el) => el.id === id)
          setTimeout(() => resolve(
            //console.log(this)
            task
          ), 500);
        } catch(err) {
          reject(
            err
          )
          //console.log(reject)
        }
      });
      //commit('setList', promise)
      return promise
    },
    async createTask(_, task) {
      const promise = await new Promise(function(resolve, reject) {
        // эта функция выполнится автоматически, при вызове new Promise

        // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
        try {
          let list = []
          list = JSON.parse(localStorage.getItem('list'))
          let id = null
          console.log(list)
          if (list.length) {
            id = list[list.length - 1].id + 1
          } else {
            id = 0
          }
          const newTask = {
            id,
            ...task,
            isDeleted: false
          }
          console.log(newTask)
          if (!list) list = []
          list.push(newTask)
          //const task = list.find((el) => el.id === id)
          localStorage.setItem('list', JSON.stringify(list))
          store.commit('setList', list)
          setTimeout(() => resolve(
            //console.log(this)
            newTask
          ), 500);
        } catch(err) {
          reject(
            err
          )
          //console.log(reject)
        }
      });
      //commit('setList', promise)
      return promise
    },
    async editTask(_, data) {
      const promise = await new Promise(function(resolve, reject) {
        // эта функция выполнится автоматически, при вызове new Promise

        // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
        try {
          let list = []
          list = JSON.parse(localStorage.getItem('list'))
          const id = data.id
          console.log(list)
          const task = list.find((el) => el.id === id)
          for (let key in data) {
            task[key] = data[key]
          }
          console.log(task)
          console.log(list)
          store.commit('setList', list)
          if (!list) list = []
          //list.push(newTask)
          //const task = list.find((el) => el.id === id)
          //localStorage.setItem('list', JSON.stringify(list))
          setTimeout(() => resolve(
            //console.log(this)
            task
          ), 500);
        } catch(err) {
          reject(
            err
          )
          //console.log(reject)
        }
      });
      //commit('setList', promise)
      return promise
    },
    async changeStatus(_, { id, group }) {
      console.log(id, group)
      const promise = await new Promise(function(resolve, reject) {
        try {
          let list = []
          list = JSON.parse(localStorage.getItem('list'))
          const groups = store.state.groups
          //const id = data.id
          console.log(list)
          const task = list.find((el) => el.id === id)
          console.log(groups.find((el) => el.id === group))
          task.group = groups.find((el) => el.id === group)
          console.log(task)
          console.log(list)
          store.commit('setList', list)
          if (!list) list = []
          //list.push(newTask)
          //const task = list.find((el) => el.id === id)
          //localStorage.setItem('list', JSON.stringify(list))
          setTimeout(() => resolve(
            //console.log(this)
            task
          ), 500);
        } catch(err) {
          reject(
            err
          )
          //console.log(reject)
        }
      });
      //commit('setList', promise)
      return promise
    },
    async removeTask(_, id) {
      console.log(id)
      const promise = await new Promise(function(resolve, reject) {
        try {
          let list = []
          //list = store.state.list
          list = JSON.parse(localStorage.getItem('list'))
          //const id = data.id
          console.log(list)
          const task = list.find((el) => el.id === id)
          task.isDeleted = true
          store.commit('setList', list)
          if (!list) list = []
          //list.push(newTask)
          //const task = list.find((el) => el.id === id)
          localStorage.setItem('list', JSON.stringify(list))
          setTimeout(() => resolve(
            //console.log(this)
            task
          ), 500);
        } catch(err) {
          reject(
            err
          )
          //console.log(reject)
        }
      });
      //commit('setList', promise)
      return promise
    },
    async returnTask(_, id) {
      console.log(id)
      const promise = await new Promise(function(resolve, reject) {
        try {
          let list = []
          list = JSON.parse(localStorage.getItem('list'))
          //const id = data.id
          console.log(list)
          const task = list.find((el) => el.id === id)
          task.isDeleted = false
          store.commit('setList', list)
          if (!list) list = []
          //list.push(newTask)
          //const task = list.find((el) => el.id === id)
          localStorage.setItem('list', JSON.stringify(list))
          setTimeout(() => resolve(
            //console.log(this)
            task
          ), 500);
        } catch(err) {
          reject(
            err
          )
          //console.log(reject)
        }
      });
      //commit('setList', promise)
      return promise
    }
  },
  modules: {
    own
  },
})

export default store;
export const useStore = () => store
