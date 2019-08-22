export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d5ef3b77fb192cee274521d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cixmvcwa',
                  apiId: '28a43bda-9c77-420d-9685-4b9af746a612'
                },
                {
                  buildHookId: '5d5ef3b72504f64933e26985',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-97sdc11w',
                  apiId: 'f4864994-a79f-48ac-8982-f053e93a8c4d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/williambicknell/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-97sdc11w.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
