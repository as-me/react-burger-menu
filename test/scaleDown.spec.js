'use strict';

import React from 'react/addons';
import { expect } from 'chai';
import createShallowComponent from './utils/createShallowComponent';
import BurgerMenu from '../src/BurgerMenu';
const Menu = BurgerMenu.scaleDown;

describe('scaleDown', () => {

  let component, overlay, menuWrap, menu, itemList, item;

  function addWrapperElementsToDOM() {
    let outerContainer = document.createElement('div');
    outerContainer.setAttribute('id', 'outer-container');
    let pageWrap = document.createElement('div');
    pageWrap.setAttribute('id', 'page-wrap');
    outerContainer.appendChild(pageWrap);
    document.body.appendChild(outerContainer);
  }

  function removeWrapperElementsFromDOM() {
    let outerContainer = document.getElementById('outer-container');
    document.body.removeChild(outerContainer);
  }

  beforeEach(() => {
    component = createShallowComponent(<Menu pageWrapId={ 'page-wrap' } outerContainerId={ 'outer-container' }><div>An item</div></Menu>);
    overlay = component.props.children[0];
    menuWrap = component.props.children[1];
    menu = menuWrap.props.children[1];
    itemList = menu.props.children;
    item = itemList.props.children;
    addWrapperElementsToDOM();
  });

  afterEach(() => {
    removeWrapperElementsFromDOM();
  });

  it('has correct overlay styles', () => {
    expect(Object.keys(overlay.props.style)).to.have.length(7);
  });

  it('has correct menuWrap styles', () => {
    expect(Object.keys(menuWrap.props.style)).to.have.length(5);
  });

  it('has correct menu styles', () => {
    expect(Object.keys(menu.props.style)).to.have.length(1);
    expect(menu.props.style.height).to.equal('100%');
  });

  it('has correct item styles', () => {
    expect(Object.keys(item.props.style)).to.have.length(2);
  });
});
