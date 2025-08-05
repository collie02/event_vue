<template>
  <div>
    <!-- Section Title -->
    <div class="d-flex align-center mb-6">
      <v-icon color="accent" size="36" class="mr-2">mdi-wallet-giftcard</v-icon>
      <h2 class="text-h5 text-md-h4 font-weight-regular black--text text--darken-3">
        Airdrop排行榜
      </h2>
    </div>

    <!-- Desktop Layout -->
    <v-card class="d-none d-md-block bg-cos-grey-card pa-4" elevation="0" style="min-height: 400px;">
      <v-row>
        <v-col 
          v-for="user in leaderboardData"
          :key="user.rank"
          cols="6"
          class="pa-2"
        >
          <v-card class="bg-cos-grey-light pa-4" elevation="0">
            <div class="d-flex align-center">
              <!-- Rank -->
              <div class="text-h5 font-weight-regular black--text text--darken-3 mr-4" style="min-width: 32px;">
                {{ user.rank }}
              </div>
              
              <!-- Avatar -->
              <v-avatar size="64" class="mr-4">
                <v-img :src="user.avatar" :alt="user.name"></v-img>
              </v-avatar>
              
              <!-- Name -->
              <div class="flex-grow-1">
                <div class="text-body-1 black--text text--darken-3">
                  {{ user.name }}
                </div>
              </div>
              
              <!-- Amount -->
              <div class="text-right">
                <div class="text-h5 cos-blue font-weight-regular">
                  {{ user.amount.split(',')[0] }},{{ user.amount.split(',')[1] }}
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
        <h3 class="text-body-1 font-weight-bold">Airdrop排行榜</h3>
      </v-card-title>
      
      <!-- List Items -->
      <v-list>
        <v-list-item
          v-for="(user, index) in leaderboardData"
          :key="user.rank"
          :class="{ 'border-b': index < leaderboardData.length - 1 }"
        >
          <template v-slot:prepend>
            <!-- Rank/Badge -->
            <div class="mr-4" style="width: 28px;">
              <v-img 
                v-if="user.badge"
                :src="`https://api.builder.io/api/v1/image/assets/TEMP/badge-${user.badge}.png`" 
                width="28"
                height="28"
                @error="handleImageError"
              />
              <div
                v-else
                class="text-h5 font-weight-bold black--text text--lighten-1 text-center"
              >
                {{ user.rank }}
              </div>
            </div>
            
            <!-- Avatar -->
            <v-avatar size="24" class="mr-2">
              <v-img :src="user.avatar" :alt="user.name"></v-img>
            </v-avatar>
          </template>

          <!-- Name -->
          <v-list-item-title class="text-body-2 black--text text--lighten-1">
            {{ user.name }}
          </v-list-item-title>

          <template v-slot:append>
            <!-- Amount -->
            <div class="text-body-2 black--text text--lighten-1">
              {{ user.amount }}
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

interface LeaderboardUser {
  rank: number
  name: string
  amount: string
  avatar: string
  badge?: string
}

const currentPage = ref(1)

const leaderboardData: LeaderboardUser[] = [
  {
    rank: 1,
    name: "CHRISTIANA",
    amount: "999,999",
    avatar: "https://i.pravatar.cc/150?img=1",
    badge: "1st",
  },
  {
    rank: 2,
    name: "Collie",
    amount: "999,999",
    avatar: "https://i.pravatar.cc/150?img=2",
    badge: "2nd",
  },
  {
    rank: 3,
    name: "Ruby",
    amount: "999,999",
    avatar: "https://i.pravatar.cc/150?img=3",
    badge: "3rd",
  },
  {
    rank: 4,
    name: "Max",
    amount: "999,999",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    rank: 5,
    name: "Luna",
    amount: "999,999",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    rank: 6,
    name: "Buddy",
    amount: "999,999",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    rank: 7,
    name: "Lucy",
    amount: "999,999",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    rank: 8,
    name: "Bailey",
    amount: "999,999",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    rank: 9,
    name: "Sadie",
    amount: "999,999",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    rank: 10,
    name: "Daisy",
    amount: "999,999",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
]

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  if (target.parentElement) {
    target.parentElement.style.display = 'none'
  }
}
</script>

<style scoped>
.border-b {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
