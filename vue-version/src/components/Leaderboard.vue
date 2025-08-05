<template>
  <div>
    <!-- Section Title -->
    <div class="flex items-center gap-2 mb-6">
      <div class="w-9 h-9 text-cos-amber">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor">
          <path d="M30 21H6V12H13.62L10.5 16.245L12.93 18L16.5 13.14L18 11.1L19.5 13.14L23.07 18L25.5 16.245L22.38 12H30M30 28.5H6V25.5H30M13.5 6C13.8978 6 14.2794 6.15804 14.5607 6.43934C14.842 6.72064 15 7.10218 15 7.5C15 7.89782 14.842 8.27936 14.5607 8.56066C14.2794 8.84196 13.8978 9 13.5 9C13.1022 9 12.7206 8.84196 12.4393 8.56066C12.158 8.27936 12 7.89782 12 7.5C12 7.10218 12.158 6.72064 12.4393 6.43934C12.7206 6.15804 13.1022 6 13.5 6ZM22.5 6C22.8978 6 23.2794 6.15804 23.5607 6.43934C23.842 6.72064 24 7.10218 24 7.5C24 7.89782 23.842 8.27936 23.5607 8.56066C23.2794 8.84196 22.8978 9 22.5 9C22.1022 9 21.7206 8.84196 21.4393 8.56066C21.158 8.27936 21 7.89782 21 7.5C21 7.10218 21.158 6.72064 21.4393 6.43934C21.7206 6.15804 22.1022 6 22.5 6ZM30 9H26.73C26.895 8.535 27 8.025 27 7.5C27 6.30653 26.5259 5.16193 25.682 4.31802C24.8381 3.47411 23.6935 3 22.5 3C20.925 3 19.56 3.81 18.75 5.025L18 6L17.25 5.01C16.44 3.81 15.075 3 13.5 3C12.3065 3 11.1619 3.47411 10.318 4.31802C9.47411 5.16193 9 6.30653 9 7.5C9 8.025 9.105 8.535 9.27 9H6C4.335 9 3 10.335 3 12V28.5C3 30.165 4.335 31.5 6 31.5H30C31.665 31.5 33 30.165 33 28.5V12C33 10.335 31.665 9 30 9Z"/>
        </svg>
      </div>
      <h2 class="text-xl md:text-2xl font-normal text-black/87">
        Airdrop排行榜
      </h2>
    </div>

    <!-- Desktop Layout -->
    <div class="hidden md:block">
      <div class="bg-cos-grey-card rounded p-4 min-h-96">
        <div class="grid grid-cols-2 gap-2">
          <div
            v-for="user in leaderboardData"
            :key="user.rank"
            class="bg-cos-grey-light p-4 rounded flex items-center gap-4"
          >
            <!-- Rank -->
            <div class="w-8 h-8 flex items-center justify-center text-black/87 text-xl font-normal">
              {{ user.rank }}
            </div>

            <!-- Avatar -->
            <div class="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
              <img
                :src="user.avatar"
                :alt="user.name"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Name -->
            <div class="flex-1 min-w-0">
              <div class="text-black/87 text-base truncate">
                {{ user.name }}
              </div>
            </div>

            <!-- Amount -->
            <div class="text-right flex-shrink-0">
              <div class="text-cos-blue text-xl font-normal">
                {{ user.amount.split(',')[0] }},{{ user.amount.split(',')[1] }}
              </div>
              <div class="text-black/38 text-sm">COS</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Layout -->
    <div class="md:hidden">
      <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <!-- Header -->
        <div class="bg-gray-400 px-4 py-3">
          <h3 class="text-white font-bold text-base">Airdrop排行榜</h3>
        </div>
        
        <!-- List Items -->
        <div class="p-4 space-y-3">
          <div
            v-for="user in leaderboardData"
            :key="user.rank"
            class="flex items-center gap-4 py-1 border-b border-gray-100 last:border-b-0"
          >
            <!-- Rank/Badge -->
            <div class="w-7 h-7 flex items-center justify-center">
              <img 
                v-if="user.badge"
                :src="`https://api.builder.io/api/v1/image/assets/TEMP/badge-${user.badge}.png`" 
                :alt="user.badge"
                class="w-7 h-7"
                @error="handleImageError"
              />
              <div
                :class="`w-7 h-7 flex items-center justify-center text-black/60 text-xl font-bold ${user.badge ? 'hidden' : ''}`"
              >
                {{ user.rank }}
              </div>
            </div>

            <!-- Avatar -->
            <div class="w-6 h-6 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
              <img
                :src="user.avatar"
                :alt="user.name"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Name -->
            <div class="flex-1 min-w-0">
              <div class="text-black/60 text-sm truncate">
                {{ user.name }}
              </div>
            </div>

            <!-- Amount -->
            <div class="text-right flex-shrink-0">
              <div class="text-black/60 text-sm">{{ user.amount }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center items-center gap-2 mt-4">
      <button class="w-10 h-10 flex items-center justify-center bg-gray-100 rounded shadow-sm">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="text-gray-500">
          <path d="M15.41 16.58L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.58Z" fill="currentColor"/>
        </svg>
      </button>
      
      <button
        v-for="page in [1, 2, 3]"
        :key="page"
        @click="currentPage = page"
        :class="`w-10 h-10 flex items-center justify-center rounded shadow-sm text-sm ${
          currentPage === page
            ? 'bg-cos-blue text-white'
            : 'bg-gray-100 text-black/87'
        }`"
      >
        {{ page }}
      </button>
      
      <button class="w-10 h-10 flex items-center justify-center bg-gray-100 rounded shadow-sm">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="text-gray-500">
          <path d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z" fill="currentColor"/>
        </svg>
      </button>
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
  target.style.display = 'none'
  const nextElement = target.nextElementSibling as HTMLElement
  if (nextElement) {
    nextElement.style.display = 'flex'
  }
}
</script>
