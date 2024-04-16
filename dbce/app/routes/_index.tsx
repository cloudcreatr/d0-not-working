import { LoaderFunctionArgs } from "@remix-run/cloudflare";

export async function loader({request, context}: LoaderFunctionArgs) {
  const  om  = context.cloudflare.env.do
  let id = om.newUniqueId()

let stub = om.get(id);

  let response = stub.fetch(request.url);

  return response;
}