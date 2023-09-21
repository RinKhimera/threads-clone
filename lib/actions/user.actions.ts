"use server"

import { revalidatePath } from "next/cache"
import User from "../models/user.model"
import { connectToDB } from "../mongoose"

export const fetchUser = async (userId: string) => {
  try {
    connectToDB()

    return await User.findOne({ id: userId })
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`)
  }
}

type UserProps = {
  userId: string
  username: string
  name: string
  bio: string
  image: string
  path: string
}

export const updateUser = async ({
  userId,
  username,
  name,
  bio,
  image,
  path,
}: UserProps): Promise<void> => {
  connectToDB()

  try {
    await User.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLowerCase(),
        name,
        bio,
        image,
        onboarded: true,
      },
      { upsert: true },
    )

    if (path === "/profile/edit") {
      revalidatePath(path)
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`)
  }
}
