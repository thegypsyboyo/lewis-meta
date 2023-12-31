import React from 'react'
import type { Metadata } from 'next'
import TransitionEffect from '@/components/TransitionEffect'
import WorkDetails from '@/components/Works/WorkDetails'
import Layout from '@/components/Layout';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import { urlForOpenGraph } from '@/lib/urlFor';

type Props = {
  params: {
    slug: string
  };
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const slug = params.slug;

  // Fetch the single cause data
  const query = groq`*[_type=="project" && slug.current == $slug][0]{
    title, // Ensure title is fetched
    description, // Ensure description is fetched
    ...
  }`;
  const singleproject: Projects = await client.fetch(query, { slug });
  const ogImage = urlForOpenGraph(singleproject?.mainImage);
  return {
    title: `Portfolio Details | ${singleproject?.title}`,
    description: singleproject?.description,
    openGraph: ogImage
    ? {
        images : [ogImage]
    }: {},
  };
}


export async function generateStaticParams() {

  const query = groq`*[_type == "project"]
{
  slug,
}`;

  const slugs: Projects[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }))

}

export default async function Page({ params: { slug }, }: Props) {

  const query = groq`*[_type=="project" && slug.current == $slug][0]{
    ...,
    "tags": tags[]-> {
    title,
    slug,
  },
  "authors": authors[]->{
    name, 
    image,
    description,
    "socials": socials[]->{
        platform,
        url
    }
  },
  "postTags": postTags[]->{title,slug },
  "categories": categories[]->{title,number},
  "bioArrays": bioArrays[]->{
    description,      
    id,
  },
  "imageArrays": imageArrays[]->{
    image,      
    id,
  },
  "myCodeField": myCodeField { // Fetch the codeContent field
        language,
        code,
        filename
  },
}`;

  const project: Projects = await client.fetch(query, { slug })

  return (
    <>
      <TransitionEffect />
      <main className='w-full min-h-screen pt-16'>
        <Layout className='h-full'>
          <WorkDetails project={project} />
        </Layout>
      </main>
    </>
  )
}

