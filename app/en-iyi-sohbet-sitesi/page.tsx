import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("en-iyi-sohbet-sitesi");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function EnIyiSohbetSitesiPage() {
  return <SohbetSeoPage page={page} />;
}
