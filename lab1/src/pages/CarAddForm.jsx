import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../data/AppContext";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const CarAddForm = () => {
  const context = useContext(AppContext);
  const dispatch = context.dispatch;
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      brand: "",
      productionDate: "",
      licensePlate: "",
      rating: 0,
    },
    validationSchema: Yup.object({
      brand: Yup.string().required("Required"),
      productionDate: Yup.date().required("Required").nullable(),
      licensePlate: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const newCar = {
        id: Date.now(),
        ...values,
      };

      dispatch({ type: "add", car: newCar });

      navigate("/lab4");
    },
  });

  return (
    <div>
      <h1>Add New Car</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="formBrand">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            name="brand"
            onChange={formik.handleChange}
            value={formik.values.brand}
            isInvalid={!!formik.errors.brand}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.brand}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formProductionDate">
          <Form.Label>Production Date</Form.Label>
          <Form.Control
            type="date"
            name="productionDate"
            onChange={formik.handleChange}
            value={formik.values.productionDate}
            isInvalid={!!formik.errors.productionDate}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.productionDate}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formLicensePlate">
          <Form.Label>License Plate</Form.Label>
          <Form.Control
            type="text"
            name="licensePlate"
            onChange={formik.handleChange}
            value={formik.values.licensePlate}
            isInvalid={!!formik.errors.licensePlate}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.licensePlate}
          </Form.Control.Feedback>
        </Form.Group>
        <div className="car-buttons">
          <Button type="submit" variant="primary">
            Add Car
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CarAddForm;
