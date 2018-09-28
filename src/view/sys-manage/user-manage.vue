<template>
  <div>
    <table-page></table-page>
    <p>user-manage</p>
    <div>
      <Button v-hasBtn="'add'">Add</Button>
      <Button v-hasBtn="'edit'">Edit</Button>
    </div>
  </div>
</template>

<script>
import TablePage from '_c/table-page'
export default {
  components: {
    TablePage
  }
}
</script>

<style>

</style>
