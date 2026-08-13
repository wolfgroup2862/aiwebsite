import { NextResponse } from "next/server";
import { addSubmission, getSubmissions, isPersistenceConfigured } from "@/lib/fish-game-store";
import { FISH_GAME_SCENES, type FishSceneKey } from "@/lib/fish-game-scenes";

export const dynamic = "force-dynamic";

const NAME_MAX = 20;
const ANSWER_MAX = 40;

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, max);
}

export async function GET() {
  const submissions = await getSubmissions();
  return NextResponse.json({ submissions, persistent: isPersistenceConfigured() });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "请求格式有误" }, { status: 400 });
  }

  const record = body as Record<string, unknown>;
  const answers = {} as Record<FishSceneKey, string>;

  for (const scene of FISH_GAME_SCENES) {
    const value = clean(record[scene.key], ANSWER_MAX);
    if (!value) {
      return NextResponse.json({ error: `请填写「${scene.label}」的答案` }, { status: 400 });
    }
    answers[scene.key] = value;
  }

  const name = clean(record.name, NAME_MAX) || "匿名玩家";

  const submission = await addSubmission({ ...answers, name });
  return NextResponse.json({ submission }, { status: 201 });
}
