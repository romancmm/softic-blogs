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
 mainNav: [
  {
   title: 'Home',
   href: '/',
  },
  {
   title: 'About Us',
   href: '/about',
  },

  // Categories - Routes
  {
   title: 'Categories',
   href: '/categories',
   children: [
    {
     title: 'Sports',
     href: '/sports',
     // children: [{ title: 'About', href: '/about' }],
    },
    {
     title: 'Entertainment',
     href: '/entertainment',
    },
    {
     title: 'Political',
     href: '/political',
    },
   ],
  },
  {
   title: 'Gallery',
   href: '/gallery',
  },
  {
   title: 'Contact Us',
   href: '/contact',
  },
 ],

 footerItems: [
  {
   title: 'Useful Links',
   children: [
    {
     title: 'About',
     href: '/about',
    },
    {
     title: 'Gallery',
     href: '/gallery',
    },
    {
     title: 'Contact Us',
     href: '/contact',
    },
   ],
  },
 ],

 socialLinks: [
  {
   title: 'Facebook',
   href: '#',
   icon: 'facebook',
   colorCode: '#1877f2',
  },
  {
   title: 'Instagram',
   href: '#',
   icon: 'instagram',
   colorCode: '#F56040',
  },
  {
   title: 'Linkedin',
   href: '#',
   icon: 'linkedin',
   colorCode: '#0966c2',
  },
  {
   title: 'Youtube',
   href: '#',
   icon: 'youtube',
   colorCode: '#ff0100',
  },
 ],
}

export type SiteConfig = typeof siteConfig
