"use client";

import * as React from 'react';
import { Container, Head, Heading, Html, Preview, Section, Text, Hr, Body } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
    message : string,
    senderEmail: string
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({message, senderEmail}) =>(
    <Html>
    <Head />
    <Preview>
        New message from your Portfolio page
    </Preview>
    <Tailwind>
        <Body className="bg-gray-100 !text-black font-mono">
            <Container>
                <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                    <Heading className="leading-tight text-center">
                        You received this message from contact form
                    </Heading>
                    <Text>
                        {message}
                    </Text>
                    <Hr/>
                    <Text>
                        <b>Sender:</b> {senderEmail}
                    </Text>
                </Section>
            </Container>
            
        </Body>
    </Tailwind>
</Html>
)
