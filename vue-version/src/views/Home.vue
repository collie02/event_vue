<template>
  <div class="min-h-screen bg-cos-grey-bg">
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="pt-16">
      <!-- Hero Section - Full Width -->
      <HeroSection />

      <!-- Container for Content -->
      <div class="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <!-- Statistics Cards -->
        <StatsCards />

        <!-- Activity Description -->
        <div class="py-4">
          <p class="text-sm md:text-base text-black/60 leading-relaxed mb-6">
            感謝大家一路以來的熱情參與，截至目前為止，平台已累計發送超過 1300 萬 COS 的 Airdrop。每一次的互動與交流都讓COS生態更加活絡，也讓社群活躍度大幅提升。
          </p>
          <p class="text-sm md:text-base text-black/60 leading-relaxed mb-8">
            為了回饋大家對COS的支持，我們推出全新抽獎活動。活動期間內，只要發送任一 Airdrop 或 Quiz（限使用 COS），即可獲得抽獎資格。馬上發送 Airdrop，下一個幸運得主可能就是你。
          </p>

          <!-- Join Button -->
          <div class="flex justify-center mb-8">
            <button class="bg-cos-blue hover:bg-cos-blue/90 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide rounded">
              立即參加
            </button>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-black/12 mb-8" />

        <!-- Activity Description -->
        <ActivityDescription />

        <!-- Alert Notifications -->
        <AlertNotifications />

        <!-- Divider -->
        <div class="border-t border-black/12 mb-8" />

        <!-- Leaderboard -->
        <Leaderboard />

        <!-- Divider -->
        <div class="border-t border-black/12 mb-8" />

        <!-- Winners Section -->
        <WinnersSection />

        <!-- Final Join Button -->
        <div class="flex justify-center mt-8">
          <button class="bg-cos-blue hover:bg-cos-blue/90 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide w-full md:w-auto rounded">
            立即參加
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import HeroSection from '@/components/HeroSection.vue'
import ActivityDescription from '@/components/ActivityDescription.vue'
import StatsCards from '@/components/StatsCards.vue'
import AlertNotifications from '@/components/AlertNotifications.vue'
import Leaderboard from '@/components/Leaderboard.vue'
import WinnersSection from '@/components/WinnersSection.vue'
</script>

<style scoped>
/* 頁面專用樣式可以寫在這裡 */
</style>
