import {defineQuery} from 'next-sanity'

export const settingsQuery = defineQuery(`
  *[_type == "settings"][0]{
    ...,
    footerButton {
      ...,
      link {
        ...,
        "page": page->slug.current,
        "post": post->slug.current
      }
    }
  }
`)

const linkReference = /* groq */ `
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current
  }
`

const linkFields = /* groq */ `
  link {
      ...,
      ${linkReference}
      }
`

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ...,
        button {
          ...,
          ${linkFields}
        }
      },
      _type == "hero" => {
        ...,
        button {
          ...,
          ${linkFields}
        }
      }
      // Add GROQ expansions for your custom block types here
    }
  }
`)

export const allPagesQuery = defineQuery(`
  *[_type == 'page' && defined(slug.current)]{
    "slug": slug.current
  }
`)
