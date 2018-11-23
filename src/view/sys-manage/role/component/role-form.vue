<template>
  <div>
    <Modal v-model="show" :title="modelType === 'add' ? '添加用户':'修改用户'"
            :mask-closable="false" :closable="false" >
      <Form ref="modalForm" :model="data" :rules="ruls"
                  :label-width="80">
        <FormItem label="英文名称" prop="name">
          <Input v-model.trim="data.name"></Input>
        </FormItem>
        <FormItem label="名称" prop="cnName">
          <Input v-model.trim="data.cnName"></Input>
        </FormItem>
        <FormItem label="备注">
          <Input type="textarea" v-model.trim="data.remarks"></Input>
        </FormItem>
        <!-- <FormItem label="年龄" prop="age">
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
import { getDataInfo, addData } from '@/api/commen'
import { validateName } from '@/api/role'

const BASE_URL = '/api/sys/role'

export default {
  name: 'roleForm',
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
    if (this.modelType !== 'add') this.getDataInfo()
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
    const checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入英文名称'))
      }
      validateName(value).then(res => {
        let data = res.data
        console.log(data)
        if (!data.status) callback(new Error('英文名称已存在'))
        else callback()
      })
    }

    return {
      show: true,
      loading: false,
      data: {},
      ruls: {
        name: [
          { required: true, message: '请输入名称' },
          { pattern: /^(ROLE_[A-Z]+)|(ROLE_[A-Z]+[0-9]+)$/, message: '以ROLE_为首的大写英文或加数字组成' },
          { type: 'string', max: 20, message: '长度不超过20个字符', trigger: 'blur' },
          { validator: checkName, trigger: 'blur' }
        ],
        cnName: [
          { required: true, message: '请输入名称' }
        ]
      }
    }
  },
  methods: {
    createEntity () {
      return {
        username: '',
        password: '',
        rePassword: '',
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
