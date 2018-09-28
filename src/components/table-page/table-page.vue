<template>
  <div>
    <Table :border="border" :columns="columns" :data="data"></Table>
    <Page :total="total" :page-size="pageSize" show-total @on-change="changePage"/>
  </div>
</template>
<script>
export default {
  name: 'TablePage',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    columns: {
      type: Array,
      default: () => {
        return []
      }
    },
    border: {
      type: Boolean,
      default: true
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  watch: {
    columns (val) {
      this.columns = val
    },
    data (val) {
      this.data = val
    },
    total (val) {
      this.total = val
    }
  },
  data () {
    return {
      //
    }
  },
  methods: {
    changePage (page) { // 改变页数
      this.$emit('on-change-page', page)
    }
  }
}
</script>
