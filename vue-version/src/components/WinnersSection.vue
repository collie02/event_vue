<template>
  <div>
    <!-- Section Title -->
    <div class="d-flex align-center mb-6">
      <v-icon color="accent" size="44" class="mr-2">mdi-trophy-award</v-icon>
      <div class="flex-grow-1">
        <h2 class="text-h5 text-md-h4 font-weight-regular black--text text--darken-3">
          本期幸運得主(活動結束後顯示)
        </h2>
        <p class="text-body-2 text-md-body-1 black--text text--lighten-1 ma-0">
          獎勵於 2025/6/25 23:59 (UTC+0) 發放
        </p>
      </div>
    </div>

    <!-- Desktop Layout -->
    <v-card class="d-none d-md-block bg-cos-grey-card pa-4" elevation="0" style="min-height: 400px;">
      <v-row>
        <v-col 
          v-for="winner in winnersData"
          :key="winner.rank"
          cols="6"
          class="pa-2"
        >
          <v-card class="bg-cos-grey-light pa-4" elevation="0">
            <div class="d-flex align-center">
              <!-- Rank -->
              <div class="text-h5 font-weight-regular black--text text--darken-3 mr-4" style="min-width: 32px;">
                {{ winner.rank }}
              </div>
              
              <!-- Avatar -->
              <v-avatar size="64" color="grey-lighten-1" class="mr-4"></v-avatar>
              
              <!-- Name -->
              <div class="flex-grow-1">
                <div class="text-body-1 black--text text--darken-3">
                  {{ winner.name }}
                </div>
              </div>
              
              <!-- Amount -->
              <div class="text-right">
                <div class="text-h5 cos-blue font-weight-regular">
                  {{ winner.amount.split(' ')[0] }}
                </div>
                <div class="text-caption black--text text--lighten-1">COS</div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <!-- Mobile Layout -->
    <v-card class="d-block d-md-none" elevation="2">
      <!-- Header -->
      <v-card-title class="grey darken-1 white--text">
        <h3 class="text-body-1 font-weight-bold">本期幸運得主</h3>
      </v-card-title>
      
      <!-- List Items -->
      <v-list>
        <v-list-item
          v-for="(winner, index) in winnersData"
          :key="winner.rank"
          :class="{ 'border-b': index < winnersData.length - 1 }"
        >
          <template v-slot:prepend>
            <!-- Rank -->
            <div class="mr-4 text-h5 font-weight-bold black--text text--lighten-1" style="width: 28px; text-align: center;">
              {{ winner.rank }}
            </div>
            
            <!-- Avatar -->
            <v-avatar size="24" color="grey-lighten-1" class="mr-2"></v-avatar>
          </template>

          <!-- Name -->
          <v-list-item-title class="text-body-2 black--text text--lighten-1">
            {{ winner.name }}
          </v-list-item-title>

          <template v-slot:append>
            <!-- Amount -->
            <div class="text-body-2 black--text text--lighten-1">
              {{ winner.amount }}
            </div>
          </template>
        </v-list-item>
      </v-list>
    </v-card>

    <!-- Pagination -->
    <div class="d-flex justify-center mt-4">
      <v-pagination
        v-model="currentPage"
        :length="3"
        color="primary"
        size="small"
      ></v-pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Winner {
  rank: number
  name: string
  amount: string
  avatar: null
}

const currentPage = ref(1)

const winnersData: Winner[] = Array.from({ length: 11 }, (_, i) => ({
  rank: i + 1,
  name: "???",
  amount: "3,000 COS",
  avatar: null,
}))
</script>

<style scoped>
.border-b {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
