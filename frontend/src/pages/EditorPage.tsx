// import { EditorProvider, FloatingMenu, BubbleMenu } from '@tiptap/react'
// import StarterKit from '@tiptap/starter-kit'

import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";

// // define your extension array
// const extensions = [StarterKit]

// const content = '<p>Hello World!</p>'



const EditorPage = () => {
  // return (
  //   <EditorProvider extensions={extensions} content={content}>
  //     <FloatingMenu editor={null}>This is the floating menu</FloatingMenu>
  //     <BubbleMenu editor={null}>This is the bubble menu</BubbleMenu>
  //   </EditorProvider>
  // )
  return <SimpleEditor />
}

export default EditorPage;