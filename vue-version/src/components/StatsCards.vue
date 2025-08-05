<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="bg-white rounded border shadow-sm p-4 text-center"
      style="box-shadow: 0 1px 5px 0 #B0C3FF"
    >
      <div class="text-2xl font-normal text-black/87 mb-1">
        {{ stat.value }}
      </div>
      <div class="text-sm text-black/87 leading-tight">
        {{ stat.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  {
    value: "11,654",
    label: "目前累積獎金",
  },
  {
    value: "812",
    label: "獲得抽獎資格的用戶",
  },
  {
    value: "2,346",
    label: "已發送的 Airdrops",
  },
]
</script>
