export const seo = {
  title: 'CC Blog | 开发者、思考者、探索者、幸运的人',
  description:
    '我叫 cclucky，一名开发者，思考者，探索者，同时也是MetaBubble实验室的成员，目前带领着MetaBubble实验室致力于创造一个充满创造力的工作环境，同时鼓励团队创造影响世界的产品。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://www.cclove.eu.org'
      : 'http://localhost:3000'
  ),
} as const
