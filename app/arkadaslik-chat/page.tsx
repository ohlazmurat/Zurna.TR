import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("arkadaslik-chat");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function ArkadaslikChatPage() {
  return <SohbetSeoPage page={page} />;
}
