'use client'
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { Icon } from '@iconify/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';

const Login = () => {
    const onSubmit= async (e)=>{
         e.preventDefault();
         const formData=new FormData(e.currentTarget);
         const data={};
         formData.forEach((value,key)=>{
            data[key]=value.toString();
         })
         const { data:res, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
    });
    
       if(res) {
        toast.success('Login successful');
        redirect("/")
       }
        if(error) toast.error ("Login failed")
    
       }

       const handleGoogleSignIn= async ()=>{
        const data = await authClient.signIn.social({
    provider: "google",
  })
      }
    return (
        <div className='w-full  sm:max-w-120 mx-auto'>
            <Card className='mx-4 sm:mx-0 my-5 bg-slate-100'>
                <Form className="flex max-w-96 flex-col gap-4" onSubmit={onSubmit}>

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
                        />
                        <Description>Must be at least 6 characters with an uppercase, and a lowercase character </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex  gap-2">
                        <Button type="submit"
                
                            className="bg-pink-600"
                        >
                            <Check />
                           Login
                        </Button>
                        <Button type="reset" variant="danger-soft">
                            Reset
                        </Button>
                    </div>
                </Form>
                <div className='mt-2'>
        <hr  className='my-2'/>
        <Button className="w-full" variant="tertiary" onClick={handleGoogleSignIn} >
          <Icon icon="devicon:google" />
          Login with Google
        </Button>
      </div>
                <p className='text-sm font-semibold mt-3'>Dont have an account ? <span className='text-blue-500 underline'><Link href={'/sign-up'}>Sign Up</Link> </span> </p>
            </Card>
        </div>
    );
};

export default Login;