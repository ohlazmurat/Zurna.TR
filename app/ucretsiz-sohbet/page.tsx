import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("ucretsiz-sohbet");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function UcretsizSohbetPage() {
  return <SohbetSeoPage page={page} />;
}
