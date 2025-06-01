import {
  Column,
  Container,
  Heading,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface YelpRecentLoginEmailProps {
  userFirstName?: string;
  chakamName?: string;
  loginDate?: Date;
  loginDevice?: string;
  loginLocation?: string;
  loginIp?: string;
  createdAt?: Date;
  unlockDate?: Date;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const ChakamCreatedEmail = ({
  userFirstName,
  chakamName = 'My First Chakam',
  createdAt = new Date(),
  loginDate,
  unlockDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
}: YelpRecentLoginEmailProps) => {
  const formattedDate = new Intl.DateTimeFormat('en', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(loginDate);

  return (
    <Container style={main}>
      <Preview>New Chakam Created</Preview>
      <div style={logoRow}>
        <Img src='https://firebasestorage.googleapis.com/v0/b/giftedchatapp-fde9c.appspot.com/o/chakam%2Ffavicon.png?alt=media&token=443c5ccc-8665-4f91-b57b-f99599629a1e' alt="Logo" style={logoImg} />
        <Text style={logoText}>Chakam</Text>
      </div>
      <hr />
      <Row>
        <Img
          style={image}
          width={620}
          height={150}
          src='https://firebasestorage.googleapis.com/v0/b/giftedchatapp-fde9c.appspot.com/o/chakam%2Fmail.svg?alt=media&token=0d7c8b78-af5f-4028-ba80-c65619319325'
          alt="Chakam header illustration"
        />
      </Row>
      <div style={infoBox}>
        <Row style={{ ...boxInfos, paddingBottom: '0' }}>
          <Column>
            <Heading style={heading}>
              Allo {userFirstName || 'there'},
            </Heading>
            <p style={mainText}>
              Are you excited? You just uploaded a 
              new chakam meme!!!&#127881; &#127881;&#127881;
              <br />
              <span style={chakamNameText}> {chakamName}</span>
            </p>
            <p style={descText}>
              This is more than just a digital note — it’s a message from your present self to your future self.
              Here’s what you need to know:
            </p>
            <p style={dateText}>
              <b>🕒 Created on: </b>
              <span style={createdDateText}>{createdAt.toString()}</span> 
            </p>
            <p style={dateText}>
              <b>🔓 Unlocks on: </b>
              <span>{unlockDate.toLocaleDateString('en-US')}</span>
            </p>
          </Column>
        </Row>
        <div style={buttonWrapper}>
          <a href="/dashboard" style={dashboardButton}>
            View In Dashboard 
          </a>
        </div>
      </div>
      <Section>
        <Img
          width={620}
          height={150}
          src='https://firebasestorage.googleapis.com/v0/b/giftedchatapp-fde9c.appspot.com/o/chakam%2Fmail-footer.png?alt=media&token=8c10047a-75a9-4fe3-b9fd-30d7c5eea204'
          alt="Chakam footer decoration"
          style={footerImg}
        />
      </Section>
      <p style={footerText}>
        ©2025 | Chakam, All rights reserved. | NG | www.chakam.com.ng
      </p>
    </Container>
  );
};

ChakamCreatedEmail.PreviewProps = {
  userFirstName: 'Alan',
  loginDate: new Date('September 7, 2022, 10:58 am'),
  loginDevice: 'Chrome on Mac OS X',
  loginLocation: 'Upland, California, United States',
  loginIp: '47.149.53.167',
} as YelpRecentLoginEmailProps;

export default ChakamCreatedEmail;

// Custom styles replacing Tailwind classes
const main = {
  backgroundColor: '#fff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  width: '40vw',
  margin: 'auto',
  boxShadow: '0 4px 24px rgba(0,0,0, 0.1)',
};

const logoRow = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',  
};

const logoImg = {
  marginLeft: '8px',
  width: '20px',
  height: '20px',
};

const logoText = {
  fontWeight: 700,
  fontSize: '1.5rem',
  color: '#2d3748', // primary color
  opacity: 0.8,
};

const image = {
  maxWidth: '100%',
  height:'40px'
};

const infoBox = {
  padding: '16px',
  border: '1px solid #e2e8f0',
  borderRadius: '4px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  background: '#f8fafc',
  marginTop: '16px',
  marginBottom: '16px',
};

const boxInfos = {
  padding: '20px',
};

const heading = {
  color: '#2d3748',
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: '12px',
};

const mainText = {
  color: '#2d3748',
  fontSize: '1rem',
};

const chakamNameText = {
  fontWeight: 600,
  color: '#2d3748',
  lineHeight: '1.25',
};

const descText = {
  color: '#718096',
  fontSize: '1rem',
  marginTop: '8px',
};

const dateText = {
  color: '#2d3748',
  fontSize: '1rem',
  marginTop: '8px',
};

const createdDateText = {
  color: '#2d3748',
  fontSize: '0.875rem',
};

const buttonWrapper = {
  marginTop: '16px',
  display: 'flex',
  justifyContent: 'center',
};

const dashboardButton = {
  background: '#3182ce',
  color: '#fff',
  fontWeight: 600,
  padding: '12px 32px',
  borderRadius: '4px',
  textDecoration: 'none',
  transition: 'background 0.3s',
  display: 'inline-block',
};

const footerImg = {
  display: 'block',
  margin: '32px auto 0 auto',
  paddingTop: '32px',
};

const footerText = {
  // textAlign: 'center',
  fontSize: '0.75rem',
  color: '#718096',
  marginTop: '16px',
  marginBottom: '20px',
};
