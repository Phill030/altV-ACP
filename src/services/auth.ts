const baseURL = "http://localhost:8000/api";

export async function checkToken(token: string) {
  const response = await fetch(`${baseURL}/auth/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401 || response.status === 403) {
    localStorage.removeItem("key");
    return false;
  }

  return true;
}

export async function login(
  username: string,
  password: string
): Promise<string | undefined> {
  const response = await fetch(`${baseURL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (response.status === 200) {
    const token = JSON.parse(await response.text())["accessToken"];
    localStorage.setItem("key", token);
    return undefined;
  } else if (response.status === 401) {
    return "Invalid username or password";
  }
}
