export const getRouterList = req => {
  let routers = [
    {
      path: '/update',
      name: 'update',
      meta: {
        icon: 'md-cloud-upload',
        title: '数据上传'
      },
      component: 'Main',
      children: [
        {
          path: 'update_table_page',
          name: 'update_table_page',
          meta: {
            icon: 'ios-document',
            title: '上传Csv'
          }
        },
        {
          path: 'update_paste_page',
          name: 'update_paste_page',
          meta: {
            icon: 'md-clipboard',
            title: '粘贴表格数据'
          }
        }
      ]
    }
  ]
  return routers
}
