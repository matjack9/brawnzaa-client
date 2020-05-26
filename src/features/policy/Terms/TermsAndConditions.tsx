import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { ExternalURL, Email } from 'common/utils/constants/routes';

export const TermsAndConditions: React.FC<RouteComponentProps> = () => (
  <Container maxWidth="lg">
    <Typography variant="h3" component="h1" gutterBottom>
      Terms and Conditions
    </Typography>
    <Typography paragraph>
      <em>Last updated: May 25, 2020</em>
    </Typography>
    <Typography paragraph>
      Please read these terms and conditions carefully before using Our Service.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Interpretation and Definitions
    </Typography>
    <Typography variant="h6" component="h3" gutterBottom>
      Interpretation
    </Typography>
    <Typography paragraph>
      The words of which the initial letter is capitalized have meanings defined
      under the following conditions.
    </Typography>
    <Typography paragraph>
      The following definitions shall have the same meaning regardless of whether
      they appear in singular or in plural.
    </Typography>
    <Typography variant="h6" component="h3" gutterBottom>
      Definitions
    </Typography>
    <Typography gutterBottom>
      For the purposes of these Terms and Conditions:
    </Typography>
    <ul>
      <Typography component="li" gutterBottom>
        <strong>Affiliate</strong> means an entity that controls, is controlled by,
        or is under common control with a party, where "control" means ownership of
        50% or more of the shares, equity interest, or other securities entitled to
        vote for election of directors or other managing authority.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Company</strong> (referred to as either "the Company," "We," "Us," or
        "Our" in this Agreement) refers to Brawnzaa.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Country</strong> refers to: New York, United States
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Device</strong> means any device that can access the Service such as
        a computer, a cellphone, or a digital tablet.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Service</strong> refers to the Website.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Terms and Conditions</strong> (also referred as "Terms") mean these
        Terms and Conditions that form the entire agreement between You and the
        Company regarding the use of the Service. This Terms and Conditions agreement
        is maintained by Brawnzaa.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Third-party Social Media Service</strong> means any services or
        content (including data, information, products or services) provided by a
        third-party that may be displayed, included or made available by the Service.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Website</strong> refers to Brawnzaa, accessible from{' '}
        <Link
          href={ExternalURL.BRAWNZAA}
          rel="external nofollow noopener"
          target="_blank"
        >
          {ExternalURL.BRAWNZAA}
        </Link>
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>You</strong> means the individual accessing or using the Service, or
        the company, or other legal entity on behalf of which such individual is
        accessing or using the Service, as applicable.
      </Typography>
    </ul>
    <Typography variant="h5" component="h2" gutterBottom>
      Acknowledgement
    </Typography>
    <Typography paragraph>
      These are the Terms and Conditions governing the use of this Service and the
      agreement that operates between You and the Company. These Terms and Conditions
      set out the rights and obligations of all users regarding the use of the
      Service.
    </Typography>
    <Typography paragraph>
      Your access to and use of the Service is conditioned on Your acceptance of and
      compliance with these Terms and Conditions. These Terms and Conditions apply to
      all visitors, users, and others who access or use the Service.
    </Typography>
    <Typography paragraph>
      By accessing or using the Service You agree to be bound by these Terms and
      Conditions. If You disagree with any part of these Terms and Conditions then
      You may not access the Service.
    </Typography>
    <Typography paragraph>
      You represent that you are over the age of 18. The Company does not permit
      those under 18 to use the Service.
    </Typography>
    <Typography paragraph>
      Your access to and use of the Service is also conditioned on Your acceptance of
      and compliance with the Privacy Policy of the Company. Our Privacy Policy
      describes Our policies and procedures on the collection, use, and disclosure of
      Your personal information when You use the Application or the Website and tells
      You about Your privacy rights and how the law protects You. Please read Our
      Privacy Policy carefully before using Our Service.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      License
    </Typography>
    <Typography paragraph>
      Unless otherwise stated, the Company and/or its licensors own the intellectual
      property rights for all material on the Website. All intellectual property
      rights are reserved. You may view and/or print pages from the Website for your
      own personal use subject to restrictions set in these terms and conditions.
    </Typography>
    <Typography>You must not:</Typography>
    <ol>
      <Typography component="li" gutterBottom>
        Republish material from the Website;
      </Typography>
      <Typography component="li" gutterBottom>
        Sell, rent, or sub-license material from the Website;
      </Typography>
      <Typography component="li" gutterBottom>
        Reproduce, duplicate, or copy material from the Website; or
      </Typography>
      <Typography component="li" gutterBottom>
        Redistribute content from the Company (unless content is specifically made
        for redistribution).
      </Typography>
    </ol>
    <Typography variant="h5" component="h2" gutterBottom>
      User Comments
    </Typography>
    <ol>
      <Typography component="li" gutterBottom>
        This Agreement shall begin on the date hereof.
      </Typography>
      <Typography component="li" gutterBottom>
        Certain parts of the Website offer the opportunity for users to post and
        exchange opinions, information, material, and data ("Comments") in areas of
        the website. the Company does not screen, edit, publish, or review Comments
        prior to their appearance on the website, and Comments do not reflect the
        views or opinions of the Company, its agents, or affiliates. Comments reflect
        the view and opinion of the person who posts such view or opinion. To the
        extent permitted by applicable laws the Company shall not be responsible or
        liable for the Comments or for any loss cost, liability, damages or expenses
        caused, and/or suffered as a result of any use of, and/or posting of, and/or
        appearance of the Comments on the Website.
      </Typography>
      <Typography component="li" gutterBottom>
        The Company reserves the right to monitor all Comments and to remove any
        Comments which it considers in its absolute discretion to be inappropriate,
        offensive, or otherwise in breach of these Terms and Conditions.
      </Typography>
      <Typography component="li" gutterBottom>
        <Typography gutterBottom>You warrant and represent that:</Typography>
        <ol>
          <Typography component="li" gutterBottom>
            You are entitled to post the Comments on our website and have all
            necessary licenses and consents to do so;
          </Typography>
          <Typography component="li" gutterBottom>
            The Comments do not infringe any intellectual property right, including
            without limitation copyright, patent, or trademark, or other proprietary
            right of any third party;
          </Typography>
          <Typography component="li" gutterBottom>
            The Comments do not contain any defamatory, libelous, offensive, indecent
            or otherwise unlawful material, or material which is an invasion of
            privacy; and
          </Typography>
          <Typography component="li" gutterBottom>
            The Comments will not be used to solicit or promote business or custom or
            present commercial activities or unlawful activity.
          </Typography>
        </ol>
      </Typography>
      <Typography component="li" gutterBottom>
        You hereby grant to the Company a non-exclusive royalty-free license to use,
        reproduce, edit, and authorize others to use, reproduce, and edit any of your
        Comments in any and all forms, formats, or media.
      </Typography>
    </ol>
    <Typography variant="h5" component="h2" gutterBottom>
      Hyperlinking to Our Content
    </Typography>
    <ol>
      <Typography component="li" gutterBottom>
        <Typography gutterBottom>
          The following organizations may link to the Website without prior written
          approval:
        </Typography>
        <ol>
          <Typography component="li" gutterBottom>
            Government agencies;
          </Typography>
          <Typography component="li" gutterBottom>
            Search engines;
          </Typography>
          <Typography component="li" gutterBottom>
            News organizations;
          </Typography>
          <Typography component="li" gutterBottom>
            Online directory distributors when they list Us in the directory may link
            to the Website in the same manner as they hyperlink to the websites of
            other listed businesses; and
          </Typography>
          <Typography component="li" gutterBottom>
            Systemwide Accredited Businesses except soliciting non-profit
            organizations, charity shopping malls, and charity fundraising groups
            which may not hyperlink to the Website.
          </Typography>
        </ol>
      </Typography>
      <Typography component="li" gutterBottom>
        These organizations may link to the Website, to Our publications, or to other
        information on teh Website so long as the link: (a) is not in any way
        misleading; (b) does not falsely imply sponsorship, endorsement, or approval
        of the linking party and its products or services; and (c) fits within the
        context of the linking party's website.
      </Typography>
      <Typography component="li" gutterBottom>
        <Typography gutterBottom>
          We may consider and approve in our sole discretion other link requests from
          the following types of organizations:
        </Typography>
        <ol>
          <Typography component="li" gutterBottom>
            Commonly-known consumer and/or business information sources such as
            Chambers of Commerce, American Automobile Association, AARP, and
            Consumers Union;
          </Typography>
          <Typography component="li" gutterBottom>
            Dot.com community websites;
          </Typography>
          <Typography component="li" gutterBottom>
            Associations or other groups representing charities, including charity
            giving websites,
          </Typography>
          <Typography component="li" gutterBottom>
            Online directory distributors;
          </Typography>
          <Typography component="li" gutterBottom>
            Internet portals;
          </Typography>
          <Typography component="li" gutterBottom>
            Accounting, law, and consulting firms whose primary clients are
            businesses; and
          </Typography>
          <Typography component="li" gutterBottom>
            Educational institutions and trade associations.
          </Typography>
        </ol>
      </Typography>
    </ol>
    <Typography paragraph>
      We will approve link requests from these organizations if we determine that:
      (a) the link would not reflect unfavorably on Us or our accredited businesses
      (for example, trade associations or other organizations representing inherently
      suspect types of business, such as work-at-home opportunities, shall not be
      allowed to link); (b) the organization does not have an unsatisfactory record
      with Us; (c) the benefit to Us from the visibility associated with the
      hyperlink outweighs the absence of the Company; and (d) where the link is in
      the context of general resource information or is otherwise consistent with
      editorial content in a newsletter or similar product furthering the mission of
      the organization.
    </Typography>
    <Typography paragraph>
      These organizations may link to the Website, to publications, or to other
      information on the Website so long as the link: (a) is not in any way
      misleading; (b) does not falsely imply sponsorship, endorsement, or approval of
      the linking party and its products or services; and (c) fits within the context
      of the linking party's website.
    </Typography>
    <Typography paragraph>
      If you are among the organizations listed in paragraph 2 above and are
      interested in linking to our website, you must notify us by sending an email to{' '}
      <Link
        href={`mailto:${Email.PRIVACY}`}
        title={`send an email to ${Email.PRIVACY}`}
      >
        {Email.PRIVACY}
      </Link>
      . Please include your name, your organization name, contact information (such
      as a phone number and/or email address), as well as the URL of your website, a
      list of any URLs from which you intend to link to our website, and a list of
      the URL(s) on our website to which you would like to link. Allow 2-3 weeks for
      a response.
    </Typography>
    <Typography>
      Approved organizations may hyperlink to our website as follows:
    </Typography>
    <ol>
      <Typography component="li" gutterBottom>
        By use of Our corporate name; or
      </Typography>
      <Typography component="li" gutterBottom>
        By use of the uniform resource locator (Web address) being linked to; or
      </Typography>
      <Typography component="li" gutterBottom>
        By use of any other description of the Website or material being linked to
        that makes sense within the context and format of content on the linking
        party's website.
      </Typography>
    </ol>
    <Typography paragraph>
      No use of the Company's logo or other artwork will be allowed for linking
      absent a trademark license agreement.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Iframes
    </Typography>
    <Typography paragraph>
      Without prior approval and express written permission, you may not create
      frames around pages of the Website or use other techniques that alter in any
      way the visual presentation or appearance of the Website.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Reservation of Rights
    </Typography>
    <Typography paragraph>
      We reserve the right at any time and in its sole discretion to request that you
      remove all links or any particular link to the Website. You agree to
      immediately remove all links to the Website upon such request. We also reserve
      the right to amend these Terms and its linking policy at any time. By
      continuing to link to the Website, you agree to be bound to and abide by these
      Terms.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Removal of Links from the Website
    </Typography>
    <Typography paragraph>
      If you find any link on the Website or any linked website objectionable for any
      reason, you may contact us about this. We will consider requests to remove
      links but will have no obligation to do so or to respond directly to you.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Content Liability
    </Typography>
    <Typography paragraph>
      We shall have no responsibility or liability for any content appearing on your
      website. You agree to indemnify and defend Us against all claims arising out of
      or based upon your website. No link(s) may appear on any page on your website
      or within any context containing content or materials that may be interpreted
      as libelous, obscene, or criminal, or which infringes, otherwise violates, or
      advocates the infringement or other violation of, any third party rights.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Links to Other Websites
    </Typography>
    <Typography paragraph>
      Our Service may contain links to third-party websites or services that are not
      owned or controlled by the Company.
    </Typography>
    <Typography paragraph>
      The Company has no control over, and assumes no responsibility for, the
      content, privacy policies, or practices of any third party websites or
      services. You further acknowledge and agree that the Company shall not be
      responsible or liable, directly or indirectly, for any damage or loss caused or
      alleged to be caused by or in connection with the use of or reliance on any
      such content, goods, or services available on or through any such websites or
      services.
    </Typography>
    <Typography paragraph>
      We strongly advise You to read the terms and conditions and privacy policies of
      any third-party websites or services that You visit.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Termination
    </Typography>
    <Typography paragraph>
      We may terminate or suspend Your access immediately, without prior notice or
      liability, for any reason whatsoever, including without limitation if You
      breach these Terms and Conditions.
    </Typography>
    <Typography paragraph>
      Upon termination, Your right to use the Service will cease immediately.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Limitation of Liability
    </Typography>
    <Typography paragraph>
      Notwithstanding any damages that You might incur, the entire liability of the
      Company and any of its suppliers under any provision of this Terms and Your
      exclusive remedy for all of the foregoing shall be limited to the amount
      actually paid by You through the Service or 100 USD if You haven't purchased
      anything through the Service.
    </Typography>
    <Typography paragraph>
      To the maximum extent permitted by applicable law, in no event shall the
      Company or its suppliers be liable for any special, incidental, indirect, or
      consequential damages whatsoever (including, but not limited to, damages for
      loss of profits, loss of data or other information, for business interruption,
      for personal injury, loss of privacy arising out of or in any way related to
      the use of or inability to use the Service, third-party software and/or
      third-party hardware used with the Service, or otherwise in connection with any
      provision of this Terms), even if the Company or any supplier has been advised
      of the possibility of such damages and even if the remedy fails of its
      essential purpose.
    </Typography>
    <Typography paragraph>
      Some states do not allow the exclusion of implied warranties or limitation of
      liability for incidental or consequential damages, which means that some of the
      above limitations may not apply. In these states, each party's liability will
      be limited to the greatest extent permitted by law.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      "AS IS" and "AS AVAILABLE" Disclaimer
    </Typography>
    <Typography paragraph>
      The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults
      and defects without warranty of any kind. To the maximum extent permitted under
      applicable law, the Company, on its own behalf and on behalf of its Affiliates
      and its and their respective licensors and service providers, expressly
      disclaims all warranties, whether express, implied, statutory, or otherwise,
      with respect to the Service, including all implied warranties of
      merchantability, fitness for a particular purpose, title and non-infringement,
      and warranties that may arise out of course of dealing, course of performance,
      usage, or trade practice. Without limitation to the foregoing, the Company
      provides no warranty or undertaking, and makes no representation of any kind
      that the Service will meet Your requirements, achieve any intended results, be
      compatible or work with any other software, applications, systems, or services,
      operate without interruption, meet any performance or reliability standards or
      be error free, or that any errors or defects can or will be corrected.
    </Typography>
    <Typography paragraph>
      Without limiting the foregoing, neither the Company nor any of the company's
      provider makes any representation or warranty of any kind, express or implied:
      (i) as to the operation or availability of the Service, or the information,
      content, and materials or products included thereon; (ii) that the Service will
      be uninterrupted or error-free; (iii) as to the accuracy, reliability, or
      currency of any information or content provided through the Service; or (iv)
      that the Service, its servers, the content, or emails sent from or on behalf of
      the Company are free of viruses, scripts, trojan horses, worms, malware,
      timebombs, or other harmful components.
    </Typography>
    <Typography paragraph>
      Some jurisdictions do not allow the exclusion of certain types of warranties or
      limitations on applicable statutory rights of a consumer, so some or all of the
      above exclusions and limitations may not apply to You. But in such a case the
      exclusions and limitations set forth in this section shall be applied to the
      greatest extent enforceable under applicable law.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Governing Law
    </Typography>
    <Typography paragraph>
      The laws of the Country, excluding its conflicts of law rules, shall govern
      this Terms and Your use of the Service. Your use of the Application may also be
      subject to other local, state, national, or international laws.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Disputes Resolution
    </Typography>
    <Typography paragraph>
      If You have any concern or dispute about the Service, You agree to first try to
      resolve the dispute informally by contacting the Company.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      For European Union (EU) Users
    </Typography>
    <Typography paragraph>
      If You are a European Union consumer, you will benefit from any mandatory
      provisions of the law of the country in which you are resident in.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      United States Legal Compliance
    </Typography>
    <Typography paragraph>
      You represent and warrant that (i) You are not located in a country that is
      subject to the United States government embargo, or that has been designated by
      the United States government as a "terrorist supporting" country, and (ii) You
      are not listed on any United States government list of prohibited or restricted
      parties.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Severability and Waiver
    </Typography>
    <Typography variant="h6" component="h3" gutterBottom>
      Severability
    </Typography>
    <Typography paragraph>
      If any provision of these Terms is held to be unenforceable or invalid, such
      provision will be changed and interpreted to accomplish the objectives of such
      provision to the greatest extent possible under applicable law and the
      remaining provisions will continue in full force and effect.
    </Typography>
    <Typography variant="h6" component="h3" gutterBottom>
      Waiver
    </Typography>
    <Typography paragraph>
      Except as provided herein, the failure to exercise a right or to require
      performance of an obligation under this Terms shall not effect a party's
      ability to exercise such right or require such performance at any time
      thereafter nor shall be the waiver of a breach constitute a waiver of any
      subsequent breach.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Translation Interpretation
    </Typography>
    <Typography paragraph>
      These Terms and Conditions may have been translated if We have made them
      available to You on our Service.
    </Typography>
    <Typography paragraph>
      You agree that the original English text shall prevail in the case of a
      dispute.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Changes to These Terms and Conditions
    </Typography>
    <Typography paragraph>
      We reserve the right, at Our sole discretion, to modify or replace these Terms
      at any time. If a revision is material We will make reasonable efforts to
      provide at least 30 days' notice prior to any new terms taking effect. What
      constitutes a material change will be determined at Our sole discretion.
    </Typography>
    <Typography paragraph>
      By continuing to access or use Our Service after those revisions become
      effective, You agree to be bound by the revised terms. If You do not agree to
      the new terms, in whole or in part, please stop using the website and the
      Service.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Contact Us
    </Typography>
    <Typography paragraph>
      If you have any questions about these Terms and Conditions, You can contact us:
    </Typography>
    <ul>
      <Typography component="li" gutterBottom>
        By email:{' '}
        <Link
          href={`mailto:${Email.PRIVACY}`}
          title={`send an email to ${Email.PRIVACY}`}
        >
          {Email.PRIVACY}
        </Link>
      </Typography>
    </ul>
  </Container>
);
