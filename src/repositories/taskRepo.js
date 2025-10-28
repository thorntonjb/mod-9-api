import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

export async function getUnique(id) {
  const task = await prisma.task.findUnique({
    where: { id },
  });
  return task;
}
