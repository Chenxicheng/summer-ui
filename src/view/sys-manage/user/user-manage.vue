<template>
  <div>
    <Row>

    </Row>
    <table-page @on-change-page="changePage"></table-page>
    <p>user-manage</p>
    <div>
      <Button v-hasBtn="'add'" @click="openModel">Add</Button>
      <Button v-hasBtn="'edit'">Edit</Button>
    </div>
    <add-user v-if="addModel" @cancel="onModalCancel"/>
  </div>
</template>

<script>
import { findPage } from '@/api/commen'
import TablePage from '_c/table-page'
import AddUser from './component/add'

const BASE_URL = 'api/sys/user'
export default {
  components: {
    TablePage,
    AddUser
  },
  data () {
    return {
      addModel: false
    }
  },
  created () {
    this.getPageList()
  },
  methods: {
    getPageList () {
      findPage(`${BASE_URL}/findPage`, {pageNo: 1, pageSize: 10}).then(res => {
        console.log(res)
      })
    },
    openModel () {
      this.addModel = true
    },
    onModalCancel (type, reload) {
      if (type === 'add') this.addModel = false
    },
    changePage (page) {
      console.log(page)
    }
  }
}
</script>

<style>

</style>
