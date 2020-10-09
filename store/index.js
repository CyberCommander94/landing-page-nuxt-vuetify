const initialState = {
  initData: {}
}

export const state = () => ({
  ...initialState
})

export const getters = {
  getInitData(state) {
    return state.initData
  }
}

export const mutations = {
  setShowThankYou(state, data) {
    state.initData = data
  }
}

export const actions = {
  // async nuxtServerInit({ dispatch }) {
  //   await dispatch('someMethod');
  // }
}
