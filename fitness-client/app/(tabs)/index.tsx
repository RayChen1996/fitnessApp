import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import WorkoutCard, { WorkoutSummary } from "@/components/workout-card";

type FilterChip = {
  id: string;
  label: string;
};

const primaryFilters: FilterChip[] = [
  { id: "bodyweight", label: "徒手" },
  { id: "equipment", label: "器材" },
  { id: "quiet", label: "無噪音" },
  { id: "yoga", label: "瑜珈" },
  { id: "female", label: "女性" },
  { id: "male", label: "男性" },
  { id: "beginner", label: "入門" },
  { id: "advanced", label: "高階" },
];

const durationFilters: FilterChip[] = [
  { id: "5", label: "5 mins" },
  { id: "10", label: "10 mins" },
  { id: "20", label: "20 mins" },
  { id: "35", label: "35 mins" },
  { id: "45", label: "45 mins" },
  { id: "60", label: "60 mins" },
];

const workouts: WorkoutSummary[] = [
  {
    id: "chest-01",
    label: "胸肌菜單",
    title: "增大胸肌菜單",
    cover:
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1000&q=80",
    level: "入門",
    difficulty: "入門",
    focus: "胸肌",
    durationLabel: "10 mins",
    badges: ["胸肌"],
  },
  {
    id: "core-01",
    label: "女生訓練菜單",
    title: "韓國女藝人冰山美人腹肌菜單",
    cover:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1000&q=80",
    level: "中級",
    difficulty: "較難",
    focus: "核心",
    durationLabel: "10 mins",
    badges: ["女生", "冰山美人"],
  },
  {
    id: "full-body-01",
    label: "全身菜單",
    title: "快準狠燃脂菜單",
    cover:
      "https://images.unsplash.com/photo-1546484959-f9a9c6c1ff64?auto=format&fit=crop&w=1000&q=80",
    level: "中級",
    difficulty: "較難",
    focus: "全身",
    durationLabel: "35 mins",
    badges: ["燃脂"],
  },
  {
    id: "shoulder-01",
    label: "女生訓練菜單",
    title: "韓國女藝人甜美圓肩菜單",
    cover:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=80",
    level: "中級",
    difficulty: "較難",
    focus: "肩膀",
    durationLabel: "35 mins",
    badges: ["女生", "甜美圓肩"],
  },
  {
    id: "abs-quick",
    label: "腹肌菜單",
    title: "超短 10 分鐘腹肌菜單",
    cover:
      "https://images.unsplash.com/photo-1541537103745-ea3429c65dc7?auto=format&fit=crop&w=1000&q=80",
    level: "入門",
    difficulty: "入門",
    focus: "腹肌",
    durationLabel: "10 mins",
    badges: ["腹肌", "零器材"],
  },
];

export default function HomeScreen() {
  const [selectedFilter, setSelectedFilter] = useState<string>("bodyweight");
  const [selectedDuration, setSelectedDuration] = useState<string>("10");

  const sections = useMemo(
    () => [
      {
        id: "all",
        title: "所有鍛煉列表",
        caption: "連假也健身",
        accent: false,
        data: workouts,
      },
      {
        id: "featured",
        title: "精選鍛煉菜單列表",
        caption: "韓國藝人菜單",
        accent: true,
        data: workouts,
      },
    ],
    [],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topBar}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>R</Text>
          </View>
          <View style={styles.locationSearch}>
            <Ionicons name="location-outline" size={18} color="#ff9000" />
            <View style={styles.locationMeta}>
              <Text style={styles.locationTitle}>華山市場</Text>
              <Text style={styles.locationSub}>45 mins</Text>
            </View>
            <View style={{ flex: 1 }} />
            <Feather name="search" size={18} color="#9fa3ab" />
          </View>
          <Pressable style={styles.tuneButton}>
            <MaterialCommunityIcons
              name="tune-vertical"
              size={22}
              color="#fff"
            />
          </Pressable>
        </View>

        <View style={styles.headingRow}>
          <View>
            <Text style={styles.heading}>菜單列表</Text>
            <Text style={styles.subheading}>尋找適合你的鍛煉計畫</Text>
          </View>
          <Pressable style={styles.orderChip}>
            <Text style={styles.orderText}>熱門度</Text>
            <MaterialCommunityIcons
              name="chevron-down"
              size={18}
              color="#ff9000"
            />
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
        >
          {primaryFilters.map((filter) => (
            <Pressable
              key={filter.id}
              style={[
                styles.filterChip,
                selectedFilter === filter.id && styles.filterChipActive,
              ]}
              onPress={() => setSelectedFilter(filter.id)}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === filter.id && styles.filterTextActive,
                ]}
              >
                {filter.label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
        >
          {durationFilters.map((filter) => (
            <Pressable
              key={filter.id}
              style={[
                styles.timeChip,
                selectedDuration === filter.id && styles.timeChipActive,
              ]}
              onPress={() => setSelectedDuration(filter.id)}
            >
              <Text
                style={[
                  styles.timeText,
                  selectedDuration === filter.id && styles.timeTextActive,
                ]}
              >
                {filter.label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {sections.map((section) => (
          <View key={section.id} style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <View style={styles.sectionBadge}>
                <Text style={styles.sectionBadgeText}>{section.caption}</Text>
              </View>
            </View>
            <View style={styles.cardGrid}>
              {section.data.map((item) => (
                <WorkoutCard
                  key={`${section.id}-${item.id}`}
                  workout={item}
                  accent={section.accent}
                />
              ))}
            </View>
          </View>
        ))}

        <View style={styles.summaryStrip}>
          <View style={styles.summaryIconWrap}>
            <Image
              source="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=240&q=80"
              style={styles.summaryAvatar}
            />
          </View>
          <View style={styles.summaryTextWrap}>
            <Text style={styles.summaryTitle}>李玟婷</Text>
            <Text style={styles.summarySubtitle}>這個暑假雕塑漂亮的身材</Text>
            <Text style={styles.summarySubtitle}>7月減脂計畫</Text>
          </View>
          <Pressable style={styles.summaryBadge}>
            <Text style={styles.summaryBadgeText}>最愛 68,799</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0f0f11",
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ff9000",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#0f0f11",
    fontWeight: "800",
  },
  locationSearch: {
    flex: 1,
    marginHorizontal: 12,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#1a1b1f",
    borderWidth: 1,
    borderColor: "#25262b",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  locationMeta: {
    gap: 2,
  },
  locationTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  locationSub: {
    color: "#9fa3ab",
    fontSize: 12,
  },
  tuneButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#25262b",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#2e3036",
  },
  headingRow: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 24,
  },
  subheading: {
    color: "#9fa3ab",
    marginTop: 4,
  },
  orderChip: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ff9000",
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#1a1b1f",
    gap: 2,
  },
  orderText: {
    color: "#ff9000",
    fontWeight: "700",
  },
  filterRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 14,
    paddingRight: 8,
  },
  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: "#1a1b1f",
    borderWidth: 1,
    borderColor: "#25262b",
  },
  filterChipActive: {
    backgroundColor: "#ff9000",
    borderColor: "#ff9000",
  },
  filterText: {
    color: "#c5c8ce",
    fontWeight: "600",
  },
  filterTextActive: {
    color: "#0f0f11",
  },
  timeChip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: "#191919",
    borderWidth: 1,
    borderColor: "#25262b",
  },
  timeChipActive: {
    backgroundColor: "#ff9000",
    borderColor: "#ff9000",
  },
  timeText: {
    color: "#9fa3ab",
    fontWeight: "600",
  },
  timeTextActive: {
    color: "#0f0f11",
  },
  section: {
    marginTop: 22,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  sectionTitle: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 18,
  },
  sectionBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#25262b",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#303238",
  },
  sectionBadgeText: {
    color: "#9fa3ab",
    fontWeight: "700",
  },
  cardGrid: {
    gap: 12,
  },
  summaryStrip: {
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1b1f",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#25262b",
    padding: 14,
    gap: 12,
  },
  summaryIconWrap: {
    width: 50,
    height: 50,
    borderRadius: 12,
    overflow: "hidden",
  },
  summaryAvatar: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  summaryTextWrap: {
    flex: 1,
    gap: 2,
  },
  summaryTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  summarySubtitle: {
    color: "#9fa3ab",
    fontSize: 12,
  },
  summaryBadge: {
    backgroundColor: "#ff9000",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
  },
  summaryBadgeText: {
    color: "#0f0f11",
    fontWeight: "800",
  },
});
