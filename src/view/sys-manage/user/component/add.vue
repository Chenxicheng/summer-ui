<template>
  <div>
    <Modal v-model="show" title="添加用户"
            :mask-closable="false" :closable="false" >
      <Form ref="modalForm" :model="data" :rules="ruls"
                  :label-width="80">
        <FormItem label="用户名" prop="username">
          <Input v-model.trim="data.username"></Input>
        </FormItem>
        <FormItem label="姓名" prop="name">
          <Input v-model.trim="data.name"></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input type="password" v-model.trim="data.password"></Input>
        </FormItem>
        <!-- <FormItem label="重复密码" prop="rePassword">
            <Input type="password" v-model.trim="data.rePassword"></Input>
        </FormItem>
        <FormItem label="年龄" prop="age">
            <InputNumber :min="0" :step="1" v-model.trim="data.age" style="width:100%"/>
        </FormItem>
        <FormItem label="状态" prop="status">
            <Select v-model.trim="data.status" style="width:100%">
                <Option v-for="item in [{label:'正常',value:1},{label:'锁定',value:0}]"
                    :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <FormItem label="角色组" prop="roles">
            <CheckboxGroup v-model="data.roles">
                <Checkbox v-for="(item,index) in roles" :label="index" :key="item.id">{{item.name}}</Checkbox>
            </CheckboxGroup>
        </FormItem> -->
      </Form>
      <div slot="footer">
          <Button :disabled="loading" @click="cancel(false)">取消</Button>
          <Button type="primary" :loading="loading" @click="ok">确定</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import { getDataInfo } from '@/api/commen'

const BASE_URL = '/api/sys/user'

export default {
  name: 'userAdd',
  props: {
    modelType: {
      type: String,
      default: 'add'
    },
    dataId: {
      type: String,
      default: ''
    }
  },
  created () {
    if (this.modelType === 'update') this.getDataInfo()
    else this.data = this.createEntity()
  },
  watch: {
    modelType (val) {
      this.modelType = val
    },
    dataId (val) {
      this.dataId = val
    }
  },
  data () {
    return {
      show: true,
      loading: false,
      data: {},
      ruls: {
        username: [
          { required: true, message: '用户名不能为空' },
          {pattern: /^(\w){4,16}$/, message: '用户名应为[A-Za-z0-9_]组成的4-16位字符'}
        ],
        password: [
          { required: true, message: '请填写密码' },
          {pattern: /^(\w){6,18}$/, message: '密码应为[A-Za-z0-9_]组成的6-18位字符'}
        ],
        name: [
          { required: true, message: '请填写姓名' }
        ]
        // rePassword: [{ validator: validateConfirmPwd }],
        // age: [{ required: true, message: "年龄不能为空" }],
        // status: [{ required: true, message: "用户状态不能为空" }],
        // roles: [{ required: true, message: "请至少选择一个角色" }]
      }
    }
  },
  methods: {
    createEntity () {
      return {
        username: '',
        password: '',
        name: ''
      }
    },
    getDataInfo () {
      getDataInfo(`${BASE_URL}/get/${this.dataId}`).then(res => {
        this.data = res.data.entity
      })
    },
    cancel (reload) {
      this.$emit('cancel', 'add', reload)
    },
    ok () {
      this.$refs['modalForm'].validate((valid) => {
        if (valid) {
          this.loading = true
          setTimeout(() => {
            this.$Message.success('This is a success tip')
            this.loading = false
            this.cancel(true)
          }, 1000)
        }
      })
    }
  }
}
</script>
