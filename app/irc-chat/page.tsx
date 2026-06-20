import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("irc-chat");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function IrcChatPage() {
  return <SohbetSeoPage page={page} />;
}
