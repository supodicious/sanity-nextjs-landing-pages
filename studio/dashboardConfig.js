export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '61958eb4deffa82f7861ffe3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-e51xdgf2',
                  apiId: 'f6810209-db72-4749-bfa4-144975800937'
                },
                {
                  buildHookId: '61958eb522e9ab2cb4faee56',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-a3pxxdjy',
                  apiId: '870298af-989c-4e13-b759-675fe304cb8f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/supodicious/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-a3pxxdjy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
