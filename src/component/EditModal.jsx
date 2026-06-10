

import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Card, FieldError, Select, Form, Input, Label, Modal, TextField, ListBox } from '@heroui/react';

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';

const EditModal = ({ pet }) => {



    const { _id, petName, breed, imageUrl, adoptionFee, status } = pet;

    const userData = authClient.useSession();
    const user = userData?.data?.user;

    const [gender, setGender] = useState(pet.gender);
    const [vaccinationStatus, setVaccinationStatus] = useState(pet.vaccinationStatus);
    const [healthStatus, setHealthStatus] = useState(pet.healthStatus);
    const [species, setSpecies] = useState(pet.species)
    const onSubmit = async (e) => {
       
        const formData = new FormData(e.currentTarget)
        const petData = {
            ...Object.fromEntries(formData.entries()),
            gender,
            vaccinationStatus,
            healthStatus,
            species,
        }
       const {data:tokenData}= await authClient.token()


        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${_id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization:`Bearer ${tokenData?.token}`
                },
                body: JSON.stringify(petData)
            }
        )
        const data = await res.json();

        console.log('data:', data)
        if (data) {
            toast.success("Edited SuccessFully");
            window.location.reload()
        }



    }
    return (
        <Modal>
            <Button size="sm" variant="bordered">
                Edit <FaEdit className='inline-block' />
            </Button>
            <Modal.Backdrop>
                <Modal.Container className="flex items-center justify-center min-h-screen">
                    <Modal.Dialog>
                        <Modal.CloseTrigger /> {/* Optional: Close button */}
                        <Modal.Header className='text-pink-600 font-bold'>
                            Edit Pet Information

                        </Modal.Header>
                        <Modal.Body className="max-h-[75vh] overflow-y-auto" >
                            <Card className='my-5 mx-auto'>
                                <Form className="flex flex-col gap-4" onSubmit={onSubmit} >
                                    <div className=''>
                                        <TextField
                                            className=' w-full sm:w-96'
                                            isRequired
                                            name="petName"
                                            type="text"
                                            defaultValue={petName}
                                        >
                                            <Label className='text-pink-600'>Name</Label>
                                            <Input />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                            isRequired
                                            name="breed"
                                            type="text"
                                            defaultValue={breed}
                                        >
                                            <Label className='text-pink-600' >Breed</Label>
                                            <Input />
                                            <FieldError />
                                        </TextField>
                                    </div>


                                    <div >
                                        <TextField
                                            className='max-w-65'
                                            isRequired
                                            name="age"
                                            type="text"
                                            defaultValue={pet.age}
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
                                        <Select className="w-[256px]" placeholder={pet.gender}
                                            onChange={(value) => setGender(value)}
                                            defaultValue={pet.gender}
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

                                    <div>
                                        <Select className="w-[256px]" placeholder="Select one"
                                            onChange={(value) => setVaccinationStatus(value)}
                                            defaultValue={pet.vaccinationStatus}
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
                                            defaultValue={pet.species}
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
                                            defaultValue={pet.healthStatus}
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
                                            defaultValue={imageUrl}
                                        >
                                            <Label className='text-pink-600'>Image Url</Label>
                                            <Input />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                            isRequired
                                            name="location"
                                            type="text"
                                            defaultValue={pet.location}
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
                                            defaultValue={pet.adoptionFee}
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
                                            defaultValue={pet.description}
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
                                            Update PET
                                        </Button>
                                        <Button type="reset" variant="secondary">
                                            Cancel
                                        </Button>
                                    </div>
                                </Form>
                            </Card>

                        </Modal.Body>
                        <Modal.Footer />
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditModal;