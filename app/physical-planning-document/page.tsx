import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Physical Planning Document - Orange Island Lagos',
  description: 'Physical planning and building development guidelines for developing your plot on Orange Island Lagos.',
};

export default function PhysicalPlanningPage() {
  const steps = [
    {
      id: 'STEP 1',
      title: 'Understand Your Plot Regulations',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 font-light leading-relaxed">
            Before starting any design, ensure your proposed development aligns with the approved planning parameters.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-100 p-5 rounded-lg">
              <h5 className="font-bold text-gray-900 mb-3 text-sm tracking-wide">Residential Plots (650 sqm – Typical)</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-semibold text-gray-800">Max Building Coverage:</span> 60%</li>
                <li><span className="font-semibold text-gray-800">Max Floors:</span> Ground + 2 floors (Penthouse limited to 30%)</li>
                <li><span className="font-semibold text-gray-800">Max Gross Floor Area:</span> 805 sqm</li>
                <li><span className="font-semibold text-gray-800">Minimum Landscaping:</span> 10%</li>
                <li><span className="font-semibold text-gray-800">Parking:</span> Minimum of 2 spaces</li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-5 rounded-lg">
              <h5 className="font-bold text-gray-900 mb-3 text-sm tracking-wide">Setbacks (Mandatory)</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-semibold text-gray-800">Front:</span> 6m</li>
                <li><span className="font-semibold text-gray-800">Rear:</span> 3m</li>
                <li><span className="font-semibold text-gray-800">Sides:</span> 3m</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 text-amber-800 p-4 rounded text-sm border-l-4 border-amber-500 font-medium flex items-center gap-3">
            <span className="text-xl">⚠️</span>
            All cantilevers must comply strictly with setback requirements.
          </div>
        </div>
      )
    },
    {
      id: 'STEP 2',
      title: 'Conduct Site & Feasibility Studies',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 font-light leading-relaxed">
            Before design begins, a site assessment is mandatory.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-bold text-gray-900 mb-2 text-sm tracking-wide">Key Requirements:</h5>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Soil Test (Geotechnical Report)</li>
                <li>Feasibility Study</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-gray-900 mb-2 text-sm tracking-wide">Why This Matters:</h5>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Determines soil stability and foundation requirements</li>
                <li>Identifies site constraints (water table, utilities, access)</li>
                <li>Helps avoid costly design changes and delays</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'STEP 3',
      title: 'Prepare Concept Architectural Design',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 font-light leading-relaxed">
            Your architect must prepare a concept design package, including:
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-sm text-gray-600 list-disc list-inside">
            <li>Site Plan with analysis</li>
            <li>Floor Plans</li>
            <li>Roof Plan</li>
            <li>Sections (minimum 2)</li>
            <li>Elevations (all sides)</li>
            <li>3D Perspective views</li>
            <li>Finish Schedule</li>
          </ul>
          <p className="text-sm font-semibold text-emerald-600 flex items-center gap-2">
            <span>✅</span> All drawings must be to scale and properly dimensioned.
          </p>
          
          <div className="bg-gray-50 border border-gray-100 p-5 rounded-lg mt-4">
            <h5 className="font-bold text-gray-900 mb-2 text-sm tracking-wide">Review Outcome</h5>
            <p className="text-gray-600 text-sm mb-2">Once approved by Orange Island:</p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>You will receive a Concept Approval Letter (Stamped "ACCEPTED")</li>
              <li>You can then proceed to Lagos State approvals</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'STEP 4',
      title: 'Obtain Lagos State Approvals',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 font-light leading-relaxed">
            You are required to process approvals directly with Lagos State Physical Planning Permit Authority (LASPPPA) and Lagos State Building Control Agency (LASBCA).
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-bold text-gray-900 mb-3 text-sm tracking-wide">Documents Required:</h5>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Architectural drawings (stamped & sealed)</li>
                <li>Structural drawings + calculations (COREN Engineer)</li>
                <li>Mechanical & Electrical drawings</li>
                <li>Survey Plan</li>
                <li>Soil Test Report</li>
                <li>Title Documents (C of O / Deed / Consent, etc.)</li>
                <li>Tax Clearance</li>
                <li>Passport photographs</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-gray-900 mb-3 text-sm tracking-wide">For Construction Approval (LASBCA):</h5>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Letter of intent to commence construction</li>
                <li>Approved drawings</li>
                <li>Structural stability letter</li>
                <li>Insurance (All-risk policy)</li>
                <li>Safety clearance</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-amber-50 text-amber-800 p-4 rounded text-sm border-l-4 border-amber-500 font-medium flex items-center gap-3">
            <span className="text-xl">⚠️</span>
            All statutory payments are made directly to Lagos State. Orange Island does not charge for this process.
          </div>
        </div>
      )
    },
    {
      id: 'STEP 5',
      title: 'Pre-Construction Permit',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 font-light leading-relaxed">
            Before full construction, you must obtain a Pre-Construction Permit, which allows:
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 list-disc list-inside">
            <li>Site clearing</li>
            <li>Sand filling</li>
            <li>Fence construction</li>
            <li>Soil testing</li>
            <li>Beacon positioning</li>
          </ul>
          <p className="text-sm font-semibold text-emerald-600 flex items-center gap-2 mt-4">
            <span>✅</span> Site Induction is mandatory before any activity begins.
          </p>
        </div>
      )
    },
    {
      id: 'STEP 6',
      title: 'Construction Permit',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 font-light leading-relaxed">
            To begin full construction, submit the following to Orange Island Management:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 text-sm text-gray-600 list-disc list-inside gap-y-2">
            <li>Approved LASPPPA & LASBCA drawings</li>
            <li>Structural drawings (COREN certified)</li>
            <li>Soil test report</li>
            <li>Structural indemnity letter</li>
            <li>Safety clearance</li>
            <li>Evidence of material testing (LSMTL)</li>
            <li>Contractor's insurance</li>
            <li>Method statement</li>
            <li>Project signage</li>
            <li>Functional site toilet</li>
          </ul>
        </div>
      )
    },
    {
      id: 'STEP 7',
      title: 'Construction Phase Guidelines',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 font-light leading-relaxed">
            During construction:
          </p>
          <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
            <li>Ensure compliance with approved drawings</li>
            <li>Maintain site safety standards</li>
            <li>Adhere to estate regulations and working hours</li>
            <li>Keep all contractors registered with Management</li>
          </ul>
        </div>
      )
    }
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
            Physical Planning Document
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 mb-12">
          <h2 className="text-sm font-bold tracking-widest text-orange-600 uppercase mb-3">
            Building Guidelines – Orange Island
          </h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Step-by-Step Guide to Developing Your Plot
          </h3>
          <p className="text-gray-600 leading-relaxed font-light text-lg">
            This guide outlines the required process for designing, approving, and constructing your property on Orange Island. Please follow each step carefully to ensure compliance with estate and Lagos State regulations.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-xl shadow-sm border border-gray-150 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
              <div className="p-8 pl-10">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold tracking-widest uppercase rounded mb-4">
                  {step.id}
                </span>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">{step.title}</h4>
                {step.content}
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="mt-12 bg-gray-900 rounded-2xl p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          
          <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-orange-500">⭐</span> Important Notes
          </h4>
          <ul className="space-y-4 text-gray-300 font-light text-sm md:text-base">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">•</span>
              Minimum 10% of your plot must be landscaped.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">•</span>
              All developments must align with existing infrastructure (roads, drainage, utilities).
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">•</span>
              Non-compliance may result in delays or suspension of construction.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
