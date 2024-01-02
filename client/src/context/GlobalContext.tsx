import { createContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const GlobalContext = createContext<any>({});

const GlobalState = (props: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
    }
  }, []);

  // Alert
  const alert = (text: string, type: string) => {
    if (type == "danger") {
      toast.error(text);
    } else if (type == "success") {
      toast.success(text);
    } else if (type == "warning") {
      toast.warning(text);
    } else {
      toast.info(text);
    }
  };

  // login
  const login = async (username: string, password: string) => {
    const res = await fetch(`${import.meta.env.VITE_HOST}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.text();
    if (res.ok) {
      alert("Login Success", "success");
      localStorage.setItem("token", data);
      setIsAuthenticated(true);
      return true;
    } else {
      alert(data, "danger");
      return false;
    }
  };

  // register
  const register = async (
    name: string,
    username: string,
    email: string,
    password: string
  ) => {
    const res = await fetch(`${import.meta.env.VITE_HOST}/user/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, username, password, email }),
    });
    const data = await res.text();
    if (res.ok) {
      if (data == "User Created Successfully!") {
        alert(data, "success");
        return true;
      } else {
        alert(data, "danger");
        return false;
      }
    } else {
      alert("Account Creation Failed", "danger");
      return false;
    }
  };

  const depositUnsafe = async (amount: number, iterations: number) => {
    const res = await fetch(`${import.meta.env.VITE_HOST}/user/depositunsafe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        username: localStorage.getItem("token") || "",
      },
      body: JSON.stringify({ amount, iterations }),
    });
    const data = await res.text();
    if (res.ok) {
      return data;
    } else {
      alert("Transaction Failed", "danger");
      return NaN;
    }
  };

  const depositSafe = async (amount: number, iterations: number) => {
    const res = await fetch(`${import.meta.env.VITE_HOST}/user/depositsafe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        username: localStorage.getItem("token") || "",
      },
      body: JSON.stringify({ amount, iterations }),
    });
    const data = await res.text();
    if (res.ok) {
      return data;
    } else {
      alert("Transaction Failed", "danger");
      return NaN;
    }
  };

  const withdrawSafe = async (amount: number, iterations: number) => {
    const res = await fetch(
      `${import.meta.env.VITE_HOST}/user/withdrawsafe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          username: localStorage.getItem("token") || "",
        },
        body: JSON.stringify({ amount, iterations }),
      }
    );
    const data = await res.text();
    if (res.ok) {
        console.log(data);
      return data;
    } else {
      alert("Transaction Failed", "danger");
      return NaN;
    }
  }

  const withdrawUnsafe = async (amount: number, iterations: number) => {
    const res = await fetch(
      `${import.meta.env.VITE_HOST}/user/withdrawunsafe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          username: localStorage.getItem("token") || "",
        },
        body: JSON.stringify({ amount, iterations }),
      }
    );
    const data = await res.text();
    if (res.ok) {
      return data;
    } else {
      alert("Transaction Failed", "danger");
      return NaN;
    }
  }


  const showBalance = async () => {
    const res = await fetch(`${import.meta.env.VITE_HOST}/user/checkbalance`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        username: localStorage.getItem("token") || "",
      },
    });
    const data = await res.text();
    if (res.ok) {
      return data;
    } else {
      alert("Transaction Failed", "danger");
      return NaN;
    }
  }


  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        alert,
        login,
        register,
        isAuthenticated,
        handleLogout,
        depositSafe,
        depositUnsafe,
        withdrawSafe,
        withdrawUnsafe,
        showBalance
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalState };

export default GlobalContext;
