export default {
    state: () => ({
        name: 'Bodar',
    }),
    getters: {},
    mutations: {
        SET_NAME(state: any, payload: string) {
            state.name = payload
        },
    },
    actions: {
        saveName({ commit }, data: string) {
            commit('SET_NAME', data)
        },
    },
}
