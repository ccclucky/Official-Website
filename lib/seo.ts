export const seo = {
  title: 'CCLUCKY BLOG | 思考者，程序猿，架构狂魔，探索者',
  description:
    '我叫 cclucky，一名思考者，程序猿，架构狂魔，探索者，全栈工程师，是MetaBubble实验室的成员，希望成为领域的先驱者、探索者，我热爱开发，架构，创新，思考，以及在未知领域中探索。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://www.cclucky.eu.org'
      : 'http://localhost:3000'
  ),
} as const
