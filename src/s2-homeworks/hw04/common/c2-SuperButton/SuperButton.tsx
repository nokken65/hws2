import React from 'react'

import './SuperButton.css'

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
    ${'button'}
    ${disabled ? 'disabled' : xType === 'red' ? 'red' : ''}
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
