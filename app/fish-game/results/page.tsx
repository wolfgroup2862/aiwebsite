import Link from "next/link";
import { headers } from "next/headers";
import { FISH_GAME_SCENES } from "@/lib/fish-game-scenes";
import type { FishSubmission } from "@/lib/fish-game-store";
import "../fish-game.css";

export const dynamic = "force-dynamic";

async function loadResults(): Promise<{ submissions: FishSubmission[]; persistent: boolean }> {
  const headersList = await headers();
  const host = headersList.get("host") ?? "localhost";
  const protocol = host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https";

  const response = await fetch(`${protocol}://${host}/api/fish-game`, { cache: "no-store" });
  if (!response.ok) {
    return { submissions: [], persistent: false };
  }
  return response.json();
}

export default async function FishGameResultsPage() {
  const { submissions, persistent } = await loadResults();

  return (
    <div className="fishgame-shell">
      <nav className="fishgame-nav">
        <Link href="/fish-game">← 回去填写</Link>
        <Link href="/">返回主页</Link>
      </nav>
      <header className="fishgame-hero">
        <p className="fishgame-kicker">大家的答案</p>
        <h1>已有 {submissions.length} 人参与</h1>
        <p className="fishgame-lead">
          看看大家在厨房、超市、鱼塘、佛堂里,分别把自己想象成了什么鱼。
        </p>
        {!persistent && (
          <p className="fishgame-note">
            提示:当前还没有连接持久化数据库,答案暂时只保存在这次运行的内存里,重新部署或服务器重启后会清空。要让 100 人的答案长期保存下来,请在 Vercel 项目的 Storage 里添加一个 Redis(Upstash)数据库。
          </p>
        )}
      </header>
      {submissions.length === 0 ? (
        <p className="fishgame-empty">
          还没有人填写,<Link href="/fish-game">来当第一个吧</Link>。
        </p>
      ) : (
        <div className="fishgame-results-grid">
          {submissions.map((submission) => (
            <article className="fishgame-result-card" key={submission.id}>
              <strong>{submission.name}</strong>
              <ul>
                {FISH_GAME_SCENES.map((scene) => (
                  <li key={scene.key}>
                    <span className="fishgame-result-scene">
                      {scene.emoji} {scene.label}
                    </span>
                    <span className="fishgame-result-answer">{submission[scene.key]}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
