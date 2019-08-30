export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      title: true,
      name: 'Geral',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    // {
    //   name: 'Colors',
    //   url: '/theme/colors',
    //   icon: 'icon-drop',
    // },
    {
      name: 'Configurações gerais',
      url: '/config',
      icon: 'icon-wrench'
    },
    {
      name: 'Usuários',
      url: '/users',
      icon: 'icon-user',
    },
    {
      title: true,
      name: 'Website',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Páginas',
      url: '/pages',
      icon: 'icon-docs',
      children: [
        {
          name: 'Works',
          url: '/pages/works',
          icon: 'icon-doc'
        },
        {
          name: 'About',
          url: '/pages/about',
          icon: 'icon-doc'
        },
        {
          name: 'Contact',
          url: '/pages/contact',
          icon: 'icon-doc'
        },
      ],
    },
    {
      name: 'Portfolio',
      url: '/portfolio',
      icon: 'icon-grid'
    },
    {
      name: 'Suporte técnico',
      url: '/help',
      icon: 'icon-support'
    }
  ]
}