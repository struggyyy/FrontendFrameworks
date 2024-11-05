import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../data/AppContext";
import { Button, Form } from "react-bootstrap";

const CarEditForm = () => {
  const { id } = useParams();
  const context = useContext(AppContext);
  const dispatch = context.dispatch;
  const navigate = useNavigate();
  const carId = parseInt(id, 10);
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
      dispatch({ type: "edit", id: carId, updatedCar: { ...values } });
      navigate("/lab4");
    },
  });

  useEffect(() => {
    const car = context.items.find((item) => item.id === carId);
    if (car) {
      formik.setValues(car);
    }
  }, [carId, context.items]);

  return (
    <div>
      <h1>Edit Car</h1>
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
            Save Changes
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CarEditForm;
