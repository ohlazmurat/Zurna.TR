import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("kayitsiz-chat");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function KayitsizChatPage() {
  return <SohbetSeoPage page={page} />;
}
