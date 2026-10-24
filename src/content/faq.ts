export const faqItems = [
  {
    question: 'What is FDRPravah?',
    answer:
      'FDRPravah is a centralized portal prototype for managing security deposits and FDR records associated with applicable AICTE approval and compliance processes.',
  },
  {
    question: 'How does document verification work?',
    answer:
      'The system extracts relevant fields from uploaded documents, checks for inconsistencies, and supports verification through a simulated bank API in the prototype. Final scrutiny remains subject to authorized review.',
  },
  {
    question: 'Can institutions track maturity and renewal dates?',
    answer:
      'Yes. The system tracks instrument dates and identifies upcoming maturity, overdue actions, and renewal requirements.',
  },
  {
    question: 'How are release requests handled?',
    answer:
      'Release or refund requests move through a controlled review and approval workflow. The system records actions and decisions; it does not independently authorize a financial release.',
  },
  {
    question: 'Does the prototype connect to real banks?',
    answer:
      'No live bank connection is assumed. The prototype uses synthetic records and simulated bank responses to demonstrate the integration workflow. A production integration would require formal authorization and access to an approved bank verification interface.',
  },
  {
    question: 'How is access and data security managed?',
    answer:
      'FDRPravah is designed around role-based permissions, secure document handling, controlled approval workflows, and auditable administrative actions, restricting access strictly to authorized stakeholders.',
  },
];
