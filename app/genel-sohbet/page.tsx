import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("genel-sohbet");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function GenelSohbetPage() {
  return <SohbetSeoPage page={page} />;
}
