import React from 'react'

import {
    Card,
    CardImg,
    CardColumns,
    CardBody
} from "reactstrap"

function CardWrapper(props) {
    let { coleccionDeUsuarios } = props
    return (
        <CardColumns>

            {
                coleccionDeUsuarios.map(user => {
                    let { name, lastName } = user
                    return (
                        <Card>
                            <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                            <CardBody>
                                <h1>{name}</h1>
                                <h2>{lastName}</h2>
                            </CardBody>
                        </Card>
                    )
                })
            }

        </CardColumns>
    )

}

export default CardWrapper