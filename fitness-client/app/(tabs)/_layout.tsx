import { Tabs } from "expo-router";
import React from "react";

import ActivityIcon from "@/assets/icons/Calendar.svg";
import FoodIcon from "@/assets/icons/food.svg";
import HomeIcon from "@/assets/icons/home.svg";
import TrainIcon from "@/assets/icons/train.svg";
import CommunityIcon from "@/assets/icons/Users.svg";
import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <HomeIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="training"
        options={{
          title: "訓練",
          tabBarIcon: ({ color }) => (
            <TrainIcon width={28} height={28} fill={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="active"
        options={{
          title: "活動",
          tabBarIcon: ({ color }) => (
            <ActivityIcon width={28} height={28} fill={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="community"
        options={{
          title: "社群",
          tabBarIcon: ({ color }) => (
            <CommunityIcon width={28} height={28} fill={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="foodie"
        options={{
          title: "食譜",
          tabBarIcon: ({ color }) => (
            <FoodIcon width={28} height={28} fill={color} />
          ),
        }}
      />
    </Tabs>
  );
}
