import {
  Body,
  Column,
  Container,
  Heading,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Hr
} from '@react-email/components';

interface NewChakamEmailProps {
  baseUrl: string;
}


export const ChakamCreatedEmail = ({
  baseUrl 
  
}: NewChakamEmailProps) => {

  return (
    <Section style={main}>
      <Container style={mainContainer}>
        {/* <Body style={{width: '100%'}}> */}
          <Row style={logoRow}>
            <Column>
            
                <Img 
                src='https://firebasestorage.googleapis.com/v0/b/giftedchatapp-fde9c.appspot.com/o/chakam%2Ffavicon.png?alt=media&token=443c5ccc-8665-4f91-b57b-f99599629a1e' 
                width="30"
                alt="Logo"
                style={{ display: 'block', margin: '0 auto',marginRight: '8px',
                  marginLeft: '30px', width: '20px', height: '20px' }}
                
                />

            </Column>
            <Column>
                <Text
                style={{
                  fontWeight: 700,
                  fontSize: '20px',
                  background: 'linear-gradient(90deg, #3182ce 0%, #6bb78f 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',                  
                }}
                >
                Chakam
                </Text>

            </Column>
          </Row>
          <Section style={{
            marginTop: '20px',
            margin:'30px'
          }}>
            <Text
            style={{
              marginTop: '10px',
              marginBottom: '10px',
              fontSize: '24px',
              lineHeight: '24px',
              color: '#4a5568',
              fontWeight: 900,
            }}
            >
              Allo there,
            </Text>
            <Text
              style={{
              width: '600px',
              maxWidth: '100%',
              }}
            >
              Are you excited? You just locked a new chakam meme!!!&#127881; &#127881;&#127881;
              <br />
              This is more than just a digital note — 
              it’s a message from your present self to your future self.
            </Text>
            <Link
              href={`${baseUrl}/dashboard`}
              style={{
                display: 'inline-block',
                backgroundColor: '#3bb78f',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '16px',
                padding: '12px 24px',
                borderRadius: '6px',
                textDecoration: 'none',
                textAlign: 'center',
                
              }}
            >
              Go to Dashboard
            </Link>
          
          </Section>
        {/* </Body> */}
         <Hr 
            style={{
              borderColor: '#e2e8f0',
              borderWidth: '1.5px',
              width: '100%',
              marginTop: '20px',
              // marginBottom: '20px',
            }}
          />
        <Section
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '30px',
          paddingRight: '30px',
          paddingTop: '20px',
        }}
        >
          <Row style={logoRow}>
            <Column>
            <Link
            href={`${baseUrl}`}
            style={{
              cursor: 'pointer',
              textDecoration: 'none',
            }}
            >
              <Text
              style={{
                color: '#3bb78f',
              }}
              >
              chakam.com.ng
              </Text>
            </Link>
              
            </Column>
            <Column>
              <Text>
              &nbsp;|&nbsp;@2025
              </Text>
            </Column>
           
          </Row>
          
        </Section>

         <Section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '30px',

        }}
        >
          <Row style={logoRow}>
            <Column>
            <Link
            href={`${baseUrl}`}
            style={{
              cursor: 'pointer',
              textDecoration: 'none',
            }}
            >
              <Text
              style={{
                color: '#4a5568',
              }}
              >
              Home
              </Text>
            </Link>
              
            </Column>

             <Column>
            <Link
            href={`${baseUrl}/about`}
            style={{
              cursor: 'pointer',
              textDecoration: 'none',
            }}
            >
              <Text
              style={{
                color: '#4a5568',
              }}
              >
              &nbsp;|&nbsp;Terms of use
              </Text>
            </Link>
              
            </Column>
             <Column>
            <Link
            href={`${baseUrl}/privacy-policy`}
            style={{
              cursor: 'pointer',
              textDecoration: 'none',
            }}
            >
              <Text
              style={{
                color: '#4a5568',
              }}
              >
              &nbsp;|&nbsp;Privacy Policy
              </Text>
            </Link>
              
            </Column>
           
           
          </Row>
          
        </Section>
      </Container>
      
    </Section>
  )
  
}

export default ChakamCreatedEmail;

// Custom styles replacing Tailwind classes
const main = {
  backgroundColor: '#f7fafc', // light background
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  width: '100%',
  boxShadow: '0 4px 24px rgba(0,0,0, 0.1)',
};
const mainContainer = {
  maxWidth: '600px',
  margin: 'auto',
  padding: '20px',
  backgroundColor: '#fff', 
  borderRadius: '2px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
}

const logoRow = {
  display: 'flex',
  width:'100%',
};
