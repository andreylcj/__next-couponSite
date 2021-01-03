import React from 'react';
import FeaturedStores from '../sections/FeaturedStores';
import GeneralFeaturedCoupons from '../sections/GeneralFeaturedCoupons';
import data from '../data';
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

          <FeaturedStores featuredStores={data.featuredStores} />

        </div>
      </section >

      <GeneralFeaturedCoupons generalFeaturedCoupons={data.generalFeaturedCoupons} />
    </>
  )
}