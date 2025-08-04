import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ActivityDescription from "../components/ActivityDescription";
import StatsCards from "../components/StatsCards";
import AlertNotifications from "../components/AlertNotifications";
import Leaderboard from "../components/Leaderboard";

export default function Index() {
  return (
    <div className="min-h-screen bg-cos-grey-bg">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-16">
        {/* Container */}
        <div className="max-w-6xl mx-auto px-8 py-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Activity Description */}
          <ActivityDescription />

          {/* Statistics Cards */}
          <StatsCards />

          {/* Alert Notifications */}
          <AlertNotifications />

          {/* Leaderboard */}
          <Leaderboard />
        </div>
      </main>
    </div>
  );
}
