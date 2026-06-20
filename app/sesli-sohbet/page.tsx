import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("sesli-sohbet");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function SesliSohbetPage() {
  return <SohbetSeoPage page={page} />;
}
