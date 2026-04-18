import {defineField, defineType} from 'sanity'
import {InlineIcon} from '@sanity/icons'

/**
 * Call to Action schema object.
 * Learn more: https://www.sanity.io/docs/studio/object-type
 */

export const callToAction = defineType({
  name: 'callToAction',
  title: 'Call to Action',
  type: 'object',
  icon: InlineIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      description: 'Small text displayed above the heading',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContentTextOnly',
    }),
    defineField({
      name: 'button',
      type: 'button',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          {title: 'Light', value: 'light'},
          {title: 'Dark', value: 'dark'},
        ],
        layout: 'radio',
      },
      initialValue: 'light',
    }),
    defineField({
      name: 'contentAlignment',
      title: 'Content Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Content First', value: 'contentFirst'},
          {title: 'Image First', value: 'imageFirst'},
        ],
        layout: 'radio',
      },
      initialValue: 'contentFirst',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Call to Action',
        subtitle,
        media,
      }
    },
  },
})
