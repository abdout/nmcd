import Title from '@/components/atom/databayt'
import Block from '@/components/contribute/block'
import Section from '@/components/contribute/section'

import Link from 'next/link'
import React from 'react'

const contribute = () => {
  return (
    <div className='flex flex-col justify-center items-center py-8 '>
      <div className='justify-start'>
        <Title title='Contributors! 👋' description='Welcome'/>
        <div className='flex flex-col space-y-2 pt-6'>
          <p>Thank you for considering contributing to NMBD! We greatly appreciate your interest and support.<br /> Below are some essential resources and information to help you <strong>get started</strong>:</p>

          <Section
            title='Paradigm 🏷️'
            body='The core principles and conceptual framework that guide our project. This section outlines NMBD, values, and the overarching vision that shapes NMBD.'
            link='/tech-paradigm'
            label='Link to Paradigm'
          />
          <Section
            title='Documentation 📚'
            body='Before diving into the code, make sure to check out the documentation. It provides detailed explanations of project structure, guidelines, and how to contribute effectively.'
            link='/docs'
            label='Link to Documentation'
          />
          <Section
            title='Repository 🏠'
            body='Main repository serves as the central hub for the project. This is where you will find the core codebase and contribute to its development.'
            link='https://github.com/abdout/nmbd'
            label='Link to Repository '
          />
          <Section
            title='Localhost 💻'
            body='A manual to set up a local development environment on your computer. This includes installing the necessary dependencies and configuring the necessary environment variables.'
            link='/localhost'
            label='Link to  Localhost Manual '
          />
          <Section
            title='Github 🐙'
            body='A manual to master GitHub, including branch, issue, fork, clone, push, pull request and merge.'
            link='/github'
            label='Link to Github Manual'
          />
          <Section
            title='Milestone 🎯'
            body='Explore milestones to understand short-term goals and objectives. This section outlines key targets we aim to achieve in the near future.'
            link='/milestone'
            label='Link to Milestone'
          />
          <Section
            title='Roadmap 🚀'
            body='Discover long-term vision and planned features for NMBD. The roadmap provides an overview of strategic direction and future developments.'
            link='/roadmap'
            label='Link to Roadmap '
          />
          <Section
            title='Building Blocks 🧱'
            body='In addition to the main repository, we have child repositories dedicated to specific building blocks which serve as integral parts of the overall system. for more detials you may broswe through the following building blocks:'
          />
          <Block />

          <h4 className='pt-3'>Get in Touch 📬</h4>
          <p>Have questions, feedback, or need assistance? feel free to <Link className='text-blue-700' href="https://github.com/abdout/databayt/issues">open an issue</Link> or reach out on <Link className='text-blue-700' href="">Discord</Link> . </p>
          <Section
            title='Code of Conduct 🤝'
            body='We maintain a code of conduct to ensure a welcoming and inclusive environment for all contributors. Please familiarize yourself with the code of conduct and adhere to its principles when interacting with the community.'
            link='/conduct'
            label='Link to Code of Conduct '
          />
          <Section
            title='Thank You 🙏'
            body='Once again, thank you for considering contributing to NMBD! Open source is the magic. ✨'
            link=''
          />
        </div>
      </div>
    </div>
  )
}

export default contribute