import {page} from './documents/page'
import {post} from './documents/post'
import {person} from './documents/person'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import {blockContentTextOnly} from './objects/blockContentTextOnly'
import button from './objects/button'
import {hero} from './objects/hero'
import {callToAction} from './objects/callToAction'

// Export an array of all the schema types
// https://www.sanity.io/docs/studio/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  post,
  person,
  // Objects
  button,
  blockContent,
  blockContentTextOnly,
  link,
  hero,
  callToAction,
  // Add your custom block schemas here
]
