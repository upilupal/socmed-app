"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { useFormik } from "formik";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { appConfig } from "@/utils/config";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { RegisterValidationSchema } from "./schemas/RegisterValidationSchema";
import FormInput from "@/components/forms/FormInput";

const Register: React.FC = () => {
  const router = useRouter();
  const { baseUrl } = appConfig;

  const {values, touched, errors, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterValidationSchema,
    onSubmit: async (values) => {
      const { data } = await axios.get(
        baseUrl + `/users?email=${values.email}`,
      );

      if (data.length) {
        return toast.error("email already exist");
      }

      await axios.post(baseUrl + "/users", {
        name: values.name,
        email: values.email,
        password: values.password,
        isVerify: false,
      });

      toast.success("register success");
      router.push("/login");
    },
  });
  return (
    <main className="container mx-auto my-10 px-4">
      <div className="flex justify-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary">
              Welcome to Socmed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                {/* NAME */}
                <FormInput
                name="name"
                error={errors.name}
                isError={!!touched.name && !!errors.name}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Name"
                type="name"
                value={values.name}/>
                {/* NAME END */}

                {/* EMAIL */}
                <FormInput
                name="email"
                error={errors.email}
                isError={!!touched.email && !!errors.email}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                value={values.email}/>
                {/* EMAIL END */}
                
                {/* PASSWORD */}
                <FormInput
                name="password"
                error={errors.password}
                isError={!!touched.password && !!errors.password}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Password"
                type="password"
                value={values.password}/>
                {/* PASSWORD END */}
              </div>
              <Button className="mt-6 w-full">Register</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Register;
