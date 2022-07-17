const iberianPeninsula = document.querySelector('#iberian-peninsula')
const iberianPeninsulaCaption = document.querySelector(
  '#iberian-peninsula-caption'
)

const france = document.querySelector('#france')
const franceCaption = document.querySelector('#france-caption')

const italy = document.querySelector('#italy')
const italyCaption = document.querySelector('#italy-caption')

const britishIsles = document.querySelector('#british-isles')
const britishIslesCaption = document.querySelector('#british-isles-caption')

const centralEurope = document.querySelector('#central-europe')
const centralEuropeCaption = document.querySelector('#central-europe-caption')

const scandinavia = document.querySelector('#scandinavia')
const scandinaviaCaption = document.querySelector('#scandinavia-caption')

const balkans = document.querySelector('#balkans')
const balkansCaption = document.querySelector('#balkans-caption')

const eastEurope = document.querySelector('#east-europe')
const eastEuropeCaption = document.querySelector('#east-europe-caption')

/*PENÍNSULA IBÉRICA*/

console.log('iberianPeninsulaCaption: ', iberianPeninsulaCaption)
iberianPeninsula.addEventListener('mouseover', () => {
  if (!iberianPeninsulaCaption.classList.contains('active'))
    iberianPeninsulaCaption.classList.add('active')
})
iberianPeninsula.addEventListener('mouseout', () => {
  if (iberianPeninsulaCaption.classList.contains('active'))
    iberianPeninsulaCaption.classList.remove('active')
})

/*FRANÇA*/

console.log('franceCaption: ', franceCaption)
france.addEventListener('mouseover', () => {
  if (!franceCaption.classList.contains('active'))
    franceCaption.classList.add('active')
})
france.addEventListener('mouseout', () => {
  if (franceCaption.classList.contains('active'))
    franceCaption.classList.remove('active')
})

/*ITÁLIA*/

console.log('italyCaption: ', italyCaption)
italy.addEventListener('mouseover', () => {
  if (!italyCaption.classList.contains('active'))
    italyCaption.classList.add('active')
})
italy.addEventListener('mouseout', () => {
  if (italyCaption.classList.contains('active'))
    italyCaption.classList.remove('active')
})

/*ILHAS BRITÂNICAS*/

console.log('britishIslesCaption: ', britishIslesCaption)
britishIsles.addEventListener('mouseover', () => {
  if (!britishIslesCaption.classList.contains('active'))
    britishIslesCaption.classList.add('active')
})
britishIsles.addEventListener('mouseout', () => {
  if (britishIslesCaption.classList.contains('active'))
    britishIslesCaption.classList.remove('active')
})

/*EUROPA CENTRAL*/

console.log('centralEuropeCaption: ', centralEuropeCaption)
centralEurope.addEventListener('mouseover', () => {
  if (!centralEuropeCaption.classList.contains('active'))
    centralEuropeCaption.classList.add('active')
})
centralEurope.addEventListener('mouseout', () => {
  if (centralEuropeCaption.classList.contains('active'))
    centralEuropeCaption.classList.remove('active')
})

/*ESCANDINÁVIA*/

console.log('scandinaviaCaption: ', scandinaviaCaption)
scandinavia.addEventListener('mouseover', () => {
  if (!scandinaviaCaption.classList.contains('active'))
    scandinaviaCaption.classList.add('active')
})
scandinavia.addEventListener('mouseout', () => {
  if (scandinaviaCaption.classList.contains('active'))
    scandinaviaCaption.classList.remove('active')
})

/*BALCÃS*/

console.log('balkansCaption: ', balkansCaption)
balkans.addEventListener('mouseover', () => {
  if (!balkansCaption.classList.contains('active'))
    balkansCaption.classList.add('active')
})
balkans.addEventListener('mouseout', () => {
  if (balkansCaption.classList.contains('active'))
    balkansCaption.classList.remove('active')
})

/*LESTE EUROPEU*/
console.log('eastEuropeCaption: ', eastEuropeCaption)
eastEurope.addEventListener('mouseover', () => {
  if (!eastEuropeCaption.classList.contains('active'))
    eastEuropeCaption.classList.add('active')
})
eastEurope.addEventListener('mouseout', () => {
  if (eastEuropeCaption.classList.contains('active'))
    eastEuropeCaption.classList.remove('active')
})

const citiesMap = {
  paris: {
    1530: {
      width: 11900,
      height: 9400,
      tilesUrl: '../Assets/Images_tiles/1530-paris/',
      buildings: [
        {
          name: 'louvre',
          x: 8200,
          y: 9500
        },
        {
          name: 'notredame',
          x: 10100,
          y: 5600
        },
        {
          name: 'bastille',
          x: 7350,
          y: 1250
        },
        {
          name: 'sainte-chapelle',
          x: 9950,
          y: 7300
        }
      ]
    },
    1380: {
      width: 17100,
      height: 15000,
      tilesUrl: '../Assets/Images_tiles/1380-paris/',
      buildings: [
        {
          name: 'louvre',
          x: 9230,
          y: 10600
        },
        {
          name: 'notredame',
          x: 10130,
          y: 7680
        },
        {
          name: 'bastille',
          x: 8770,
          y: 4180
        },
        {
          name: 'sainte-chapelle',
          x: 10040,
          y: 8830
        }
      ]
    }
  }
}

console.log('Paris 1530: ', citiesMap['paris'][1530])
console.log('Paris 1380: ', citiesMap['paris'][1380])
const { buildings } = citiesMap['paris'][1530]
console.log(buildings.reduce((acc, { name }) => `${acc}- ${name} \n`, ''))

// [
//   {
//     name: 'paris',
//     year: 1530,
//     build: 'louvre',
//     x: 8200,
//     y: 9500
//   },
//   {
//     name: 'paris',
//     year: 1530,
//     build: 'notredame',
//     x: 10100,
//     y: 5600
//    },
//      {
//     name: 'paris',
//     year: 1530,
//     build: 'sainte-chapelle',
//     x: 9950,
//    y: 7300
//    },
//     {
//     name: 'paris',
//     year: 1530,
//     build: 'sainte-chapelle',
//      x: 9950,
//     y: 7300
//    },

// ]

// [
//   {
//     name: 'paris',
//     year: 1380,
//     build: 'louvre',
//     x: 9230,
//     y: 10600
//   },
//   {
//     name: 'paris',
//     year: 1380,
//     build: 'notredame',
//     x: 10130,
//     y: 7680
//    },
//      {
//     name: 'paris',
//     year: 1380,
//     build: 'bastille',
//     x: 8770,
//     y: 4180
//    },
//     {
//     name: 'paris',
//     year: 1380,
//     build: 'sainte-chapelle',
//     x: 10040,
//     y: 8830,
//    },
// ]
