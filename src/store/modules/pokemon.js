// initial state
const state = () => ({
    all: []
})

// getters are use to call what is in the State (you usually add filters)
const getters = {
    pokemonCount: state => {
        return state.all.length
    }
}

// actions
const actions = {
    async getAllPokemons({ commit }) {
        commit('gotData', await getData())
    }
}

// mutations
const mutations = {
    setPokemons(state, pokemons) {
        state.all = pokemons
    },

    deletePokemon(state, { id }) {
        const pokemon = state.all.find(pokemon => pokemon.id === id)
        state.all.slice(pokemon.id)
    }
}



export default {
    namespaced: true, // allow you to have modules more reusable
    state,
    getters,
    actions,
    mutations
}