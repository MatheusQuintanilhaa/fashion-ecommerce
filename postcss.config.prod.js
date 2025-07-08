module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './hooks/**/*.{js,ts,jsx,tsx}',
        './lib/**/*.{js,ts,jsx,tsx}',
      ],
      extractors: [
        {
          extractor: (content) => {
            return content.match(/[\w-/:]+(?<!:)/g) || []
          },
          extensions: ['js', 'jsx', 'ts', 'tsx'],
        },
      ],
      safelist: {
        standard: [
          'html', 'body', '*',
          'line-clamp-2', 'aspect-[3/4]', 'text-balance', 'sr-only',
          'animate-pulse', 'transition-all', 'duration-300', 'ease-in-out',
          'transform', 'hover:scale-105', 'group-hover:scale-105', 
          'translate-x-1', 'rotate-180',
        ],
        deep: [
          /data-\[state/, /data-\[side/, /data-\[align/,
          /hover:/, /focus:/, /group-hover:/, /peer-hover:/,
          /sm:/, /md:/, /lg:/, /xl:/, /2xl:/,
          /purple-/, /pink-/, /gradient-/, /from-/, /to-/, /via-/,
          /animate-/, /transition-/, /duration-/, /ease-/,
          /accordion-up/, /accordion-down/,
          /scale-/, /rotate-/, /translate-/,
        ],
        greedy: [
          /purple/, /pink/, /gradient/
        ]
      },
      blocklist: [
        /chart-[1-5]/, /sidebar-/, /menubar/, /navigation/, /popover/,
        /command/, /calendar/, /carousel/, /drawer/, /tooltip/,
      ],
    }),
    require('cssnano')({
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: true,
        mergeLonghand: true,
        mergeRules: true,
        discardDuplicates: true,
        discardEmpty: true,
        minifyFontValues: true,
        minifyParams: true,
        minifySelectors: true,
      }]
    })
  ]
};
