module.exports = {
    title: 'EraserRain Blog',
    head: [ 
      ['link', { rel: 'icon', href: '/toad.jpg' }], 
    ],
    themeConfig: {
      logo: '/toad.jpg',
      nav:[ 
        {text: '首页', link: '/' },
        {text: '前端', link: '/frontend/' },
        {text: '后端', link: '/backend/' },
        {text: '运维', link: '/ops/' },
        {text: 'Github', link: 'https://github.com/EraserandRain'}      
      ],
      sidebar: 'auto', 
			sidebarDepth: 2
    }
  };