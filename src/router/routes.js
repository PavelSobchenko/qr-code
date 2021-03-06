
const routes = [
    {
        path: '/',
        redirect: {name: 'index'}, // fix for correct active navigation item
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: 'index', name: 'index', component: () => import('pages/Index.vue') },
            { path: 'history', name: 'history', component: () => import('pages/History') }
        ]
    },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
