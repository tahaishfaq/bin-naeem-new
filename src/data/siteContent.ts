import binNaeemLogo from '../assets/bin-naeem-logos/bin-naeem.PNG';
import naeemPackagesLogo from '../assets/bin-naeem-logos/naeem-packages.PNG';
import hanplasLogo from '../assets/bin-naeem-logos/hanplas.PNG';
import boxPackLogo from '../assets/bin-naeem-logos/box-pack.PNG';
import mondsubLogo from '../assets/bin-naeem-logos/mondsub.PNG';
import pinatasLogo from '../assets/bin-naeem-logos/pinatas.PNG';
import nsBuildersLogo from '../assets/bin-naeem-logos/ns-builders.PNG';

export const companies = [
  {
    name: 'Bin Naeem Industries',
    industry: 'Holding Company',
    description:
      'We deliver excellence and innovation across industries, offering top-quality solutions from packaging to skincare, machinery, and beyond.',
    logo: binNaeemLogo,
    keywords: 'Leadership • Innovation • Excellence'
  },
  {
    name: 'Naeem Packages',
    industry: 'Printing & Packaging',
    description:
      'Experts in flexible printing and packaging, offering premium solutions for various industries.',
    logo: naeemPackagesLogo,
    keywords: 'Flexible Printing • Premium Solutions'
  },
  {
    name: 'Hanplas Machinery',
    industry: 'Machinery Manufacturing',
    description:
      "China's leading packaging machinery manufacturer, providing state-of-the-art equipment to streamline production.",
    logo: hanplasLogo,
    keywords: 'State-of-the-art • Streamlined Production'
  },
  {
    name: 'Box Pack',
    industry: 'Corrugation Solutions',
    description: 'A reliable corrugation company delivering durable and innovative carton packaging solutions.',
    logo: boxPackLogo,
    keywords: 'Durable • Innovative • Reliable'
  },
  {
    name: 'Mondsub',
    industry: 'Skincare & Beauty',
    description: 'A skincare brand offering advanced beauty and self-care products.',
    logo: mondsubLogo,
    keywords: 'Advanced Beauty • Self-care'
  },
  {
    name: 'House of Pinatas',
    industry: 'Creative & Events',
    description: 'A creative company specializing in customizable pinatas to make every celebration unique.',
    logo: pinatasLogo,
    keywords: 'Customizable • Creative • Unique'
  },
  {
    name: 'NS Builders',
    industry: 'Construction',
    description: 'Every project is a commitment to excellence through selective work and expert craftsmanship.',
    logo: nsBuildersLogo,
    keywords: 'Excellence • Craftsmanship'
  }
] as const;

export const industries = [
  {
    step: '01',
    title: 'Industrial Manufacturing',
    description: 'Implementing advanced production techniques for scalable growth and industrial efficiency.',
    color: '#2563EB',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`
  },
  {
    step: '02',
    title: 'Packaging & Logistics',
    description: 'Optimizing supply chain efficiency through innovative flexible packaging solutions.',
    color: '#6B7280',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
  },
  {
    step: '03',
    title: 'Consumer Retail Brands',
    description: 'Building strong brand presence and distribution networks in global consumer markets.',
    color: '#2563EB',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`
  },
  {
    step: '04',
    title: 'Construction & Infrastructure',
    description: 'Developing world-class architectural and large-scale infrastructure projects.',
    color: '#6B7280',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="10" height="14" rx="2" ry="2"></rect><path d="M12 21V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v18"></path><path d="M3 12h8"></path><path d="M3 16h8"></path><path d="M12 7h10"></path><path d="M12 11h10"></path></svg>`
  }
] as const;

export const news = [
  {
    category: 'Corporate',
    date: 'March 2, 2026',
    title: 'Bin Naeem Industries Expands Sustainable Packaging Operations',
    slug: 'sustainable-packaging-operations',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&auto=format&fit=crop&q=80'
  },
  {
    category: 'Global Reach',
    date: 'February 28, 2026',
    title: 'New Strategic Logistics Hub Opens in the Middle East',
    slug: 'middle-east-logistics-hub',
    image: 'https://images.unsplash.com/photo-1506469717960-433cebe3f181?w=800&auto=format&fit=crop&q=80'
  },
  {
    category: 'Innovation',
    date: 'February 10, 2026',
    title: 'Investment in Next-Gen Intelligent Manufacturing Technologies',
    slug: 'intelligent-manufacturing-investment',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80'
  }
].map((item) => ({ ...item, href: `/news#${item.slug}` })) as const;

export const faqs = [
  {
    q: 'What industries does Bin Naeem Industries operate in?',
    a: 'Bin Naeem Industries is a diversified industrial conglomerate with operations across Industrial Manufacturing, Flexible Packaging & Logistics, Consumer Retail Brands, and Construction & Infrastructure. Each vertical operates as a focused business unit under a unified strategic framework.'
  },
  {
    q: "Where are Bin Naeem Industries' operations located?",
    a: 'Our operations are headquartered in Pakistan with a robust distribution network spanning the Middle East, South Asia, and international export markets. We are actively expanding our global footprint through strategic partnerships and logistics investments.'
  },
  {
    q: 'How can I partner with or supply to Bin Naeem Industries?',
    a: 'We welcome inquiries from suppliers, logistics providers, and strategic partners. You can reach out directly through our Group Inquiry form or contact our business development office. We evaluate all partnership proposals on the basis of quality, capacity, and strategic alignment.'
  },
  {
    q: "What is Bin Naeem Industries' approach to sustainability?",
    a: 'Sustainability is embedded in our operational DNA. We invest in eco-industrial practices, green supply chain systems, and biodegradable packaging materials. Our ESG commitment ensures that growth is delivered responsibly for our stakeholders and the environment.'
  },
  {
    q: 'Does Bin Naeem Industries offer group-level investment opportunities?',
    a: 'Yes. As we continue expanding across industrial verticals, we actively explore joint ventures and investment partnerships. We encourage qualified investors and institutions to connect with us directly to discuss group-level opportunities.'
  },
  {
    q: 'How is quality assured across your manufacturing operations?',
    a: 'Quality assurance is governed by international standards across all production facilities. We deploy end-to-end quality control systems, from raw material intake to final distribution, ensuring that every product that leaves our facilities meets the highest benchmarks.'
  }
] as const;

export const testimonials = [
  {
    quote:
      'Partnering with Bin Naeem Industries transformed our packaging supply chain. Their commitment to quality and delivery timelines is genuinely unmatched in the region.',
    name: 'Ahmed Al-Rashidi',
    role: 'Director of Operations',
    company: 'Gulf Commodities Group',
    initials: 'AR'
  },
  {
    quote:
      "Bin Naeem's manufacturing division delivered consistently across our most demanding FMCG projects. They scale with you and that's rare to find in industrial partnerships.",
    name: 'Priya Mehta',
    role: 'Supply Chain Manager',
    company: 'Horizon Retail Ltd.',
    initials: 'PM'
  },
  {
    quote:
      'From construction material supply to on-site logistics coordination, they managed everything with professional precision. A reliable partner for large-scale infrastructure.',
    name: 'Khalid Ibrahim',
    role: 'Project Director',
    company: 'Star Infrastructure Co.',
    initials: 'KI'
  }
] as const;
