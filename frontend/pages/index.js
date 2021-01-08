import React from 'react';
import FeaturedStores from '../sections/FeaturedStores';
import GeneralFeaturedCoupons from '../sections/GeneralFeaturedCoupons';
import Head from 'next/head';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Morant</title>
      </Head>
      <section id="featured" className="featured-stores">
        <div className="container">
          <h1 className="title">Cupons e cashback em 2.000 lojas</h1>
          <h2 className="subtitle">Economize na sua compra usando os melhores Cupons de Desconto e Cashback!</h2>
          <FeaturedStores apiURL='/api/lojas/index-featured-estores' />
        </div>
      </section >
      <GeneralFeaturedCoupons apiURL='/api/cupons/general-featured-coupons' />
    </>
  )
}