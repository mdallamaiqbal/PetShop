async function testSignUp() {
  try {
    const res = await fetch("http://localhost:3000/api/auth/sign-up/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Origin": "http://localhost:3000"
      },
      body: JSON.stringify({
        email: "testuser@example.com",
        password: "password123",
        name: "Test User",
        image: "",
        role: "user"
      })
    });
    console.log("Status:", res.status);
    const data = await res.json();
    console.log("Response:", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error:", err);
  }
}

testSignUp();
