"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import RegisterSchema from "./schema"

import { PlusIcon } from "@heroicons/react/24/outline"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface StudentRegisterFormProps {
  onSuccess?: () => void;
}

function StudentRegisterForm({ onSuccess }: StudentRegisterFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast()

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      instance: "",
      password: "",
      confirmPassword: "",
    }
  })

  const instanceOptions = [
    { label: "Instance 1", value: "instance_1" },
    { label: "Instance 2", value: "instance_2" },
    { label: "Instance 3", value: "instance_3" },
  ]

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    try {
      console.log(values)
      // Here, you would typically send the data to your server
      // For example:
      // await api.createStudent(values)

      // If everything is successful, call onSuccess, show a success toast, close the modal, and reset the form
      onSuccess?.()
      toast({
        title: "Success",
        description: "Student registered successfully",
      })
      setIsOpen(false)
      form.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error",
        description: "Failed to register student. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <Modal
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={
        <Button className="bg-red text-white-background hover:bg-rose-900">
          <PlusIcon className="h-4 w-4 mr-1" />
          Add User
        </Button>
      }
      title="Add New Student"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+62 95323232" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instance</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an instance" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {instanceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Re-type password</FormLabel>
                <FormControl>
                  <Input placeholder="retype password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </Modal>
  )
}

export default StudentRegisterForm
