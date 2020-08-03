const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    localIdentName: '[local]__[hash:base64:5]',
    minimize: true,
  },
};

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: true,
    minimize: true,
  },
};

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: true,
    plugins: () => [
      autoprefixer({
        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
      }),
    ],
  },
};

{
    test: /\.scss$/,
        exclude: /\.module\.scss$/,
    use: ['style-loader', CSSLoader, postCSSLoader, 'sass-loader']
},
{
    test: /\.module\.scss$/,
        use: [
    'style-loader',
    CSSModuleLoader,
    postCSSLoader,
    'sass-loader',
]
},
