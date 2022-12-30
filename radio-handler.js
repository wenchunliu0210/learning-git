;(function () {
  'use strict'

  // defines values for keycode
  const VK_ENTER = 13
  const VK_SPACE = 32
  const VK_LEFT = 37
  const VK_UP = 38
  const VK_RIGHT = 39
  const VK_DOWN = 40

  // Helper function to convert NodeLists to Array
  function slice(nodelist) {
    return Array.prototype.slice.call(nodelist)
  }

  function RadioGroup(id) {
    this.el = document.querySelector(id)
    this.buttons = slice(this.el.querySelectorAll('.radio'))
    this.focusedIndex = 0
    this.focusedButton = this.buttons[this.focusedIndex]
    this.el.querySelector('#final').innerText = this.focusedButton.innerText

    this.el.addEventListener('keydown', this.handleKeyDown.bind(this))

    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].addEventListener('click', this.handleClick.bind(this, i))
    }
  }

  RadioGroup.prototype.handleKeyDown = function (e) {
    switch (e.keyCode) {
      case VK_LEFT:
      case VK_UP:
        e.preventDefault()
        if (this.focusedIndex === 0) {
          this.focusedIndex = this.buttons.length - 1
        } else {
          this.focusedIndex--
        }
        break
      case VK_RIGHT:
      case VK_DOWN:
        e.preventDefault()
        if (this.focusedIndex === this.buttons.length - 1) {
          this.focusedIndex = 0
        } else {
          this.focusedIndex++
        }
        break
      default:
        break
    }
    this.changeFocus(this.focusedIndex)
  }

  RadioGroup.prototype.handleClick = function (index) {
    this.focusedIndex = index
    this.changeFocus(this.focusedIndex)
  }

  RadioGroup.prototype.changeFocus = function (index) {
    // Set the old button to tabindex: -1
    this.focusedButton.tabIndex = -1
    this.focusedButton.removeAttribute('checked')

    // Set the new button to tabindex: 0 and focus it
    this.focusedButton = this.buttons[index]
    this.focusedButton.tabIndex = 0
    this.focusedButton.focus()
    this.focusedButton.setAttribute('checked', 'checked')
    this.getFinalPick()
  }

  RadioGroup.prototype.getFinalPick = function () {
    this.el.querySelector('#final').innerText = this.focusedButton.innerText
  }

  const radiogroup = new RadioGroup('#radio-wrapper')
})()
