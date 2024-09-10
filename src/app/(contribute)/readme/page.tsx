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
            title='Documentation 📚'
            body='Before diving into the code, make sure to check out the documentation. It provides detailed explanations of project structure, guidelines, and how to contribute effectively.'
            link='/docs'
            label='Link to Documentation'
          />
          <Section
            title='Main Repository 🏠'
            body='Main repository serves as the central hub for the project. This is where you will find the core codebase and contribute to its development.'
            link='https://github.com/abdout/nmbd'
            label='Link to Main Repository '
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
            title='Roadmap 🚀'
            body='A guide to setting up a local development environment on your computer. This includes installing the necessary dependencies and configuring the necessary environment variables.'
            link='/roadmap'
            label='Link to Roadmap '
          />
          <Section
          
            title='Building Blocks 🧱'
            body='In addition to the main repository, we have child repositories dedicated to specific building blocks which serve as integral parts of the overall system. for more detials you may broswe through the following building blocks:'
          />
          <Block />

          <h4 className='pt-3'>Get in Touch 📬</h4>
          <p>Have questions, feedback, or need assistance? feel free to <Link className='text-blue-700' href="https://github.com/abdout/databayt/issues">open an issue</Link> or reach out to us on <Link className='text-blue-700' href="">Discord</Link> . </p>
          <Section
            title='Code of Conduct 🤝'
            body='We maintain a code of conduct to ensure a welcoming and inclusive environment for all contributors. Please familiarize yourself with the code of conduct and adhere to its principles when interacting with the community.'
            link='/conduct'
            label='Link to Code of Conduct '
          />
          <Section
            title='Thank You 🙏'
            body='Once again thank you for your interest in contributing to the project. By collaborating, we can create something extraordinary.'
            link=''
           
          />
        </div>
      </div>
    </div>
  )
}

export default contribute