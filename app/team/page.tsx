import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Team & Partners - Orange Island Lagos',
  description: 'Meet the board of directors, management team, and development partners behind Orange Island Lagos.',
};

export default function TeamPage() {
  const directors = [
    { name: 'Lookman Durosinmi-Etti', role: 'Chairman' },
    { name: 'Olayinka Ogunsulire', role: 'Non Executive Director' },
    { name: 'George Nwanchukwu', role: 'Non Executive Director' },
    { name: 'Chiedu Nweke', role: 'Non Executive Director' },
    { name: 'Theodore Omalu', role: 'Non Executive Director' },
    { name: 'Olusegun Kassim', role: 'Non Executive Director' },
    { name: 'Adekunle Mujeeb Smith', role: 'Non Executive Director' },
    { name: 'Olusegun Faloju', role: 'Non Executive Director' },
  ];

  const nonDirectors = [
    { name: 'Vaughan Edwards', role: 'General Manager' },
    { name: 'Juyin Agbe-Davies', role: 'Chief Operating Officer' },
  ];

  const devTeam = [
    { name: 'Van Oord Ltd', country: 'The Netherlands', role: 'Dredging and Reclamation Contractor' },
    { name: 'Aqseptance Group', country: 'Germany', role: 'Filtration, Separation and Water Technology' },
    { name: 'Via Consult', country: 'South Africa', role: 'Engineering Design Services' },
    { name: 'Swampsea Ltd', country: 'Nigeria', role: 'Construction and Development Managers' },
    { name: 'Centurion Systems', country: 'South Africa', role: 'Access Control' },
    { name: 'Delano Architects', country: 'Nigeria', role: 'Town Planning Consultants' },
    { name: 'GP Greed and Associates', country: 'South Africa', role: 'Architects and Master Planners' },
    { name: 'Al-Mansour Engineering & Construction Ltd', country: 'Nigeria', role: 'Gate House Contractor' },
    { name: 'Willem Olaf. Willem Engineering Ltd', country: 'Nigeria', role: 'Shore Protection and Lake' },
    { name: 'Cynssa Technologies Int Ltd', country: 'Nigeria', role: 'Street Light Contractor' },
    { name: 'Mepas & Prodel Ltd', country: 'Nigeria', role: 'Town Planning Consultants' },
    { name: 'Koa', country: 'Nigeria', role: 'Mechanical and Electrical Consultants' },
    { name: 'Roelag Environmental Services Ltd', country: 'Nigeria', role: 'Water, Sewage & Irrigation' },
    { name: 'Metropolitan Construction Company Ltd', country: 'Nigeria', role: 'Main Building and Infrastructure Contractor' },
    { name: 'Ecopro Resources Ltd', country: 'Nigeria', role: 'Environmental Contractor' },
    { name: 'Teazon Services Limited', country: 'Nigeria', role: 'Water Contractor' },
    { name: 'Sakay Construction & Resources Ltd', country: 'Nigeria', role: 'Infrastructure Contractor' },
    { name: 'Plot Hierarchy', country: 'United Kingdom', role: 'Consultants' },
    { name: 'Socrates Communications', country: 'United Kingdom', role: 'Branding Consultants' },
    { name: 'SIAO', country: 'Nigeria', role: 'External Auditors' },
    { name: 'COSEC Administrators Ltd', country: 'Nigeria', role: 'Company Secretary' },
    { name: 'Jackson Etti & Edu', country: 'Nigeria', role: 'Solicitor and Legal Advisor' },
    { name: 'Keystone Bank', country: 'Nigeria', role: 'Bankers' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Header2.jpeg"
            alt="Orange Island Team Header"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <span className="text-orange-400 font-bold uppercase tracking-widest text-sm block mb-3">
            People Behind the Island
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Team & Partners
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded"></div>
        </div>
      </section>

      {/* Intro Statement Section */}
      <section className="py-16 bg-orange-50 border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed">
            Driven by a Public-Private Partnership between Orange Island Development Company and the Lagos State Government, 
            the team proudly recognizes, supports and celebrates local Nigerian businesses and their international counterparts. 
            We strive to create partnerships that deliver a destination of global standards for all Nigerians to enjoy and be proud.
          </p>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-orange-600 uppercase mb-3">Governance</h2>
            <h3 className="text-3xl font-bold text-gray-900">Board of Directors</h3>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {directors.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-150 rounded-xl p-6 shadow-sm hover:shadow-md transition text-center hover:border-orange-500"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl mx-auto mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-1 leading-snug">{member.name}</h4>
                <p className="text-gray-500 text-sm font-light uppercase tracking-wider">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management / Non-Directors */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-orange-600 uppercase mb-3">Management</h2>
            <h3 className="text-3xl font-bold text-gray-900">Non-Directors / Officers</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {nonDirectors.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition text-center hover:border-orange-500"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl mx-auto mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="font-bold text-gray-900 text-xl mb-1 leading-snug">{member.name}</h4>
                <p className="text-gray-500 text-sm font-light uppercase tracking-wider">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Team Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-orange-600 uppercase mb-3">Partnerships</h2>
            <h3 className="text-3xl font-bold text-gray-900">Development Team</h3>
            <p className="text-gray-500 font-light mt-2 max-w-xl mx-auto">
              Our world-class international and national consultants, engineers, and construction managers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devTeam.map((partner, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-150 rounded-xl p-6 shadow-sm hover:shadow transition-shadow hover:border-orange-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h4 className="font-bold text-gray-950 text-lg leading-snug">{partner.name}</h4>
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded font-semibold whitespace-nowrap uppercase tracking-wider">
                      {partner.country}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm font-light">{partner.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-orange-200 uppercase mb-3">Strategic</h2>
            <h3 className="text-3xl font-bold text-white">Key Partners</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-xl p-8 border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold text-xl text-white mb-4">Lagos State Government</h4>
              <p className="text-orange-50 font-light leading-relaxed text-sm">
                Lagos State, through its Ministry of Waterfront Infrastructure Development, remains committed to delivering a thriving, sustainable Lagos.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-8 border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold text-xl text-white mb-4">FW Dredging Limited</h4>
              <p className="text-orange-50 font-light leading-relaxed text-sm">
                One of Nigeria’s foremost indigenous dredging and marine construction companies, vital in reclaiming and creating the island infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-150">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to Partner with Us?</h2>
          <p className="text-lg text-gray-600 mb-8 font-light max-w-xl mx-auto">
            Connect with our management team to explore collaboration opportunities.
          </p>
          <Link
            href="/contact"
            id="team-cta-contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded font-bold uppercase tracking-wider text-sm transition shadow hover:shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
