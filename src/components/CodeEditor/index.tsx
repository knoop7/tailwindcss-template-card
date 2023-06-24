import 'ace-builds'
import 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/theme-github_dark'
import 'ace-builds/src-noconflict/snippets/html'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-emmet'

// import htmlWorkerUrl from 'ace-builds/src-noconflict/worker-html?worker&inline'
// ace.config.setModuleUrl('ace/mode/html_worker', htmlWorkerUrl)
import AceEditor from 'react-ace'

export function CodeEditor ({value, onChange}: {value: string, onChange: (value: string) => void}) {
  return (
    <div className='h-48 w-full'>
      <AceEditor
        mode='html'
        theme='github_dark'
        name='tailwindcss-template-card-config-ace'
        height='100%'
        width='100%'
        editorProps={{ $blockScrolling: true }}
        debounceChangePeriod={500}
        setOptions={{
          useWorker: false,
          enableEmmet: true,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true
        }}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}