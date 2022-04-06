import React from 'react';
import ContentRowTop from './ContentRowTop';
import TopBar from './TopBar';
import Footer from './Footer';
import Table from './Table';

export default function ContentWrapper() {
  return (
    <div>
        <TopBar />
        <ContentRowTop />
        <Table />
        <Footer />
    </div>
  )
}
