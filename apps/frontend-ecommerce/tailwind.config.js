const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/*.{html,ts}'),
    join(__dirname, 'src/app/app.html'),
    join(__dirname, 'src/app/app.ts'),
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      serif: ['Poppins', 'ui-serif', 'Georgia', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      poppins: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      arabic: ['PingARLT', 'Tajawal', 'ui-sans-serif', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
      sm: ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
      base: ['1rem', { lineHeight: '1.7', letterSpacing: '-0.01em' }],
      lg: ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
      xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.015em' }],
      '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
      '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
      '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
      '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
      '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
      '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
      '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              fontWeight: '500',
            },
            strong: {
              color: 'inherit',
              fontWeight: '600',
            },
            'ol[type="A"]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a"]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="A" s]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a" s]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="I"]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i"]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="I" s]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i" s]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="1"]': {
              '--list-counter-style': 'decimal',
            },
            'ol > li': {
              position: 'relative',
              paddingLeft: '1.75em',
            },
            'ol > li::before': {
              content: 'counter(list-item, var(--list-counter-style, decimal)) "."',
              position: 'absolute',
              fontWeight: '400',
              color: 'inherit',
              left: '0',
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.75em',
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: 'currentColor',
              borderRadius: '50%',
              width: '0.375em',
              height: '0.375em',
              top: 'calc(0.875em - 0.1875em)',
              left: '0.25em',
            },
            hr: {
              borderColor: 'currentColor',
              borderTopWidth: 1,
              marginTop: '3em',
              marginBottom: '3em',
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: 'inherit',
              borderLeftWidth: '0.25rem',
              borderLeftColor: 'currentColor',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              marginTop: '1.6em',
              marginBottom: '1.6em',
              paddingLeft: '1em',
            },
            h1: {
              color: 'inherit',
              fontWeight: '700',
              fontSize: '2.25em',
              marginTop: '0',
              marginBottom: '0.8888889em',
              lineHeight: '1.1111111',
            },
            h2: {
              color: 'inherit',
              fontWeight: '600',
              fontSize: '1.5em',
              marginTop: '2em',
              marginBottom: '1em',
              lineHeight: '1.3333333',
            },
            h3: {
              color: 'inherit',
              fontWeight: '600',
              fontSize: '1.25em',
              marginTop: '1.6em',
              marginBottom: '0.6em',
              lineHeight: '1.6',
            },
            h4: {
              color: 'inherit',
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              lineHeight: '1.5',
            },
            'figure figcaption': {
              color: 'inherit',
              fontSize: '0.875em',
              lineHeight: '1.4285714',
              marginTop: '0.8571429em',
            },
            code: {
              color: 'inherit',
              fontWeight: '600',
              fontSize: '0.875em',
            },
            'code::before': {
              content: '"`"',
            },
            'code::after': {
              content: '"`"',
            },
            pre: {
              color: 'inherit',
              backgroundColor: 'rgba(55, 65, 81, 1)',
              overflowX: 'auto',
              fontWeight: '400',
              fontSize: '0.875em',
              lineHeight: '1.7142857',
              marginTop: '1.7142857em',
              marginBottom: '1.7142857em',
              borderRadius: '0.375rem',
              paddingTop: '0.8571429em',
              paddingRight: '1.1428571em',
              paddingBottom: '0.8571429em',
              paddingLeft: '1.1428571em',
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              padding: '0',
              fontWeight: 'inherit',
              color: 'inherit',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
            },
            'pre code::before': {
              content: 'none',
            },
            'pre code::after': {
              content: 'none',
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              textAlign: 'left',
              marginTop: '2em',
              marginBottom: '2em',
              fontSize: '0.875em',
              lineHeight: '1.7142857',
            },
            thead: {
              color: 'inherit',
              fontWeight: '600',
              borderBottomWidth: '1px',
              borderBottomColor: 'currentColor',
            },
            'thead th': {
              verticalAlign: 'bottom',
              paddingRight: '0.5714286em',
              paddingBottom: '0.5714286em',
              paddingLeft: '0.5714286em',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: 'currentColor',
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0',
            },
            'tbody td': {
              verticalAlign: 'top',
              paddingTop: '0.5714286em',
              paddingRight: '0.5714286em',
              paddingBottom: '0.5714286em',
              paddingLeft: '0.5714286em',
            },
          },
        },
        sm: {
          css: {
            fontSize: '0.875rem',
            lineHeight: '1.7142857',
            p: {
              marginTop: '1.1428571em',
              marginBottom: '1.1428571em',
            },
            '[class~="lead"]': {
              fontSize: '1.2857143em',
              lineHeight: '1.5555556',
              marginTop: '0.8888889em',
              marginBottom: '0.8888889em',
            },
            blockquote: {
              marginTop: '1.3333333em',
              marginBottom: '1.3333333em',
              paddingLeft: '1.1111111em',
            },
            h1: {
              fontSize: '2.1428571em',
              marginTop: '0',
              marginBottom: '0.8em',
              lineHeight: '1.2',
            },
            h2: {
              fontSize: '1.4285714em',
              marginTop: '1.6em',
              marginBottom: '0.8em',
              lineHeight: '1.4',
            },
            h3: {
              fontSize: '1.2857143em',
              marginTop: '1.3333333em',
              marginBottom: '0.4444444em',
              lineHeight: '1.5555556',
            },
            h4: {
              marginTop: '1.1428571em',
              marginBottom: '0.5714286em',
              lineHeight: '1.6',
            },
            img: {
              marginTop: '1.7142857em',
              marginBottom: '1.7142857em',
            },
            video: {
              marginTop: '1.7142857em',
              marginBottom: '1.7142857em',
            },
            figure: {
              marginTop: '1.7142857em',
              marginBottom: '1.7142857em',
            },
            'figure > *': {
              marginTop: '0',
              marginBottom: '0',
            },
            'figure figcaption': {
              fontSize: '0.8571429em',
              lineHeight: '1.3333333',
              marginTop: '0.6666667em',
            },
            code: {
              fontSize: '0.8571429em',
            },
            'h2 code': {
              fontSize: '0.9em',
            },
            'h3 code': {
              fontSize: '0.9em',
            },
            pre: {
              fontSize: '0.8571429em',
              lineHeight: '1.6666667',
              marginTop: '1.6666667em',
              marginBottom: '1.6666667em',
              borderRadius: '0.25rem',
              paddingTop: '0.6666667em',
              paddingRight: '1em',
              paddingBottom: '0.6666667em',
              paddingLeft: '1em',
            },
            ol: {
              paddingLeft: '1.5714286em',
            },
            ul: {
              paddingLeft: '1.5714286em',
            },
            li: {
              marginTop: '0.2857143em',
              marginBottom: '0.2857143em',
            },
            'ol > li': {
              paddingLeft: '0.4285714em',
            },
            'ul > li': {
              paddingLeft: '0.4285714em',
            },
            '> ul > li p': {
              marginTop: '0.5714286em',
              marginBottom: '0.5714286em',
            },
            '> ul > li > *:first-child': {
              marginTop: '0',
            },
            '> ul > li > *:last-child': {
              marginBottom: '0',
            },
            '> ol > li > *:first-child': {
              marginTop: '0',
            },
            '> ol > li > *:last-child': {
              marginBottom: '0',
            },
            'ul ul, ul ol, ol ul, ol ol': {
              marginTop: '0.5714286em',
              marginBottom: '0.5714286em',
            },
            hr: {
              marginTop: '2.8571429em',
              marginBottom: '2.8571429em',
            },
            'hr + *': {
              marginTop: '0',
            },
            'h1 + *, h2 + *, h3 + *, h4 + *, h5 + *, h6 + *': {
              marginTop: '0',
            },
            'thead th:first-child': {
              paddingRight: '0',
            },
            'thead th:last-child': {
              paddingLeft: '0',
            },
            'tbody td:first-child': {
              paddingRight: '0',
            },
            'tbody td:last-child': {
              paddingLeft: '0',
            },
            '> :first-child': {
              marginTop: '0',
            },
            '> :last-child': {
              marginBottom: '0',
            },
          },
        },
        lg: {
          css: {
            fontSize: '1.125rem',
            lineHeight: '1.7777778',
            p: {
              marginTop: '1.3333333em',
              marginBottom: '1.3333333em',
            },
            '[class~="lead"]': {
              fontSize: '1.2222222em',
              lineHeight: '1.4545455',
              marginTop: '1.0909091em',
              marginBottom: '1.0909091em',
            },
            blockquote: {
              marginTop: '1.7777778em',
              marginBottom: '1.7777778em',
              paddingLeft: '1em',
            },
            h1: {
              fontSize: '2.6666667em',
              marginTop: '0',
              marginBottom: '0.8333333em',
              lineHeight: '1.0833333',
            },
            h2: {
              fontSize: '1.6666667em',
              marginTop: '1.8666667em',
              marginBottom: '1.0666667em',
              lineHeight: '1.3333333',
            },
            h3: {
              fontSize: '1.3333333em',
              marginTop: '1.5555556em',
              marginBottom: '0.4444444em',
              lineHeight: '1.5',
            },
            h4: {
              marginTop: '1.3333333em',
              marginBottom: '0.6666667em',
              lineHeight: '1.5',
            },
            img: {
              marginTop: '1.7777778em',
              marginBottom: '1.7777778em',
            },
            video: {
              marginTop: '1.7777778em',
              marginBottom: '1.7777778em',
            },
            figure: {
              marginTop: '1.7777778em',
              marginBottom: '1.7777778em',
            },
            'figure > *': {
              marginTop: '0',
              marginBottom: '0',
            },
            'figure figcaption': {
              fontSize: '0.8888889em',
              lineHeight: '1.5',
              marginTop: '1em',
            },
            code: {
              fontSize: '0.8888889em',
            },
            'h2 code': {
              fontSize: '0.875em',
            },
            'h3 code': {
              fontSize: '0.875em',
            },
            pre: {
              fontSize: '0.8888889em',
              lineHeight: '1.75',
              marginTop: '2em',
              marginBottom: '2em',
              borderRadius: '0.5rem',
              paddingTop: '1em',
              paddingRight: '1.5em',
              paddingBottom: '1em',
              paddingLeft: '1.5em',
            },
            ol: {
              paddingLeft: '1.5555556em',
            },
            ul: {
              paddingLeft: '1.5555556em',
            },
            li: {
              marginTop: '0.4444444em',
              marginBottom: '0.4444444em',
            },
            'ol > li': {
              paddingLeft: '0.3333333em',
            },
            'ul > li': {
              paddingLeft: '0.3333333em',
            },
            '> ul > li p': {
              marginTop: '0.8888889em',
              marginBottom: '0.8888889em',
            },
            '> ul > li > *:first-child': {
              marginTop: '0',
            },
            '> ul > li > *:last-child': {
              marginBottom: '0',
            },
            '> ol > li > *:first-child': {
              marginTop: '0',
            },
            '> ol > li > *:last-child': {
              marginBottom: '0',
            },
            'ul ul, ul ol, ol ul, ol ol': {
              marginTop: '0.8888889em',
              marginBottom: '0.8888889em',
            },
            hr: {
              marginTop: '3.1111111em',
              marginBottom: '3.1111111em',
            },
            'hr + *': {
              marginTop: '0',
            },
            'h1 + *, h2 + *, h3 + *, h4 + *, h5 + *, h6 + *': {
              marginTop: '0',
            },
            'thead th:first-child': {
              paddingRight: '0',
            },
            'thead th:last-child': {
              paddingLeft: '0',
            },
            'tbody td:first-child': {
              paddingRight: '0',
            },
            'tbody td:last-child': {
              paddingLeft: '0',
            },
            '> :first-child': {
              marginTop: '0',
            },
            '> :last-child': {
              marginBottom: '0',
            },
          },
        },
        xl: {
          css: {
            fontSize: '1.25rem',
            lineHeight: '1.8',
            p: {
              marginTop: '1.2em',
              marginBottom: '1.2em',
            },
            '[class~="lead"]': {
              fontSize: '1.2em',
              lineHeight: '1.5',
              marginTop: '1em',
              marginBottom: '1em',
            },
            blockquote: {
              marginTop: '1.6em',
              marginBottom: '1.6em',
              paddingLeft: '1em',
            },
            h1: {
              fontSize: '2.5em',
              marginTop: '0',
              marginBottom: '0.8em',
              lineHeight: '1.1',
            },
            h2: {
              fontSize: '1.5em',
              marginTop: '1.6em',
              marginBottom: '1em',
              lineHeight: '1.3333333',
            },
            h3: {
              fontSize: '1.25em',
              marginTop: '1.4em',
              marginBottom: '0.4em',
              lineHeight: '1.5',
            },
            h4: {
              marginTop: '1.2em',
              marginBottom: '0.6em',
              lineHeight: '1.5',
            },
            img: {
              marginTop: '1.6em',
              marginBottom: '1.6em',
            },
            video: {
              marginTop: '1.6em',
              marginBottom: '1.6em',
            },
            figure: {
              marginTop: '1.6em',
              marginBottom: '1.6em',
            },
            'figure > *': {
              marginTop: '0',
              marginBottom: '0',
            },
            'figure figcaption': {
              fontSize: '0.9em',
              lineHeight: '1.5555556',
              marginTop: '0.8888889em',
            },
            code: {
              fontSize: '0.9em',
            },
            'h2 code': {
              fontSize: '0.875em',
            },
            'h3 code': {
              fontSize: '0.875em',
            },
            pre: {
              fontSize: '0.9em',
              lineHeight: '1.7777778',
              marginTop: '1.7777778em',
              marginBottom: '1.7777778em',
              borderRadius: '0.5rem',
              paddingTop: '1em',
              paddingRight: '1.5em',
              paddingBottom: '1em',
              paddingLeft: '1.5em',
            },
            ol: {
              paddingLeft: '1.4em',
            },
            ul: {
              paddingLeft: '1.4em',
            },
            li: {
              marginTop: '0.4em',
              marginBottom: '0.4em',
            },
            'ol > li': {
              paddingLeft: '0.3em',
            },
            'ul > li': {
              paddingLeft: '0.3em',
            },
            '> ul > li p': {
              marginTop: '0.8em',
              marginBottom: '0.8em',
            },
            '> ul > li > *:first-child': {
              marginTop: '0',
            },
            '> ul > li > *:last-child': {
              marginBottom: '0',
            },
            '> ol > li > *:first-child': {
              marginTop: '0',
            },
            '> ol > li > *:last-child': {
              marginBottom: '0',
            },
            'ul ul, ul ol, ol ul, ol ol': {
              marginTop: '0.8em',
              marginBottom: '0.8em',
            },
            hr: {
              marginTop: '2.6666667em',
              marginBottom: '2.6666667em',
            },
            'hr + *': {
              marginTop: '0',
            },
            'h1 + *, h2 + *, h3 + *, h4 + *, h5 + *, h6 + *': {
              marginTop: '0',
            },
            'thead th:first-child': {
              paddingRight: '0',
            },
            'thead th:last-child': {
              paddingLeft: '0',
            },
            'tbody td:first-child': {
              paddingRight: '0',
            },
            'tbody td:last-child': {
              paddingLeft: '0',
            },
            '> :first-child': {
              marginTop: '0',
            },
            '> :last-child': {
              marginBottom: '0',
            },
          },
        },
        '2xl': {
          css: {
            fontSize: '1.5rem',
            lineHeight: '1.8333333',
            p: {
              marginTop: '1.3333333em',
              marginBottom: '1.3333333em',
            },
            '[class~="lead"]': {
              fontSize: '1.1666667em',
              lineHeight: '1.5',
              marginTop: '1em',
              marginBottom: '1em',
            },
            blockquote: {
              marginTop: '1.6666667em',
              marginBottom: '1.6666667em',
              paddingLeft: '1em',
            },
            h1: {
              fontSize: '2.3333333em',
              marginTop: '0',
              marginBottom: '0.8571429em',
              lineHeight: '1.1428571',
            },
            h2: {
              fontSize: '1.3333333em',
              marginTop: '1.6666667em',
              marginBottom: '1em',
              lineHeight: '1.375',
            },
            h3: {
              fontSize: '1.1666667em',
              marginTop: '1.3333333em',
              marginBottom: '0.5em',
              lineHeight: '1.5',
            },
            h4: {
              marginTop: '1.1666667em',
              marginBottom: '0.6666667em',
              lineHeight: '1.5',
            },
            img: {
              marginTop: '1.6666667em',
              marginBottom: '1.6666667em',
            },
            video: {
              marginTop: '1.6666667em',
              marginBottom: '1.6666667em',
            },
            figure: {
              marginTop: '1.6666667em',
              marginBottom: '1.6666667em',
            },
            'figure > *': {
              marginTop: '0',
              marginBottom: '0',
            },
            'figure figcaption': {
              fontSize: '0.9166667em',
              lineHeight: '1.5',
              marginTop: '0.8333333em',
            },
            code: {
              fontSize: '0.9166667em',
            },
            'h2 code': {
              fontSize: '0.875em',
            },
            'h3 code': {
              fontSize: '0.875em',
            },
            pre: {
              fontSize: '0.9166667em',
              lineHeight: '1.8333333',
              marginTop: '1.6666667em',
              marginBottom: '1.6666667em',
              borderRadius: '0.5rem',
              paddingTop: '1em',
              paddingRight: '1.5em',
              paddingBottom: '1em',
              paddingLeft: '1.5em',
            },
            ol: {
              paddingLeft: '1.5em',
            },
            ul: {
              paddingLeft: '1.5em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            'ol > li': {
              paddingLeft: '0.25em',
            },
            'ul > li': {
              paddingLeft: '0.25em',
            },
            '> ul > li p': {
              marginTop: '0.75em',
              marginBottom: '0.75em',
            },
            '> ul > li > *:first-child': {
              marginTop: '0',
            },
            '> ul > li > *:last-child': {
              marginBottom: '0',
            },
            '> ol > li > *:first-child': {
              marginTop: '0',
            },
            '> ol > li > *:last-child': {
              marginBottom: '0',
            },
            'ul ul, ul ol, ol ul, ol ol': {
              marginTop: '0.75em',
              marginBottom: '0.75em',
            },
            hr: {
              marginTop: '2.3333333em',
              marginBottom: '2.3333333em',
            },
            'hr + *': {
              marginTop: '0',
            },
            'h1 + *, h2 + *, h3 + *, h4 + *, h5 + *, h6 + *': {
              marginTop: '0',
            },
            'thead th:first-child': {
              paddingRight: '0',
            },
            'thead th:last-child': {
              paddingLeft: '0',
            },
            'tbody td:first-child': {
              paddingRight: '0',
            },
            'tbody td:last-child': {
              paddingLeft: '0',
            },
            '> :first-child': {
              marginTop: '0',
            },
            '> :last-child': {
              marginBottom: '0',
            },
          },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        fantasy: {
          primary: '#0000ff',
          'primary-content': 'white',
          secondary: '#F6F6F6',
          neutral: '#E8E8E8',
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root'
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui').default,
  ],
};
