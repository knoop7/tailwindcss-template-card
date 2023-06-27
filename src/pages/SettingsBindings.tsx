import { useContext, useMemo, useState } from 'preact/compat'
import { ConfigContext } from '@store/ConfigContext'
import { BindingConfig } from '@components/BindingConfig'
import { Binding } from '@types'

export const SettingsBindings = () => {
  const { config, updateConfig } = useContext(ConfigContext)
  const bindings = useMemo(() => config.bindings, [config.bindings])

  const [maximizedBind, setMaximizedBind] = useState(
    null as keyof typeof bindings | null
  )

  const maximize = (bindKey: keyof typeof bindings) => {
    setMaximizedBind(bindKey)
  }

  return (
    <div className='collapse collapse-arrow bg-base-200'>
      <input type='checkbox' />
      <div className='collapse-title text-md font-medium'>Bindings</div>
      <div className='collapse-content flex flex-row flex-wrap gap-2'>
        <div className='w-full scrollbar-thin scrollbar-track-base-200 scrollbar-thumb-white/5 overflow-x-auto flex flex-col gap-2 flex-wrap justify-start items-start max-h-96'>
          {bindings.map((binding: Binding, index: keyof typeof bindings) => (
            <BindingConfig
              key={index}
              binding={binding}
              isMinimized={maximizedBind !== index}
              maximize={() => maximize(index)}
              onChange={value => {
                updateConfig({
                  bindings: bindings.map((v, i) => (i === index ? value : v))
                })
              }}
            />
          ))}
        </div>
        <div className='w-full flex justify-end p-2'>
          <button
            class={'btn btn-accent btn-sm btn-'}
            onClick={() =>
              updateConfig({
                bindings: [...bindings, { type: '', selector: '', bind: '' }]
              })
            }
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
