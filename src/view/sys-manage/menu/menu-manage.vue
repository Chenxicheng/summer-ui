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
                <Icon :type="menu.icon" size="20"/>
                <Input disabled v-model="menu.icon" style="width: 200px"/>
                <Button @click="chooseIcon">选择图标</Button>
              </FormItem>
              <FormItem label="排序" prop="sort">
                <Input v-model="menu.sort"/>
              </FormItem>
            </Form>
            <Divider orientation="center">按钮或资源</Divider>
            <Row>
              <Button>添加按钮</Button>
            </Row>
            <Row>
              <Table border ref="selection" :columns="buttonColumn" :data="menu.children"></Table>
            </Row>
          </Card>
        </Col>
      </Row>
    </Card>
    <icon-model v-if="showIconModel" @cancel="iconModelCancel"/>
    <page-form v-if="showPageForm" :parent-id="parentId" @cancel="pageFormCancel"/>
  </div>
</template>
<script>
import { getMenuAllList } from '@/api/menu'
import IconModel from './component/iconModel'
import PageForm from './component/pageForm'

export default {
  name: 'menu-manage',
  components: {
    IconModel,
    PageForm
  },
  data () {
    return {
      allMenu: [],
      menu: {},
      parentId: '',
      showIconModel: false, // 显示图标弹框
      showPageForm: false, // 显示添加菜单页面弹框
      buttonColumn: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '名称',
          key: 'title'
        },
        {
          title: 'url',
          key: 'path'
        },
        {
          title: '英文名称',
          key: 'name'
        }
      ]
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
      this.parentId = '0'
      this.showIconModel = true
    },
    addNextMenu () {
      if (Object.keys(this.menu)) this.$Message.warn('请选择菜单')
      else {
        this.parentId = this.menu.parentId
        this.showIconModel = true
      }
    },
    chooseIcon () {
      this.showIconModel = true
    },
    iconModelCancel (iconName) {
      this.showIconModel = false
      this.menu.icon = iconName
    },
    pageFormCancel (reload) {

    }
  }
}
</script>
