"use client";
import Link from "next/link";

export default function GettingStarted() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e5e5e5]">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#262626] bg-[#0d0d0d]">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[15px] font-medium text-white">OpenBoard</span>
            <div className="inline-flex items-center gap-2 rounded-[4px] border border-[#333] bg-[#141414] px-2 py-0.5 text-[10px] text-[#8c8c8c]">
              <span className="h-1 w-1 rounded-full bg-[#5e6ad2]" />
              Beta
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#features" className="text-[13px] text-[#8c8c8c] transition-colors hover:text-white">Features</Link>
            <Link href="/#instructions" className="text-[13px] text-[#8c8c8c] transition-colors hover:text-white">Instructions</Link>
            <Link href="/#how-it-works" className="text-[13px] text-[#8c8c8c] transition-colors hover:text-white">How it works</Link>
            <Link href="/getting-started" className="text-[13px] text-[#8c8c8c] transition-colors hover:text-white">Enterprise</Link>
            <Link href="/getting-started" className="rounded-[4px] bg-[#5e6ad2] px-3.5 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-[#4b56b0]">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-16">
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h1 className="mb-5 text-[40px] font-medium leading-[1.15] tracking-tight text-white md:text-[56px]">
                Manage your board in the <span className="text-[#8c8c8c]">cloud</span>
              </h1>
              <p className="text-[15px] leading-[1.5] text-[#8c8c8c] md:text-[17px]">
                OpenBoard cloud provides a centralized platform to orchestrate your AI agents. 
                Integrate with your favorite tools and automate your entire development workflow.
              </p>
            </div>

            <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  ),
                  title: "Code Agents",
                  description: "AI agents that write, refactor, and optimize your code automatically.",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Review Agents",
                  description: "Automated code review agents that ensure quality and best practices.",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                    </svg>
                  ),
                  title: "Design Agents",
                  description: "Generate and iterate on UI designs based on your specifications.",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                  title: "Test Agents",
                  description: "Automated testing agents that run unit, integration, and E2E tests.",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  ),
                  title: "GitHub / GitLab",
                  description: "Full integration with GitHub and GitLab for PR management and CI/CD.",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                  ),
                  title: "Slack",
                  description: "Get notifications and control your board directly from Slack.",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  ),
                  title: "Jira",
                  description: "Sync tasks and issues between OpenBoard and Jira seamlessly.",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                    </svg>
                  ),
                  title: "And More",
                  description: "API access and webhooks for custom integrations with any tool.",
                },
              ].map((feature, i) => (
                <div key={i} className="rounded-[4px] border border-[#262626] bg-[#141414] p-5 transition-colors hover:border-[#333]">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-[3px] bg-[#1f1f1f] text-[#5e6ad2]">
                    {feature.icon}
                  </div>
                  <h3 className="mb-1.5 text-[16px] font-medium text-white">{feature.title}</h3>
                  <p className="text-[13px] text-[#8c8c8c]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-[28px] font-medium text-white md:text-[32px]">Plans</h2>
              <p className="text-[14px] text-[#8c8c8c]">Choose the plan that fits your needs</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              <div className="rounded-[6px] border border-[#262626] bg-[#141414] p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="mb-2 text-[22px] font-medium text-white">Team Plan</h3>
                  <p className="text-[13px] text-[#8c8c8c]">Perfect for small to medium teams</p>
                </div>
                <div className="mb-6">
                  <span className="text-[36px] font-medium text-white">$29</span>
                  <span className="text-[14px] text-[#8c8c8c]">/month</span>
                </div>
                <ul className="mb-8 space-y-3">
                  {[
                    "Up to 10 team members",
                    "5 AI agents included",
                    "GitHub & GitLab integration",
                    "Slack notifications",
                    "Basic analytics",
                    "Email support",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#e5e5e5]">
                      <svg className="h-4 w-4 flex-shrink-0 text-[#5e6ad2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full rounded-[4px] bg-[#5e6ad2] px-4 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[#4b56b0]">
                  Get Started
                </button>
              </div>

              <div className="relative rounded-[6px] border border-[#5e6ad2] bg-[#141414] p-6 md:p-8">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-[#5e6ad2] px-3 py-1 text-[11px] font-medium text-white">Most Popular</span>
                </div>
                <div className="mb-6">
                  <h3 className="mb-2 text-[22px] font-medium text-white">Enterprise Plan</h3>
                  <p className="text-[13px] text-[#8c8c8c]">For large organizations with advanced needs</p>
                </div>
                <div className="mb-6">
                  <span className="text-[36px] font-medium text-white">Custom</span>
                  <span className="text-[14px] text-[#8c8c8c]"> pricing</span>
                </div>
                <ul className="mb-8 space-y-3">
                  {[
                    "Unlimited team members",
                    "Unlimited AI agents",
                    "All integrations (GitHub, GitLab, Jira, Slack)",
                    "Advanced analytics & reporting",
                    "SSO & enterprise security",
                    "Custom webhooks & API access",
                    "Priority support",
                    "Dedicated account manager",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[14px] text-[#e5e5e5]">
                      <svg className="h-4 w-4 flex-shrink-0 text-[#5e6ad2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full rounded-[4px] border border-[#5e6ad2] px-4 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[#5e6ad2]/10">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="rounded-[6px] border border-[#262626] bg-[#141414] p-10 md:p-14">
              <h2 className="mb-3 text-[28px] font-medium text-white md:text-[32px]">Ready to get started?</h2>
              <p className="mb-8 text-[14px] text-[#8c8c8c]">Start managing your AI agents in the cloud today.</p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button className="rounded-[4px] bg-[#5e6ad2] px-6 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[#4b56b0]">
                  Start Free Trial
                </button>
                <button className="rounded-[4px] border border-[#333] px-6 py-2.5 text-[14px] font-medium text-[#8c8c8c] transition-colors hover:border-[#555] hover:text-white">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#262626] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 md:flex-row">
          <p className="text-[12px] text-[#666]">&copy; 2026 OpenBoard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
