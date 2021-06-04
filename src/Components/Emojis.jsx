import React from 'react'
import PropTypes from "prop-types"
import { EmojiPickerContainer, EmojisContainer } from "./EmojiStyle"

const Emojis = ({ pickEmoji }) => {
    return (
        <div>
            <EmojisContainer>
                {
                    <EmojiPickerContainer onEmojiClick={pickEmoji} />
                }
            </EmojisContainer>
            
        </div>
    )
}

Emojis.propTypes = {
    pickEmoji: PropTypes.func
}

export default Emojis
