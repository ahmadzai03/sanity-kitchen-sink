export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb185cbcf2b1ccf7f913f4a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-px91tdms',
                  apiId: '9d6231ec-6cb1-464d-a66e-a1adcfdf1bd5'
                },
                {
                  buildHookId: '5fb185cba30abc604654b034',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-yif88efz',
                  apiId: 'd5dc1e1e-3e31-4627-ae35-64775511dd76'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ahmadzai03/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-yif88efz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
