import { createClient } from "next-sanity";

import { apiVersion,dataset,projectId,useCdn } from "sanity/env";

export const client = createClient({
    token:process.env.Sanity_Access_Token,
    apiVersion:'2023-08-28',
    dataset:"production",
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn:true,
});
