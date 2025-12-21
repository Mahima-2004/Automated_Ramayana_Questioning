import bcrypt from 'bcryptjs'

export interface User {
  id: number
  name: string
  email: string
  password: string
}

// Shared users array - in production, this would be a database
export let users: User[] = [
  {
    id: 1,
    name: 'Demo User',
    email: 'demo@example.com',
    // password: demo123
    password: '$2a$10$rOzJqZqZqZqZqZqZqZqZqOqZqZqZqZqZqZqZqZqZqZqZqZqZqZq',
  },
]

// Helper function to get next user ID
export function getNextUserId(): number {
  return users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1
}

// Helper function to add a new user
export function addUser(user: Omit<User, 'id'>): User {
  const newUser: User = {
    id: getNextUserId(),
    ...user,
  }
  users.push(newUser)
  return newUser
}

// Helper function to find user by email
export function findUserByEmail(email: string): User | undefined {
  return users.find(u => u.email === email)
}

// Helper function to find user by ID
export function findUserById(id: number): User | undefined {
  return users.find(u => u.id === id)
}






