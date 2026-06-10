'use client'
import { Button, Modal } from '@heroui/react';
import toast from 'react-hot-toast';
import { Rocket } from '@gravity-ui/icons';
import { LuCircleArrowOutDownLeft } from 'react-icons/lu';
import { useEffect, useState } from 'react';


const RequestsModal = ({ petId, petName }) => {

    const [loading, setLoading] = useState(true);
    const [request, setRequest] = useState(null);

    const fetchData = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/request/pet/${petId}`);
        const data = await res.json();
        setLoading(false)
        setRequest(data);
    }

    useEffect(() => {
        fetchData();
    }, [petId])

    const handleApprove = async (id) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/request/approve/${id}`, {
            method: 'PATCH',
        });
        if (res.ok) {
            toast.success("Request Approved")
            fetchData();
        }
    }

    const handleReject = async (id) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/request/rejected/${id}`, {
            method: 'PATCH'
        });
        if (res.ok) {
            toast.success('Request Rejected')
            fetchData();
        }
    }


    return (
        <Modal>
            <Button variant="secondary" className=' bg-white text-pink-600'> Requests <LuCircleArrowOutDownLeft className='inline-block' /> </Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[500px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Adoption Request for {petName}</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className='space-y-2'>

                            {loading && <p>Data is Loading</p>}

                            {!loading && request.length === 0 && (
                                <p className='text-center text-red-500 py-4'>No Request For {petName}</p>
                            )}
                            {
                                !loading &&
                                request.map(req => {
                                    return <div key={req._id} className=' '>

                                        {req.status === 'pending' &&
                                            <div className='p-4 border rounded-2xl bg-pink-200 text-slate-800 '>
                                                <div className='flex    p-2 rounded-full b border-slate-400 justify-between '>
                                                    <p>Name: {req.requesterName}</p>
                                                    <span className={`text-xs font-semibold px-2 py-1 rounded-full 
                            ${req.status === 'pending' ? 'bg-gray-400 text-white' : ''}  
                            ${req.status === 'approved' ? 'bg-green-500 text-white' : ''} 
                            
                            ${req.status === 'rejected' ? 'bg-red-600 text-white' : ''}
                                `}>
                                                        {req.status}
                                                    </span>
                                                </div>
                                                <p className='text-sm font-semibold'>Email: {req.requesterEmail}</p>
                                                <p className='text-sm font-semibold'>Pickup Date: {req.pickupDate}</p>
                                                <hr className='my-2' />
                                                {
                                                    req.status === 'pending' && <div className='flex justify-between items-center'>
                                                        <Button
                                                            size='sm'
                                                            className='bg-cyan-600 text-white'
                                                            onPress={() => handleApprove(req._id)}
                                                        >
                                                            Aprrove
                                                        </Button>
                                                        <Button
                                                            onPress={() => handleReject(req._id)}
                                                            size='sm'
                                                            className='bg-red-600 text-white'>
                                                            Reject
                                                        </Button>
                                                    </div>
                                                }
                                            </div>

                                        }

                                    </div>
                                })
                            }
                        </Modal.Body>
                        <Modal.Footer>

                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
export default RequestsModal;