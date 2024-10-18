<script setup lang="ts">
import { Page } from '@vben/common-ui';

const handleClick: () => void = () => {};
</script>

<template>
  <Page
    description="菜单的管理，菜单管理是系统中最重要的一环。"
    title="菜单管理"
  >
    <div>
      <h1 @click="handleClick">Hello menu</h1>
    </div>
  </Page>
</template>

<style></style>
