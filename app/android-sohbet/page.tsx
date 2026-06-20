import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("android-sohbet");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function AndroidSohbetPage() {
  return <SohbetSeoPage page={page} />;
}
