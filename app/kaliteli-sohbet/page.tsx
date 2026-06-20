import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("kaliteli-sohbet");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function KaliteliSohbetPage() {
  return <SohbetSeoPage page={page} />;
}
