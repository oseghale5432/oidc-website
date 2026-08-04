import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Approval Process - Orange Island Lagos',
  description: 'Requirements and guidelines for construction approval on Orange Island. Understand the pre-construction, construction, and post-construction stages.',
};

export default function ApprovalProcessPage() {
  const stages = [
    {
      id: 1,
      title: 'PRECONSTRUCTION PERMIT',
      oidc: [
        'Send development fees',
        'Send OI development guidance manual',
        'Send OI rules and regulations',
        'Send Orange Island safety health environment and quality (sheq) policy',
        'Send OI preconstruction permit',
      ],
      subscriber: [
        'Pay development fees',
        'Acknowledge OI development guidance manual',
        'Acknowledge OI rules and regulations',
        'Acknowledge OI safety health environment and quality (sheq) policy',
        'Acknowledge OI fence concept design',
        'Receive preconstruction permit',
      ],
    },
    {
      id: 2,
      title: 'CONSTRUCTION PERMIT',
      oidc: [
        'Review all documents.',
        'Approve and prepare construction permit',
        'Organize a mandatory induction exercise in site office',
        'Issue construction permit',
        'Conduct routine inspections to ensure all compliance has been met',
      ],
      subscriber: [
        'Soft / Hard copy of Lagos State Government (LASPPA & LABSCA)',
        'Evidence of building insurance',
        'Endorsed OIMC / Approved Copy of: \n• Architectural Drawings \n• Structural Drawings \n• Electrical Design \n• Mechanical Design \n• Soil Test / Geotechnical Report \n• Structural Drawings with Calculation Sheets.',
        'Endorsed by a COREN Certified Engr: \n• A Copy of structural indemnity letter. \n• Safety Commission Clearance (lasg) \n• Evidence of Application from Lagos State Material Testing (LSMTL). \n• Contractors Third Party Insurance Package \n• A Copy of Contractors Construction Method statement. \n• Evidence of Installation of Project Signage on site \n• Availability of Functional / Installed Mobile Toilet on site',
      ],
    },
    {
      id: 3,
      title: 'POST CONSTRUCTION',
      oidc: [
        'Inspection of OI infrastructures',
        'Receive a copy of certificate of fitness for habitation.',
        'Connect to OI facilities (Power, water, sewage) upon confirmation of compliance.',
        'Refund of caution fees (upon confirmation of no default)',
      ],
      subscriber: [
        'Submit certificate of fitness for habitation from LASG.',
      ],
    },
  ];

  return (
    <div className="reference-document min-h-screen bg-white pb-24 text-[#3e403f]">
      {/* Hero Section */}
      <section className="bg-[#f8f8f8] py-16 sm:py-20">
        <div className="hidden">
          <Image
            src="/images/Header_Image.png"
            alt="Orange Island Building Guidelines"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>
        <div className="mx-auto w-full max-w-[1140px] px-6 lg:px-8">
          <span className="text-orange-400 font-bold uppercase tracking-widest text-sm block mb-3">
            Building Guidelines
          </span>
          <h1 className="max-w-4xl text-[2.75rem] font-bold leading-[1.15] text-[#202124] sm:text-[3.6rem]">
            Approval Process
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#606261]">Responsibilities, documentation and decisions required before, during and after construction.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative mx-auto max-w-[1300px] px-6 py-20 lg:px-8">
        <div className="overflow-hidden rounded-[10px] border border-[#dce0e5] bg-white">
          <div className="border-b border-[#dce0e5] p-10 text-left md:p-12">
            <h2 className="text-sm font-bold tracking-widest text-orange-600 uppercase mb-3">
              Requirements for Construction
            </h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Construction Document Flow
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed font-light text-lg">
              Below are the required stages for obtaining your construction permits and eventual habitation certificates on Orange Island.
            </p>
          </div>

          <div className="bg-[#f8f8f8] p-6 md:p-10">
            <div className="grid gap-8 lg:grid-cols-3">
              {stages.map((stage) => (
                <div key={stage.id} className="overflow-hidden rounded-[10px] border border-[#dce0e5] bg-white">
                  {/* Stage Header */}
                  <div className="flex items-center gap-4 border-b border-[#dce0e5] bg-white px-8 py-5 text-[#202124]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d6f2fb] text-xl font-bold text-[#247fa8]">
                      {stage.id}
                    </span>
                    <h4 className="text-xl font-bold tracking-wide">{stage.title}</h4>
                  </div>

                  {/* Stage Details Split */}
                  <div className="grid divide-y divide-gray-100">
                    
                    {/* OIDC Column */}
                    <div className="p-8">
                      <h5 className="text-sm font-bold tracking-widest text-gray-900 uppercase mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        OIDC Responsibilities
                      </h5>
                      <ul className="space-y-4">
                        {stage.oidc.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                            <span className="text-orange-500 font-bold mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Subscriber Column */}
                    <div className="p-8 bg-gray-50/30">
                      <h5 className="text-sm font-bold tracking-widest text-gray-900 uppercase mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Subscriber Responsibilities
                      </h5>
                      <ul className="space-y-4">
                        {stage.subscriber.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                            <span className="text-emerald-500 font-bold mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-bold text-gray-900 mb-6">Need Further Assistance?</h4>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
            className="rounded-[5px] bg-[#202124] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#3e403f]"
            >
              Contact Town Planning
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
