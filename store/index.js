export const state = () => ({
  appNavOpen: false,
})

export const mutations = {
  toggleAppNavOpen(state) {
    state.appNavOpen = !state.appNavOpen
  },
  closeAppNav(state) {
    state.appNavOpen = false
  },
}
