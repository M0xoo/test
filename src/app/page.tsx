"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("sent");
      setTimeout(() => {
        setShowContactModal(false);
        setFormStatus("idle");
        setFormData({ name: "", email: "", message: "" });
      }, 1500);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e5e5e5]">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#262626] bg-[#0d0d0d]">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-medium text-white">OpenBoard</span>
            <div className="inline-flex items-center gap-2 rounded-[4px] border border-[#333] bg-[#141414] px-2 py-0.5 text-[10px] text-[#8c8c8c]">
              <span className="h-1 w-1 rounded-full bg-[#5e6ad2]" />
              Beta
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/OpenBoardLabs/openboard"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-[4px] border border-[#333] bg-[#141414] px-2.5 py-1.5 text-[13px] text-[#8c8c8c] transition-colors hover:border-[#555] hover:text-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span>Star</span>
              <span className="rounded-full bg-[#5e6ad2] px-1.5 py-0.5 text-[11px] font-medium text-white">1</span>
            </a>
            <Link href="/getting-started" className="rounded-[4px] bg-[#5e6ad2] px-3.5 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-[#4b56b0]">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="pt-28 pb-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-5 text-[40px] font-medium leading-[1.15] tracking-tight text-white md:text-[56px]">
                The kanban board for{' '}
                <span className="text-[#8c8c8c]">autonomous coding agents</span>
              </h1>
              <p className="mb-10 text-[15px] leading-[1.5] text-[#8c8c8c] md:text-[17px]">
                Visualize and orchestrate AI agents that code, review, and test your PRs.{' '}
                OpenBoard brings human-in-the-loop automation to your development workflow.
              </p>
              <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-[13px] text-[#8c8c8c]">Requires git, Github CLI, and opencode already installed</p>
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <div className="rounded-[4px] border border-[#333] bg-[#141414] px-5 py-3 text-[14px] font-mono text-[#e5e5e5]">
                    npx @m0xoo/openboard
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <div className="overflow-hidden rounded-[6px] border border-[#262626] bg-[#141414]">
                <div className="flex items-center gap-2 border-b border-[#262626] px-3 py-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#333]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#333]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#333]" />
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
                    {[
                      { title: "Backlog", count: 12, bg: "#1a1a1a" },
                      { title: "In Review", count: 5, bg: "#1a1a1a" },
                      { title: "Testing", count: 3, bg: "#1a1a1a" },
                      { title: "Done", count: 8, bg: "#1a1a1a" },
                    ].map((column, i) => (
                      <div key={i} className="rounded-[4px] border border-[#262626] bg-[#1a1a1a] p-2.5">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[13px] font-medium text-[#e5e5e5]">{column.title}</span>
                          <span className="rounded-[3px] bg-[#262626] px-1.5 py-0.5 text-[11px] text-[#8c8c8c]">{column.count}</span>
                        </div>
                        <div className="space-y-1.5">
                          {i === 0 && (
                            <>
                              <div className="rounded-[3px] border border-[#333] bg-[#1f1f1f] p-2">
                                <div className="mb-0.5 text-[12px] font-medium text-[#e5e5e5]">Fix authentication bug</div>
                                <div className="text-[11px] text-[#666]">#127 · assigned to agent-1</div>
                              </div>
                              <div className="rounded-[3px] border border-[#333] bg-[#1f1f1f] p-2">
                                <div className="mb-0.5 text-[12px] font-medium text-[#e5e5e5]">Add user dashboard</div>
                                <div className="text-[11px] text-[#666]">#128 · assigned to agent-2</div>
                              </div>
                            </>
                          )}
                          {i === 1 && (
                            <div className="rounded-[3px] border border-[#333] bg-[#1f1f1f] p-2">
                              <div className="mb-0.5 text-[12px] font-medium text-[#e5e5e5]">Review PR #456</div>
                              <div className="text-[11px] text-[#666]">#126 · agent reviewing</div>
                            </div>
                          )}
                          {i === 2 && (
                            <div className="rounded-[3px] border border-[#333] bg-[#1f1f1f] p-2">
                              <div className="mb-0.5 text-[12px] font-medium text-[#e5e5e5]">Run E2E tests</div>
                              <div className="text-[11px] text-[#666]">#125 · agent testing</div>
                            </div>
                          )}
                          {i === 3 && (
                            <div className="rounded-[3px] border border-[#333] bg-[#1f1f1f] p-2">
                              <div className="mb-0.5 text-[12px] font-medium text-[#e5e5e5]">Deploy v2.1.0</div>
                              <div className="text-[11px] text-[#666]">#124 · completed</div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-[28px] font-medium text-white md:text-[32px]">Built for autonomous coding agents</h2>
              <p className="text-[14px] text-[#8c8c8c]">Tools to manage agents that write code, review PRs, and run tests</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  ),
                  title: "Agent Orchestration",
                  description: "Assign tasks to coding agents that write code, review PRs, and run tests automatically.",
                },
                {
                  icon: (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  ),
                  title: "Real-time Sync",
                  description: "Watch agents work in real-time. Status updates, test results, and code changes as they happen.",
                },
                {
                  icon: (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  ),
                  title: "Smart Analytics",
                  description: "Track agent performance, test coverage, and review velocity with detailed insights.",
                },
              ].map((feature, i) => (
                <div key={i} className="rounded-[4px] border border-[#262626] bg-[#141414] p-4 transition-colors hover:border-[#333]">
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-[3px] bg-[#1f1f1f] text-[#8c8c8c]">
                    {feature.icon}
                  </div>
                  <h3 className="mb-1.5 text-[15px] font-medium text-white">{feature.title}</h3>
                  <p className="text-[13px] text-[#8c8c8c]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-[28px] font-medium text-white md:text-[32px]">How it works</h2>
              <p className="text-[14px] text-[#8c8c8c]">Three steps to autonomous code review and testing</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { step: "01", title: "Run openboard", description: "Start the CLI in any project directory." },
                { step: "02", title: "Agents spawn", description: "Coding agents appear on your kanban board ready to work." },
                { step: "03", title: "Review & approve", description: "Watch agents code, test, and review. Approve their changes." },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="mb-3 text-[32px] font-medium text-[#333]">{item.step}</div>
                  <h3 className="mb-1.5 text-[17px] font-medium text-white">{item.title}</h3>
                  <p className="text-[14px] text-[#8c8c8c]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="instructions" className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-[28px] font-medium text-white md:text-[32px]">Instructions</h2>
              <p className="text-[14px] text-[#8c8c8c]">Get started in minutes</p>
            </div>
            <div className="mx-auto max-w-2xl space-y-4">
              <div className="rounded-[4px] border border-[#262626] bg-[#141414] p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#5e6ad2] text-[12px] font-medium text-white">1</div>
                  <div>
                    <h3 className="mb-1 text-[15px] font-medium text-white">Install prerequisites</h3>
                    <p className="text-[13px] text-[#8c8c8c]">Install <a href="https://github.com/git-guides/install-git" className="text-[#5e6ad2] hover:underline">git</a>, <a href="https://github.com/cli/cli#installation" className="text-[#5e6ad2] hover:underline">Github CLI</a>, and <a href="https://opencode.ai/docs/installation" className="text-[#5e6ad2] hover:underline">opencode</a></p>
                  </div>
                </div>
              </div>
              <div className="rounded-[4px] border border-[#262626] bg-[#141414] p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#5e6ad2] text-[12px] font-medium text-white">2</div>
                  <div>
                    <h3 className="mb-1 text-[15px] font-medium text-white">Authenticate with GitHub</h3>
                    <p className="text-[13px] text-[#8c8c8c]">Run <code className="rounded bg-[#1f1f1f] px-1.5 py-0.5 text-[12px] text-[#e5e5e5]">gh auth login</code></p>
                  </div>
                </div>
              </div>
              <div className="rounded-[4px] border border-[#262626] bg-[#141414] p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#5e6ad2] text-[12px] font-medium text-white">3</div>
                  <div>
                    <h3 className="mb-1 text-[15px] font-medium text-white">Navigate to your project</h3>
                    <p className="text-[13px] text-[#8c8c8c]">cd to a folder linked to your repository</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[4px] border border-[#262626] bg-[#141414] p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#5e6ad2] text-[12px] font-medium text-white">4</div>
                  <div>
                    <h3 className="mb-1 text-[15px] font-medium text-white">Run OpenBoard</h3>
                    <p className="text-[13px] text-[#8c8c8c]">Run <code className="rounded bg-[#1f1f1f] px-1.5 py-0.5 text-[12px] text-[#e5e5e5]">npx @m0xoo/openboard</code></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="rounded-[6px] border border-[#262626] bg-[#141414] p-10 md:p-14">
              <h2 className="mb-3 text-[28px] font-medium text-white md:text-[32px]">Ready to scale with the cloud?</h2>
              <p className="mb-8 text-[14px] text-[#8c8c8c]">Explore our cloud solutions to automate your workflows at scale.</p>
              <Link href="/getting-started" className="rounded-[4px] border border-[#333] px-6 py-2.5 text-[14px] font-medium text-[#8c8c8c] transition-colors hover:border-[#555] hover:text-white">
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {showContactModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setShowContactModal(false)}>
            <div className="mx-4 w-full max-w-md rounded-[6px] border border-[#262626] bg-[#141414] p-6" onClick={(e) => e.stopPropagation()}>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-[18px] font-medium text-white">Contact Sales</h3>
                <button onClick={() => setShowContactModal(false)} className="text-[#8c8c8c] hover:text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {formStatus === "sent" ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#1f3a2d]">
                    <svg className="h-6 w-6 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[15px] font-medium text-white">Message sent!</p>
                  <p className="text-[13px] text-[#8c8c8c]">We&apos;ll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-[13px] text-[#8c8c8c]">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-[4px] border border-[#333] bg-[#1a1a1a] px-3 py-2.5 text-[14px] text-[#e5e5e5] placeholder-[#666] outline-none transition-colors focus:border-[#5e6ad2]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-[13px] text-[#8c8c8c]">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-[4px] border border-[#333] bg-[#1a1a1a] px-3 py-2.5 text-[14px] text-[#e5e5e5] placeholder-[#666] outline-none transition-colors focus:border-[#5e6ad2]"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-[13px] text-[#8c8c8c]">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none rounded-[4px] border border-[#333] bg-[#1a1a1a] px-3 py-2.5 text-[14px] text-[#e5e5e5] placeholder-[#666] outline-none transition-colors focus:border-[#5e6ad2]"
                      placeholder="Tell us about your needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full rounded-[4px] bg-[#5e6ad2] px-4 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[#4b56b0] disabled:opacity-60"
                  >
                    {formStatus === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        <footer className="border-t border-[#262626] py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 md:flex-row">
            <p className="text-[12px] text-[#666]">&copy; 2026 OpenBoard. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
