// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig = {
  // ============================================
  // SITE METADATA & SEO
  // ============================================
  site: {
    name: 'FDRPravah',
    title:
      'FDRPravah – Integrated Security Deposit and Fixed Deposit Receipt (FDR) Management System',
    description:
      'Centralized platform for managing security deposits and Fixed Deposit Receipts for AICTE-related compliance. Track instruments, verify records, monitor maturity dates, and manage approval workflows.',
    keywords:
      'FDRPravah, FDR management, security deposits, AICTE, SIH2026, SIH26265, bank verification, OCR extraction, deposit compliance',
    email: 'contact@fdrpravah.gov.in',

    // Open Graph / Twitter
    ogTitle:
      'FDRPravah – Integrated Security Deposit & FDR Management System',
    ogDescription:
      'Centralized platform for managing security deposits and Fixed Deposit Receipts for AICTE-related compliance.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'FDRPravah',
    twitterDescription:
      'Integrated Security Deposit and Fixed Deposit Receipt (FDR) Management System',
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Workflow', href: '#how-it-works' },
      { name: 'Security', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'Explore Platform',
      href: '#contact',
    },
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    headline: 'Security Deposit Management,',
    subheadline: 'Simplified.',
    description:
      'FDRPravah brings security deposits and Fixed Deposit Receipts into one centralized platform for AICTE-related compliance. Track instruments, review verification results, monitor maturity dates, manage renewals, and coordinate authorized release workflows with greater transparency.',
    cta: {
      primary: {
        text: 'Explore the Platform',
        href: '#contact',
      },
      secondary: {
        text: 'Discover Features',
        href: '#features',
      },
    },
    stats: [
      { value: '—', label: 'Instruments Tracked' },
      { value: '—', label: 'Pending Verification' },
      { value: '—', label: 'Approaching Maturity' },
    ],
  },

  // ============================================
  // FEATURES SECTION
  // ============================================
  features: {
    title: 'From Fragmented Records to Unified Oversight',
    subtitle:
      'Manual tracking and fragmented records can make it difficult to identify expiring instruments, follow up on missing documents, and monitor pending approvals. FDRPravah provides a centralized view of FDR records, supporting documents, verification outcomes, deadlines, and administrative actions.',
    items: [
      { icon: 'layers', title: 'Centralized FDR Repository' },
      { icon: 'code', title: 'Document Intelligence with OCR' },
      { icon: 'lightning', title: 'Bank Verification Integration' },
      { icon: 'clock', title: 'Maturity and Renewal Monitoring' },
      { icon: 'chat', title: 'Officer Review and Approval Workflow' },
      { icon: 'shield', title: 'Audit Trail and Accountability' },
      { icon: 'brush', title: 'Role-Based Access Control' },
      { icon: 'chart', title: 'Dashboards and Reports' },
      { icon: 'zap', title: 'End-to-End Lifecycle Management' },
    ],
  },

  // ============================================
  // HOW IT WORKS
  // ============================================
  howItWorks: {
    title: 'One Clear Workflow. Complete Lifecycle Visibility.',
    subtitle:
      'From initial institutional submission through verification, scrutiny, and authorized release.',
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: {
    title: 'Stakeholder Perspectives & System Objectives',
    subtitle:
      'Addressing core security deposit compliance and regulatory scrutiny challenges for AICTE and institutions.',
    companyLogos: [
      'AICTE',
      'REGULATION',
      'INSTITUTIONS',
      'VERIFICATION',
      'COMPLIANCE',
    ],
  },

  // ============================================
  // PRICING
  // ============================================
  pricing: {
    title: 'Security, Traceability, and Controlled Access',
    subtitle:
      'FDRPravah is designed around role-based permissions, secure document handling, controlled approval workflows, and auditable administrative actions. Its prototype demonstrates how verification outcomes and officer decisions can be recorded transparently while restricting access to authorized users.',
    plans: [
      {
        name: 'Institutional Portal',
        price: 'Authorized',
        period: '/ Institutions',
        description:
          'For institutional representatives submitting and managing FDR records',
        features: [
          'FDR detail submission & document upload',
          'Automated field pre-validation',
          'Maturity date and renewal notifications',
          'Release and refund request initiation',
        ],
        cta: {
          text: 'Institutional Access',
          href: '#contact',
        },
        featured: false,
      },
      {
        name: 'Regulation Bureau',
        price: 'Authorized',
        period: '/ AICTE Bureau',
        description:
          'For AICTE scrutiny officials reviewing compliance and verification',
        badge: 'PRIMARY SCRUTINY',
        features: [
          'Side-by-side OCR discrepancy inspection',
          'Simulated bank verification console',
          'Scrutiny remarks & deficiency notices',
          'Controlled multi-stage approval workflow',
          'Comprehensive scrutiny audit logs',
        ],
        cta: {
          text: 'Scrutiny Console',
          href: '#contact',
        },
        featured: true,
      },
      {
        name: 'Administration & Audit',
        price: 'Authorized',
        period: '/ Administration',
        description:
          'For administrative authorities overseeing system-wide operations',
        features: [
          'Complete audit trail and history inspection',
          'System-wide compliance monitoring',
          'Role-based permission administration',
          'Maturity and overdue reporting',
          'Simulated bank interface parameters',
        ],
        cta: {
          text: 'Administrative Oversight',
          href: '#contact',
        },
        featured: false,
      },
    ],
  },

  // ============================================
  // FAQ
  // ============================================
  faq: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Everything you need to know about FDRPravah and deposit management',
  },

  // ============================================
  // CONTACT
  // ============================================
  contact: {
    title: 'Bring Every FDR into Clearer View',
    subtitle:
      'Explore a unified approach to document review, verification tracking, maturity monitoring, renewals, and accountable approval workflows.',
    benefits: [
      'Centralized FDR and security deposit tracking',
      'Document intelligence with OCR field extraction',
      'Simulated bank API verification workflow',
      'Auditable scrutiny and multi-stage approvals',
    ],
    email: 'contact@fdrpravah.gov.in',
    form: {
      cta: 'Explore FDRPravah',
      fields: {
        name: {
          label: 'Full Name',
          placeholder: 'Authorized Representative / Officer Name',
          required: true,
        },
        email: {
          label: 'Official Email',
          placeholder: 'officer@institution.edu.in',
          required: true,
        },
        company: {
          label: 'Institution / Bureau',
          placeholder: 'Institution Name or AICTE Bureau Division',
          required: false,
        },
        message: {
          label: 'Inquiry / Subject',
          placeholder:
            'Enter query regarding FDR tracking, scrutiny workflow, or system access...',
          required: false,
        },
      },
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline:
      'Integrated Security Deposit and Fixed Deposit Receipt (FDR) Management System. SIH2026 | Problem Statement SIH26265.',
    columns: [
      {
        title: 'Platform',
        links: [
          { name: 'Overview', href: '/' },
          { name: 'Features', href: '#features' },
          { name: 'Workflow', href: '#how-it-works' },
          { name: 'Security', href: '#pricing' },
          { name: 'FAQ', href: '#faq' },
        ],
      },
      {
        title: 'Stakeholders',
        links: [
          { name: 'AICTE Bureau', href: '#pricing' },
          { name: 'Institutions', href: '#pricing' },
          { name: 'Scrutiny Officers', href: '#pricing' },
          { name: 'Verification Desk', href: '#pricing' },
          { name: 'Contact Desk', href: '#contact' },
        ],
      },
      {
        title: 'Governance',
        links: [
          { name: 'Audit Trail', href: '#features' },
          { name: 'Access Control', href: '#pricing' },
          { name: 'Verification Policy', href: '#faq' },
          { name: 'Terms of Use', href: '#' },
          { name: 'Privacy Policy', href: '#' },
        ],
      },
    ],
    social: [
      { name: 'Twitter', href: '#', icon: 'twitter' },
      { name: 'GitHub', href: '#', icon: 'github' },
      { name: 'Dribbble', href: '#', icon: 'dribbble' },
      { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    ],
    copyright: `${new Date().getFullYear()} FDRPravah – SIH2026 Problem Statement SIH26265. All rights reserved.`,
  },
};
