import React from 'react'

import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap"

function UploadForm(props) {
    let { onChangeHandler, onSubmitHandler } = props
    return (
        <Form className="p-3 border rounded mt-3">
            <FormGroup>
                <Label for="exampleEmail">Nombre:</Label>
                <Input
                    type="text"
                    name="name"
                    id=""
                    placeholder="with a placeholder"
                    onChange={onChangeHandler}
                />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Apellidos:</Label>
                <Input
                    type="text"
                    name="lastName"
                    id=""
                    placeholder="Apellidos"
                    onChange={onChangeHandler}
                />
            </FormGroup>
            <Button onClick={onSubmitHandler}>Submit</Button>
        </Form>
    )

}

export default UploadForm