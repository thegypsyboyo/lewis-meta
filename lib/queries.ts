import { groq } from "next-sanity";



// Get all posts
export const navbarQuery = groq`*[_type == 'navbar']{
    ...,
    "socials": socials[]->{
        platform,
        url,
    },
}`;

// Get all posts
export const postQuery = groq`*[_type == 'post']{
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
    "categories": categories[]->{
        _id,
        title,
        number,
    },
    "myCodeField": myCodeField { // Fetch the codeContent field
        language,
        code,
        filename
  },  
  "ogmetadatas": ogmetadatas[]->{
  ogImage,
  title,
  description,      
  "authors": authors[]->{
    name, 
    image,
    socials[]->{
      platform,
      url
    }
  },
},
} | order(_createdAt desc)`;

export const projectQuery = groq`*[_type == 'project']{
  ...,
  "authors": authors[]->{
      name, 
      image,
      socials[]->{
        platform,
        url
      }
  },
  "tags": tags[]-> {
      title,
      slug,
  },
  "categories": categories[]->{
    title,
    number
  },
  "bioArrays": bioArrays[]->{
    description,      
    id,
  },
  "imageArrays": imageArrays[]->{
    image,      
    id,
  },
  "ogmetadatas": ogmetadatas[]->{
  ogImage,
  title,
  description,      
  "authors": authors[]->{
    name, 
    image,
    socials[]->{
      platform,
      url
    }
  },
},
}`;

// Home Page

export const homeQuery = groq`*[_type == "home"]{
 ..., 
//  pdf.asset->url
"pdf": pdf.asset->url,
}`
export const aboutIntroQuery = groq`*[_type == "aboutIntro"]{
 ..., 
 "ogmetadatas": ogmetadatas[]->{
  ogImage,
  title,
  description,      
  "authors": authors[]->{
    name, 
    image,
    socials[]->{
      platform,
      url
    }
  },
},

}`
export const achievementsQuery = groq`*[_type == "achievements"]{
 ..., 
}`

export const experienceQuery = groq`*[_type == 'mystory']{
  ...,
  "stories": stories[]->{
    title, 
    description,
    subtitle,
    date,
    "points": points[]->{
        title,
        id,
    }
  },

} | order(_createdAt desc)`;



export const credentialsQuery = groq`*[_type == 'credentials']{
  ...,
  "socials": socials[]->{
    url,
    platform,
  },
  "bioArrays": bioArrays[]->{
    description,      
    id,
  },
  "ogmetadatas": ogmetadatas[]->{
    ogImage,
    title,
    description,      
    "authors": authors[]->{
      name, 
      image,
      socials[]->{
        platform,
        url
      }
    },
  },

} | order(_createdAt desc)`;


export const skillsQuery = groq`*[_type == 'skills']{
  ...,
} | order(_createdAt desc)`;


export const educationQuery = groq`*[_type == 'education']{
  ...,
} | order(_createdAt desc)`;


export const workexperienceQuery = groq`*[_type == 'experience']{
  ...,
} | order(_createdAt desc)`;



export const servicesQuery = groq`*[_type == 'myservices']{
  ...,
  "servicesInfo": servicesInfo[]->{
   image,
   title,
   price,
    "points": points[]->{
        title,
        id,
    },
    "bioArrays": bioArrays[]->{
        description,
        id,
    },
  },
    "serviceTitle": serviceTitle[]->{
        title,
        id,
  },
  "ogmetadatas": ogmetadatas[]->{
    ogImage,
    title,
    description,      
    "authors": authors[]->{
      name, 
      image,
      socials[]->{
        platform,
        url
      }
    },
  },

} | order(_createdAt desc)`;

export const servicesHeaderQuery = groq`*[_type == 'serviceHeader']{
  ...,
}`;


// CONTACT ME
export const contactInfoQuery = groq`*[_type == 'contactInfo']{
  ...,
  "ogmetadatas": ogmetadatas[]->{
    ogImage,
    title,
    description,      
    "authors": authors[]->{
      name, 
      image,
      socials[]->{
        platform,
        url
      }
    },
  },
}`;
export const infoTimesQuery = groq`*[_type == 'infoTimes']{
  ...,
  "socials": socials[]->{
    url,
    platform,
  },
  "ogmetadatas": ogmetadatas[]->{
    ogImage,
    title,
    description,      
    "authors": authors[]->{
      name, 
      image,
      socials[]->{
        platform,
        url
      }
    },
  },
}`;
