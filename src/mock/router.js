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
    },
    {
      path: '/sys-manage',
      name: 'sys-manage',
      meta: {
        icon: 'md-cloud-upload',
        title: '系统管理'
      },
      component: 'Main',
      children: [
        {
          path: 'user-manage',
          name: 'user-manage',
          meta: {
            icon: 'ios-document',
            title: '用户管理',
            permission: ['add']
          }
        },
        {
          path: 'menu-manage',
          name: 'menu-manage',
          meta: {
            icon: 'md-clipboard',
            title: '菜单管理'
          }
        }
      ]
    }
  ]
  return routers
}
