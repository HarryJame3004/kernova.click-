import React, { useState } from 'react';
import { Mail, Globe, Send, Copy, Check, Shield, Terminal } from 'lucide-react';
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
    'Compiler Diagnostics Discussion',
    'Build Systems & Workflows',
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
${formData.message || 'I am interested in Kernova Developer Workspace and would like to learn more.'}`
  );

  const mailtoUri = `mailto:contact@kernova.click?subject=${subjectText}&body=${bodyText}`;

  const handleCopyMessage = () => {
    const rawMessage = `To: contact@kernova.click
Subject: [Kernova] ${formData.topic} - ${formData.name || 'Developer'}
Organization: ${formData.organization || 'None'}
From: ${formData.email || 'None'}

Message:
${formData.message || 'I am interested in Kernova Developer Workspace.'}`;

    navigator.clipboard.writeText(rawMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Contact — KERNOVA"
        description="Get in touch with Kernova at contact@kernova.click for early access, compiler workflow discussions, or general inquiries. Build Beyond Limits."
        canonicalPath="/contact"
      />

      {/* Hero */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>DIRECT INQUIRIES</span>
              <span className="text-zinc-400 dark:text-zinc-600">/</span>
              <span>contact@kernova.click</span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100 [text-wrap:balance]">
              Contact the engineering team.
            </h1>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 [text-wrap:balance]">
              Whether you want to test early builds of the Kernova Developer Workspace, discuss compiler diagnostics, or provide feedback, reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="border-t border-zinc-200/80 bg-zinc-50/60 py-16 dark:border-zinc-850 dark:bg-zinc-950/60 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {/* Left Info Column */}
            <div className="space-y-4 md:col-span-5">
              <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
                <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-zinc-900 dark:text-zinc-100">
                  Direct Inquiries
                </h2>
                <div className="mt-4 space-y-3 font-mono text-xs">
                  <div>
                    <span className="text-zinc-500 block text-[11px]">Primary Email</span>
                    <a
                      href="mailto:contact@kernova.click"
                      className="font-semibold text-zinc-900 hover:underline dark:text-zinc-100"
                    >
                      contact@kernova.click
                    </a>
                  </div>

                  <div>
                    <span className="text-zinc-500 block text-[11px]">Domain</span>
                    <span className="text-zinc-900 dark:text-zinc-100">kernova.click</span>
                  </div>
                </div>

                <div className="mt-5 border-t border-zinc-100 pt-3 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Every inquiry sent to <span className="font-mono text-zinc-700 dark:text-zinc-300">contact@kernova.click</span> is read directly by our founding engineers.
                </div>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
                <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-zinc-900 dark:text-zinc-100">
                  Open Source & Community
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Public repositories and community communication channels will be opened alongside our Phase 1 milestone.
                </p>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/50 md:col-span-7">
              <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                Compose message to contact@kernova.click
              </h2>
              <p className="mt-1 text-xs text-zinc-500">
                Fill in your details below to prepare an email or copy the formatted text.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = mailtoUri;
                }}
                className="mt-5 space-y-3.5"
              >
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Linus Chen"
                      className="mt-1 w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-900 transition-colors focus:border-zinc-900 focus:bg-white focus:outline-hidden dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:border-zinc-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. developer@company.com"
                      className="mt-1 w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-900 transition-colors focus:border-zinc-900 focus:bg-white focus:outline-hidden dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:border-zinc-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="topic" className="block text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
                      Topic
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleInputChange}
                      className="mt-1 w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-900 transition-colors focus:border-zinc-900 focus:bg-white focus:outline-hidden dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:border-zinc-100"
                    >
                      {topics.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
                      Project / Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Optional"
                      className="mt-1 w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-900 transition-colors focus:border-zinc-900 focus:bg-white focus:outline-hidden dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:border-zinc-100"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your C/C++ compiler setup, toolchain requirements, or feedback..."
                    className="mt-1 w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-900 transition-colors focus:border-zinc-900 focus:bg-white focus:outline-hidden dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:border-zinc-100"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  <a
                    href={mailtoUri}
                    className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
                  >
                    <Send className="h-3 w-3" />
                    <span>Open Mail Client</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-3.5 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900"
                  >
                    {copied ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                    <span>{copied ? 'Copied' : 'Copy Text'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
