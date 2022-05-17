import {getInvoices} from './articles'
let text;
export function getData() {
    let data=getInvoices()
    {data.map((e)=>(
        text=e.response.docs
    ))}
  return text;
}