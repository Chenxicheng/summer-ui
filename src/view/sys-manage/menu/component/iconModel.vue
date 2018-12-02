<template>
  <div>
    <Modal v-model="show" title="全部图标"
            :mask-closable="false" :scrollable="false"  width="800">
      <Row>
        <Col span="12">
          <Alert show-icon>所选图标：{{ iconName }}</Alert>
        </Col>
      </Row>
      <div class="icons">
        <div v-for="(icon, index) in iconList" :key="index" class="icons-item" :class="{mouseOver: mouseOver === index?true:false, active: active === index?true:false}" @mouseenter="enter(index)" @mouseleave="leave(index)" @click="chooseIcon(index, icon)">
          <Icon :type="icon" size="32"/>
          <p>
            {{ icon }}
          </p>
        </div>
      </div>
      <div slot="footer">
          <Button @click="cancel(false)">取消</Button>
          <Button @click="ok">确定</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import ionicons from '@/libs/ionicons'

export default {
  name: 'iconModel',
  props: {
  },
  created () {
    for (let key in ionicons) {
      ionicons[key].icons.forEach(e => {
        this.iconList.push(e.name)
      })
    }
  },
  data () {
    return {
      scrollable: true,
      show: true,
      icon: '',
      iconList: [],
      active: '',
      mouseOver: '',
      mouseOff: '',
      iconName: ''
    }
  },
  methods: {
    cancel (reload) {
      this.$emit('cancel', reload)
    },
    ok () {
      this.cancel(false)
    },
    enter (index) {
      console.log(index)
      this.mouseOver = index
    },
    leave (index) {
      console.log(index)
    },
    chooseIcon (index, icon) {
      this.active = index
      this.iconName = icon
    }
  }
}
</script>
<style>
.icons {
    /* overflow: hidden;
    zoom: 1; */
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(120px,1fr));
    grid-auto-rows: minmax(70px,auto);
    grid-gap: .5em;
    padding-bottom: 60px;
    /* margin-left: -20px;
    margin-right: -20px; */
    border: 1px solid #dcdee2;
    border-color: #e8eaec;
    height: 500px;
    overflow-y: scroll;
}
.icons-item {
    /* float: left;
    margin: 6px 6px 6px 0;
    width: 145px;
    text-align: center;
    list-style: none;
    cursor: pointer;
    height: 100px;
    color: #5c6b77;
    transition: all .2s ease;
    position: relative;
    padding-top: 10px; */
        /* -webkit-transition: background-color .4s; */
    transition: background-color .4s;
    cursor: pointer;
    border-radius: 8px;
    border: 2px solid transparent;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(236,240,246,.4);
    text-align: center;
    margin-left: 3px;
    margin-right: 3px;
}
.mouseOff {
    animation-name: shadowOut;
    animation-duration: .6s;
    animation-fill-mode: forwards;
}
.mouseOver {
  animation-name: shadowIn;
  animation-duration: .3s;
  animation-fill-mode: forwards;
  background-color: #ecf0f6;
  margin-left: 5px;
  margin-right: 5px;
}
.active {
  background-color: #ecf0f6;
  cursor: default;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
