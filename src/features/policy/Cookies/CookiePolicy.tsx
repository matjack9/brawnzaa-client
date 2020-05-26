import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { ExternalURL, Email } from 'common/utils/constants/urls';

export const CookiePolicy: React.FC<RouteComponentProps> = () => (
  <Container maxWidth="lg">
    <Typography variant="h3" component="h1" gutterBottom>
      Cookie Policy
    </Typography>
    <Typography paragraph>
      <em>Last updated: May 25, 2020</em>
    </Typography>
    <Typography paragraph>
      This Cookie Policy explains what Cookies are and how We use them. You should
      read this policy so You can understand what type of cookies We use, or the
      information We collect using Cookies and how that information is used.
    </Typography>
    <Typography paragraph>
      Cookies do not typically contain any information that personally identifies a
      user, but personal information that we store about You may be linked to the
      information stored in and obtained from Cookies. For further information on how
      We use, store, and keep your personal data secure, see our Privacy Policy.
    </Typography>
    <Typography paragraph>
      We do not store sensitive personal information, such as mailing addresses,
      account passwords, etc. in the Cookies We use.
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
    <Typography gutterBottom>For the purposes of this Cookie Policy:</Typography>
    <ul>
      <Typography component="li" gutterBottom>
        <strong>Company</strong> (referred to as either "the Company," "We," "Us," or
        "Our" in this Cookies Policy) refers to Brawnzaa.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>You</strong> means the individual accessing or using the Website, or
        a company, or any legal entity on behalf of which such individual is
        accessing or using the Website, as applicable.
      </Typography>
      <Typography component="li" gutterBottom>
        <strong>Cookies</strong> means small files that are placed on Your computer,
        mobile device, or any other device by a website, containing details of Your
        browsing history on that website among its many uses.
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
        .
      </Typography>
    </ul>
    <Typography variant="h5" component="h2" gutterBottom>
      The use of the Cookies
    </Typography>
    <Typography variant="h6" component="h3" gutterBottom>
      Type of Cookies We Use
    </Typography>
    <Typography paragraph>
      Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on
      your personal computer or mobile device when You go offline, while Session
      Cookies are deleted as soon as You close your web browser.
    </Typography>
    <Typography gutterBottom>
      We use both session and persistent Cookies for the purposes set out below:
    </Typography>
    <ul>
      <Typography component="li" gutterBottom>
        <Typography>
          <strong>Necessary / Essential Cookies</strong>
        </Typography>
        <Typography>Type: Session Cookies</Typography>
        <Typography>Administered by: Us</Typography>
        <Typography>
          Purpose: These Cookies are essential to provide You with services available
          through the Website and to enable You to use some of its features. They
          help to authenticate users and prevent fraudulent use of user accounts.
          Without these Cookies, the services that You have asked for cannot be
          provided, and We only use these Cookies to provide You with those services.
        </Typography>
      </Typography>
      <Typography component="li" gutterBottom>
        <Typography>
          <strong>Cookies Policy / Notice Acceptance Cookies</strong>
        </Typography>
        <Typography>Type: Persistent Cookies</Typography>
        <Typography>Administered by: Us</Typography>
        <Typography>
          Purpose: These Cookies identify if users have accepted the use of cookies
          on the Website.
        </Typography>
      </Typography>
      <Typography component="li" gutterBottom>
        <Typography>
          <strong>Functionality Cookies</strong>
        </Typography>
        <Typography>Type: Persistent Cookies</Typography>
        <Typography>Administered by: Us</Typography>
        <Typography>
          Purpose: These Cookies allow us to remember choices You make when You use
          the Website, such as remembering your login details or language preference.
          The purpose of these Cookies is to provide You with a more personal
          experience and to avoid You having to re-enter your preferences every time
          You use the Website.
        </Typography>
      </Typography>
      <Typography component="li" gutterBottom>
        <Typography>
          <strong>Tracking and Performance Cookies</strong>
        </Typography>
        <Typography>Type: Persistent Cookies</Typography>
        <Typography>Administered by: Third-Parties</Typography>
        <Typography>
          Purpose: These Cookies are used to track information about traffic to the
          Website and how users use the Website. The information gathered via these
          Cookies may directly or indirectly identify you as an individual visitor.
          This is because the information collected is typically linked to a
          pseudonymous identifier associated with the device you use to access the
          Website. We may also use these Cookies to test new advertisements, pages,
          features or new functionality of the Website to see how our users react to
          them.
        </Typography>
      </Typography>
      <Typography component="li" gutterBottom>
        <Typography>
          <strong>Targeting and Advertising Cookies</strong>
        </Typography>
        <Typography>Type: Persistent Cookies</Typography>
        <Typography>Administered by: Third-Parties</Typography>
        <Typography>
          Purpose: These Cookies track your browsing habits to enable Us to show
          advertising which is more likely to be of interest to You. These Cookies
          use information about your browsing history to group You with other users
          who have similar interests. Based on that information, and with Our
          permission, third party advertisers can place Cookies to enable them to
          show adverts which We think will be relevant to your interests while You
          are on third party websites.
        </Typography>
      </Typography>
    </ul>
    <Typography variant="h6" component="h3" gutterBottom>
      Your Choices Regarding Cookies
    </Typography>
    <Typography paragraph>
      If You prefer to avoid the use of Cookies on the Website, first You must
      disable the use of Cookies in your browser and then delete the Cookies saved in
      your browser associated with this website. You may use this option for
      preventing the use of Cookies at any time.
    </Typography>
    <Typography paragraph>
      If You do not accept Our Cookies, You may experience some inconvenience in your
      use of the Website and some features may not function properly.
    </Typography>
    <Typography paragraph>
      If You'd like to delete Cookies or instruct your web browser to delete or
      refuse Cookies, please visit the help pages of your web browser.
    </Typography>
    <Typography variant="h6" component="h3" gutterBottom>
      More Information about Cookies
    </Typography>
    <Typography paragraph>
      You can learn more about cookies:{' '}
      <Link
        href={ExternalURL.COOKIE_INFO}
        rel="external nofollow noopener"
        target="_blank"
      >
        "What Are Cookies"
      </Link>
      .
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      Contact Us
    </Typography>
    <Typography paragraph>
      If you have any questions about this Cookie Policy, You can contact us:
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
