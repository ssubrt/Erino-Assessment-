"use client";

import React, { useEffect, useState } from 'react';
import ContactForm from '@/components/ContactForm';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Appbar from '@/components/Appbar';

const EditContactPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [contact, setContact] = useState(null);
  const router = useRouter();
  const [unwrappedParams, setUnwrappedParams] = useState<{ id: string } | null>(null);

  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await params; // Await the params Promise
      setUnwrappedParams(resolvedParams); // Set the unwrapped params
    };
    unwrapParams();
  }, [params]);

  useEffect(() => {
    const fetchContact = async () => {
      if (unwrappedParams) {
        const response = await fetch(`/api/contacts`);
        const data = await response.json();
        const currentContact = data.find((item: any) => item._id === unwrappedParams.id);
        setContact(currentContact);
      }
    };
    fetchContact();
  }, [unwrappedParams]);

  const handleEditContact = async (data: any) => {
    await fetch('/api/contacts', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, id: unwrappedParams?.id }),
    });
    toast.success('Contact updated successfully');
    router.push('/contacts');
  };

  return (
    <div>
      <Appbar />
      <div className="p-6 ">
        <h1 className="text-2xl font-bold mb-4 text-center">Edit Contact</h1>
        {contact && <ContactForm initialData={contact} onSubmit={handleEditContact} />}
      </div>

    </div>

  );
};

export default EditContactPage;