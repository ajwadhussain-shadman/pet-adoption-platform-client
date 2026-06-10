'use client'
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField, Select, ListBox } from '@heroui/react';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';


const AddPet = () => {

    const userData = authClient.useSession();
    const user = userData?.data?.user;
    console.log(user?.email)
    const [gender, setGender] = useState('');
    const [vaccinationStatus, setVaccinationStatus] = useState('');
    const [healthStatus, setHealthStatus] = useState("");
    const [species,setSpecies]=useState("")
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const petData = {
            ...Object.fromEntries(formData.entries()),
            gender,
            vaccinationStatus,
            healthStatus,
            species,
        }
        console.log(petData)
        const res = await fetch(`http://localhost:8000/pets`,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(petData)
            }
        )
        const data = await res.json();
        if(data?.acknowledged) {
            toast.success("Pet Added SuccessFully");
            redirect('/my-listings')
        }
        else{ toast.error("failed to add pet")}
    }
    return (
        <div className='p-5'>
            <h1 className='text-2xl font-bold'>Add a new Pet</h1>
            <Card className='my-5 w-220 mx-auto'>
                <Form className="flex w-200 flex-col gap-4" onSubmit={onSubmit} >
                    <div className='flex flex-col sm:flex-row justify-between'>
                        <TextField
                            className=' w-full sm:w-96'
                            isRequired
                            name="petName"
                            type="text"
                        >
                            <Label className='text-pink-600'>Name</Label>
                            <Input />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            name="breed"
                            type="text"
                        >
                            <Label className='text-pink-600' >Breed</Label>
                            <Input />
                            <FieldError />
                        </TextField>
                    </div>


                    <div className='flex  justify-between'>
                        <TextField
                            className='max-w-65'
                            isRequired
                            name="age"
                            type="text"
                            validate={(value) => {

                                if (/[A-Z]/.test(value) || /[a-z]/.test(value)) {
                                    return "age must be a number";
                                }
                                return null;
                            }}
                        >
                            <Label className='text-pink-600'>Age</Label>
                            <Input />
                            <FieldError />
                        </TextField>
                        <Select className="w-[256px]" placeholder="Select one"
                            onChange={(value) => setGender(value)}
                        >
                            <Label className='text-pink-600'>Gender</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Male" name="gender" textValue="Male">
                                        Male
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Female" name="gender" textValue="Female">
                                        Female
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>

                    </div>

                    <div className='flex justify-between'>
                        <Select className="w-[256px]" placeholder="Select one"
                            onChange={(value) => setVaccinationStatus(value)}
                        >
                            <Label className='text-pink-600'>Vaccination</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Vaccinated" name="vaccinationStatus" textValue="Vaccinated">
                                        Vaccinated
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Not Vaccinated" name="vaccinationStatus" textValue="Not Vaccinated">
                                        Not Vaccinated
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                              


                         <Select className="w-[256px]" placeholder="Select one"
                            onChange={(value) => setSpecies(value)}
                        >
                            <Label className='text-pink-600'>Species</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Dog" name="species" textValue="Dog">
                                        Dog
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Cat" name="species" textValue="Cat">
                                        Cat
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                     <ListBox.Item id="other" name="species" textValue="Other">
                                        Other
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>




                        <Select className="w-[256px]" placeholder="Select one"
                            onChange={(value) => setHealthStatus(value)}
                        >
                            <Label className='text-pink-600'>healthStatus</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Healthy" name="healthStatus" textValue="Healthy">
                                        Healthy
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Ill" name="healthStatus" textValue="Ill">
                                        Ill
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    <div className='flex  flex-col justify-between'>
                        <TextField
                            isRequired
                            name="imageUrl"
                            type="url"
                        >
                            <Label className='text-pink-600'>Image Url</Label>
                            <Input />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            name="location"
                            type="text"
                        >
                            <Label className='text-pink-600'>Location</Label>
                            <Input />

                            <FieldError />
                        </TextField>
                    </div>


                    <div className='flex flex-col justify-between'>
                        <TextField
                            isRequired
                            name="adoptionFee"
                            type="text"
                             validate={(value) => {

                                if (/[A-Z]/.test(value) || /[a-z]/.test(value)) {
                                    return "Fee must be a number";
                                }
                                return null;
                            }}
                        >
                            <Label className='text-pink-600'>Adoption Fee ($)</Label>
                            <Input />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            name="description"
                            type="text"
                        >
                            <Label className='text-pink-600'>description</Label>
                            <Input />

                            <FieldError />
                        </TextField>
                    </div>

                    <TextField
                        isRequired
                        name="ownerEmail"
                        type="email"
                        defaultValue={user?.email}
                    >
                        <Label className='text-pink-600'>User email</Label>
                        <Input readOnly />
                        <FieldError />
                    </TextField>




                    <div className="flex gap-2">
                        <Button type="submit" className='bg-pink-600'>
                            <Check />
                            ADD PET
                        </Button>
                        <Button type="reset" variant="secondary">
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default AddPet;