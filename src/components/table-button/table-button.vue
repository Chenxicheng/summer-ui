<template>
  <Row>
    <Col span="24">
      <Button v-for="(b, i) in buttonGroup" :key="i" :icon="b.icon" @click="b.handleClick">{{ b.name }}</Button>
    </Col>
  </Row>
</template>
<script>
export default {
  name: 'table-button',
  props: {
    buttonGroup: {
      type: true,
      required: true
    }
  },
  methods: {
    //
  }
}
</script>
