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
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Header_Image.png"
            alt="Orange Island Building Guidelines"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <span className="text-orange-400 font-bold uppercase tracking-widest text-sm block mb-3">
            Building Guidelines
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Approval Process
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-10 md:p-14 text-center border-b border-gray-100">
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

          <div className="p-6 md:p-10 bg-gray-50/50">
            <div className="flex flex-col gap-12">
              {stages.map((stage, index) => (
                <div key={stage.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  {/* Stage Header */}
                  <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-5 flex items-center gap-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 font-bold text-xl backdrop-blur-sm">
                      {stage.id}
                    </span>
                    <h4 className="text-xl font-bold tracking-wide">{stage.title}</h4>
                  </div>

                  {/* Stage Details Split */}
                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    
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
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded uppercase tracking-wider text-sm transition duration-300 shadow hover:shadow-md"
            >
              Contact Town Planning
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
