import React from 'react'

import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = ({
  xType,
  className,
  disabled,
  ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
}) => {
  const finalClassName = `
    ${s.button}
    ${xType === 'secondary' ? s.secondary : s.default}
    ${disabled ? s.disabled : xType === 'red' ? s.red : ''}
    ${className ? className : ''}
  `.replaceAll(/\s\s+/g, ' ')

  return (
    <button
      disabled={disabled}
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  )
}

export default SuperButton
