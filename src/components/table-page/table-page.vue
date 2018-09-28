<template>
  <div>
    <Table :border="border" :columns="columns" :data="data"></Table>
    <Page :total="100" show-total />
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
    }
  },
  watch: {
    //
  },
  data () {
    return {
      //
    }
  },
  methods: {
    //
  }
}
</script>
