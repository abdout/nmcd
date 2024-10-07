'use client';

import React from 'react'
import Form from '@/components/x/Form';
import Header from '@/components/x/Header'
import PostFeed from '@/components/x/PostFeed';

const X = () => {
  return (
    <>
      <Header label="X Page" />
      <Form placeholder="What's on your mind?" />
      <PostFeed />
    </>


  )
}

export default X