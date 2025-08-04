<template>
  <div class="min-h-screen bg-cos-grey-bg">
    <!-- Header -->
    <Header />
    
    <!-- Main Content -->
    <main class="pt-16">
      <!-- Container -->
      <div class="max-w-6xl mx-auto px-8 py-16">
        <!-- Hero Section -->
        <HeroSection />
        
        <!-- Activity Description -->
        <ActivityDescription />
        
        <!-- Statistics Cards -->
        <StatsCards />
        
        <!-- Alert Notifications -->
        <AlertNotifications />
        
        <!-- Leaderboard -->
        <Leaderboard />
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
</script>

<style scoped>
/* 頁面專用樣式可以寫在這裡 */
</style>
