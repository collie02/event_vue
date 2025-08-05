<template>
  <v-app-bar color="bg-cos-grey-bg" elevation="2" fixed height="64">
    <!-- Menu Button -->
    <v-app-bar-nav-icon>
      <v-icon>mdi-menu</v-icon>
    </v-app-bar-nav-icon>

    <!-- Logo - Hidden on Mobile -->
    <div class="d-none d-md-flex align-center mx-4">
      <v-chip color="primary" text-color="white" size="small" class="mr-2">
        COS
      </v-chip>
      <span class="text-h6 font-weight-medium">TV</span>
    </div>

    <!-- Title -->
    <v-toolbar-title class="flex-grow-1 flex-md-grow-0">
      Channel VIP
    </v-toolbar-title>

    <!-- Spacer for desktop -->
    <v-spacer class="d-none d-md-flex"></v-spacer>

    <!-- Right Actions -->
    <div class="d-flex align-center">
      <!-- App Grid Button - Desktop Only -->
      <v-btn icon class="d-none d-md-flex">
        <v-icon>mdi-apps</v-icon>
      </v-btn>

      <!-- Search Button - Mobile Only -->
      <v-btn icon class="d-flex d-md-none">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <!-- Profile Button - Desktop Only -->
      <v-btn icon color="grey-lighten-1" class="d-none d-md-flex">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
// Header component logic
</script>
