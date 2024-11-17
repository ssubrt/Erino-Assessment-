"use client";

import React, { FC, useState } from 'react';
import { TextField, Button, Paper, Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

interface ContactFormProps {
  initialData?: any;
  onSubmit: (data: any) => Promise<void>;
}

const ContactForm: FC<ContactFormProps> = ({ initialData = {}, onSubmit }) => {
  const [form, setForm] = useState(initialData);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(form);
    router.push('/dashboard');
  };

  return (
    <Paper elevation={3} className="p-6 sm:p-10 max-w-lg mx-auto  ">
      <Typography variant="h5" component="h2" className="mb-4 text-center">
        Contact
      </Typography>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          value={form.firstName || ''}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={form.lastName || ''}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          value={form.email || ''}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={form.phoneNumber || ''}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Company"
          name="company"
          value={form.company || ''}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Job Title"
          name="jobTitle"
          value={form.jobTitle || ''}
          onChange={handleChange}
          required
          fullWidth
        />
        <Box className="text-center">
          <Button type="submit" variant="contained" color="primary" size="large">
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default ContactForm;
