export const actions = {
  async nuxtServerInit({ commit }, context) {
    const { articles } = await context.app.$axios.$get(
      `https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=${process.env.API_KEY}`
    )
    // console.log(articles)
    commit('getArticles', articles)
  }
}