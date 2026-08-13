"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { FISH_GAME_SCENES, type FishSceneKey } from "@/lib/fish-game-scenes";
import "./fish-game.css";

const emptyAnswers = FISH_GAME_SCENES.reduce((acc, scene) => {
  acc[scene.key] = "";
  return acc;
}, {} as Record<FishSceneKey, string>);

export default function FishGamePage() {
  const [name, setName] = useState("");
  const [answers, setAnswers] = useState<Record<FishSceneKey, string>>(emptyAnswers);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const response = await fetch("/api/fish-game", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, ...answers }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      setError(typeof data.error === "string" ? data.error : "提交失败,请再试一次");
      setStatus("error");
      return;
    }

    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="fishgame-shell">
        <FishGameNav />
        <div className="fishgame-done">
          <p className="fishgame-kicker">提交成功</p>
          <h1>谢谢你,{name || "匿名玩家"}!</h1>
          <p>你的答案已经记录下来了。把这个页面的链接分享给朋友,凑够 100 个人一起来玩。</p>
          <div className="fishgame-actions">
            <Link className="fishgame-primary" href="/fish-game/results">查看所有人的答案</Link>
            <button
              type="button"
              className="fishgame-secondary"
              onClick={() => {
                setStatus("idle");
                setAnswers(emptyAnswers);
                setName("");
              }}
            >
              再填一份
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fishgame-shell">
      <FishGameNav />
      <header className="fishgame-hero">
        <p className="fishgame-kicker">一条鱼的自我修养</p>
        <h1>如果我是一条鱼</h1>
        <p className="fishgame-lead">
          同一条鱼,出现在不同的地方,可能会变成完全不一样的鱼。想象一下,如果你是一条鱼,在下面这几个场景里,你会是什么鱼?写下你的答案,分享给朋友,看看大家都怎么填。
        </p>
      </header>
      <form className="fishgame-form" onSubmit={handleSubmit}>
        <label className="fishgame-field fishgame-name-field">
          <span>你的名字 / 昵称</span>
          <input
            type="text"
            value={name}
            maxLength={20}
            placeholder="例如:阿伟"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <div className="fishgame-scene-grid">
          {FISH_GAME_SCENES.map((scene) => (
            <label className="fishgame-field fishgame-scene-card" key={scene.key}>
              <span className="fishgame-scene-emoji" aria-hidden="true">{scene.emoji}</span>
              <span className="fishgame-scene-label">{scene.label}</span>
              <span className="fishgame-scene-prompt">{scene.prompt}</span>
              <input
                type="text"
                required
                maxLength={40}
                placeholder="写下你的答案..."
                value={answers[scene.key]}
                onChange={(event) =>
                  setAnswers((prev) => ({ ...prev, [scene.key]: event.target.value }))
                }
              />
            </label>
          ))}
        </div>
        {error && <p className="fishgame-error">{error}</p>}
        <button className="fishgame-primary" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "提交中..." : "提交我的答案"}
        </button>
      </form>
    </div>
  );
}

function FishGameNav() {
  return (
    <nav className="fishgame-nav">
      <Link href="/">← 返回主页</Link>
      <Link href="/fish-game/results">查看结果 →</Link>
    </nav>
  );
}
