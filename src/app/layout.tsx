import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import Navigation from "@/components/Navigation";
import MainContentWrapper from "@/components/MainContent";
import GlobalStyleWrapper from "@/components/GlobalStyle";

export const metadata: Metadata = {
  title: "Design System",
  description: "Design System Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyleWrapper>
            <Navigation />
            <MainContentWrapper>{children}</MainContentWrapper>
          </GlobalStyleWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
