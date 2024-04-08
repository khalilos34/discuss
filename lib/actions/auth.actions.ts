"use server";
import * as auth from "@/authentication/auth";

export const signOut = async () => auth.signOut();
export const signIn = async () => auth.signIn("github");
