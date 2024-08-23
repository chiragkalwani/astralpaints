'use client';

import React, { useEffect, useState } from 'react';
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
          banners {
            bannerImage {
              node {
                sourceUrl
              }
            }
            bannersTitle
            bannerDescription
            bannerButton {
              title
              url
              target
            }
          }
          homeAboutTitle
          homeAboutSubtitle
          homeAboutButton {
            target
            title
            url
          }
          homeAboutVideoImage {
            node {
              sourceUrl
            }
          }
          homeAboutVideoUrl
          homeAboutDescription
          homeCategoryTitle
          homeCategorySubtitle
          homeServicesTitle
          homeServicesSubtitle
          homeColoursTitle
          homeColoursSubtitle
          homeColoursButton {
            target
            title
            url
          }
          homeJoinBackgroundImage {
            node {
              sourceUrl
            }
          }
          homeJoinTitle
          homeJoinSubtitle
          homeJoinButton {
            target
            title
            url
          }
          homeJoinDescription
          blogTitle
          blogSubtitle
          categories {
            link
            title
            image {
              node {
                sourceUrl
              }
            }
          }
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

  const { homepage, blogs, allColourCategory } = homepageData;

  return (
    <>
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
