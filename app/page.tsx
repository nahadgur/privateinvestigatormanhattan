'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lock, MapPin, ChevronDown, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { services } from '@/data/services';
import { toSlug } from '@/data/locations';
import { siteConfig, FAQS_HOME } from '@/data/site';
import { topAreas } from '@/data/homepage';

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const trustPoints = [
  { title: 'Rigorous Vetting', desc: 'Only investigators with proven track records and active New York State licenses.' },
  { title: 'Absolute Privacy', desc: 'Your identity remains shielded until you choose to move forward with an introduction.' },
  { title: 'Local Expertise', desc: 'Investigators intimately familiar with Manhattan neighborhoods and surveillance logistics.' },
  { title: 'No Direct Fees', desc: 'Our referral coordination ensures you reach the right specialist the first time.' },
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main className="container-width grid grid-cols-1 lg:grid-cols-12 gap-3 flex-grow my-3">
        {/* 1. HERO + FORM */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="bg-primary text-white rounded-tile p-4 lg:p-8 shadow-card flex flex-col lg:col-span-4 lg:row-span-2"
        >
          <div className="text-[11px] sm:text-[12px] font-extrabold uppercase text-white/80 mb-3 flex items-center w-full tracking-wider">
            Premier Referral Network
            <div className="flex-grow h-[1px] bg-white/30 ml-3" />
          </div>
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[1.5rem] sm:text-[2.2rem] font-extrabold leading-[1.1] mb-2 sm:mb-3 tracking-tight"
          >
            Discreet Access to Manhattan&apos;s Licensed Investigators.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[0.9rem] sm:text-[0.95rem] opacity-90 mb-4 sm:mb-8 leading-[1.3] sm:leading-[1.4]"
          >
            {siteConfig.name} connects you with vetted, NYS-licensed private investigators who specialize in Manhattan&apos;s complex urban landscape.
          </motion.p>

          <div id="consultation" className="bg-white/10 p-3.5 sm:p-4 rounded-tile mt-auto">
            <h3 className="text-[9px] sm:text-[10px] font-bold mb-2 sm:mb-3 uppercase tracking-wider text-white">
              Secure Consultation Request
            </h3>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-ink hover:bg-black text-white p-3 font-bold uppercase text-[11px] sm:text-[12px] tracking-wide rounded-chip mt-1 transition-colors shadow-sm"
            >
              Request Private Consultation
            </button>
            <p className="text-[9px] sm:text-[10px] text-white/70 text-center flex items-center justify-center gap-1 mt-2">
              <Lock className="w-2.5 h-2.5" /> No obligation. Strictly confidential.
            </p>
          </div>
        </motion.section>

        {/* 2. SERVICES */}
        <motion.section
          id="services"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="bg-paper rounded-tile p-5 sm:p-6 shadow-card lg:col-span-5 h-full flex flex-col"
        >
          <SectionTitle>Investigative Specializations</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 flex-grow">
            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                href={`/services/${service.slug}/`}
                title={service.title}
                description={shortDesc(service.description)}
              />
            ))}
          </div>
        </motion.section>

        {/* 3. WHY US */}
        <motion.section
          id="why-us"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="bg-paper rounded-tile p-5 sm:p-6 shadow-card lg:col-span-3 h-full flex flex-col"
        >
          <SectionTitle>Why Choose Our Network</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:flex lg:flex-col gap-5 sm:gap-4 mt-4 flex-grow justify-around">
            {trustPoints.map((point) => (
              <motion.div key={point.title} whileHover={{ x: 2 }} className="transition-transform">
                <h4 className="text-[12px] uppercase font-bold mb-1 text-ink flex mt-1 items-center gap-2 tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" /> {point.title}
                </h4>
                <p className="text-[12px] sm:text-[11px] text-gray-dark leading-[1.4] sm:leading-[1.3] pl-3.5">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 4. HOW IT WORKS */}
        <motion.section
          id="process"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="bg-paper rounded-tile p-5 sm:p-6 shadow-card lg:col-span-5 h-full flex flex-col justify-center"
        >
          <SectionTitle>Referral Process</SectionTitle>
          <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-4 mt-6 sm:mt-4">
            {[
              ['01', 'Confidential Inquiry', 'Share your case details through our secure consultation request.'],
              ['02', 'Expert Matching', 'We identify the vetted investigators best suited to your case type.'],
              ['03', 'Direct Connection', 'Review options and engage the agency that fits your budget and timeline.'],
            ].map(([num, title, copy]) => (
              <motion.div
                key={num}
                whileHover={{ y: -2 }}
                className="w-full sm:w-[30%] relative py-2 pl-2 sm:pl-0"
              >
                <div className="absolute top-[-10px] sm:top-0 left-[-5px] text-[40px] sm:text-[32px] font-black text-gray-light leading-none -z-10 tracking-tighter">
                  {num}
                </div>
                <h4 className="text-[15px] sm:text-[14px] font-bold mb-1.5 sm:mb-1 text-ink mt-2">{title}</h4>
                <p className="text-[12px] sm:text-[11px] text-gray-dark leading-[1.4] sm:leading-[1.3]">{copy}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 5. FAQ PREVIEW */}
        <motion.section
          id="faq"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="bg-paper rounded-tile p-5 sm:p-6 shadow-card lg:col-span-3 h-full flex flex-col"
        >
          <SectionTitle>Common Questions</SectionTitle>
          <div className="mt-4 space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-grow min-h-[150px]">
            {FAQS_HOME.slice(0, 3).map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={shortFaq(faq.answer)} />
            ))}
          </div>
        </motion.section>

        {/* 6. COVERAGE CARD */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="bg-paper rounded-tile p-5 sm:p-6 shadow-card lg:col-span-8 flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <div className="w-full sm:w-2/3">
            <SectionTitle>Manhattan Coverage Area</SectionTitle>
            <p className="text-[13px] text-gray-dark leading-[1.5] mb-5 mt-4">
              Manhattan is a dense, vertical environment. Surveillance and investigative work here require local knowledge that out-of-town agencies do not possess.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-[11px] font-bold uppercase text-ink tracking-wider">
              {topAreas.slice(0, 6).map((area) => (
                <Link
                  key={area}
                  href={`/location/${toSlug(area)}/`}
                  className="flex items-center gap-2 cursor-pointer transition-colors hover:text-primary"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" /> {area}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-1/3 flex justify-center sm:justify-end">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-[100px] h-[100px] bg-primary rounded-full flex items-center justify-center p-0.5 relative group cursor-pointer shadow-lg shadow-primary/20"
              style={{
                WebkitMask: 'radial-gradient(circle, #000 40%, transparent 50%)',
                mask: 'radial-gradient(circle, #000 40%, transparent 50%)',
              }}
            >
              <div className="bg-primary w-full h-full rounded-full absolute mix-blend-multiply opacity-50 group-hover:opacity-70 transition-opacity" />
              <MapPin className="w-8 h-8 text-white relative z-10" />
            </motion.div>
          </div>
        </motion.section>

        {/* 7. CTA */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="bg-ink text-white rounded-tile p-6 lg:p-8 shadow-card lg:col-span-4 flex flex-col justify-center items-center text-center"
        >
          <h2 className="text-[22px] font-extrabold leading-[1.2] mb-3">Ready to find answers?</h2>
          <p className="text-[13px] text-gray-mid mb-6 px-4 font-medium opacity-80 leading-[1.4]">
            Let us match you with a trusted, licensed Manhattan investigator.
          </p>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-primary text-white py-3.5 px-4 font-bold uppercase text-[12px] tracking-widest rounded-chip transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-primary outline-none inline-block shadow-md shadow-primary/20 hover:bg-white hover:text-ink"
          >
            Start Free Consultation
          </motion.button>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[12px] font-extrabold uppercase text-primary mb-3 flex items-center w-full tracking-wider opacity-90">
      {children}
      <div className="flex-grow h-[1px] bg-gray-mid opacity-50 ml-3" />
    </div>
  );
}

function ServiceCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="block">
      <motion.div
        whileHover={{ y: -2, borderColor: '#E0E0E0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}
        className="p-4 sm:p-3 border border-gray-light rounded-chip bg-white transition-colors cursor-pointer group h-full flex flex-col"
      >
        <h3 className="text-[14px] sm:text-[13px] font-bold text-ink mb-1.5 sm:mb-1 tracking-tight group-hover:text-primary transition-colors flex items-center justify-between gap-2">
          {title}
          <ArrowRight className="w-3.5 h-3.5 text-gray-mid group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
        </h3>
        <p className="text-[12px] sm:text-[11px] text-gray-dark leading-[1.4] sm:leading-[1.3] opacity-90">
          {description}
        </p>
      </motion.div>
    </Link>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-gray-light pb-3 pt-1 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between text-ink font-bold text-[13px] sm:text-[12px] hover:text-primary transition-colors gap-2">
        <span>{question}</span>
        <span className="flex-shrink-0 transition-transform duration-300 group-open:-rotate-180 bg-gray-light p-1 rounded-full group-hover:bg-gray-mid">
          <ChevronDown className="w-3 h-3 sm:w-3 sm:h-3 text-ink" />
        </span>
      </summary>
      <p className="mt-3 sm:mt-2 text-gray-dark leading-[1.4] sm:leading-[1.3] text-[12px] sm:text-[11px] pr-4 opacity-90">
        {answer}
      </p>
    </details>
  );
}

function shortDesc(desc: string): string {
  const first = desc.split(/\.\s/)[0];
  return first.length > 95 ? first.slice(0, 92) + '...' : first + '.';
}

function shortFaq(answer: string): string {
  const first = answer.split(/\.\s/)[0];
  return first.length > 110 ? first.slice(0, 107) + '...' : first + '.';
}
