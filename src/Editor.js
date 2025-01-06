import {memo} from 'react'

import "@mdxeditor/editor/style.css";

import {
  MDXEditor,
  headingsPlugin,
  AdmonitionDirectiveDescriptor,
  listsPlugin,
  quotePlugin,
  directivesPlugin,
  KitchenSinkToolbar,
  toolbarPlugin,
  linkPlugin,
  markdownShortcutPlugin,
  codeBlockPlugin,
} from "@mdxeditor/editor";

const md = `
## Heading

- We just
- need
- enough
- text 
- to
- scroll 
- off 
- the bottom
- of 
- the page
- when the 
- editor loads
- We just
- need
- enough
- text 
- to
- scroll 
- off 
- the bottom
- of 
- the page
- when the 
- editor loads
- We just
- need
- enough
- text 
- to
- scroll 
- off 
- the bottom
- of 
- the page
- when the 
- editor loads
- We just
- need
- enough
- text 
- to
- scroll 
- off 
- the bottom
- of 
- the page
- when the 
- editor loads

## And another thing

A couple of big images would probably help here

> But it depends on how tall the editor component is really

:::note
This is the text inside the admonition, and when the editor loads it will be autofocused and will scroll the editor down if it was out of the viewport
:::
`;

const plugins = [
  toolbarPlugin({toolbarContents: () => <KitchenSinkToolbar/>}),
  linkPlugin(),
  listsPlugin(),
  headingsPlugin(),
  codeBlockPlugin(),
  quotePlugin(),
  markdownShortcutPlugin(),
  directivesPlugin({directiveDescriptors: [AdmonitionDirectiveDescriptor]}),
]

const EditorImpl = () => {
  return (
    <MDXEditor
      markdown={md}
      plugins={plugins}
      onChange={console.log}
      autoFocus={false}
    />
  );
};

export const Editor = memo(EditorImpl)