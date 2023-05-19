import React, { useState } from 'react'
import { Image } from 'antd'
import { Wrapper } from './style'

const Media = ({ media, name }) => {
    const [visible, setVisible] = useState(false)

    return (
        <Wrapper>
            <Image
                preview={{ visible: false }}
                src={media[0]}
                onClick={() => setVisible(true)}
            />
            <div style={{ display: 'none' }}>
                <Image.PreviewGroup
                    preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                    }}
                >
                    {media.map((image, idx) => {
                        return <Image src={image} alt={name} key={idx} />
                    })}
                </Image.PreviewGroup>
            </div>
        </Wrapper>
    )
}

export default Media
