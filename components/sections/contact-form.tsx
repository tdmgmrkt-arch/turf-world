"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    mobile: "",
    receiveSMS: false,
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-forest-100 border border-forest-200 rounded-full px-5 py-2 mb-6">
              <MessageSquare className="h-4 w-4 text-forest-700" />
              <span className="text-sm font-semibold text-forest-800">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How Can We Help?
            </h2>
            <div className="h-1 w-24 mx-auto bg-forest-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              {/* Phone Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-forest-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-forest-600 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900">Call Us</h3>
                </div>
                <a
                  href="tel:9093451909"
                  className="text-2xl font-bold text-forest-600 hover:text-forest-700 transition-colors"
                >
                  (909) 345-1909
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-forest-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900">Email</h3>
                </div>
                <a
                  href="mailto:Orders@TURF-WORLD.COM"
                  className="text-sm font-medium text-forest-600 hover:text-forest-700 transition-colors break-all"
                >
                  Orders@TURF-WORLD.COM
                </a>
              </div>

              {/* Hours Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-forest-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-forest-600 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900">Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Mon - Fri</span>
                    <span className="font-semibold text-slate-900">8:00 am – 5:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Saturday</span>
                    <span className="font-semibold text-slate-500">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Sunday</span>
                    <span className="font-semibold text-slate-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg space-y-6"
              >
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700 font-medium">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 rounded-xl border-slate-200 focus:border-forest-500 focus:ring-forest-500"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 rounded-xl border-slate-200 focus:border-forest-500 focus:ring-forest-500"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700 font-medium">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 rounded-xl border-slate-200 focus:border-forest-500 focus:ring-forest-500"
                    required
                  />
                </div>

                {/* Mobile Field */}
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-slate-700 font-medium">Mobile (Optional)</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="h-12 rounded-xl border-slate-200 focus:border-forest-500 focus:ring-forest-500"
                  />
                  <div className="flex items-center space-x-2 mt-3">
                    <Checkbox
                      id="sms"
                      checked={formData.receiveSMS}
                      onCheckedChange={(checked) => setFormData({ ...formData, receiveSMS: checked as boolean })}
                      className="border-slate-300 data-[state=checked]:bg-forest-600 data-[state=checked]:border-forest-600"
                    />
                    <label htmlFor="sms" className="text-sm text-slate-600 cursor-pointer">
                      Add mobile to receive SMS updates
                    </label>
                  </div>
                </div>

                {/* Comments Field */}
                <div className="space-y-2">
                  <Label htmlFor="comments" className="text-slate-700 font-medium">Message</Label>
                  <Textarea
                    id="comments"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    className="rounded-xl border-slate-200 focus:border-forest-500 focus:ring-forest-500 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 bg-forest-600 hover:bg-forest-700 text-white font-semibold rounded-xl shadow-lg shadow-forest-600/25 hover:shadow-xl"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
