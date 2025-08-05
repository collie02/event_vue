<template>
  <div class="mb-6">
    <!-- Blue Alert -->
    <v-alert
      type="info"
      color="primary"
      icon="mdi-information"
      variant="outlined"
      class="mb-4"
      border="start"
    >
      <div class="text-body-2 text-md-body-1">
        於2025/8/27 23:59（UTC-0）前，發送任意 Airdrop & Quiz（限使用
        COS）即可參與抽獎!
      </div>
    </v-alert>

    <!-- Green Alert -->
    <v-alert
      type="success"
      color="success"
      icon="mdi-check-circle"
      variant="outlined"
      border="start"
    >
      <div class="text-body-2 text-md-body-1">
        你已獲得抽獎資格，結果將於 2025/8/28 23:59（UTC-0）前公布
      </div>
    </v-alert>
  </div>
</template>

<script setup lang="ts">
// Alert notifications component logic
</script>
