import {defineField, defineType} from 'sanity'

/**
 * Button schema object for CTA buttons.
 */

export default defineType({
  name: 'button',
  type: 'object',
  description: 'A button with text and link',
  fields: [
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Button Link',
      type: 'link',
      options: {collapsible: true, collapsed: false},
    }),
  ],
  options: {collapsible: true},
})
