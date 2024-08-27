'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head'; // Import the Head component
import axiosClient from '../../axiosClient';
import Header from './components/Header';
import Banners from './components/Banners';
import AboutSection from './components/About';
import Paints from './components/Paints';
import BlogPosts from './components/BlogPosts';
import Services from './components/Services';
import Colors from './components/Colors';
import Dealer from './components/Dealer';
import Footer from './components/Footer';
import './globals.css';

const GET_HOMEPAGE_DATA = `
  query GetHomepageData {
    pages(where: { name: "Homepage" }) {
      nodes {
        homepage {
          // (your homepage fields here)
        }
        seo {
          canonical
          metaKeywords
          metaDesc
          title
          opengraphType
          opengraphSiteName
          opengraphTitle
          opengraphDescription
          opengraphUrl
          schema {
            raw
          }
          opengraphImage {
            mediaItemUrl
          }
        }
      }
    }
    allColourCategory(where: { slug: "popular" }) {
      nodes {
        name
        colours {
          nodes {
            title
            slug
            colourInfo {
              selectColor
              colourRgb
            }
          }
        }
      }
    }
    blogs {
      nodes {
        featuredImage {
          node {
            sourceUrl
          }
        }
        slug
        title
        date
      }
    }
  }
`;

async function fetchHomepageData() {
  try {
    const response = await axiosClient.post('', { query: GET_HOMEPAGE_DATA });
    const data = response.data.data;

    if (data?.pages?.nodes?.length > 0) {
      return {
        homepage: data.pages.nodes[0].homepage,
        seo: data.pages.nodes[0].seo,
        blogs: data.blogs.nodes,
        allColourCategory: data.allColourCategory.nodes,
      };
    }

    console.error('Unexpected response structure:', data);
    return null;
  } catch (err) {
    console.error('API request failed', err);
    return null;
  }
}

export default function HomePage() {
  const [homepageData, setHomepageData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchHomepageData();
      setHomepageData(data);
    };
    loadData();
  }, []);

  if (!homepageData) return <p>Loading...</p>;

  const { homepage, seo, blogs, allColourCategory } = homepageData;

  return (
    <>
      {/* Add the Head component with SEO metadata */}
      <Head>
        <title>{seo.title || 'Default Title'}</title>
        <meta name="description" content={seo.metaDesc || 'Default description'} />
        <meta name="keywords" content={seo.metaKeywords || 'default, keywords'} />
        <link rel="canonical" href={seo.canonical || 'https://yourdomain.com'} />
        <meta property="og:title" content={seo.opengraphTitle || seo.title || 'Default Title'} />
        <meta property="og:description" content={seo.opengraphDescription || seo.metaDesc || 'Default description'} />
        <meta property="og:url" content={seo.opengraphUrl || 'https://yourdomain.com'} />
        <meta property="og:image" content={seo.opengraphImage?.mediaItemUrl || '/default-image.jpg'} />
        <meta property="og:type" content={seo.opengraphType || 'website'} />
        {/* Additional meta tags as needed */}
      </Head>

      <Header />
      <section id="banners">
        <Banners homepageData={homepage} />
      </section>
      <section id="about">
        <AboutSection homepageData={homepage} />
      </section>
      <section id="paints">
        <Paints homepageData={homepage} />
      </section>
      <section id="services">
        <Services homepageData={homepage} />
      </section>
      <section id="colors">
        <Colors allColourCategory={allColourCategory} homepageData={homepage} />
      </section>
      <section id="dealer">
        <Dealer homepageData={homepage} />
      </section>
      <section id="blogs">
        <BlogPosts blogs={blogs} />
      </section>
      <Footer />
    </>
  );
}
