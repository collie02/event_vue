<template>
  <v-row class="mb-6">
    <v-col 
      v-for="stat in stats" 
      :key="stat.label"
      cols="12" 
      md="4"
    >
      <v-card 
        elevation="3"
        class="text-center pa-4"
        style="box-shadow: 0 1px 5px 0 #B0C3FF !important;"
      >
        <div class="text-h4 font-weight-regular black--text text--darken-3 mb-1">
          {{ stat.value }}
        </div>
        <div class="text-body-2 black--text text--darken-3">
          {{ stat.label }}
        </div>
      </v-card>
    </v-col>
  </v-row>
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
