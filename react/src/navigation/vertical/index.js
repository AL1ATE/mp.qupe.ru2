const navigation = () => {
  return [
    {
      icon: 'bx:home-circle',
      title: 'Dashboards',
      children: [
        {
          icon: 'bx:pie-chart-alt-2',
          title: 'Analytics',
          path: '/dashboards/analytics'
        },
        {
          icon: 'bx:shape-circle',
          title: 'CRM',
          path: '/dashboards/crm'
        },
        {
          icon: 'bx:analyse',
          title: 'eCommerce',
          path: '/dashboards/ecommerce'
        }
      ]
    },
    {
      title: 'Table',
      icon: 'bx:grid',
      path: '/tables/data-grid'
    },
  ]
}

export default navigation
