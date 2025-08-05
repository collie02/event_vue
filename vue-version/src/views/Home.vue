<template>
  <v-app class="bg-cos-grey-bg">
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <v-main style="padding-top: 64px">
      <!-- Hero Section - Full Width -->
      <HeroSection />

      <!-- Container for Content -->
      <v-container class="py-8">
        <!-- Statistics Cards -->
        <StatsCards />

        <!-- Activity Description -->
        <v-card class="pa-4 mb-6" elevation="0" color="transparent">
          <p
            class="text-body-2 text-md-body-1 black--text text--lighten-1 mb-6"
            style="line-height: 1.6"
          >
            感謝大家一路以來的熱情參與，截至目前為止，平台已累計發送超過 1300 萬
            COS 的
            Airdrop。每一次的互動與交流都讓COS生態更加活絡，也讓社群活躍度大��提升。
          </p>
          <p
            class="text-body-2 text-md-body-1 black--text text--lighten-1 mb-8"
            style="line-height: 1.6"
          >
            為了回饋大家對COS的支持，我們推出全新抽獎活動。活動期間內，只要發送任一
            Airdrop 或 Quiz（限使用 COS），即可獲得抽獎資格。馬上發送
            Airdrop，下一個幸運得主可能就是你。
          </p>

          <!-- Join Button -->
          <div class="d-flex justify-center mb-8">
            <v-btn
              color="primary"
              size="large"
              class="text-none font-weight-medium px-8"
            >
              立即參加
            </v-btn>
          </div>
        </v-card>

        <!-- Divider -->
        <v-divider class="mb-8"></v-divider>

        <!-- Activity Description -->
        <ActivityDescription />

        <!-- Alert Notifications -->
        <AlertNotifications />

        <!-- Divider -->
        <v-divider class="mb-8"></v-divider>

        <!-- Leaderboard -->
        <Leaderboard />

        <!-- Divider -->
        <v-divider class="mb-8"></v-divider>

        <!-- Winners Section -->
        <WinnersSection />

        <!-- Final Join Button -->
        <div class="d-flex justify-center mt-8">
          <v-btn
            color="primary"
            size="large"
            :block="$vuetify.display.mobile"
            class="text-none font-weight-medium px-8"
          >
            立即參加
          </v-btn>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import HeroSection from "@/components/HeroSection.vue";
import ActivityDescription from "@/components/ActivityDescription.vue";
import StatsCards from "@/components/StatsCards.vue";
import AlertNotifications from "@/components/AlertNotifications.vue";
import Leaderboard from "@/components/Leaderboard.vue";
import WinnersSection from "@/components/WinnersSection.vue";
</script>
