import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("sohbet-sitesi");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function SohbetSitesiPage() {
  return <SohbetSeoPage page={page} />;
}
