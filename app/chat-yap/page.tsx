import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("chat-yap");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function ChatYapPage() {
  return <SohbetSeoPage page={page} />;
}
