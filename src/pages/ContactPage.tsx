import React, { useState } from 'react';
import { Mail, Globe, Send, Copy, Check, ExternalLink, Shield, MessageSquare, Terminal } from 'lucide-react';
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

  const [copied, setCopied] = useState(false);

  const topics = [
    'Alpha Testing & Early Access',
    'Technical Discussion & Compiler Feedback',
    'Founder & Engineering Inquiry',
    'General Question',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Build mailto URI
  const subjectText = encodeURIComponent(`[Kernova Inquiry] ${formData.topic} - ${formData.name || 'Developer'}`);
  const bodyText = encodeURIComponent(
    `Name: ${formData.name || 'Not provided'}
Email: ${formData.email || 'Not provided'}
Organization / Project: ${formData.organization || 'None'}
Topic: ${formData.topic}

Message:
${formData.message || 'I am interested in Kernova Developer Workspace and would like to learn more.'}`
  );

  const mailtoUri = `mailto:contact@kernova.click?subject=${subjectText}&body=${bodyText}`;

  const handleCopyMessage = () => {
    const rawMessage = `To: contact@kernova.click
Subject: [Kernova Inquiry] ${formData.topic} - ${formData.name || 'Developer'}
Organization: ${formData.organization || 'None'}
From: ${formData.email || 'None'}

Message:
${formData.message || 'I am interested in Kernova Developer Workspace.'}`;

    navigator.clipboard.writeText(rawMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Contact Us — KERNOVA"
        description="Get in touch with Kernova at contact@kernova.click for early access, compiler workflow discussions, or general inquiries. Build Beyond Limits."
        canonicalPath="/contact"
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Unboxed metadata */}
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="text-violet-600 dark:text-violet-400 font-semibold">Direct Contact</span>
              <span aria-hidden="true">·</span>
              <span>contact@kernova.click</span>
              <span aria-hidden="true">·</span>
              <span>Founder Direct</span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white [text-wrap:balance]">
              Speak With the Engineering Team
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300 [text-wrap:balance]">
              Whether you are evaluating C/C++ diagnostic tools, experiencing catastrophic compilation latency, or interested in early alpha testing, we welcome direct communication.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Channel Details */}
      <section className="border-t border-slate-200/80 bg-slate-50/50 py-16 transition-colors dark:border-slate-800/80 dark:bg-slate-950/60 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Left Column: Direct Credentials & Honest Information */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  Direct Contact Information
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  We maintain a single, direct inbox for all technical and company inquiries:
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/60">
                    <Mail className="h-4 w-4 text-violet-600 dark:text-violet-400 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-medium text-slate-500">Official Business Email</div>
                      <a
                        href="mailto:contact@kernova.click"
                        className="font-mono text-xs font-semibold text-slate-900 hover:text-violet-600 dark:text-white dark:hover:text-violet-400 break-all"
                      >
                        contact@kernova.click
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/60">
                    <Globe className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-medium text-slate-500">Primary Web Domain</div>
                      <div className="font-mono text-xs font-semibold text-slate-900 dark:text-white">
                        kernova.click
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <Shield className="h-3.5 w-3.5 text-violet-500" />
                    <span>No Bot Queues or Fake Ticket Numbers</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    As an early-stage startup, every message sent to <span className="font-mono text-[11px]">contact@kernova.click</span> goes straight to our founding engineers. We typically reply within 24–48 hours.
                  </p>
                </div>
              </div>

              {/* Verified Profiles Note */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Social Channels & Repositories
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Kernova's public open-source repositories and verified social accounts will be activated alongside the Phase 1 public release. In accordance with our radical honesty policy, we do not link unverified placeholder handles.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <Terminal className="h-3.5 w-3.5 text-violet-500" />
                  <span>GitHub & Community channels launching in Phase 1</span>
                </div>
              </div>
            </div>

            {/* Right Column: Pre-Formatted Mail Client Interface */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:col-span-7 sm:p-8">
              <div className="border-b border-slate-100 pb-4 dark:border-slate-800">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  Compose Email to contact@kernova.click
                </h2>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Fill in your details below to launch your default mail client or copy the formatted text.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = mailtoUri;
                }}
                className="mt-6 space-y-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Linus Chen"
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 transition-colors focus:border-violet-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. developer@company.com"
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 transition-colors focus:border-violet-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="topic" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Inquiry Topic
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleInputChange}
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 transition-colors focus:border-violet-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-900"
                    >
                      {topics.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Organization / Open-Source Project <span className="font-normal text-slate-400">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="e.g. Systems Lab / Independent"
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 transition-colors focus:border-violet-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Message / Technical Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your C/C++ build setup, current pain points, or what you'd like to test in our early Linux builds..."
                    className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 transition-colors focus:border-violet-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-900"
                  />
                </div>

                {/* Action Buttons: Real Functional Mailto and Clipboard Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={mailtoUri}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-violet-500 whitespace-nowrap"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Open in Email Client</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900 whitespace-nowrap"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Formatted Text'}</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Clicking "Open in Email Client" opens your email software addressed to <span className="font-mono text-slate-700 dark:text-slate-300">contact@kernova.click</span>. Alternatively, copy the text to send manually from webmail.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
