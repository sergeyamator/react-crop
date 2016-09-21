'use strict';

import React from 'react';
require('./crop-area.scss');

class CropArea extends React.Component {
  static propTypes= {
    width: React.PropTypes.number,
    height: React.PropTypes.number
  };

  render() {
    let width = this.props.width || 200;
    let height = this.props.height || 200;
    let styles = {
      width: width + 'px',
      height: height + 'px'
    };

    return (
      <div
        className="crop-area"
        onMouseDown={this._attachDragEvent}
        style={styles}></div>
    );
  }

  /**
   * When users click we get coords event target
   * and attach mousemove and mouseup events
   * @param {Event} e
   * @private
   */
  _attachDragEvent = (e) => {
    this.activeEl = e.target;
    this._offsetX = e.nativeEvent.offsetX;
    this._offsetY = e.nativeEvent.offsetY;

    console.log(e);
    document.body.addEventListener('mousemove', this._onMouseMove.bind(this));
    document.body.addEventListener('mouseup', this._onMouseUp.bind(this));
  };

  _onMouseUp() {
    this.activeEl = null;
  }

  /**
   * When user click and move mouse crop area will
   * drag while user doesn't let go mouse
   * @param e
   * @private
   */
  _onMouseMove = (e) => {
    if (this.activeEl) {
      this.activeEl.style.transform = 'translate(0, 0)';
      let parent = document.querySelector('.upload-crop-area'),
        parentX = parent.getBoundingClientRect().left,
        parentY = parent.getBoundingClientRect().top,
        maxRightCoord = parent.offsetWidth - this.activeEl.offsetWidth,
        maxBottomCoord = parent.offsetHeight - this.activeEl.offsetHeight;

      let leftCoord = e.clientX - this._offsetX - parentX,
        topCoord = e.clientY - this._offsetY - parentY;

      if (leftCoord <= 0) {
        leftCoord = 0;
      }

      if (topCoord <= 0) {
        topCoord = 0;
      }

      if (leftCoord >= maxRightCoord) {
        leftCoord = maxRightCoord;
      }

      if (topCoord >= maxBottomCoord) {
        topCoord = maxBottomCoord;
      }

      this.activeEl.style.left = leftCoord + 'px';
      this.activeEl.style.top = topCoord + 'px';
    }
  }
}

export default CropArea;