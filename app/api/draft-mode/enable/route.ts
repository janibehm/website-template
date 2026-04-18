import {defineEnableDraftMode} from 'next-sanity/draft-mode'

import {client} from '@/sanity/lib/client'
import {token} from '@/sanity/lib/token'

/**
 * Enable draft mode for Sanity Presentation Tool / Visual Editing
 * Learn more: https://github.com/sanity-io/next-sanity?tab=readme-ov-file#5-integrating-with-sanity-presentation-tool--visual-editing
 */

export const {GET} = defineEnableDraftMode({
  client: client.withConfig({token}),
})
