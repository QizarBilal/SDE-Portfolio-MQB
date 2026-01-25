"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const formRef = useRef();
//   console.log(`env : ${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`)

  const onSubmitHandler = async (data) => {
    await onSubmit(data);
    await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    reset();
  };

  return (
    <motion.form 
      ref={formRef} 
      onSubmit={handleSubmit(onSubmitHandler)} 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4">
        {/* Name and Email in a 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <label htmlFor="name" className="text-sm font-medium text-muted-foreground block">
              Your Name
            </label>
            <Input
              {...register("name", { required: "Name is required" })}
              id="name"
              type="text"
              name="name"
              placeholder="Mohammed Qizar"
              className="rounded-lg border-primary/20 w-full transition-all focus:scale-[1.02]"
            />
            {errors.name && (
              <motion.span 
                className="text-xs text-red-500 block mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.name.message}
              </motion.span>
            )}
          </motion.div>

          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <label htmlFor="email" className="text-sm font-medium text-muted-foreground block">
              Email
            </label>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              id="email"
              type="email"
              name="email"
              placeholder="qizar@example.com"
              className="rounded-lg border-primary/20 w-full transition-all focus:scale-[1.02]"
            />
            {errors.email && (
              <motion.span 
                className="text-xs text-red-500 block mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.email.message}
              </motion.span>
            )}
          </motion.div>
        </div>

        {/* Message field - full width */}
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <label htmlFor="message" className="text-sm font-medium text-muted-foreground block">
            Message
          </label>
          <Textarea
            {...register("message", { required: "Message is required" })}
            id="message"
            name="message"
            placeholder="Write your message here..."
            className="rounded-lg border-primary/20 min-h-[150px] w-full resize-y transition-all focus:scale-[1.01]"
          />
          {errors.message && (
            <motion.span 
              className="text-xs text-red-500 block mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.message.message}
            </motion.span>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          type="submit"
          className="w-full rounded-xl py-6 text-base font-semibold mt-6 transition-all hover:shadow-lg hover:shadow-primary/30"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
