'use client'
import { AlertDialog, Button, Card, CloseButton } from '@heroui/react';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import { MdDeleteOutline } from 'react-icons/md';

const RequestCard = ({ req }) => {
    const { _id, petImage, petName, requestDate, pickupDate, status, petId } = req
    const handleDelete = async (id) => {
        const res = await fetch(`http://localhost:8000/request/delete/${id}`, {
            method: 'DELETE'
        })
        const data = await res.json();
        console.log(data)
        if (data) {
            toast.success('Request deleted')
            window.location.reload()
        }
        else {
            toast.error("failed to delete")
        }
    }
    return (
        <Card className="w-full items-stretch md:flex-row">
            <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
                <Image src={petImage}
                    alt={petName}
                    fill
                    className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none">
                </Image>
            </div>
            <div className="flex flex-1 flex-col gap-3">
                <Card.Header className="gap-1">
                    <Card.Title className="pr-8">{petName}</Card.Title>
                    <p>request date: {format(requestDate, "MMMM d, yyyy")}</p>
                    <p>pick up date: {format(pickupDate, "MMMM d, yyyy")}</p>
                </Card.Header>
                <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full 
                            ${req.status === 'pending' ? 'bg-gray-400 text-white' : ''}  
                            ${req.status === 'approved' ? 'bg-green-500 text-white' : ''} 
                            
                            ${req.status === 'rejected' ? 'bg-red-600 text-white' : ''}
                                `}>
                            {req.status}
                        </span>
                    </div>
                    <div className='space-x-5'>
                        <Link href={`/pet-details/${petId}`}><Button className='bg-pink-600'>View Details</Button></Link>
                        {/* <Button variant='danger'  >Delete Request</Button> */}
                        <AlertDialog>
                            <Button variant="danger">Delete <MdDeleteOutline className='inline-block' /> </Button>
                            <AlertDialog.Backdrop>
                                <AlertDialog.Container>
                                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                                        <AlertDialog.CloseTrigger />
                                        <AlertDialog.Header>
                                            <AlertDialog.Icon status="danger" />
                                            <AlertDialog.Heading>Delete Request permanently?</AlertDialog.Heading>
                                        </AlertDialog.Header>
                                        <AlertDialog.Body>
                                            <p>
                                                This will permanently delete request for  <strong>{petName}</strong> This action cannot be undone.
                                            </p>
                                        </AlertDialog.Body>
                                        <AlertDialog.Footer>
                                            <Button slot="close" variant="tertiary">
                                                Cancel
                                            </Button>
                                            <Button slot="close" variant="danger"
                                                onPress={() => handleDelete(_id)}
                                            >
                                                Delete Request
                                            </Button>
                                        </AlertDialog.Footer>
                                    </AlertDialog.Dialog>
                                </AlertDialog.Container>
                            </AlertDialog.Backdrop>
                        </AlertDialog>
                    </div>
                </Card.Footer>
            </div>
        </Card>
    );
};

export default RequestCard;