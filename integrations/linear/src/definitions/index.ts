import { IntegrationDefinitionProps, messages } from '@botpress/sdk'
import { z } from 'zod'

export { actions } from './actions'
export { events } from './events'
export { states } from './states'
export { UserProfile } from './schemas'

export const configuration = {
  identifier: {
    linkTemplateScript: 'linkTemplate.vrl',
  },
  schema: z.object({
    displayName: z.string().optional().describe('Name used when sending messages'),
    avatarUrl: z.string().optional().describe('URL of the bot avatar'),
  }),
} satisfies IntegrationDefinitionProps['configuration']

export const channels = {
  issue: {
    messages: messages.defaults,
    message: {
      tags: {
        id: {},
      },
    },
    conversation: {
      creation: {
        enabled: true,
        requiredTags: [],
      },
      tags: {
        id: {},
        title: {},
        url: {},
        parentId: {},
        parentTitle: {},
        parentUrl: {},
      },
    },
  },
} satisfies IntegrationDefinitionProps['channels']

export const user = {
  tags: {
    id: {},
  },
} satisfies IntegrationDefinitionProps['user']
