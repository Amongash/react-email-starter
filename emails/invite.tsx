import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';
import { Font } from '@react-email/font';
import * as React from 'react';

interface InviteUserProps {
    firstName: string;
    headerImage: string;
    sentBy: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

export const InviteUser = ({ firstName = "John", headerImage = `${baseUrl}/static/logo.jpg`, sentBy = "James Doe" }: InviteUserProps) => {
    return (
        <Html>
            <Head>
                <Font
                    fontFamily="Nunito Sans"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500&display=swap',
                        format: 'woff2'
                    }}
                    fontWeight={400}
                    fontStyle="normal"

                />
            </Head>
            <Preview>Unbox the world with Smart Delivery - Your exclusive invite from The Hub, Karen!</Preview>
            <Body style={body}>
                <Container style={container}>
                    <Row style={header}>
                        <Column style={headerImageContainer}>
                            <Img
                                width={456}
                                height={92}
                                src={`${baseUrl}/static/logo.jpg`}
                            />
                        </Column>
                    </Row>
                    <Section style={content}>
                        <Text>
                            Dear {firstName},
                        </Text>
                        <Text style={text}>
                            We hope this message finds you well. You might remember us from The Hub in Karen, where we had the pleasure of introducing you to Smart Delivery - your passport to effortless global shopping!
                            At Smart Delivery, we're all about bringing the world to your doorstep. We provide reliable, efficient shipping services from international stores straight to you, making your global shopping experience smooth and enjoyable.
                            Here's where it gets even better: we're inviting you to subscribe to our exclusive marketing emails. Why should you join us, you ask? Here's why:
                        </Text>


                        <ol style={pointers}>
                            <li style={text}>Early Access: Be the first to know about our latest services, partnerships, and special promotions. </li>
                            <li style={text}>Exclusive Discounts: Enjoy special offers and discounts,  tailor-made for our email subscribers.</li>
                            <li style={text}>Insider Shopping Tips: Get the best shopping tips and tricks for a seamless global shopping experience.</li>
                        </ol>

                        <Text style={text}>
                            Start your global shopping journey with Smart Delivery!
                            We're excited to have you onboard and can't wait to help you shop the world!
                        </Text>
                        <Section style={buttonContainer}>
                            <Button pX={14} pY={14} style={button} href="#" >
                                SUBSCRIBE NOW
                            </Button>
                        </Section>
                    </Section>

                    <Row style={footer}>
                        <Column style={footerText}>+(254) 702873412 </Column>
                        <Column style={footerText}>| info@smartdelivery.coke |</Column>
                        <Column style={footerText}> www.smartdelivery.co.ke</Column>
                    </Row>
                </Container>
            </Body>
        </Html>
    );
}
export default InviteUser;

const body = {
    backgroundColor: '#505050',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Nunito Sans', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    padding: '23px 137px 154px 137px',
};
const container = {
    margin: '0 auto',
};
const header = {
    display: 'flex',
    padding: ' 37px 147px 21px 147px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#14171c',
    borderRadius: '4px 4px 0 0',
};
const headerImageContainer = {
    display: 'flex',
};
const content = {
    backgroundColor: '#ffffff',
    padding: '0 60px 0 60px',
};
const text = {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#14171c',
};
const pointers = {
    display: 'inline-flex',
    paddingLeft: '50px',
    paddingRight: '10px',
    flexDirection: 'column',

};
const buttonContainer = {
    textAlign: 'center',
    marginTop: '32px',
    marginBottom: '32px',
};
const button = {
    justifyContent: 'center',
    width: '150px',
    backgroundColor: '#fcaf3b',
    color: '#14171c',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '500',
};
const footer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcaf3b',
    padding: '21px 51px 29px 51px',
    borderRadius: '0 0 4px 4px',
};
const footerText = {
    fontSize: '12px',
    fontWeight: '300',
    color: '#14171c',
    textAlign: 'center',
};
