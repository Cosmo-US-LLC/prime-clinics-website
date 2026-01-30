import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Prime Clinics';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Prime Clinics Privacy Policy - Learn how we collect, use, and protect your personal and health information.');
    }
  }, []);

  return (
    <div className="min-h-screen "
    style={{
      background:"linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)"
    }}
    >
      {/* Static Header with Logo */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
        <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 py-4">
          <Link to="/">
            <img 
              src="/Logo.svg" 
              alt="Prime Clinics Logo" 
              className="h-8 md:h-10 w-auto cursor-pointer"
            />
          </Link>
        </div>
      </header>
      
      <section className="w-full py-16 md:py-20 pt-24 md:pt-28">
        <div className="max-w-[848px] py-12 rounded-[16px] bg-white w-full mx-auto px-4 md:px-8">
          {/* Title */}
          <h1 className="font-[Oswald] text-[36px] font-semibold leading-[40px] text-[#0F172B] mb-4">
            PRIVACY POLICY
          </h1>
          
          {/* Effective Date */}
          <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158] mb-8">
            Effective Date: January 30, 2026
          </p>

          {/* Introduction */}
          <div className="mb-8">
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158] mb-4">
              Prime Clinics ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information and personal health information when you use our website, mobile applications, and other online services (collectively, the "Services").
            </p>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
              By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with this policy, please do not use our Services.
            </p>
          </div>

          {/* Section 1: INFORMATION WE COLLECT */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              1. INFORMATION WE COLLECT
            </h2>
            
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158] mb-6">
              We collect several types of information from and about users of our Services, including:
            </p>
            
            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Personal Information
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                This refers to information by which you may be personally identified, such as your name, postal address, e-mail address, telephone number, date of birth, and any other identifier by which you may be contacted online or offline.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Personal Health Information (PHI)
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                In the course of providing clinical coordination, we may collect information regarding your health history, symptoms, laboratory test results, physical characteristics (such as height and weight), and communications with healthcare providers. This information is handled in strict accordance with provincial health privacy laws (such as PHIPA in Ontario).
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Financial Information
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                When you make payments through our Services, we collect credit card or other payment information. This data is processed by our third-party, PCI-compliant payment processors. We do not store full credit card numbers on our servers.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Technical and Usage Data
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158] mb-3">
                As you navigate through the Services, we may use automatic data collection technologies to collect certain information about your equipment and browsing actions, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                  IP address and device identifiers.
                </li>
                <li className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                  Operating system and browser type.
                </li>
                <li className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                  Details of your visits to our Services, including traffic data, location data, and logs.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2: HOW WE COLLECT INFORMATION */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              2. HOW WE COLLECT INFORMATION
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158] mb-6">
              We collect information through three primary methods:
            </p>
            
            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Directly from You
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                When you register for an account, fill out medical intake forms, subscribe to a newsletter, or communicate with us via email or text message.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Through Automatic Data Collection
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                As you interact with our Website, we use cookies, web beacons, and other tracking technologies to gather data about your preferences and navigation patterns.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                From Third Parties
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                We may receive information about you from our affiliated healthcare providers, laboratory partners, or other service providers involved in your care coordination.
              </p>
            </div>
          </div>

          {/* Section 3: HOW WE USE YOUR INFORMATION */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              3. HOW WE USE YOUR INFORMATION
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158] mb-6">
              We use the information we collect for the following purposes:
            </p>
            
            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Service Delivery
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                To provide you with the information, products, or services that you request from us, including appointment scheduling and care coordination.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Communication
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                To contact you regarding your account, clinical updates, billing, and transactional notifications.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Improvement
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                To analyze how users interact with our Services so we can improve our technology and user experience.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Marketing
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                With your express consent (where required by law), to provide you with promotional materials about new services or wellness information.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Compliance
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                To fulfill our legal and regulatory obligations, including those related to health record retention and financial reporting.
              </p>
            </div>
          </div>

          {/* Section 4: DISCLOSURE OF YOUR INFORMATION */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              4. DISCLOSURE OF YOUR INFORMATION
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158] mb-6">
              We do not sell your personal information. We may disclose personal information that we collect or you provide as described in this policy:
            </p>
            
            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                To Affiliated Healthcare Providers
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                To facilitate the medical consultations and assessments you seek through our platform.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                To Service Providers
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                To contractors and other third parties we use to support our business (such as hosting providers, payment processors, and customer support tools).
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                For Business Transfers
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                To a buyer or other successor in the event of a merger, divestiture, restructuring, or sale of some or all of Prime Clinics' assets.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                For Legal Purposes
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                To comply with any court order, law, or legal process, including to respond to any government or regulatory request.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                To Protect Rights
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                If we believe disclosure is necessary to protect the rights, property, or safety of Prime Clinics, our patients, or our providers.
              </p>
            </div>
          </div>

          {/* Section 5: DATA SECURITY */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              5. DATA SECURITY
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158] mb-4">
              We have implemented physical, technical, and administrative measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All health-related data is encrypted in transit and at rest.
            </p>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
              However, the safety and security of your information also depend on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Services, you are responsible for keeping this password confidential. Please be aware that the transmission of information via the internet is not completely secure; any transmission of personal information is at your own risk.
            </p>
          </div>

          {/* Section 6: RETENTION OF DATA */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              6. RETENTION OF DATA
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
              We retain your personal and personal health information for as long as necessary to fulfill the purposes for which it was collected and to satisfy any legal, clinical, accounting, or reporting requirements. In Ontario, health records are generally retained for a minimum of ten years following the last entry or ten years after the patient reaches the age of majority.
            </p>
          </div>

          {/* Section 7: YOUR PRIVACY RIGHTS AND CHOICES */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              7. YOUR PRIVACY RIGHTS AND CHOICES
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158] mb-6">
              Under Canadian privacy laws, you have certain rights regarding your information:
            </p>
            
            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Access and Correction
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                You have the right to request access to and correction of the personal information we hold about you.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Withdrawal of Consent
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                You may withdraw your consent to our collection or use of your information at any time, subject to legal or contractual restrictions and reasonable notice.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Cookie Management
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                You can set your browser to refuse all or some browser cookies, though this may make some parts of our Services inaccessible.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Communication Preferences
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                You can opt-out of marketing communications by following the "unsubscribe" instructions in our emails or texting "STOP" to our SMS messages.
              </p>
            </div>
          </div>

          {/* Section 8: THIRD-PARTY LINKS */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              8. THIRD-PARTY LINKS
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
              Our Services may contain links to websites operated by third parties. We are not responsible for the privacy practices or content of those third-party sites. We encourage you to read the privacy policies of every website you visit.
            </p>
          </div>

          {/* Section 9: CHANGES TO OUR PRIVACY POLICY */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              9. CHANGES TO OUR PRIVACY POLICY
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
              It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page or by email to the primary email address specified in your account.
            </p>
          </div>

          {/* Section 10: CONTACT INFORMATION */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              10. CONTACT INFORMATION
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158] mb-4">
              To ask questions or comment about this privacy policy and our privacy practices, or to register a complaint, please contact at:
            </p>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#2463D8]">
              <a href="mailto:lina@primeclinics.ca" className="hover:underline flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6665 3.33325H3.33317C2.4127 3.33325 1.6665 4.07944 1.6665 4.99992V14.9999C1.6665 15.9204 2.4127 16.6666 3.33317 16.6666H16.6665C17.587 16.6666 18.3332 15.9204 18.3332 14.9999V4.99992C18.3332 4.07944 17.587 3.33325 16.6665 3.33325Z" stroke="#2463D8" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.3332 5.83325L10.8582 10.5833C10.6009 10.7444 10.3034 10.8299 9.99984 10.8299C9.69624 10.8299 9.39878 10.7444 9.1415 10.5833L1.6665 5.83325" stroke="#2463D8" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                lina@primeclinics.ca
              </a>
            </p>
          </div>

          {/* Copyright */}
        </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="font-[Manrope] text-[14px] font-normal leading-[20px] text-gray-400 text-center">
              © 2026 Prime Clinics. All rights reserved.
            </p>
          </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
