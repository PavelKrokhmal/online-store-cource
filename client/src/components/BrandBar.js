import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {Row, Card} from 'react-bootstrap'

function BrandBar() {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex">
            {device.brands.map((brand) => 
                <Card key={brand.id}
                    className="p-2 mr-2"
                    onClick={() => {device.setSelectedBrand(brand)}}
                    border={brand.id === device.selectedBrand?.id ? 'none' : 'light'}
                    style={{cursor: 'pointer'}}>
                    {brand.name}
                </Card>
            )}
        </Row>
    )
}

export default observer(BrandBar)
