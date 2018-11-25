<template>
    <div id="app">
        <coupon :config="couponConfig">
            <div class="couponContent">
                优惠券
                <div class="amount">5元</div>
            </div>
        </coupon>
    </div>
</template>

<script>
  import coupon from '../src/coupon'
  export default {
    components: {coupon},
    name: 'App',
    data() {
      return {
        couponConfig: {
          width: 200,
          height: 300,
          borderRadius: 15,
          borderColor: '#999',
          borderWidth: 2,
          borderOpcity: 1,
          borderDash: null,
          showLine:false,
          cutPosition: 200,
          cutRadius: 10,
          cutSlope: 1.5,
          background: '#ffffff',

        }
      }
    },
    methods: {},
    mounted() {
    }
  }
</script>


<style scoped>
    #app {
        padding: 50px;
    }
    .couponContent {
        width: 120px;
        height: 300px;
        color: #999;
        padding: 20px;
        box-sizing: border-box;
        text-align: center;
        background: #ccc;
    }
    .amount{
        font-size: 40px;
        line-height: 120px;
    }
</style>
