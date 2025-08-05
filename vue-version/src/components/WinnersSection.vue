<template>
  <div>
    <!-- Section Title -->
    <div class="flex items-center gap-2 mb-6">
      <div class="w-11 h-11 text-cos-amber">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="currentColor">
          <path d="M27.8669 19.6167L30.4336 29.3333L22.0003 22.3667L13.5669 29.3333L16.1336 19.8L8.43359 13.3833L18.3336 12.8333L22.0003 3.66666L25.6669 12.8333L35.5669 13.3833L27.8669 19.6167ZM25.6669 34.8333H23.8336V29.3333L22.0003 27.5L20.1669 29.3333V34.8333H18.3336C16.3169 34.8333 14.6669 36.4833 14.6669 38.5V40.3333H29.3336V38.5C29.3336 36.4833 27.7019 34.8333 25.6669 34.8333Z"/>
        </svg>
      </div>
      <div class="flex-1">
        <h2 class="text-xl md:text-2xl font-normal text-black/87">
          本期幸運得主(活動結束後顯示)
        </h2>
        <p class="text-sm md:text-base text-black/60">
          獎勵於 2025/6/25 23:59 (UTC+0) 發放
        </p>
      </div>
    </div>

    <!-- Desktop Layout -->
    <div class="hidden md:block">
      <div class="bg-cos-grey-card rounded p-4 min-h-96">
        <div class="grid grid-cols-2 gap-2">
          <div
            v-for="winner in winnersData"
            :key="winner.rank"
            class="bg-cos-grey-light p-4 rounded flex items-center gap-4"
          >
            <!-- Rank -->
            <div class="w-8 h-8 flex items-center justify-center text-black/87 text-xl font-normal">
              {{ winner.rank }}
            </div>

            <!-- Avatar -->
            <div class="w-16 h-16 rounded-full bg-gray-400 flex-shrink-0" />

            <!-- Name -->
            <div class="flex-1 min-w-0">
              <div class="text-black/87 text-base truncate">
                {{ winner.name }}
              </div>
            </div>

            <!-- Amount -->
            <div class="text-right flex-shrink-0">
              <div class="text-cos-blue text-xl font-normal">
                {{ winner.amount.split(' ')[0] }}
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
          <h3 class="text-white font-bold text-base">本期幸運得主</h3>
        </div>
        
        <!-- List Items -->
        <div class="p-4 space-y-3">
          <div
            v-for="winner in winnersData"
            :key="winner.rank"
            class="flex items-center gap-4 py-1 border-b border-gray-100 last:border-b-0"
          >
            <!-- Rank -->
            <div class="w-7 h-8 flex items-center justify-center text-black/60 text-xl font-bold">
              {{ winner.rank }}
            </div>

            <!-- Avatar -->
            <div class="w-6 h-6 rounded-full bg-gray-400 flex-shrink-0" />

            <!-- Name -->
            <div class="flex-1 min-w-0">
              <div class="text-black/60 text-sm truncate">
                {{ winner.name }}
              </div>
            </div>

            <!-- Amount -->
            <div class="text-right flex-shrink-0">
              <div class="text-black/60 text-sm">{{ winner.amount }}</div>
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
