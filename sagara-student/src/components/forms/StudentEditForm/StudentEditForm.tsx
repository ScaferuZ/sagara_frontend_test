"use client"

import { useToast } from "@/components/ui/use-toast";
import { Student } from "@/pages/Students/columns";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import RegisterSchema from "../StudentRegisterForm/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";

interface StudentEditForm {
  student: Student
  onSuccess: (updatedStudent: Student) => void
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function StudentEditForm({ student, onSuccess, open, onOpenChange }: StudentEditForm) {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: student.name,
      email: student.email,
      phoneNumber: student.phoneNumber.toString(),
      instance: student.instance,
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur"
  })


  const instanceOptions = [
    { label: "Instance 1", value: "Instance 1" },
    { label: "Instance 2", value: "Instance 2" },
    { label: "Instance 3", value: "Instance 3" },
  ]

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    try {
      const updatedStudent: Student = {
        ...student,
        ...values,
        phoneNumber: parseInt(values.phoneNumber),
      }
      onSuccess(updatedStudent)
      toast({
        title: "Success",
        description: "Student updated successfully",
      })
      onOpenChange(false)
    } catch (error) {
      console.error("Error updating student:", error)
      toast({
        title: "Error",
        description: "Failed to update student. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Edit Student">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                  <Input {...field} />
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
                  <Input {...field} />
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
          <Button type="submit">Update Student</Button>
        </form>
      </Form>
    </Modal>
  )
}

export default StudentEditForm;
