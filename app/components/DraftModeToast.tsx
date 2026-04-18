'use client'

import {useEffect, useState, useTransition} from 'react'
import {useRouter} from 'next/navigation'
import {toast} from 'sonner'

import {disableDraftMode} from '@/app/actions'

export default function DraftModeToast() {
  const router = useRouter()
  const [pending, startTransition] = useTransition()
  const [toastId, setToastId] = useState<string | number | undefined>(undefined)

  useEffect(() => {
    if (pending) return

    const id = toast('Draft Mode Enabled', {
      description: 'Content is loaded directly from Sanity.',
      duration: Infinity,
      action: {
        label: 'Disable',
        onClick: async () => {
          startTransition(async () => {
            await disableDraftMode()
            router.refresh()
          })
        },
      },
    })
    setToastId(id)

    return () => {
      if (id) {
        toast.dismiss(id)
      }
    }
  }, [pending, router])

  useEffect(() => {
    if (pending && toastId) {
      toast.loading('Disabling draft mode...', {id: toastId, duration: Infinity})
    }
  }, [pending, toastId])

  return null
}
