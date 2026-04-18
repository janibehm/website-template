import {defineField, defineType} from 'sanity'
import {StarIcon, ComposeSparklesIcon, ImageIcon, LinkIcon} from '@sanity/icons'

/**
 * Hero schema object for full-width hero sections.
 * Learn more: https://www.sanity.io/docs/studio/object-type
 */

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: StarIcon,
  groups: [
    {
      name: 'contents',
      icon: ComposeSparklesIcon,
      default: true,
    },
    {
      name: 'media',
      icon: ImageIcon,
    },
    {
      name: 'button',
      icon: LinkIcon,
    },
  ],
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      description: 'Small text displayed above the heading',
      group: 'contents',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'contents',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      group: 'contents',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContentTextOnly',
      group: 'contents',
    }),
    defineField({
      name: 'button',
      type: 'button',
      group: 'button',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'media',
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
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading',
      media: 'image',
    },
  },
})
