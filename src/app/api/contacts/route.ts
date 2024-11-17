import dbConnect from '@/dbConfig/dbConfig';
import Contact from '@/models/Form';
import { NextResponse } from 'next/server';


export async function GET() {
  try {
    await dbConnect();
    const contacts = await Contact.find({});
    return NextResponse.json(contacts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();
    const contact = await Contact.create(data);
    return NextResponse.json(contact);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create contact' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    await dbConnect();
    const { id, ...data } = await req.json();
    const contact = await Contact.findByIdAndUpdate(id, data, { new: true });
    return NextResponse.json(contact);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update contact' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const { id } = await req.json();
    await Contact.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete contact' }, { status: 500 });
  }
}
