import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("muhabbet-odalari");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function MuhabbetOdalariPage() {
  return <SohbetSeoPage page={page} />;
}
