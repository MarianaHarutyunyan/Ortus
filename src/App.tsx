import type { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";
import { PageWrapper } from "./components/layout/wrapper/PageWrapper";
import { ScrollToTop } from "./components/layout/scrollToTop";
import { Home } from "./pages/home";
import { Courses } from "./pages/courses";
import { Articles } from "./pages/articles";
import { Contact } from "./pages/contact";
import { NotFound } from "./pages/notFound";
import { ROUTES } from "./constants/routes";
import { ArticleDetail } from "./pages/articles/articleDetail";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <PageWrapper>
          <Header />
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.COURSES} element={<Courses />} />
            <Route path={ROUTES.ARTICLES} element={<Articles />} />
            <Route path={ROUTES.ARTICLE_DETAIL} element={<ArticleDetail />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </PageWrapper>
      </LanguageProvider>
    </BrowserRouter>
  );
};
