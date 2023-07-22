import React from 'react';
import {Helmet} from "react-helmet";

type SEOProps = {
  name?: string
  type?: string
  path: string
  image: string
  title: string
  description: string
};

export default function SEO({ name, type, path, image, title, description}: SEOProps) {
  return (
    <Helmet>
      { /* Standard metadata tags */ }
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel="canonical" href={`https://farm-cart-22b37.web.app/${path}`} />
      { /* End standard metadata tags */ }
      { /* Facebook tags */ }
      <meta property="og:url" content={`https://farm-cart-22b37.web.app/${path}`} />
      <meta property="og:site_name" content="Farm Cart" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:description" content={description} />
      { /* End Facebook tags */ }
      { /* Twitter tags */ }
      {/* <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} /> */}
      { /* End Twitter tags */ }

    <meta charSet="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com"  />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,700;1,100&family=Poppins:wght@100;300;400&display=swap" rel="stylesheet" />
    </Helmet>
  )
}