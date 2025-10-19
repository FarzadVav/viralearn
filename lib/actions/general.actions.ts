"use server";

import { postContactUs } from "../fetches/general.fetches";

export async function postContactUsAction(fd: FormData) {
  const res = await postContactUs({
    email: fd.get("phone_number") as string,
    firstName: fd.get("fullname") as string,
    lastName: fd.get("fullname") as string,
    message: "",
    jsonExt: "",
    type: 0,
    responseStatus: 0
  })

  return res.result
}