<template>
  <div class="logo">
    <img src="~@/assets/logo.png" alt="" />
    <h2 class="title">管理系统</h2>
  </div>
</template>

<style lang="less" scoped>
  .logo {
    @apply flex overflow-hidden whitespace-nowrap items-center;

    height: 64px;
    padding-left: 24px;
    line-height: 64px;

    img {
      height: 32px;
      margin-right: 8px;
    }

    .title {
      @apply mb-0 text-xl;
      color: @primary-color;
    }
  }
</style>
