import React from 'react'

import s from './SuperInputText.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = Omit<DefaultInputPropsType, 'type'> & {
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: React.ReactNode
  spanClassName?: string
}

const SuperInputText: React.FC<SuperInputTextPropsType> = ({
  onChange,
  onChangeText,
  onKeyDown,
  onEnter,
  error,
  className,
  spanClassName,
  id,
  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const onChangeCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeText?.(e.currentTarget.value)
  }
  const onKeyPressCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(e)

    onEnter && // если есть пропс onEnter
      e.key === 'Enter' && // и если нажата кнопка Enter
      onEnter() // то вызвать его
  }

  const finalSpanClassName = `
    ${s.error}
    ${spanClassName ? spanClassName : ''}
  `.replaceAll(/\s\s+/g, ' ')

  const finalInputClassName = `
    ${s.input}
    ${error ? s.errorInput : s.superInput}
    ${className ? className : ''}
  `.replaceAll(/\s\s+/g, ' ')

  return (
    <div className={s.inputWrapper}>
      <input
        id={id}
        type={'text'}
        onChange={onChangeCallback}
        onKeyDown={onKeyPressCallback}
        className={finalInputClassName}
        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
      />
      <span
        id={id ? id + '-span' : undefined}
        className={finalSpanClassName}
      >
        {error}
      </span>
    </div>
  )
}

export default SuperInputText
