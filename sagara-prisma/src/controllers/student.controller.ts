import { Request, Response } from 'express';
import { prisma } from "../server"

const addStudent = async (req: Request, res: Response) => {
  try {
    const { name, email, phoneNumber, instance } = req.body;
    const student = await prisma.student.create({
      data: {
        name, email, phoneNumber, instance
      }
    });
    res.status(201).json(student);
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await prisma.student.findMany();
    res.status(200).json(students);
  } catch (e) {
    res.status(450).json({ error: e });
  }
}

const getStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const student = await prisma.student.findUnique({
      where: {
        id: Number(id),
      }
    })
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

const updateStudent = async (req: Request, res: Response) => {
  try {
    const { id, name, email, phoneNumber, instance } = req.body;
    const updatedStudent = await prisma.student.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        email,
        phoneNumber,
        instance
      }
    });
    res.status(200).json(updatedStudent)
  } catch (e) {
    res.status(500).json({ error: e });
  }
}

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const deleteStudent = await prisma.student.delete({
      where: {
        id: Number(id),
      }
    });
    res.status(200).json(deleteStudent);
  } catch (e) {
    res.status(500).json({ error: e });
  }
}

export default {
  addStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent
}
