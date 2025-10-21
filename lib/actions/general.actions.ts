"use server";

import { postContactUs } from "../fetches/general.fetches";

export async function contactUsAction(fd: FormData) {
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

export async function freeConsultationAction(fd: FormData) {
  const res = await postContactUs({
    email: (fd.get("contact_channel_1") || "") as string + " & " + (fd.get("contact_channel_2") || "") as string,
    firstName: (fd.get("firstName") || "") as string,
    lastName: (fd.get("lastName") || "") as string,
    message: `Calling time: ${fd.get("calling_time")}`,
    jsonExt: "",
    type: 0,
    responseStatus: 0
  })

  return res.result
}