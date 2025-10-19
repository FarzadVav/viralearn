"use server";

import { postContactUs } from "../fetches/general.fetches";

export async function postContactUsAction(fd: FormData) {
  const res = await postContactUs({
    email: (fd.get("contact_channel") || "") as string,
    firstName: (fd.get("fullname") || "") as string,
    lastName: (fd.get("fullname") || "") as string,
    message: (fd.get("message") || "") as string,
    jsonExt: "",
    type: 0,
    responseStatus: 0
  })

  return res.result
}