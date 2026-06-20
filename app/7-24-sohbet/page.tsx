import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("7-24-sohbet");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function YediYirmiDortSohbetPage() {
  return <SohbetSeoPage page={page} />;
}
