<template>
  <div>
    <Modal v-model="show" title="新增菜单"
            :mask-closable="false">
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
      <div slot="footer">
          <Button :disabled="loading" @click="cancel(false)">取消</Button>
          <Button v-if="modelType !== 'view'" type="primary" :loading="loading" @click="ok">确定</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import IconModel from './iconModel'

export default {
  name: 'pageForm',
  components: {
    IconModel
  },
  props: {

  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    cancel (reload) {
      this.$emit('cancel', 'add', reload)
    },
    ok () {
      this.$refs['modalForm'].validate((valid) => {
        if (valid) {
          this.loading = true
          addData(`${BASE_URL}/save`, this.data).then(res => {
            let data = res.data
            if (data.status) {
              this.$Message.success(data.message)
              this.cancel(true)
            }
            this.loading = false
          })
        }
      })
    }
  }
}
</script>
