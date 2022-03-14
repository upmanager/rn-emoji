import React from 'react'

import data from '../../../data/all.json'
import NimbleEmoji from './nimble-emoji'

import {EmojiPropTypes} from '../../utils/shared-props'
import {EmojiDefaultProps} from '../../utils/shared-default-props'

// TODO: Use functional components?
// const Emoji = (props) => {
//   for (let k in Emoji.defaultProps) {
//     if (props[k] == undefined && Emoji.defaultProps[k] != undefined) {
//       props[k] = Emoji.defaultProps[k]
//     }
//   }
//
//   return NimbleEmoji({ ...props })
// }

export default class Emoji extends React.PureComponent {
  static propTypes /* remove-proptypes */ = EmojiPropTypes
  static defaultProps = {...EmojiDefaultProps, data}

  render() {
    for (let k in Emoji.defaultProps) {
      if (this.props[k] === undefined && Emoji.defaultProps[k] != undefined) {
        this.props[k] = Emoji.defaultProps[k]
      }
    }

    return <NimbleEmoji {...this.props} />
  }
}
