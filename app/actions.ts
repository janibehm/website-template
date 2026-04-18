'use server'

import {draftMode} from 'next/headers'

export async function disableDraftMode() {
  'use server'
  const draft = await draftMode()
  draft.disable()
}
