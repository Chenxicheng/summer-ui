<template>
  <div>
    <Card>
      <p slot="title">用户列表</p>
      <!-- 查询组件 -->
      <!-- <user-search/> -->
      <!-- 功能按钮组 -->
      <Row>
        <Col span="24">
          <Button v-hasBtn="'add'" icon="md-add" @click="openModel('add')">新增</Button>
        </Col>
      </Row>
      <!-- 数据表 -->
      <table-page @on-change-page="changePage" :data="entityList" :columns="columns" :total="searchEntity.total"></table-page>

      <!-- 弹出框 -->
      <role-form v-if="addModel" :model-type="modelType" :dataId="dataId" @cancel="onModalCancel"/>
    </Card>
  </div>
</template>
<script>
import { findPage } from '@/api/commen'
import TablePage from '_c/table-page'
import RoleForm from './component/role-form'

const BASE_URL = 'api/sys/role'

export default {
  name: 'role-manage',
  components: {
    TablePage,
    RoleForm
    // UserSearch
  },
  data () {
    return {
      addModel: false,
      searchEntity: {},
      entityList: [],
      columns: [
        {
          title: '英文名称',
          key: 'name'
        },
        {
          title: '名称',
          key: 'cnName'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    console.log(params.row.id)
                    this.openModel('update', params.row.id)
                  }
                }
              }, 'View')
            ])
          }
        }
      ],
      modelType: '',
      dataId: ''
    }
  },
  created () {
    this.searchEntity = this.createSearchEntity()
    this.getPageList()
  },
  methods: {
    createSearchEntity () {
      return {
        pageNo: 1,
        pageSize: 10,
        total: 0
      }
    },
    getPageList () {
      findPage(`${BASE_URL}/findPage`, this.searchEntity).then(
        res => {
          console.log(this.searchEntity)
          const data = res.data.result
          this.searchEntity.total = data.total
          this.entityList = data.records
        }
      )
    },
    openModel (modelType, id) {
      this.modelType = modelType
      if (id) this.dataId = id
      this.addModel = true
    },
    onModalCancel (type, reload) {
      if (type === 'add') this.addModel = false
    },
    changePage (page) {
      this.searchEntity.pageNo = pageNo
      this.getPageList()
    }
  }
}
</script>
