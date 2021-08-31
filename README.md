This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Writing a new page

## Creating the folder
Every new article needs a folder in the src->pages directory. the name of the directory that you create will become the slug for the url.

i.e. if I created a folder in src->pages->rulebox the blog url would be rulebox.io/blog/rulebox

## Folder contents
Each folder *must* have an index.mdx file within it. The index.mdx file is where the post content should be written. 

Images relative to the article should also be contained within the respective directory. You can read how to show these further down.

## Writing articles

### Importing the essentials

```
import { jameswilson, davegill, edwingroenendaal, elisazanzi, jameswilson, josuejimenez, jameswilson, nitinbansal, simonbroadhurst, vickiblyth } from '@/authors'
import card from './card.jpg'
import banner from './banner.jpg'
import ReactExample1 from './snippets/react-1.mdx'
```

When writing an article it is **essential** that you import the required assets. In the example above we are importing the `authors`, `card` image, `banner` image, `ReactExample1` code snippet which is stored in a `snippets` directory.

### Metadata
Every post should have some metadata which contains the headline information which is passed when shared socially.

An example of this is;
```export const meta = {
  title: 'Product Blog Launch',
  description: `We just released our new product blog which will be direct articles written by the rulebox  development team`,
  date: '2021-08-12T12:00:00.000Z',
  authors: [jameswilson, davegill, edwingroenendaal, elisazanzi, jameswilson, josuejimenez, jameswilson, nitinbansal, simonbroadhurst, vickiblyth],
  image: card,
  footer: `
    <p>
      Want to see what we have to say?
      <a href="https://rulebox.io/blog" class="font-medium text-teal-600 hover:text-teal-700">
        Visit the rulebox  Product Blog website →
      </a>
    </p>
  `,
}
```

`title` -> This is the title of the article.
`description` -> This is a summary of the article which is shown on the rulebox.io/blog landing page.
`date` -> The date which the article was written. This is used to ensure that the reader is always shown the most recent article when landing on rulebox.io/blog
`authors` -> There can be one or many authors. They **must** be imported at the beggining of the index.mdx file.
`image` -> The image is relative to the folder. In the example above a file called `card.jpg` must be present in the directory.
`footer` -> At the bottom of each article is a *footer* which is essentially a call to action.

### Article list READ MORE text
When writing an article the text that is shown on the article list (rulebox.io/blog) is dictated by the <!--more--> being shown within the article.

For example;

```
Sweet roll halvah dragée croissant jelly-o lollipop dragée cookie. Candy danish bear claw ice cream cake. Bonbon pie tiramisu lemon drops chupa chups pastry gummies muffin. Tiramisu liquorice chocolate lollipop biscuit cotton candy. Brownie chupa chups danish donut chocolate bar topping brownie. Powder gummi bears candy shortbread pie gingerbread muffin chocolate. Jelly beans sweet jelly beans marzipan cupcake cake tootsie roll cheesecake cake. Apple pie cotton candy gummi bears muffin lollipop tart. 

<!--more-->

Cake lollipop fruitcake chocolate cake shortbread soufflé. Pie sesame snaps cookie pudding croissant danish sweet. Pudding sesame snaps brownie sugar plum chocolate bar sugar plum powder. Jujubes bear claw tootsie roll gingerbread fruitcake croissant lollipop jelly beans gummies. Halvah apple pie cheesecake sugar plum sweet muffin chocolate cake. Pudding tiramisu shortbread jelly-o marzipan.
```

The first paragraph would be shown on the article list (blog homepage). The <!--more--> is the key seperator and **MUST** be included. Without it the whole article will be shown on the blog homepage.

### Header Banners
It is possible to add a banner to the header of the article by using the following code snippet.

```
<a href="https://rulebox.io/blog">
  <img src={banner} alt="rulebox Blog" />
</a>
```

This example will add a file called `banner` (directory relative) to the article. There should be a link and alt text included for accessibility purposes. The ideal dimensions are 1280x472 (or bigger).

### Images
Images work in exactly the same way as banner images.

```
<a href="https://tailwindui.com/ecommerce">
  <img
    src={ecommerce}
    alt="Product details interface design from Tailwind UI Ecommerce."
  />
</a>
```
Images can be of any size but the bigger the better, the app will handle and constrain accordingly. 2880 x 2190 is perfectly handled.

### Code Snippets

It is possible to show code snippets by using three ` i.e.

```
```js
import { edwingroenendaal } from '@/authors'
import openGraphImage from './card.jpeg'

export const meta = {
  title: 'Introducing rulebox  Product Blog',
  description: `Today we’re releasing a new Product Blog.`,
  date: '2020-06-23T18:52:03Z',
  authors: [edwingroenendaal],
  image: openGraphImage,
  discussion: 'https://github.com/Rulebox-io',
}```
```
As you can see it is possible to add the language following the first three ` to ensure that the formating on the article shows correctly.

### iframe
Whilst it is rare to do so, it is possible to add iframes into the articles which allow links to sandbox environments (codepen etc.). To do this simply paste the iframe code into the .mdx file

```
<iframe
  src="https://codesandbox.io/embed/dreamy-villani-1lz49?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&view=preview"
  style={{ height: 500 }}
  className="w-full rounded-md overflow-hidden"
  title="dreamy-villani-1lz49"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
/>
```

### Headings
```
# = h1
## = h2
### = h3
```

### Blockquote
By adding a > you can blockquote text
> This is a blockquote

### Page link
You can link to an external page by doing the following;
```
[Rulebox.io Homepage](https://rulebox.io)
```

### Videos
Videos can also be posted from YouTube / Cloudinary using a similar method to the Page Link (above)

```
["What's new in Tailwind CSS?"](https://www.youtube.com/watch?v=b-hrxkgkG-s&list=PL5f_mz_zU5eV0_7udNKr3qffGCkJ4Avb_)
```

### Tables
It is possible to add tables to the articles in the same way as standard markdown 

```
| Class            | CSS                                  |
| ---------------- | ------------------------------------ |
| `auto-cols-auto` | `grid-auto-columns: auto;`           |
| `auto-cols-min`  | `grid-auto-columns: min-content;`    |
| `auto-cols-max`  | `grid-auto-columns: max-content;`    |
| `auto-cols-fr`   | `grid-auto-columns: minmax(0, 1fr);` |
| `auto-rows-auto` | `grid-auto-rows: auto;`              |
| `auto-rows-min`  | `grid-auto-rows: min-content;`       |
| `auto-rows-max`  | `grid-auto-rows: max-content;`       |
| `auto-rows-fr`   | `grid-auto-rows: minmax(0, 1fr);`    |
```

### Lists
An example of a list of links. Lists are created by using the - character at the beggining of a line

```
- [JIT engine in core](#jit-engine-in-core)
- [Composable CSS filters API](#new-filter-and-backdrop-filter-utilities)
- [New blending mode utilities](#new-blending-mode-utilities)
- [New isolation utilities](#new-isolation-utilities)
```

### Bold Text
Bold text is added by standard markdown formatting (Double * before and after the text)

### Italic Text
Italic text is added by standard markdown formatting (Single * before and after the text)

### Further options
You can read more about standard markdown [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code)