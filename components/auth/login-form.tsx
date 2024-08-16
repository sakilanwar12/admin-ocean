"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

type Inputs = {
    email: string
    password: string
    remember?: boolean
}

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        try {

            fetch("/api/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
        } catch (err: any) {
            console.log(err);
        }
    }

    return (
        <form action="#" className="mt-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="example@gmail.com" {...register("email", { required: "Your Email is required." })} />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                </div>
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <Label htmlFor="password" className="mb-0">Password</Label>
                        <Link href="/forgot" className="text-xs font-medium text-primary hover:opacity-80">Forgot Password?</Link>
                    </div>
                    <Input id="password" placeholder="Enter Password" {...register("password", { required: "Your Password is required." })} />
                    {errors.password && <p className="text-xs text-destructive mt-1">{errors.password.message}</p>}
                </div>
                <div className="flex items-center gap-1">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="mb-0">Remember Me</Label>
                </div>
            </div>
            <div className=" mt-2 text-sm font-medium text-default-700">
                {"Need an account? "}
                <Link href="/auth/signup" className="text-primary hover:opacity-90">Sign Up</Link></div>

            <div className="mt-4">
                <Button size="md" className="py-0 w-full" type="submit">Sign In</Button>
            </div>
        </form>
    );
};

export default LoginForm;