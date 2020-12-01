export const state = () => ({
  count: 0
});

export const mutations = {
  increment(state, value) {
    state.count++;
  }
}

export const actions = {
  increment(context, payload) {
    context.commit('increment');
  }
}