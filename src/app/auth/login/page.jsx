"use client";

import React, { useState } from "react";

import { Card, CardHeader, Input, Button } from "@heroui/react";
import { Mail, Lock, Eye, EyeOff, PawPrint } from "lucide-react";
// import { authClient } from "@/app/lib/auth-client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState("");

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setServerError("");

        const form = e.currentTarget;
        if (!form.checkValidity()) return;

        try {
            setIsLoading(true);
            const { error } = await authClient.signIn.email({
                email: email.toLowerCase().trim(),
                password: password,
            });

            if (error) {
                setServerError(error.message || "Invalid email or password.");
            } else {
                alert("Logged in successfully!");
                window.location.href = "/";
            }
        } catch (err) {
            setServerError("Network connection error.");
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
                    <h1 className="text-xl font-bold text-slate-800">Welcome Back</h1>
                    <p className="text-sm text-slate-500">Log in to manage your pet's needs.</p>
                </CardHeader>

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                    {serverError && (
                        <div className="p-3 rounded-lg bg-red-50 text-red-600 text-xs text-center border border-red-200">
                            {serverError}
                        </div>
                    )}

                    <div>
                        <label className="block text-slate-600 font-medium text-xs mb-1.5">Email Address</label>
                        <div className="relative flex items-center">
                            <Mail className="absolute left-3 h-4 w-4 text-slate-400 z-10 pointer-events-none" />
                            <Input
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-8" 
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-slate-600 font-medium text-xs mb-1.5">Password</label>
                        <div className="relative flex items-center">
                           
                            <Lock className="absolute left-3 h-4 w-4 text-slate-400 z-10 pointer-events-none" />
                            <Input
                                type={isVisible ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-8 pr-8" 
                                required
                            />
                           
                            <button
                                type="button"
                                onClick={toggleVisibility}
                                className="absolute right-3 z-10 focus:outline-none"
                            >
                                {isVisible ? <EyeOff className="h-4 w-4 text-slate-400" /> : <Eye className="h-4 w-4 text-slate-400" />}
                            </button>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        isLoading={isLoading}
                        className="w-full bg-emerald-600 text-white font-bold h-11 mt-2 hover:bg-emerald-700 transition-colors"
                    >
                        Log In
                    </Button>

                    <p className="text-center text-sm text-slate-500 mt-4">
                        Don't have an account?{" "}
                        <Link href="/auth/register" className="text-emerald-600 font-semibold hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </Card>
        </div>
    );
}