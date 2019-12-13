<template>
  <div>
    <!-- 搜索部分 -->
    <div class="search-box">
      <div>
        <div>已选条件：</div>
        <div>
          <el-tag type="warning" size="small" v-if="active != 0" closable @close="close">{{ active }}</el-tag>
        </div>
        <div>
          <el-button type="text">清空选项</el-button>
        </div>
      </div>
      <div>
        <div>团队类型：</div>
        <div> 
          <!-- <ul> -->
          <ul :class="{'isHeight':isHidden}">
            <li
              v-for="(item,index) in 22"
              :key="index"
              :class="{'isActive':active==index}"
              @click="select(index)"
            >发多少</li>
          </ul> 
        </div>
        <div>
          <el-button type="text" @click="togger">更多</el-button>
        </div>
      </div>
    </div>
    <!-- 搜索下 -->
    <div class="search-box" style="margin-top:10px;">
      <div style="border-bottom:0;">
        <div class="slot"> 
          <i class='el-icon-sort'></i> 按入驻日期排序
        </div>
        <div>
          所在地区：
            <el-cascader
              placeholder="请选择/省/市/区"
              :options="options"
              size="mini"
              change-on-select
              filterable
              clearable></el-cascader>
        </div>
        <div class="slot-right">
            <el-input placeholder="请输入内容" size="mini">
              <el-button slot="append" type="success" size="mini">搜索</el-button>
            </el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      isHidden: false,
      options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
    }
  },
  methods: {
    select(e) {
      this.active = e
      this.$emit('change', { message: '当前选中项的值' })
    },
    togger() {
      this.isHidden = !this.isHidden
    },
    close() {
      this.active = 0
      this.$message.success('待处理')
    }
  }
}
</script>

<style lang="scss" scoped>
    $color:#fafafa;
    $height: 40px;
    @mixin active {
        background-color: #f60;
        color: #FFF;
    }
    .search-box{
        border: 1px solid #ddd;
        background-color: $color;
        font-size: 14px;
        color: #666;
        >div{
            &:first-of-type{
                border-bottom: 1px solid #ddd;
            }
            display: flex;
            >div{//内容样式
                &:first-of-type,&:last-of-type{
                    min-width: 100px;
                    height: $height;
                    line-height: $height;
                    text-align: right;
                    padding: 0 10px;
                }
                &:first-of-type{
                    font-weight: 700;
                }
                &:last-of-type{
                    .el-button--text{
                        color: #666;
                    }
                }
                &:nth-of-type(2){
                    flex-grow: 1;
                    display: flex;
                    align-items: center;
                    padding-left: 10px;
                    ul{//选项
                        display: flex;
                        flex-wrap: wrap;
                        margin-top: 10px;
                        height: 30px;
                        transition: height 1s;
                        overflow: hidden;
                        box-sizing: border-box;
                        >li{
                            padding: 4px 6px;
                            margin-right: 10px; 
                            margin-bottom: 10px;
                            cursor: pointer;
                            &:hover{
                                @include active
                            }
                        }
                        .isActive{
                           @include active
                        }
                    }
                    .isHeight{
                      height: 60px;
                      >li{
                        margin-bottom: 0;
                        height: 24px;
                      }
                    } 
                }
            }
        }


        // 第二个筛选条件
        .slot{
          width: 140px !important;
        }
        .slot-right{
          width: 250px !important;
        }
    }
    
</style>
