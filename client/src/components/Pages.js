import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {Pagination} from 'react-bootstrap'

function Pages() {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount/device.limit)
    
    const pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <Pagination className="mt-5">
            {pages.map(page=>
                <Pagination.Item 
                    key={page} 
                    onClick={() => {device.setPage(page)}}
                    active={device.page === page}
                    >{page}</Pagination.Item>
                )}
        </Pagination>
    )
}

export default observer(Pages)
