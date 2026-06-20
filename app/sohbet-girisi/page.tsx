import type { Metadata } from "next";
import SohbetSeoPage from "@/components/SohbetSeoPage";
import { buildSohbetMetadata, getSohbetPage } from "@/lib/sohbetSeoPages";

const page = getSohbetPage("sohbet-girisi");

export const metadata: Metadata = buildSohbetMetadata(page);

export default function SohbetGirisiPage() {
  return <SohbetSeoPage page={page} />;
}
