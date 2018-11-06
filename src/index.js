import React from 'react'
import {css} from 'emotion'

class AttachmentItem extends React.Component {

    render() {

        return (
            <div
                className={css`
                    width: 200px;
                    height: 200px;
                    background-image: url(${this.props.attachment.url});
                    background-size: cover;
                `}
            >
                empty
            </div>
        )
    }
}

export default class Attachment extends React.Component {
    render() {
        return (
            <div
                className={css`
                    display: flex;
                `}
            >
                {this.props.attachments.map(attachment => (
                    <div
                        key={attachment.id}
                        className={css`
                            margin-right: 6px;
                        `}
                    >
                        <AttachmentItem
                            attachment={attachment}
                        />
                    </div>
                ))}
            </div>
        )
    }
}
