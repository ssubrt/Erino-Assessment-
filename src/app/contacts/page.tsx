"use client";

import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Button, Stack, Paper } from '@mui/material';
import ContactsTable from '@/components/ContactsTable';

interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  company: string;
  jobTitle: string;
}

const ContactsPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 3;

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch('/api/contacts');
      const data: Contact[] = await response.json();
      setContacts(data);
    };
    fetchContacts();
  }, []);

  const totalPages = Math.ceil(contacts.length / contactsPerPage);
  const startIndex = (currentPage - 1) * contactsPerPage;
  const currentContacts = contacts.slice(startIndex, startIndex + contactsPerPage);

  const handleDelete = async (id: string) => {
    await fetch(`/api/contacts`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setContacts((prev) => prev.filter((contact) => contact._id !== id));
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <Container maxWidth="lg" className="mt-10 bg-orange-400">
      <Paper elevation={3} className="p-6">
        <Typography variant="h4" component="h1" className="mb-6 text-center">
          Contacts
        </Typography>
        <Box>
          <ContactsTable contacts={currentContacts} onDelete={handleDelete} />
        </Box>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={4}>
          <Button
            variant="contained"
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            size="large"
          >
            Previous
          </Button>
          <Typography variant="body1" className="text-gray-600">
            Page {currentPage} of {totalPages}
          </Typography>
          <Button
            variant="contained"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            size="large"
          >
            Next
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default ContactsPage;
