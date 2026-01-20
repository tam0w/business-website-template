import { Routes, Route } from 'react-router-dom'
import { NavigationWrapper } from '@/components/NavigationWrapper'
import {
  HomePage,
  ServicesPage,
  BlogPage,
  BlogPostPage,
  CareersPage,
  CareerPage,
  ContactPage,
  PrivacyPage,
  TermsPage,
  NotFoundPage,
} from '@/pages'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavigationWrapper />
      {children}
    </>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/:slug" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}
