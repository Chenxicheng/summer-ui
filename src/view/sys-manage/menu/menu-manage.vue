<template>
  <div>
    <Card>
      <p slot="title">菜单管理</p>
      <Row></Row>
      <Row>
        <Col span="8">
          <Tree :data="allMenu"/>
        </Col>
        <Col span="16">
          <Card>
            <Form ref="formValidate" :model="menu" :label-width="80">
              <FormItem label="菜单名称" prop="title">
                  <Input v-model="menu.title"/>
              </FormItem>
              <FormItem label="英文名称" prop="title">
                <Input v-model="menu.name"/>
              </FormItem>
              <FormItem label="路径" prop="path">
                <Input v-model="menu.name"/>
              </FormItem>
              <FormItem label="路径" prop="path">
                <Input v-model="menu.name"/>
              </FormItem>
            </Form>
          </Card>
        </Col>
      </Row>
    </Card>
  </div>
</template>
<script>
import { getMenuAllList } from '@/api/menu'

export default {
  name: 'menu-manage',
  data () {
    return {
      allMenu: [],
      menu: {}
    }
  },
  created () {
    this.getAllMenu()
  },
  methods: {
    getAllMenu () {
      getMenuAllList().then(res => {
        let data = res.data
        this.allMenu = data.result
      })
    }
  }
}
</script>
