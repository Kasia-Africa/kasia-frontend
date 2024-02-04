import React from 'react'
import styled from 'styled-components'
const Title =  styled.h1`
    color: white;
    font-weight: 800;
    text-align: center;
    font-size: 22px;
    text-transform: uppercase;
    position: relative;
     bottom: 70px;
    letter-spacing: 0.25px;
`
const InfoBody = styled.section `
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`
const Highlight = styled.h3 `
    color: black;
    font-size: 15px;
    font-weight: 700;
    text-transform: capitalize;
    margin-top: -20px;
`
const Information = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Description = styled.p`
font-size: 14px;
padding-top: 10px;
font-weight: 500;
width: 90%;
line-height: 20px;
`
const List = styled.ul`
  color: skyblue;
  width: 404px;
  height: 302;
  text-transform: uppercase;
padding-top: 10px;
& li {
    list-style-type: disc;
    padding-bottom: 10px;
    margin-left: 8px;
    box-sizing: border-box;
}
& li::marker {
    content: "•"; 
    color: black; 
   font-size: 20px;
  }
`
const Privacy: React.FC = ()=> {
    return (
        <>
    <Title>
    <p>Privacy And Policy</p> 
    </Title>
    <InfoBody>
        <Information>
            <Highlight>Kasia terms and conditions</Highlight>
            <Description>Please read these Terms and Conditions (&apos;Terms&apos;, &apos;Terms and Conditions&apos;) carefully before using the application or https://www.plusity.com website (the &apos;Service&apos;)
             operated by PLUSITY (&apos;us&apos;, &apos;we&apos;, or &apos;our&apos;).</Description>
        </Information>
        <Information>
            <Highlight>Content</Highlight>
            <Description>Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors,
             users and others who wish to access or use the Service.
         By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.
       </Description>
       <List>
        <li>Intellectual Property</li>
        <li>Links to other website</li>
        <li>idemnification</li>
        <li>limitation of liability</li>
        <li>disclaimer</li>
        <li>medical disclaimer</li>
        <li>exclusion</li>
        <li>governing laws</li>
        <li>changes</li>
        <li>contact us</li>
       </List>
        </Information>
     <Information>
        <Highlight>Intellectual Property</Highlight>
        <Description>
        The Service and its original content, features and functionality are and will remain the exclusive property of PLUSITY and its licensors. The Service is protected by copyright, trademark, and other laws of both the Nigeria and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of PLUSITY.
Links To Other Web Sites
Our Service may contain links to third party web sites or services that are not owned or controlled by PLUSITY.
PLUSITY has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third-party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
You acknowledge and agree that PLUSITY shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such third party web sites or services.
We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
        </Description>
     </Information>
     <Information>
        <Highlight>
         Termination
        </Highlight>
        <Description>
        We may terminate or suspend your access to the Service immediately, without prior notice or liability, in our absolute and sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
Indemnification
You agree to defend, indemnify and hold harmless PLUSITY and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney&quot;s fees), resulting from or arising out of a. your use and access of the Service, or b. a breach of these Terms.
        </Description>
     </Information>
     <Information>
        <Highlight>
        Limitation Of Liability
        </Highlight>
        <Description>
        In no event shall PLUSITY, or its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose..
Disclaimer
Your use of the Service is at your sole risk. The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
PLUSITY its subsidiaries, affiliates, and its licensors do not warrant that a the Service will function uninterrupted, secure or available at any particular time or location; b any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d the results of using the Service will meet your requirements.
        </Description>
     </Information>
     <Information>
        <Highlight>
Medical Disclaimer
        </Highlight>
        <Description>
PLUSITY will establish current guidelines for Participants food and beverage intake. At no time should Participant consider the advice of PLUSITY to constitute medical advice. Nothing in the Terms and Conditions can or should be construed to constitute a doctor-patient relationship.
PLUSITY will provide simple information and suggested actions that allow for productive nutritional choices aimed at helping Participant combat obesity, diabetes, and heart disease. PLUSITY does not provide medical advice or diagnoses and does not employ any licensed medical professionals. PLUSITY does not and cannot cure such diseases and conditions and does not hold itself out as doing so.
PLUSITY will assist Participant in establishing and analyzing lab test results. Such assistance shall not constitute medical advice.
PLUSITY will assist Participant in establishing a desire for change and provide guidance in what that change will look like for each individual Participant with the understanding that such results will vary.
PLSUTIY, if provided with all established and reported data by Participant, will direct set parameters (including, but not limited to, intake and output) to effect desired change.
PLUSITY will provide an environment of support, community, trust, and comradery.
PLUSITY utilizes insights from behavioral sciences, and consults with behavioral scientists, to help our clients overcome obstacles and create sustainable change. Nothing in this Agreement or PLUSITY’s program or the Service, however, constitutes medical or scientific advice; nor should anything in this Agreement, the Service, or the PLUSITY program ever be construed as such.
        </Description>
     </Information>
     <Information>
        <Highlight>
        Exclusions
        </Highlight>
        <Description>
        Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of liability for consequential or incidental damages, so the limitations above may not apply to you.
        </Description>
     </Information>
     <Information>
        <Highlight>
        Governing Law
        </Highlight>
        <Description>
        These Terms shall be governed and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions.
Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us
 regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.
        </Description>
     </Information>
     <Information>
        <Highlight>
        Changes
        </Highlight>
        <Description>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Servic
        </Description>
     </Information>
     <Information>
        <Highlight>
        Contact Us
        </Highlight>
        <Description>
        If you have any questions about this Terms and Conditions, please contact us: info@plusity.com
        </Description>
     </Information>
    </InfoBody>
        </>
    )
}
export default Privacy