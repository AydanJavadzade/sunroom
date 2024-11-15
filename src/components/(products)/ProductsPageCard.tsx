"use client"
import Image from 'next/image'
import React from 'react'
import ContactUs from './ContactUs'
import ProductCard from './ProductCard'
import { useParams} from 'next/navigation'
import ScrollDown from '../ScrollDown'
import { useRouter } from 'next/navigation'

export interface Features {
  id: number,
  title: string,
  describtion: string,
  icon: string
}

export interface ProductCard {
  id: number,
  image: string,
  title: string,
  describtion: string,
  describtion1: string,
  describtion2: string,
  slug: string,
  features: Features[]
}

export interface Product {
  type: string,
  image: string,
  title: string,
  describtion: string,
  productCard: ProductCard[]
}

export const products: Product[] = [
  // sunroom

  {
    type: "sunroom",
    image: "/ProjectsHeader.png",
    title: "Sunroom",
    describtion: "Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus. Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl.",
    productCard: [
      {
        id: 1,
        slug: 'slopedpergola',
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]
      },
      {
        id: 2,
        slug: '90pergolasPergolas',
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]


      },
      {
        id: 3,
        slug: 'slopedpergola',
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]



      },
      {
        id: 4,
        slug: '90pergolasPergolas',
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]


      },
      {
        id: 5,
        slug: 'slopedpergolas',
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]


      },
      {
        id: 6,
        slug: '90pergolasPergola',
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]


      },
    ]
  },

  // louver
  {
    type: "louver",
    image: "/ProjectsHeader.png",
    title: "Louver",
    describtion: "Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus. Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl.",
    productCard: [
      {
        id: 1,
        slug: 'slopedPegolas',
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]

      },
      {
        id: 2,
        slug: '90pergolasPergola',
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]


      },
      {
        id: 3,
        slug: 'slopedPegolas',
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]
      },
      {
        id: 4,
        slug: '90pergolasPergola',
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]


      },
      {
        id: 5,
        slug: 'slopedPegolas',
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]


      },
      {
        id: 6,
        slug: '90pergolasPergola',
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]
      },
    ]
  },

  // pergola
  {
    type: "pergola",
    image: "/pergolaBg.png",
    title: "Pergola",
    describtion: "Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus. Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl.",
    productCard: [
      {
        id: 1,
        slug: 'Sloped Pergolas',
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]


      },
      {
        id: 2,
        slug: '90pergolasPergola',
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]


      },
      {
        id: 3,
        slug: 'SlopedPergolas',
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]


      },
      {
        id: 4,
        slug: '90pergolasPergolas',
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]

      },
      {
        id: 5,
        slug: 'SlopedPergolas',
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]
      },
      {
        id: 6,
        slug: '90pergolasPergolas',
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]
      },
    ]
  },

  // blinds
  {
    type: "blinds",
    image: "/pergolaBg.png",
    title: "Blinds",
    describtion: "Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus. Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl.",
    productCard: [
      {
        id: 1,
        slug: 'Sloped Pergolas',
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]


      },
      {
        id: 2,
        slug: '90pergolasPergola',
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]


      },
      {
        id: 3,
        slug: 'SlopedPergolas',
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]


      },
      {
        id: 4,
        slug: '90pergolasPergolas',
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]

      },
      {
        id: 5,
        slug: 'SlopedPergolas',
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]
      },
      {
        id: 6,
        slug: '90pergolasPergolas',
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]
      },
    ]
  },

  // windows&doors
  {
    type: "windowsdoors",
    image: "/pergolaBg.png",
    title: "Windows & Doors",
    describtion: "Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus. Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl.",
    productCard: [
      {
        id: 1,
        slug: 'Sloped Pergolas',
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]


      },
      {
        id: 2,
        slug: '90pergolasPergola',
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]


      },
      {
        id: 3,
        slug: 'SlopedPergolas',
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]


      },
      {
        id: 4,
        slug: '90pergolasPergolas',
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]

      },
      {
        id: 5,
        slug: 'SlopedPergolas',
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]
      },
      {
        id: 6,
        slug: '90pergolasPergolas',
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon',
        describtion1: 'As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.',
        describtion2: 'Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.',
        features: [
          {
            id: 1,
            title: 'Lighting',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/lights.png'
          },
          {
            id: 2,
            title: 'Waterproof',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/waterproof.png',
          },
          {
            id: 3,
            title: 'Remote Control',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/network.png',
          },
          {
            id: 4,
            title: 'Bad Weather Resistant',
            describtion: 'Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget.',
            icon: '/meterology-weather.png'
          }]
      },
    ]
  },
]


const ProductsPageCard = () => {
  const router = useRouter();

  const handleFindOutMore = (slug:string) => {
     console.log('kliklendi')
      router.push(`/products/${product}/${slug}`);
  };

  const {product} = useParams()
  console.log("product:",product)
  const pro = products.find(p => p.type ===product);

  console.log(pro?.title, "product","islede")
  if (!pro) {
    return <div>Not found page</div>;
  }
  return <>
    <div key={pro.title} className='h-full w-[100%]'>

      <header className='w-full h-[500px] rounded-t-3xl relative'>
        <Image
          style={{ objectFit: "cover", borderTopLeftRadius: "24px", borderTopRightRadius: "24px" }}
          src={pro.image}
          fill
          alt={''} />
      </header>

      {/* Products second section */}
      <div className='h-2/3 px-12 py-14 relative bg-white z-10 rounded-t-3xl -mt-24 border-t-2 border-gray-300'>
        <div className='w-full h-[100%] flex flex-col justify-between mb-10 text-xl'>
          <div className='flex flex-col gap-5 md:flex-row items-start justify-between  md:h-[150px] mb-10 '>
            <h1 className='w-[100%] md:w-50% flex-1  text-3xl md:text-4xl xl:text-6xl font-medium font-sans'>{pro.title}</h1>
            <p className='w-[100%]  flex-1 md:w-[40%] text-lg md:text-xl'>
              {pro.describtion}
            </p>
          </div>
          {/* scroll down */}
          <ScrollDown />
        </div>

        {/* Contact us card */}
        <ContactUs />

        {/*Products Cards*/}
        <div className="w-full flex flex-col h-[90%] my-8 p-2 md:flex-wrap md:flex-row justify-between gap-14">
          {pro.productCard.map((card: { image: string, title: string, describtion: string, id: number, slug:string  }) => {
            return <div key={card.id} className='w-[30%]'> <ProductCard image={card.image} title={card.title} describtion={card.describtion} onClick={()=>handleFindOutMore(card.slug)} /></div>
          })}
        </div>
      </div>

    </div>
  </>

}

export default ProductsPageCard
