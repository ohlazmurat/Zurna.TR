import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("sohbet-et");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function SohbetEtPage() {
  return <SohbetSeoPage page={page} />;
}
