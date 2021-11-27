module.exports = {
  title: `funCoding.com`,
  description: `description`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://eungbin.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `김응빈`,
    bio: {
      role: `개발자`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '즐기며 개발하는'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/eungbin`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `programmer97@naver.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.11 ~',
        activity: '개인 블로그 운영',
        links: {
          post: '',
          github: 'https://github.com/eungbin/eungbin.github.io',
          demo: 'https://eungbin.github.io',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '주가 예측 및 매수/매도 추천 사이트 개발',
        description:
          '머신러닝과 주식에 관심이 조금 생겼을 때, 미래의 주가를 예측하고 더 나아가 해당 종목의 뉴스기사를 분석하여 매수 혹은 매도를 추천해주는 시스템을 만들어보고자 개발하였습니다.',
        techStack: ['react', 'python', 'keras', 'LSTM'],
        thumbnailUrl: 'stock.png',
        links: {
          post: '',
          github: 'https://github.com/eungbin/Stock-Prediction',
          demo: '',
        },
      },
    ],
  },
};
