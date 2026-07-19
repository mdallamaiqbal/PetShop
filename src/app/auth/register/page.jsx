"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardHeader, Button } from "@heroui/react";
import { Mail, Lock, Eye, EyeOff, PawPrint, User, UserPlus, ImageIcon } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setWasSubmitted(true);
    setServerError("");

    const form = e.currentTarget;
    if (!form.checkValidity()) return;

    try {
      setIsLoading(true);
      const { error } = await authClient.signUp.email({
        email: email.toLowerCase().trim(),
        password: password,
        name: name.trim(),
        image: photoUrl.trim() ,
       additionalFields: {
        role: "user"
      },
      });

      if (error) {
        setServerError(error.message || "Registration failed. Try again.");
      } else {
        alert("Account registered successfully!");
        window.location.href = "/";
      }
    } catch (err) {
      setServerError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 bg-slate-50">
      <Card className="w-full max-w-md p-6 bg-white shadow-xl border border-slate-100">
        <CardHeader className="flex flex-col items-center gap-2 pb-6">
          <Link href="/" className="flex items-center gap-2 font-bold mb-2">
            <PawPrint className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-slate-800">
              Pet<span className="text-emerald-600">Shop</span>
            </span>
          </Link>
          <h1 className="text-xl font-bold text-slate-800">Create an Account</h1>
          <p className="text-sm text-slate-500">Sign up to manage your pet's needs.</p>
        </CardHeader>

        <form onSubmit={handleSubmit} noValidate className={`flex flex-col gap-4 ${wasSubmitted ? "was-submitted" : ""}`}>
          {serverError && (
            <div className="p-3 rounded-lg bg-red-50 text-red-600 text-xs text-center border border-red-200">
              {serverError}
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="block text-slate-600 font-medium text-xs mb-1.5">Full Name</label>
            <div className="relative flex items-center border border-slate-200 rounded-lg h-11 px-3 focus-within:border-emerald-600 transition-colors">
              <User className="h-4 w-4 text-slate-400 mr-2" />
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-slate-800 text-sm bg-transparent outline-none"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-slate-600 font-medium text-xs mb-1.5">Email Address</label>
            <div className="relative flex items-center border border-slate-200 rounded-lg h-11 px-3 focus-within:border-emerald-600 transition-colors">
              <Mail className="h-4 w-4 text-slate-400 mr-2" />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-slate-800 text-sm bg-transparent outline-none"
                required
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-slate-600 font-medium text-xs mb-1.5">Photo URL</label>
            <div className="relative flex items-center border border-slate-200 rounded-lg h-11 px-3 focus-within:border-emerald-600 transition-colors">
              <ImageIcon className="h-4 w-4 text-slate-400 mr-2" />
              <input
                type="url"
                placeholder="https://example.com/profile.jpg"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="w-full text-slate-800 text-sm bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-slate-600 font-medium text-xs mb-1.5">Password</label>
            <div className="relative flex items-center border border-slate-200 rounded-lg h-11 px-3 focus-within:border-emerald-600 transition-colors">
              <Lock className="h-4 w-4 text-slate-400 mr-2" />
              <input
                type={isVisible ? "text" : "password"}
                placeholder="Create strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-slate-800 text-sm bg-transparent outline-none"
                required
              />
              <button type="button" onClick={toggleVisibility} className="ml-2 focus:outline-none">
                {isVisible ? <EyeOff className="h-4 w-4 text-slate-400" /> : <Eye className="h-4 w-4 text-slate-400" />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            isLoading={isLoading}
            className="w-full bg-emerald-600 text-white font-bold h-11 mt-2 hover:bg-emerald-700 transition-colors"
          >
            Sign Up
          </Button>

          <p className="text-center text-sm text-slate-500 mt-2">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-emerald-600 font-semibold hover:underline">
              Log In
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
}