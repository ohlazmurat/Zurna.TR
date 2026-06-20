import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("turkce-sohbet");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function TurkceSohbetPage() {
  return <SohbetSeoPage page={page} />;
}
