import React from "react"
import {withFormik, Form, Field} from "formik"
import * as yup from "yup"



function AddSmurfs({ errors, touched }){
    return (
        <div>
            <Form>
                <Field type="text" name="name" placeholder="Name"/>
                {touched.name && errors.name && <p>{errors.name}</p>}

                <Field type="number" name="age" placeholder="Age"/>
                {touched.age && errors.age && <p>{errors.age}</p>}

                <Field type="number" name="height" placeholder="Height"/>
                {touched.height && errors.height && <p>{errors.height}</p>}

                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

export default  withFormik({
    mapPropsToValues :(values)=>{
        console.log(values)
        return {
            name:values.name || "",
            age:values.age || "",
            height:values.height || ""
        }
    },

    validationSchema :yup.object().shape({
        name:yup
        .string()
        .required("Please enter the name of the new SMURFS"),
        age:yup
        .number()
        .required("Please enter the age of the new SMURFS"),
        height:yup
        .number()
        .required("Please enter the age of the new SMURFS")
    })
})(AddSmurfs);