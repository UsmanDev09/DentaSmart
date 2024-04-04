'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signIn(formData: FormData) {

    const email = formData.get('email');
    const password = formData.get('password')

  fetch(`http://103.217.176.51:8000/v1/dentist_login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password
    })}
  ).then(async (res) => console.log(await res.json()))

}
