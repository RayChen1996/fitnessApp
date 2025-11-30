import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";

export type WorkoutSummary = {
  id: string;
  label: string;
  title: string;
  cover: string;
  level: string;
  difficulty: string;
  focus: string;
  durationLabel: string;
  badges: string[];
};

type Props = {
  workout: WorkoutSummary;
  accent?: boolean;
};

const WorkoutCard: React.FC<Props> = ({ workout, accent }) => {
  return (
    <View style={[styles.card, accent && styles.cardAccent]}> 
      <View style={styles.imageWrapper}>
        <Image source={workout.cover} style={styles.cover} contentFit="cover" />
        <View style={[styles.labelPill, accent && styles.labelPillAccent]}>
          <Text
            style={[
              styles.labelText,
              accent && { color: "#131313" },
            ]}
          >
            {workout.label}
          </Text>
        </View>
      </View>
      <Text style={styles.title}>{workout.title}</Text>

      <View style={styles.metaRow}>
        <View style={styles.metaBlock}>
          <Text style={styles.metaHeading}>等級</Text>
          <Text style={styles.metaValue}>{workout.level}</Text>
        </View>
        <View style={styles.metaBlock}>
          <Text style={styles.metaHeading}>強度</Text>
          <View style={styles.badgeRow}>
            <View style={styles.dot} />
            <Text style={styles.metaValue}>{workout.difficulty}</Text>
          </View>
        </View>
        <View style={styles.metaBlock}>
          <Text style={styles.metaHeading}>部位</Text>
          <Text style={styles.metaValue}>{workout.focus}</Text>
        </View>
      </View>

      <View style={styles.tagRow}>
        {workout.badges.map((tag) => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      <View style={styles.footerRow}>
        <View style={styles.durationPill}>
          <Feather name="clock" size={12} color="#0f0f11" />
          <Text style={styles.durationText}>{workout.durationLabel}</Text>
        </View>
        <View style={styles.saveBadge}>
          <Feather name="bookmark" size={14} color="#ff9000" />
          <Text style={styles.saveText}>+ 合集</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#141519",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#1f2126",
    overflow: "hidden",
    paddingBottom: 12,
  },
  cardAccent: {
    borderColor: "#ff9000",
  },
  imageWrapper: {
    height: 180,
    position: "relative",
  },
  cover: {
    width: "100%",
    height: "100%",
  },
  labelPill: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#141519cc",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#1f2126",
  },
  labelPillAccent: {
    backgroundColor: "#ff9000",
    borderColor: "#ff9000",
  },
  labelText: {
    color: "#f1f1f1",
    fontWeight: "700",
    fontSize: 12,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    marginTop: 10,
    paddingHorizontal: 12,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginTop: 10,
  },
  metaBlock: {
    flex: 1,
    gap: 4,
  },
  metaHeading: {
    color: "#6f7684",
    fontSize: 12,
  },
  metaValue: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
  badgeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: "#ff9000",
    borderRadius: 6,
  },
  tagRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  tag: {
    backgroundColor: "#1f2126",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
  },
  tagText: {
    color: "#9fa3ab",
    fontSize: 12,
    fontWeight: "700",
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginTop: 14,
  },
  durationPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#ff9000",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  durationText: {
    color: "#0f0f11",
    fontWeight: "800",
    fontSize: 13,
  },
  saveBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: "#1f2126",
  },
  saveText: {
    color: "#ff9000",
    fontWeight: "700",
  },
});

export default WorkoutCard;
