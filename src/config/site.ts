const siteUrl =
 process.env.NEXT_PUBLIC_APP_URL || 'https://softic-blogs-weld.vercel.app'

export const siteConfig = {
 name: 'Softic Blogs',
 description: '',
 url: siteUrl,
 ogImage: `${siteUrl}/opengraph-image`,

 copyright: `Copyright © ${new Date().getFullYear()} softicblogs.com. All rights reserved.`,
 favicon: '/favicon.ico',
 logo: {
  default: '/logo.png',
  dark: '/logo-dark.png',
 },
 author: {
  name: 'AminulIslam',
  twitter: '',
  github: '',
 },
 contact: {
  address: ``,
  email: ['info@softicblogs.com'],
  tell: '',
  hotline: '',
 },

 seo: {
  metaTitle: `Softic Blogs | NextJs blog app`,
  metaDescription: `Blog App - using NextJs, TypeScript, React-redux, Antd & Shadcn UI`,
  metaKeywords: ``,
 },
}

export type SiteConfig = typeof siteConfig
