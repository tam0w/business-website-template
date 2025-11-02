import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@/payload.config'

async function seed() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  console.log('🌱 Starting seed process...')

  // Get admin user for relationships
  const { docs: users } = await payload.find({
    collection: 'users',
    limit: 1,
  })

  if (!users || users.length === 0) {
    console.error('❌ No users found. Please create a user first.')
    return
  }

  const adminUser = users[0]
  console.log(`✅ Using user: ${adminUser.name}`)

  // Clear existing data
  console.log('\n🗑️  Clearing existing data...')

  const { docs: existingCareers } = await payload.find({
    collection: 'careers',
    limit: 1000,
  })

  for (const career of existingCareers) {
    await payload.delete({
      collection: 'careers',
      id: career.id,
    })
  }
  console.log(`✅ Deleted ${existingCareers.length} careers`)

  const { docs: existingPosts } = await payload.find({
    collection: 'posts',
    limit: 1000,
  })

  for (const post of existingPosts) {
    await payload.delete({
      collection: 'posts',
      id: post.id,
    })
  }
  console.log(`✅ Deleted ${existingPosts.length} posts`)

  // Seed Careers
  console.log('\n💼 Seeding careers...')

  const careers = [
    {
      title: 'Senior Cybersecurity Analyst',
      department: 'cybersecurity',
      location: 'Washington, DC',
      type: 'full-time',
      experienceLevel: 'senior',
      remoteOption: 'hybrid',
      clearanceRequired: true,
      clearanceDetails: 'Secret clearance required',
      salary: {
        type: 'range',
        currency: 'USD',
        min: 120000,
        max: 160000,
      },
      status: 'published',
      description: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'We are seeking a Senior Cybersecurity Analyst to join our growing security operations team. You will be responsible for monitoring, detecting, and responding to security threats across our client environments.',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'This role offers the opportunity to work with cutting-edge security tools and technologies while protecting critical infrastructure for government and enterprise clients.',
                },
              ],
            },
          ],
        },
      },
      responsibilities: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              listType: 'bullet',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Monitor security information and event management (SIEM) systems',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Conduct threat hunting and incident response activities',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Develop and maintain security playbooks and procedures',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Collaborate with clients to improve their security posture',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      requirements: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              listType: 'bullet',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: '5+ years of experience in cybersecurity or SOC operations',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Strong knowledge of SIEM platforms (Splunk, QRadar, or similar)',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Experience with threat intelligence and incident response',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Active Secret security clearance or ability to obtain',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    {
      title: 'Data Engineer',
      department: 'data-services',
      location: 'Remote',
      type: 'full-time',
      experienceLevel: 'mid',
      remoteOption: 'remote',
      clearanceRequired: false,
      salary: {
        type: 'range',
        currency: 'USD',
        min: 100000,
        max: 140000,
      },
      status: 'published',
      description: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Join our data services team to build and maintain robust data pipelines that power analytics and insights for our clients. You will work with modern data stack technologies and cloud platforms.',
                },
              ],
            },
          ],
        },
      },
      responsibilities: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              listType: 'bullet',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Design and implement scalable data pipelines',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Optimize data models for performance and reliability',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Collaborate with data scientists and analysts',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      requirements: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              listType: 'bullet',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: '3+ years of experience in data engineering',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Proficiency in Python and SQL',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Experience with AWS, GCP, or Azure',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    {
      title: 'Penetration Tester',
      department: 'cybersecurity',
      location: 'Austin, TX',
      type: 'full-time',
      experienceLevel: 'senior',
      remoteOption: 'hybrid',
      clearanceRequired: false,
      salary: {
        type: 'range',
        currency: 'USD',
        min: 110000,
        max: 150000,
      },
      status: 'published',
      description: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'We are looking for an experienced Penetration Tester to conduct security assessments and identify vulnerabilities in client systems. You will perform both network and application penetration testing.',
                },
              ],
            },
          ],
        },
      },
      responsibilities: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              listType: 'bullet',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Conduct penetration tests on web applications, networks, and infrastructure',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Document findings and create detailed reports',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Present security findings to technical and executive audiences',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      requirements: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              listType: 'bullet',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: '4+ years of penetration testing experience',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'OSCP, GPEN, or similar certification preferred',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Strong knowledge of OWASP Top 10 and common vulnerabilities',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    {
      title: 'Security Operations Center (SOC) Analyst',
      department: 'cybersecurity',
      location: 'Remote',
      type: 'full-time',
      experienceLevel: 'entry',
      remoteOption: 'remote',
      clearanceRequired: false,
      salary: {
        type: 'range',
        currency: 'USD',
        min: 65000,
        max: 85000,
      },
      status: 'published',
      description: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Entry-level opportunity to start your career in cybersecurity! As a SOC Analyst, you will monitor security alerts, investigate potential threats, and support incident response activities.',
                },
              ],
            },
          ],
        },
      },
      responsibilities: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              listType: 'bullet',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Monitor security alerts and events 24/7',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Perform initial triage and analysis of security incidents',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Document incidents and escalate as needed',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      requirements: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              listType: 'bullet',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: '1-2 years of IT or security experience',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Security+, CySA+, or similar certification',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Basic understanding of networking and security concepts',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    {
      title: 'Cloud Security Architect',
      department: 'cybersecurity',
      location: 'San Francisco, CA',
      type: 'full-time',
      experienceLevel: 'lead',
      remoteOption: 'hybrid',
      clearanceRequired: false,
      salary: {
        type: 'range',
        currency: 'USD',
        min: 160000,
        max: 200000,
      },
      status: 'published',
      description: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Lead our cloud security architecture practice and help enterprise clients secure their cloud environments. You will design security solutions for AWS, Azure, and GCP deployments.',
                },
              ],
            },
          ],
        },
      },
      responsibilities: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              listType: 'bullet',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Design and implement cloud security architectures',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Lead security assessments and remediation efforts',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Mentor junior security engineers and architects',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      requirements: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              listType: 'bullet',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: '8+ years of security architecture experience',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Deep expertise in AWS, Azure, or GCP security',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'CCSP, AWS Security Specialty, or similar certification',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    {
      title: 'Data Analyst Intern',
      department: 'data-services',
      location: 'New York, NY',
      type: 'internship',
      experienceLevel: 'entry',
      remoteOption: 'hybrid',
      clearanceRequired: false,
      salary: {
        type: 'fixed',
        currency: 'USD',
        amount: 25,
      },
      status: 'published',
      description: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Summer internship opportunity for students interested in data analytics and business intelligence. Gain hands-on experience working with real client data and modern analytics tools.',
                },
              ],
            },
          ],
        },
      },
      responsibilities: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              listType: 'bullet',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Assist with data analysis and visualization projects',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Create dashboards and reports for stakeholders',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Learn about data engineering and ETL processes',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      requirements: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              listType: 'bullet',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Currently pursuing a degree in Computer Science, Statistics, or related field',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Basic knowledge of SQL and Python',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Strong analytical and problem-solving skills',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  ]

  for (const career of careers) {
    await payload.create({
      collection: 'careers',
      data: career,
    })
    console.log(`✅ Created career: ${career.title}`)
  }

  // Seed Blog Posts
  console.log('\n📝 Seeding blog posts...')

  const posts = [
    {
      title: 'The Rise of Zero Trust Architecture in Modern Cybersecurity',
      slug: 'zero-trust-architecture-modern-cybersecurity',
      subTitle: 'How Zero Trust is transforming enterprise security strategies',
      excerpt: 'Explore the fundamental principles of Zero Trust Architecture and why organizations are rapidly adopting this security model to protect against modern threats.',
      author: adminUser.id,
      tags: ['Cybersecurity', 'Zero Trust', 'Enterprise Security'],
      status: 'published',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              tag: 'h2',
              children: [
                {
                  type: 'text',
                  text: 'What is Zero Trust?',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Zero Trust is a security framework requiring all users, whether inside or outside the organization\'s network, to be authenticated, authorized, and continuously validated before being granted access to applications and data.',
                },
              ],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [
                {
                  type: 'text',
                  text: 'Key Principles',
                },
              ],
            },
            {
              type: 'list',
              listType: 'bullet',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Never trust, always verify',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Assume breach',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Least privilege access',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    {
      title: 'Data Pipeline Best Practices for Enterprise Analytics',
      slug: 'data-pipeline-best-practices-enterprise',
      subTitle: 'Building reliable and scalable data pipelines',
      excerpt: 'Learn the essential best practices for designing, implementing, and maintaining data pipelines that can scale with your organization\'s needs.',
      author: adminUser.id,
      tags: ['Data Engineering', 'Analytics', 'Best Practices'],
      status: 'published',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              tag: 'h2',
              children: [
                {
                  type: 'text',
                  text: 'Why Data Pipelines Matter',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Modern organizations generate massive amounts of data daily. Effective data pipelines ensure this data flows reliably from source systems to analytics platforms, enabling data-driven decision making.',
                },
              ],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [
                {
                  type: 'text',
                  text: 'Core Best Practices',
                },
              ],
            },
            {
              type: 'list',
              listType: 'number',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Design for idempotency',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Implement comprehensive monitoring and alerting',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Use incremental processing where possible',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    {
      title: 'Threat Hunting: Proactive Defense in the SOC',
      slug: 'threat-hunting-proactive-defense-soc',
      subTitle: 'Moving from reactive to proactive security operations',
      excerpt: 'Discover how threat hunting can help your security team identify threats before they cause damage, and learn practical techniques to get started.',
      author: adminUser.id,
      tags: ['Threat Hunting', 'SOC', 'Incident Response'],
      status: 'published',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Threat hunting is the proactive search for cyber threats that are lurking undetected in a network. Unlike traditional security monitoring that relies on alerts, threat hunting involves actively searching for indicators of compromise.',
                },
              ],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [
                {
                  type: 'text',
                  text: 'Getting Started with Threat Hunting',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Start with hypothesis-driven hunting. Form a hypothesis about potential threats, then use your security tools and data sources to test it. This structured approach helps focus your efforts and improves over time.',
                },
              ],
            },
          ],
        },
      },
    },
    {
      title: 'Cloud Security: Common Misconfigurations and How to Avoid Them',
      slug: 'cloud-security-common-misconfigurations',
      subTitle: 'Protecting your cloud infrastructure from preventable vulnerabilities',
      excerpt: 'Many security breaches stem from simple cloud misconfigurations. Learn about the most common mistakes and how to prevent them in your environment.',
      author: adminUser.id,
      tags: ['Cloud Security', 'AWS', 'Azure', 'Best Practices'],
      status: 'published',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              tag: 'h2',
              children: [
                {
                  type: 'text',
                  text: 'Top 5 Cloud Misconfigurations',
                },
              ],
            },
            {
              type: 'list',
              listType: 'number',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Public S3 buckets or storage containers',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Overly permissive IAM policies',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Unencrypted data at rest',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Missing security group rules',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Disabled logging and monitoring',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    {
      title: 'Building a Data-Driven Culture: Lessons from the Field',
      slug: 'building-data-driven-culture-lessons',
      subTitle: 'How to transform your organization with data',
      excerpt: 'Creating a data-driven culture goes beyond tools and technology. Learn the organizational changes and leadership practices that make data adoption successful.',
      author: adminUser.id,
      tags: ['Data Strategy', 'Analytics', 'Culture'],
      status: 'published',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Building a data-driven culture is one of the most challenging transformations an organization can undertake. It requires not just new technology, but fundamental changes in how teams think about and use data.',
                },
              ],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [
                {
                  type: 'text',
                  text: 'Key Success Factors',
                },
              ],
            },
            {
              type: 'list',
              listType: 'bullet',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Executive sponsorship and visible commitment',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Accessible data and self-service tools',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          text: 'Training and enablement programs',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  ]

  for (const post of posts) {
    await payload.create({
      collection: 'posts',
      data: post,
    })
    console.log(`✅ Created post: ${post.title}`)
  }

  console.log('\n🎉 Seed complete!')
  process.exit(0)
}

seed().catch((error) => {
  console.error('❌ Seed failed:', error)
  process.exit(1)
})
