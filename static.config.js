export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/routes/Landing',
    },
  ],
}
