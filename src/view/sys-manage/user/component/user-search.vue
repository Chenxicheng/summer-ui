<template>
  <Row>
    <Form ref="search" :model="searchEntity" inline :label-width="80">
      <Col span="12">
        <FormItem label="用户名：">
            <Input type="text" v-model="searchEntity.username"/>
        </FormItem>
        <FormItem>
          <Button type="primary" icon="md-search" @click="handleSearch">查询</Button>
        </FormItem>
      </Col>
    </Form>
  </Row>
</template>
<script>
export default {
  name: 'userSearch',
  props: {
    //
  },
  data () {
    return {
      searchEntity: {}
    }
  },
  created () {
    this.searchEntity = this.createEntity()
  },
  methods: {
    createEntity () {
      return {
        username: ''
      }
    },
    handleSearch () {
      this.$emit('on-search', this.searchEntity)
    }
  }
}
</script>
