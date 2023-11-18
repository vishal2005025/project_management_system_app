import React from 'react'
import Chatbot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

const Chatabot = () => {

    const steps = [
        {
            id: "Greet",
            message: "Hello, Welcome to our website Project management system",
            trigger: "Ask Name",
        },
        {
            id: "Ask Name",
            message: "Please enter your name!",
            trigger: "waiting1",
        },
        {
            id: "waiting1",
            user: true,
            trigger: "Name",
        },
        {
            id: "Name",
            message: "Hi {previousValue},  Are you excited to know about our website..... select option",
            trigger: "issues",
        },
        {
            id: "issues",
            options: [
                { value: "yes", label: "yes", trigger: "yes" },
                { value: "no", label: "no", trigger: "no" },
            ],
        },
        {
            id: 'yes',
            message: 'Thanks for selecting yes , so Our platform  project management system (PMS) is a tool that helps organize and streamline business operations. It can help project managers oversee their work and allocate resources more efficiently.',
            end: true,
        },
        {
            id: 'no',
            message: 'i am very disappointing!!!',
            end: true,
        }

    ]

    return (
        <>
            <Segment floated="right">
                <Chatbot headerTitle="chat"
                    speechSynthesis={{ enable: true, lang: 'hi-IN' }} steps={steps} />
            </Segment>

        </>
    )
}

export default Chatabot
