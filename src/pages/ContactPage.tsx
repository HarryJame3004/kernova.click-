import React, { useState } from 'react';
import { Mail, Globe, Send, Copy, Check, Shield, Terminal, ArrowUpRight, MessageSquareCode } from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';
import { ContactFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    topic: 'Alpha Testing & Early Access',
    organization: '',
    message: '',
  });

  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedFullMessage, setCopiedFullMessage] = useState(false);

  const topics = [
    'Alpha Testing & Early Access',
    'Compiler Diagnostics Discussion',
    'Build Systems & Workflows (CMake/Ninja)',
    'Architecture & Linux Infrastructure',
    'General Inquiry',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const subjectText = encodeURIComponent(`[Kernova] ${formData.topic} - ${formData.name || 'Developer'}`);
  const bodyText = encodeURIComponent(
    `Name: ${formData.name || 'Not provided'}
Email: ${formData.email || 'Not provided'}
Project/Organization: ${formData.organization || 'None'}
Topic: ${formData.topic}

Message:
${formData.message || 'I am interested in testing the Kernova Developer Workspace and would like to learn more.'}`
  );

  const mailtoUri = `mailto:contact@kernova.click?subject=${subjectText}&body=${bodyText}`;

  const copyEmailAddress = () => {
    navigator.clipboard.writeText('contact@kernova.click');
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const copyFullMessage = () => {
    const formatted = `To: contact@kernova.click
Subject: [Kernova] ${formData.topic} - ${formData.name || 'Developer'}
Organization: ${formData.organization || 'None'}
From: ${formData.email || 'None'}

Message:
${formData.message || 'I am interested in testing the Kernova Developer Workspace.'}`;

    navigator.clipboard.writeText(formatted);
    setCopiedFullMessage(true);
    setTimeout(() => setCopiedFullMessage(false), 2000);
  };

  return (
    <div className="flex flex-col bg-zinc-950 text-zinc-100 min-h-screen">
      <SEOHead
        title="Contact Engineering — KERNOVA"
        description="Get in touch with Kernova at contact@kernova.click for early access, compiler workflow discussions, or general inquiries. Build Beyond Limits."
        canonicalPath="/contact"
      />

      {/* Hero Header */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-20 border-b border-zinc-900 bg-grid-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/80 text-[11px] font-mono text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>DIRECT CHANNELS</span>
              <span className="text-zinc-600">/</span>
              <span>contact@kernova.click</span>
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 [text-wrap:balance]">
              Speak directly with our engineers.
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-400 [text-wrap:balance]">
              Whether you are evaluating C/C++ diagnostic tools, experiencing compilation bottlenecks, or interested in testing early Linux builds, reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 sm:py-28 border-b border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Info Column */}
            <div className="md:col-span-5 space-y-6">
              {/* Official Credentials */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-7">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Official Communication Channel
                </span>

                <div className="mt-4 p-4 rounded-xl border border-zinc-800 bg-zinc-950 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500 text-[11px]">Direct Inbox:</span>
                    <button
                      type="button"
                      onClick={copyEmailAddress}
                      className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 transition-colors"
                      title="Copy email address"
                    >
                      {copiedAddress ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                      <span>{copiedAddress ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <div className="font-bold text-sm text-zinc-100 select-all">
                    contact@kernova.click
                  </div>
                </div>

                <div className="mt-5 space-y-3 font-mono text-xs text-zinc-400">
                  <div className="flex items-center justify-between py-1 border-b border-zinc-850">
                    <span className="text-zinc-500">Domain:</span>
                    <span className="text-zinc-200">kernova.click</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-zinc-850">
                    <span className="text-zinc-500">PGP / Encryption:</span>
                    <span className="text-zinc-400">Available on request</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-zinc-500">Response Mode:</span>
                    <span className="text-zinc-200">Founder Direct</span>
                  </div>
                </div>
              </div>

              {/* Instructions for Useful Bug / Workflow Inquiries */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-200 mb-2">
                  <Terminal className="h-4 w-4 text-cyan-400" />
                  <span>HELPFUL INFORMATION TO INCLUDE</span>
                </div>
                <ul className="space-y-2 text-xs text-zinc-400 leading-relaxed font-sans">
                  <li>• Your Linux distribution and kernel version (e.g. Ubuntu 24.04, Arch Linux).</li>
                  <li>• Compiler toolchains used (e.g. GCC 13, Clang 18, libc++).</li>
                  <li>• Build orchestrator (CMake with Ninja, Make, Meson).</li>
                  <li>• A brief snippet or description of the error cascade or build bottleneck.</li>
                </ul>
              </div>
            </div>

            {/* Right Form Column: Pre-Formatted Mailto Dispatcher */}
            <div className="md:col-span-7 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-zinc-100">
                    Prepare Email to contact@kernova.click
                  </h2>
                  <p className="mt-0.5 text-xs text-zinc-400">
                    Select your topic and craft your message. Launch your email app or copy formatted text.
                  </p>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = mailtoUri;
                }}
                className="mt-6 space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs text-zinc-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Linus Chen"
                      className="mt-1.5 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-xs text-zinc-100 placeholder:text-zinc-600 transition-colors focus:border-cyan-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-mono text-xs text-zinc-400">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. developer@infrastructure.org"
                      className="mt-1.5 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-xs text-zinc-100 placeholder:text-zinc-600 transition-colors focus:border-cyan-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="topic" className="block font-mono text-xs text-zinc-400">
                      Inquiry Topic
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleInputChange}
                      className="mt-1.5 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-100 transition-colors focus:border-cyan-500 focus:outline-hidden"
                    >
                      {topics.map((t) => (
                        <option key={t} value={t} className="bg-zinc-900">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block font-mono text-xs text-zinc-400">
                      Project or Organization <span className="text-zinc-600">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="e.g. Systems Lab / Open Source"
                      className="mt-1.5 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-xs text-zinc-100 placeholder:text-zinc-600 transition-colors focus:border-cyan-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-zinc-400">
                    Message / Technical Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your C/C++ toolchain, compiler versions, or specific diagnostic friction points you'd like to test..."
                    className="mt-1.5 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 transition-colors focus:border-cyan-500 focus:outline-hidden leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={mailtoUri}
                    className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-5 py-2.5 text-xs font-semibold text-zinc-950 hover:bg-white transition-colors"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Launch in Mail Client</span>
                  </a>

                  <button
                    type="button"
                    onClick={copyFullMessage}
                    className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-xs font-semibold text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                  >
                    {copiedFullMessage ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copiedFullMessage ? 'Message Copied!' : 'Copy Formatted Text'}</span>
                  </button>
                </div>

                <div className="pt-2 text-[11px] font-mono text-zinc-500 leading-relaxed">
                  Notice: Clicking "Launch in Mail Client" opens your system mail handler addressed to <span className="text-zinc-300">contact@kernova.click</span>. Alternatively, click "Copy Formatted Text" to paste into webmail.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
