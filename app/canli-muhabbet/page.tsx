import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("canli-muhabbet");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function CanliMuhabbetPage() {
  return <SohbetSeoPage page={page} />;
}
