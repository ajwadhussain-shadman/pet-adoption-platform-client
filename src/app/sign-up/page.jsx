'use client'
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const SignUp = () => {

    const [password,setPassword]= useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

   const onSubmit= async (e)=>{
     e.preventDefault();
     const formData=new FormData(e.currentTarget);
     const data={};
     formData.forEach((value,key)=>{
        data[key]=value.toString();
     })
     const { data:res, error } = await authClient.signUp.email({
    name: data.name,
    email: data.email,
    password: data.password,
    image: data.photo,
});

   if(res) {
    toast.success('sign-up successful');
    redirect("/")
   }
    if(error) toast.error ("sign-up failed")

   }

    return (
        <div className='w-full  sm:max-w-120 mx-auto'>
           <Card className='mx-4 sm:mx-0 my-5 bg-slate-100'>
             <Form className="flex max-w-96 flex-col gap-4" onSubmit={onSubmit}>


{/* Name */}
<TextField
        isRequired
        name="name"
        type="text" >
        <Label>Your Name</Label>
        <Input/>
        <FieldError />
      </TextField>

{/* email */}
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>

      {/* photo url */}
      <TextField
        isRequired
        name="photo"
        type="url" >
        <Label>Photo URL</Label>
        <Input/>
        <FieldError />
      </TextField>


      {/* password input section */}
      <TextField
        isRequired
        minLength={6}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 6) {
            return "Password must be at least 6 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[a-z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" 
        onChange={e=>setPassword(e.target.value)}
        />
        <Description>Must be at least 6 characters with an uppercase, and a lowercase character </Description>
        <FieldError />
      </TextField>

{/* confirm password section */}

<TextField
        isRequired
        minLength={6}
        name="confirm password"
        type="password"
      >
        <Label>Confirm Your Password</Label>
        <Input placeholder="Re-enter your password" 
        onChange={e=>setConfirmPassword(e.target.value)}
        />
        {confirmPassword!==password &&  <span className="text-red-500 text-xs">Passwords do not match.</span>}
        <FieldError />
      </TextField>

      <div className="flex gap-2">
        <Button type="submit"
        isDisabled={
            password!==confirmPassword
        }
        className="bg-pink-600"
        >
          <Check />
          Sign Up
        </Button>
        <Button type="reset" variant="danger-soft">
          Reset
        </Button>
      </div>
    </Form>
    <p className='text-sm font-semibold mt-3'>Already Signed Up? <span className='text-blue-500 underline'><Link href={'/login'}>Login</Link> </span> </p>
           </Card>
        </div>
    );
};

export default SignUp;