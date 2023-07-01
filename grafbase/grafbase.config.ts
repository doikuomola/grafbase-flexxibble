import { g, auth, config } from '@grafbase/sdk';
import { comment } from 'postcss';

const user = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.email().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g
    .relation(() => project)
    .optional()
    .list(),
});

const project = g.model('Post', {
  title: g.string().length({ min: 3 }),
  description: g.string().optional(),
  image: g.url(),
  liveSiteUrl: g.string().optional(),
  githubUrl: g.string().optional(),
  category: g.string().search(),
  createdBy: g.relation(() => user),
});

export default config({
  schema: g,
  // Integrate Auth
  // https://grafbase.com/docs/auth
  // auth: {
  //   providers: [authProvider],
  //   rules: (rules) => {
  //     rules.private()
  //   }
  // }
});
