import AgentPage, { agentMetadata } from "../_agent/AgentPage";
import { LISTINGS, NOTES, PROFILE } from "./profile";

export const metadata = agentMetadata(PROFILE, "/wilson");

export default function Page() {
  return <AgentPage profile={PROFILE} listings={LISTINGS} notes={NOTES} />;
}
