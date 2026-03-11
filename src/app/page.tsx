export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            </div>
            <span className="text-lg font-semibold">OpenBoard</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm text-zinc-400 transition-colors hover:text-white">Features</a>
            <a href="#how-it-works" className="text-sm text-zinc-400 transition-colors hover:text-white">How it works</a>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Now in beta
              </div>
              <h1 className="mb-6 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                The kanban board for
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> AI agents</span>
              </h1>
              <p className="mb-10 text-lg text-zinc-400 md:text-xl">
                Orchestrate your code review and testing workflows with intelligent agents. 
                OpenBoard brings AI-powered automation to your development pipeline.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="rounded-full bg-white px-8 py-3 text-base font-medium text-black transition-transform hover:scale-105">
                  Start for free
                </button>
                <button className="rounded-full border border-white/10 px-8 py-3 text-base font-medium text-zinc-400 transition-colors hover:border-white/20 hover:text-white">
                  View Demo
                </button>
              </div>
            </div>

            <div className="mt-20 relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-50" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
                <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                  <div className="h-3 w-3 rounded-full bg-red-500/20" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
                  <div className="h-3 w-3 rounded-full bg-green-500/20" />
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    {[
                      { title: "Backlog", count: 12, color: "from-zinc-600 to-zinc-700" },
                      { title: "In Review", count: 5, color: "from-amber-600/30 to-amber-700/30" },
                      { title: "Testing", count: 3, color: "from-blue-600/30 to-blue-700/30" },
                      { title: "Done", count: 8, color: "from-emerald-600/30 to-emerald-700/30" },
                    ].map((column, i) => (
                      <div key={i} className="rounded-xl bg-white/5 p-3">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-sm font-medium text-zinc-300">{column.title}</span>
                          <span className="rounded bg-white/10 px-2 py-0.5 text-xs text-zinc-400">{column.count}</span>
                        </div>
                        <div className="space-y-2">
                          {i === 0 && (
                            <>
                              <div className="rounded-lg bg-gradient-to-r p-3 text-xs text-zinc-300" style={{ background: `linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))` }}>
                                <div className="mb-1 font-medium">Fix authentication bug</div>
                                <div className="text-zinc-500">#127 · assigned to agent-1</div>
                              </div>
                              <div className="rounded-lg bg-gradient-to-r p-3 text-xs text-zinc-300" style={{ background: `linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))` }}>
                                <div className="mb-1 font-medium">Add user dashboard</div>
                                <div className="text-zinc-500">#128 · assigned to agent-2</div>
                              </div>
                            </>
                          )}
                          {i === 1 && (
                            <div className="rounded-lg bg-gradient-to-r p-3 text-xs text-zinc-300" style={{ background: `linear-gradient(135deg, rgba(245,158,11,0.2), rgba(217,119,6,0.2))` }}>
                              <div className="mb-1 font-medium">Review PR #456</div>
                              <div className="text-zinc-500">#126 · agent reviewing</div>
                            </div>
                          )}
                          {i === 2 && (
                            <div className="rounded-lg bg-gradient-to-r p-3 text-xs text-zinc-300" style={{ background: `linear-gradient(135deg, rgba(59,130,246,0.2), rgba(37,99,235,0.2))` }}>
                              <div className="mb-1 font-medium">Run E2E tests</div>
                              <div className="text-zinc-500">#125 · agent testing</div>
                            </div>
                          )}
                          {i === 3 && (
                            <div className="rounded-lg bg-gradient-to-r p-3 text-xs text-zinc-300" style={{ background: `linear-gradient(135deg, rgba(16,185,129,0.2), rgba(5,150,105,0.2))` }}>
                              <div className="mb-1 font-medium">Deploy v2.1.0</div>
                              <div className="text-zinc-500">#124 · completed</div>
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

        <section id="features" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-semibold md:text-4xl">Built for AI-powered workflows</h2>
              <p className="text-zinc-400">Everything you need to manage agents that code review and test</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  ),
                  title: "Agent Orchestration",
                  description: "Assign tasks to specialized AI agents for code review, testing, and deployment.",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  ),
                  title: "Real-time Sync",
                  description: "Watch agents work in real-time. Status updates, test results, and code changes as they happen.",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  ),
                  title: "Smart Analytics",
                  description: "Track agent performance, test coverage, and review velocity with detailed insights.",
                },
              ].map((feature, i) => (
                <div key={i} className="group rounded-2xl border border-white/5 bg-white/5 p-6 transition-colors hover:border-white/10 hover:bg-white/10">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
                  <p className="text-sm text-zinc-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-semibold md:text-4xl">How it works</h2>
              <p className="text-zinc-400">Three simple steps to automate your workflow</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { step: "01", title: "Connect your repo", description: "Link your GitHub or GitLab repository in seconds." },
                { step: "02", title: "Configure agents", description: "Set up agents for review, testing, and deployment tasks." },
                { step: "03", title: "Watch them work", description: "Agents pick up tasks automatically and report back in real-time." },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="mb-4 text-5xl font-semibold text-zinc-700">{item.step}</div>
                  <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
                  <p className="text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-12 md:p-16">
              <h2 className="mb-4 text-3xl font-semibold md:text-4xl">Ready to automate?</h2>
              <p className="mb-8 text-zinc-400">Join thousands of teams using OpenBoard to streamline their development workflow.</p>
              <button className="rounded-full bg-white px-8 py-3 text-base font-medium text-black transition-transform hover:scale-105">
                Start for free
              </button>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-indigo-500 to-purple-600">
                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                </svg>
              </div>
              <span className="text-sm font-medium">OpenBoard</span>
            </div>
            <p className="text-sm text-zinc-500">&copy; 2026 OpenBoard. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
