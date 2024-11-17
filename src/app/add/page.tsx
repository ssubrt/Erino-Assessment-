"use client"


import React from 'react';
import ContactForm from '@/components/ContactForm';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Appbar from '@/components/Appbar';




const AddContactPage = () => {
    const router = useRouter();

    const handleAddContact = async (data: any) => {
        await fetch('/api/contacts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        router.push('/dashboard');
        toast.success('Contact added successfully');
    };

    return (
        <div>
            <Appbar />

            <div className="p-6">
                <h1 className="text-2xl font-bold text-center mb-2">Add Contact</h1>
                <ContactForm onSubmit={handleAddContact} />
            </div>
        </div>
    );
};

export default AddContactPage;
