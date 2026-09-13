import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { DemoProvider } from '@/lib/store';

const site = 'https://docuextract.xsol.ai';
const company = 'https://xsolai.com';

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: 'DocuExtract AI | AI Document Data Extraction & OCR Software',
    template: '%s | DocuExtract AI',
  },
  description:
    'Explore an AI document data extraction and OCR software platform for invoices, receipts, purchase orders, and shipping documents. Live performance data.',
  applicationName: 'DocuExtract AI',
  authors: [{ name: 'Ahsan Inam', url: company }],
  creator: 'Ahsan Inam',
  publisher: 'XsolAI',
  keywords: [
    'AI document data extraction',
    'OCR software',
    'invoice data extraction',
    'intelligent document processing',
    'XsolAI',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'DocuExtract AI',
    description: 'AI document data extraction and OCR software platform by XsolAI.',
    url: site,
    siteName: 'DocuExtract AI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/reference/docuextract-dashboard.png',
        width: 1536,
        height: 1024,
        alt: 'DocuExtract AI document intelligence dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DocuExtract AI',
    description: 'AI document data extraction and OCR software platform.',
    images: ['/reference/docuextract-dashboard.png'],
  },
  robots: { index: true, follow: true },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'XsolAI',
    url: company,
    founder: { '@type': 'Person', name: 'Ahsan Inam' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'DocuExtract AI',
    url: site,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'Cloud-based AI document data extraction and OCR SaaS platform.',
    creator: { '@type': 'Organization', name: 'XsolAI', url: company },
    offers: { '@type': 'Offer', price: '39', priceCurrency: 'USD' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'DocuExtract AI',
    url: site,
    brand: { '@type': 'Brand', name: 'XsolAI' },
    description: 'AI-powered document extraction and review workflow platform.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is AI document data extraction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI document data extraction converts unstructured files such as invoices and receipts into reviewable structured fields.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does document processing work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DocuExtract coordinates documents, extraction workflows, users, billing, and integrations.',
        },
      },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DemoProvider>{children}</DemoProvider>
        {jsonLd.map((item, index) => (
          <Script
            key={index}
            id={`jsonld-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
      </body>
    </html>
  );
}
