---
title: jest
date: 2019-12-19
category: nodejs
icon: jest
---

```powershell
jest jest.test.js --watch
```

```js
test('puls matcher', () => {
  expect(2 + 2).toBe(4)
  expect(2 + 2).not.toBe(5)
})
test('boolean matcher', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})
test('number matcher', () => {
  expect(4).toBeGreaterThan(3)
  expect(2).toBeLessThan(3)
})
test('obj matcher', () => {
  expect({ name: 'Jim' }).toEqual({ name: 'Jim' })
})
```

`button.test.tsx`

```js
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonType } from './index'
const defaultProps = {
  onClick: jest.fn()
}
const testProps:ButtonProps = {
  className: 'my-class',
  btnType: ButtonType.Primary,
}
const linkProps:ButtonProps = {
  btnType: ButtonType.Link,
  to: 'http://www.baidu.com'
}
const disabledProps:ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
}
describe('test Button component', () => {
  it('should render the correct default button',() => {
    const wrapper = render(<Button {...defaultProps}>First</Button>)
    const element = wrapper.getByText('First') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should primary button', () => {
    const wrapper = render(<Button {...testProps}>Primary</Button>)
    const element = wrapper.getByText('Primary')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn btn-primary')
  })
  it('should link button', () => {
    const wrapper = render(<Button {...linkProps}>Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('should disabled button', () => {
    const wrapper = render(<Button {...disabledProps}>Disabled</Button>)
    const element = wrapper.getByText('Disabled') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(defaultProps.onClick).not.toHaveBeenCalled()
  })
})
```

`-- -t 'button' `只测试部分组件
