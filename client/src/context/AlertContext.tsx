import {createContext} from "react";
import { useState } from "react";
import { toast } from 'react-toastify';

const AlertContext = createContext<any>({});

const AlertState = (props: any) => {

  const [linkValue, setLinkValue] = useState("");
  const [loading, setLoading] = useState(false);

  // Set Alert
  const updateAlert = (text:string, type:string)=> {
   if(type=="danger"){
      toast.error(text);
    }else if(type=="success"){
      toast.success(text);
    }else if(type=="warning"){
      toast.warning(text);
    }else{
      toast.info(text);
    }
  };

  return (
    <AlertContext.Provider value={{ updateAlert, linkValue, setLinkValue, loading, setLoading }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export {AlertState};

export default AlertContext;