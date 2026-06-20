import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("chat-girisi");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function ChatGirisiPage() {
  return <SohbetSeoPage page={page} />;
}
