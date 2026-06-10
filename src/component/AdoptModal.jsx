'use client'

import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, DateField, Form, Input, Label, Modal, TextField } from '@heroui/react';

import React from 'react';
import toast from 'react-hot-toast';

const AdoptModal =  ({ pet }) => {
    const userData = authClient.useSession();
        const user = userData?.data?.user;

        const onSubmit= async (e)=>{
           e.preventDefault();
           const formData= new FormData(e.target);
           const  requestData={
            ...Object.fromEntries(formData.entries()),
            petId: pet._id,
            ownerEmail: pet.ownerEmail,
            status: 'pending',
            petImage:pet.imageUrl,
            requestDate: new Date(),
           };
           console.log(requestData)
           const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/request`,
                       {
                           method: 'POST',
                           headers: {
                               'content-type': 'application/json'
                           },
                           body: JSON.stringify(requestData)
                       }
                   )
                   const data = await res.json();
                   if(data?.acknowledged) {
                       toast.success("Request  Is Pending");
                      
                   }
                   else{ 
                    toast.error(data.message)}
        }
    console.log(user?.name)
    return (
        <Modal>
            <Button className="bg-pink-600">Adopt the pet</Button>
            <Modal.Backdrop>
                <Modal.Container className="flex items-center justify-center min-h-screen">
                    <Modal.Dialog>
                        <Modal.CloseTrigger /> {/* Optional: Close button */}
                        <Modal.Header className='text-pink-600 font-bold'>
                            Adoption Form

                        </Modal.Header>
                        <Modal.Body >
                            <Form className='space-y-3' onSubmit={onSubmit} >
                                 <TextField
                                isRequired
                                name="petName"
                                type="text"
                                defaultValue={pet?.petName}
                            >
                                <Label className='text-pink-600'>Pet Name</Label>
                                <Input readOnly />
                            </TextField>

                            <TextField
                                isRequired
                                name="requesterEmail"
                                type="email"
                                defaultValue={user?.email}
                            >
                                <Label className='text-pink-600'>User email</Label>
                                <Input readOnly />
                            </TextField>
                            <TextField
                                isRequired
                                name="requesterName"
                                type="text"
                                defaultValue={user?.name}
                            >
                                <Label className='text-pink-600'>User Name</Label>
                                <Input readOnly />
                            </TextField>
                            <DateField className="w-[256px]" name="pickupDate">
                                <Label className='text-pink-600'>Pick Up Date</Label>
                                <DateField.Group>
                                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                </DateField.Group>
                            </DateField>
                            <TextField
                                isRequired
                                name="message"
                                type="text"
                               
                            >
                                <Label className='text-pink-600'>Message</Label>
                                <Input  />
                            </TextField>
                            <div className="flex gap-2">
                                                    <Button type="submit" className='bg-pink-600'>
                                                        <Check />
                                                        Adopt
                                                    </Button>
                                                    <Button type="reset" variant="secondary">
                                                        Cancel
                                                    </Button>
                                                </div>
                            </Form>
                           
                        </Modal.Body>
                        <Modal.Footer />
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AdoptModal;