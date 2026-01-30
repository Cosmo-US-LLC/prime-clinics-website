import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

function TermsAndConditions() {
  useEffect(() => {
    document.title = 'Terms and Conditions | Prime Clinics';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Prime Clinics Terms and Conditions of Use - Read our terms of service and user agreement.');
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
      
      <section className="w-full py-16 md:py-24 pt-24 md:pt-28">
        <div className="max-w-[848px] py-12 rounded-[16px] bg-white w-full mx-auto px-4 md:px-8">
          {/* Title */}
          <h1 className="font-[Oswald] text-[36px] font-semibold leading-[40px] text-[#0F172B] mb-4">
            TERMS AND CONDITIONS OF USE
          </h1>
          
          {/* Effective Date */}
          <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158] mb-8">
            Effective Date: January 30, 2026
          </p>

          {/* Important Notice */}
          <div className="mb-8 bg-yellow-50 border-l-4 border-orange-500 p-4 rounded-r">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-orange-500 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                  Important Notice
                </h3>
                <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                  This agreement contains provisions that limit our liability to you and require you to resolve any dispute with us through final and binding arbitration on an individual basis, and not by a lawsuit or resort to court process. This means that (i) you are giving up, and you waive, the right to have any such dispute decided in a court of law before a jury or a judge (except as set forth expressly in section 15), and (ii) that you are giving up, and you waive, the ability to pursue any such dispute in a class, consolidated, or representative action or proceeding.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: SERVICES OVERVIEW, AVAILABILITY, AND ELIGIBILITY */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              1. SERVICES OVERVIEW, AVAILABILITY, AND ELIGIBILITY
            </h2>
            
            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Overview of the Services
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                The Services may include (i) providing individuals with information on health care and wellness; (ii) providing individuals with access to technology-oriented tools for addressing certain health issues; (iii) development and gathering of health care records and information, with retention for use in healthcare provider appointments and communications, all provided by third-party unaffiliated providers; (iv) administrative support for scheduling and payment for health care provider services; (v) telecommunications support for direct access to a health care provider for communication, consultations, and assessments.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Availability
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                The Services are currently available only to individuals in certain Canadian provinces. Prime Clinics is based in Canada, and the Services are for persons located in Canada. We make no claims that the Services or any of their content are accessible or appropriate outside of Canada. If you access the Services from outside Canada, you do so on your own initiative and are responsible for compliance with local laws, including export laws.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Eligibility
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158] mb-3">
                The Services are intended for users 18 years of age or over. To qualify to use the Services, the following must be true:
              </p>
              <div className="ml-4 space-y-2">
                <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                  You are age 18 or over or, if you are accessing the Services in violation of the Eligibility requirement related to age, you otherwise have the express consent of your parent or legal guardian.
                </p>
                <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                  You are located in a province where we operate.
                </p>
                <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                  You agree to be legally bound by and comply with these Terms of Use.
                </p>
              </div>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158] mt-3">
                Meeting the above requirements does not necessarily mean you will qualify to use the Services. Prime Clinics and affiliated entities reserve the right to change or add new requirements at any time, without prior notice.
              </p>
            </div>
          </div>

          {/* Section 2: REGISTRATION AND ACCOUNT CREATION */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              2. REGISTRATION AND ACCOUNT CREATION
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158] mb-4">
              You may be required to create an account to access and use certain parts of the Services. If you create an account, you agree to provide information that is accurate, complete, and correct, and to accurately maintain and update any information about yourself that you have provided to Prime Clinics.
            </p>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
              You agree to keep confidential your username and password and to exit from your account at the end of each session. You are responsible for all activities that occur under your account and for maintaining the confidentiality of your password. You also agree to immediately notify Prime Clinics of any unauthorized use of your username, password, or any other breach of security that you become aware of involving or relating to the Services by emailing Prime Clinics at: <a href="mailto:lina@primeclinics.ca" className="text-[#2463D8] hover:underline">lina@primeclinics.ca</a>
            </p>
          </div>

          {/* Section 3: PRIVACY */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              3. PRIVACY
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
              Prime Clinics understands the importance of confidentiality and privacy regarding your health information. Please see our Privacy Policy available at <a href="/privacy-policy" className="text-[#2463D8] hover:underline">/privacy-policy</a> for information about how we collect and use your information. The Privacy Policy is hereby incorporated into these Terms of Use by reference and constitute a part of these Terms of Use.
            </p>
          </div>

          {/* Section 4: OWNERSHIP AND LICENSE TO USE THE SERVICES */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              4. OWNERSHIP AND LICENSE TO USE THE SERVICES
            </h2>
            
            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Ownership
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                As between Prime Clinics and you, Prime Clinics is the sole and exclusive owner of all right, title and interest in and to the Services and their content, features and functionality (including, without limitation, all information, software, text, displays, images, video, audio, design, selection, arrangement and look and feel). You are not permitted to reproduce, publish, distribute, modify, reverse engineer, disassemble, or create derivative works of any of the Services content except as permitted by these Terms of Use or otherwise by Prime Clinics expressly in writing.
              </p>
            </div>
          </div>

          {/* Section 5: USER CONTENT AND LICENSE TO USE SUCH CONTENT */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              5. USER CONTENT AND LICENSE TO USE SUCH CONTENT
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158] mb-4">
              Except as provided in our privacy policy, you understand and agree that any information you provide through the services, whether by direct entry, submission, email or otherwise, including, but not limited to, data, questions, comments, forum communications, or suggestions/feedback, will be treated as non-confidential and non-proprietary and will become the property of Prime Clinics.
            </p>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
              User content may be used by Prime Clinics for any purpose, including, without limitation, reproduction, solicitation, disclosure, transmission, publication, broadcast, and posting, and Prime Clinics shall be free to use such user content for any purpose whatsoever, including, without limitation, developing and marketing products using such information, without any compensation owed to you.
            </p>
          </div>

          {/* Section 6: COPYRIGHT NOTICES (CANADA) */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              6. COPYRIGHT NOTICES (CANADA)
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
              Prime Clinics reserves the right to remove any content or any other material or information available on or through our services, at any time, for any reason. Prime Clinics otherwise complies with the provisions of the Canadian Copyright Act.
            </p>
          </div>

          {/* Section 7: RESTRICTIONS ON USE */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              7. RESTRICTIONS ON USE
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158] mb-3">
              You agree that in using or accessing the services, you will not, and will not attempt to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                Impersonate any person or entity or otherwise misrepresent your affiliation.
              </li>
              <li className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                Violate any local, provincial, national or international law.
              </li>
              <li className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                Reverse engineer, disassemble, decompile, or translate any software or other components of the services.
              </li>
              <li className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                Distribute, input, upload, transmit, or otherwise run or propagate any virus, application, or Trojan horse.
              </li>
              <li className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                Harm, harass, threaten, abuse, defame, demean, discriminate against, or intimidate any affiliated health care provider who provides health care services related to the services, as we determine in our sole discretion.
              </li>
            </ul>
          </div>

          {/* Section 8: DISCLAIMER OF WARRANTIES */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              8. DISCLAIMER OF WARRANTIES
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
              You expressly agree that use of the services is at your sole risk. You acknowledge and agree that the services are provided on an "as is" and "as available" basis. Prime Clinics and its affiliates, and their respective officers, directors, managers, partners, members, employees, and agents make no representations or warranties and expressly disclaim any and all warranties of any kind, whether express or implied, with respect to the services including, but not limited to, any representations or warranties with respect to merchantability, fitness for a particular use or purpose, noninfringement, title, availability, security, operability, condition, quiet enjoyment, value, accuracy of data, freedom from viruses or malware, completeness, timeliness, functionality, reliability, sequencing or speed of delivery or system integration.
            </p>
          </div>

          {/* Section 9: LIMITATION OF LIABILITY */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              9. LIMITATION OF LIABILITY
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158] mb-4">
              You understand that to the extent permitted under applicable law, in no event will Prime Clinics, its related persons or licensors be liable to you or to any party for any claims, liabilities, losses, costs or damages under any legal or equitable theory, whether in tort (including negligence and strict liability), contract, warranty, statute or otherwise, including, but not limited to, any indirect, incidental, special, consequential, punitive or exemplary damages, including but not limited to, damages for loss of revenues, profits, goodwill, use or data, service interruption, computer or mobile phone damage, or system failure, or for any damages for personal or bodily injury or emotional distress, including death, arising out of or in connection with any access, use of (or inability to use) the services.
            </p>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
              In no event shall Prime Clinics or its related persons' total liability to you for all damages, losses, and causes of action exceed in the aggregate, the greater of (i) one hundred dollars ($100 CAD), or (ii) the amount paid by you, if any, for accessing the services in the twelve (12) month period preceding this applicable claim.
            </p>
          </div>

          {/* Section 10: INDEMNIFICATION */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              10. INDEMNIFICATION
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
              You agree to indemnify, defend, and hold harmless Prime Clinics and its affiliates from and against any and all third-party suits, actions, claims, proceedings, damages, settlements, judgments, injuries, liabilities, obligations, losses, risks, costs, and expenses (including, without limitation, reasonable attorneys' fees, litigation expenses, and accounting fees), relating to or arising from (i) your use of the services in an unauthorized manner, (ii) your fraud, violation of law, negligence, or willful misconduct, or (iii) any breach by you of these terms of use.
            </p>
          </div>

          {/* Section 11: THIRD-PARTY LINKS AND FEATURES ON THE SERVICES */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              11. THIRD-PARTY LINKS AND FEATURES ON THE SERVICES
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
              The Services may contain hyperlinks, plug-ins, products, or features operated by third parties ("Third-Party Services"). Such Third-Party Services are not under our control; therefore, we are not responsible for the information, products or services described by, or for the content or features of any such Third-Party Services. Your use of these Third-Party Services is at your own risk, and we are not liable to you in any way, either directly or indirectly, for any content, errors, damage, or loss caused by or in connection with use of or reliance on information contained in or provided to Third-Party Services.
            </p>
          </div>

          {/* Section 12: PAYMENTS */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              12. PAYMENTS
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
              You agree to pay all fees due for services requested at the fees and pursuant to all payment terms presented to you. You authorize us, our affiliates, or our third-party payment processors to charge the amount due. For subscription services, your payment method will be automatically charged at regular intervals. You acknowledge and agree that due to the nature of the products and services purchasable through the services, any applicable fees and other charges are not refundable in whole or in part.
            </p>
          </div>

          {/* Section 13: TERMINATION */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              13. TERMINATION
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
              Prime Clinics may terminate or suspend any of the rights granted by these terms of use and your access to and use of the services with or without prior notice, for any reason, and at any time, including for violations of these terms of use. After such termination, Prime Clinics will have no further obligation to provide the services, except to the extent an affiliated professional entity is obligated to provide you access to your health records or is required to provide you with continuing care under applicable legal, ethical, and professional obligations.
            </p>
          </div>

          {/* Section 14: GOVERNING LAW; DISPUTE RESOLUTION; ARBITRATION */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              14. GOVERNING LAW; DISPUTE RESOLUTION; ARBITRATION
            </h2>
            
            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Governing Law
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                These terms of use and your use of the services shall be governed by the laws of the Province of Ontario and the federal laws of Canada.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Binding Arbitration
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                Except as described in the "exceptions" section below, you and Prime Clinics agree that every dispute arising in connection with these terms of use will be resolved through binding arbitration in London, Ontario.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                No Class Actions
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                You and Prime Clinics agree that each may bring claims against the other only in your or its individual capacity and not as a plaintiff or class member in any purported class or representative proceeding.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Limited Time to File
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                To the fullest extent permitted by applicable law, any dispute must be commenced within one (1) year after the dispute arises—or it will be forever barred.
              </p>
            </div>
          </div>

          {/* Section 15: COMMUNICATIONS BY TEXT MESSAGE AND EMAIL */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              15. COMMUNICATIONS BY TEXT MESSAGE AND EMAIL
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
              By opting-in to receive text (SMS) messages, you consent to receiving communications regarding your account and use of the services. You understand that text messages and emails are not 100% secure. They are not encrypted, which means that it is possible they may be intercepted by third parties. If you choose to send or receive information about your health by text message or email, you do so at your own risk. You can opt-out at any time by texting "STOP".
            </p>
          </div>

          {/* Section 16: MISCELLANEOUS TERMS */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              16. MISCELLANEOUS TERMS
            </h2>
            
            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                No Waiver
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                No waiver by Prime Clinics of any term or condition set forth in these terms shall be deemed a further or continuing waiver.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Assignment
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                You may not assign any of your rights under these terms. Prime Clinics may transfer all contractual rights and obligations if the business is transferred to another entity by way of merger, sale of assets, or otherwise.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-[Manrope] text-[16px] font-semibold leading-[24px] text-[#0F172B] mb-3">
                Entire Agreement
              </h3>
              <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158]">
                This is the entire agreement between you and Prime Clinics relating to the subject matter herein and supersedes all previous communications, representations, understandings, and agreements.
              </p>
            </div>
          </div>

          {/* Section 17: CONTACT US */}
          <div className="mb-8">
            <h2 className="font-[Oswald] text-[24px] font-semibold leading-[32px] text-[#2463D8] mb-4">
              17. CONTACT US
            </h2>
            <p className="font-[Manrope] text-[16px] font-normal leading-[26px] text-[#314158] mb-4">
              If you have any questions about these Terms of Use, please contact us at:
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

export default TermsAndConditions;

