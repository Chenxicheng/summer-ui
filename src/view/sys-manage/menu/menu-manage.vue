<template>
  <div>
    <Card>
      <p slot="title">菜单管理</p>
      <Row>
        <Col span="12">
          <Button @click="addOneLevelMenu">添加一级菜单</Button>
          <Button @click="addNextMenu">添加下级菜单</Button>
          <Button>删除菜单</Button>
        </Col>
      </Row>
      <Row>
        <Col span="8">
          <Tree :data="allMenu" @on-select-change="chooseNode"/>
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
                <Input v-model="menu.path"/>
              </FormItem>
              <FormItem label="图标" prop="path">
                <Button @click="chooseIcon">选择图标</Button>
              </FormItem>
              <FormItem label="排序" prop="sort">
                <Input v-model="menu.sort"/>
              </FormItem>
            </Form>
          </Card>
        </Col>
      </Row>
    </Card>
    <icon-model v-if="showIconModel" @cancel="iconModelCancel"/>
  </div>
</template>
<script>
import { getMenuAllList } from '@/api/menu'
import IconModel from './component/iconModel'

export default {
  name: 'menu-manage',
  components: {
    IconModel
  },
  data () {
    return {
      allMenu: [],
      menu: {},
      showIconModel: false
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
    },
    chooseNode (nodeArray) {
      this.menu = nodeArray[0]
    },
    addOneLevelMenu () {

    },
    addNextMenu () {

    },
    chooseIcon () {
      this.showIconModel = true
    },
    iconModelCancel (reload) {
      this.showIconModel = reload
    }
  }
}
</script>
