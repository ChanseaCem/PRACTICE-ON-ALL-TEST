<template>
  <div class="msglistitem">
    <div class="item-con" v-for="item in msgList" :key="item.orderNum">
      <div class="con-tt">
        <span class="tt-tt">{{item.title}}</span>
        <span class="tt-time">{{item.time}}</span>
      </div>
      <div class="con-con">
        <div class="c-lf">
          <img :src="item.imgsrc" alt="">
        </div>
        <div class="c-rt">
          <p class="rt-des" :style='styles'>
            {{item.des}}
          </p>
          <div class="rt-order" v-show='msgType=="1"'>
            <span class="order-tip">订单编号：</span>
            <span class="order-num">{{item.orderNum}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MsgListItem",
    props: {
      msgType: Number,
      msgProp: {
        type: Object,
        default () {
          return {
            height: "28px",
            clamp: 2
          }
        }
      },
      msgList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    computed: {
      styles() {
        let msgtype = {}
        if (this.msgType == "0") {
          msgtype = {
            height: this.msgProp.height,
            "webkitLineClamp": this.msgProp.clamp,
          }
        }
        return msgtype
      }
    },
    created() {
    },
    mounted() {
      this.$nextTick(() => {
        console.log(this.$refs)
      })
    }
  }
</script>

<style>
  .msglistitem .item-con {
    border: 8px solid #EEEEEE;
    border-width: 0 10px 10px 10px;
    padding: 8px 15px;
  }

  .msglistitem .item-con .con-tt {
    display: flex;
    line-height: 20px;
  }

  .msglistitem .item-con .con-tt .tt-tt {
    font-size: 15px;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .msglistitem .item-con .con-tt .tt-time {
    font-size: 12px;
    margin-left: 10px;
  }

  .msglistitem .item-con .con-con {
    display: flex;
  }

  .msglistitem .item-con .con-con .c-lf {
    width: 60px;
    height: 60px;
    position: relative;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  .msglistitem .item-con .con-con .c-lf img {
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
  }

  .msglistitem .item-con .con-con .c-rt {
    flex: 1;
    margin: 15px 0 0 15px;
  }

  .msglistitem .item-con .con-con .c-rt .rt-des {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-break: break-all;
    font-size: 14px;
    -webkit-line-clamp: 2;
    height: 28px;
  }

  .msglistitem .item-con .con-con .c-rt .rt-order {
    font-size: 12px;
    color: #999999;
    margin-top: 10px;
  }

  .msglistitem .item-con .con-con .c-rt .rt-order .order-num {
    max-width: 190px;
    word-break: break-all;
  }
</style>
