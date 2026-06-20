import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("sohbet-odalarina-giris");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function SohbetOdalarinaGirisPage() {
  return <SohbetSeoPage page={page} />;
}
