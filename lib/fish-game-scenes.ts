export type FishSceneKey = "kitchen" | "supermarket" | "pond" | "temple";

export type FishScene = {
  key: FishSceneKey;
  emoji: string;
  label: string;
  prompt: string;
};

export const FISH_GAME_SCENES: FishScene[] = [
  { key: "kitchen", emoji: "🍳", label: "厨房", prompt: "如果此刻你在厨房砧板上,你会是什么鱼?" },
  { key: "supermarket", emoji: "🛒", label: "超市", prompt: "如果你在超市鱼摊上待售,你会是什么鱼?" },
  { key: "pond", emoji: "🎣", label: "鱼塘", prompt: "如果你自由自在地待在鱼塘里,你会是什么鱼?" },
  { key: "temple", emoji: "🙏", label: "佛堂放生", prompt: "如果你在佛堂被虔诚放生,你会是什么鱼?" },
];
