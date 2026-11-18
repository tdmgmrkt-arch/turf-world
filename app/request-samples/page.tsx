"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Package,
  Send,
  CheckCircle,
  Sparkles,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const turfSamples = [
  { id: "europe-65", name: "Europe 65", specs: "W: 65oz / 1.25in" },
  { id: "california-65", name: "California 65", specs: "W: 65oz / 1.25in" },
  { id: "arizona-76", name: "Arizona 76", specs: "W: 76oz / 1.50in" },
  { id: "hawaii-80", name: "Hawaii 80", specs: "W: 80oz / 1.50in" },
  { id: "florida-80", name: "Florida 80", specs: "W: 80oz / 1.50in" },
  { id: "texas-80", name: "Texas 80", specs: "W: 80oz / 1.50in" },
  { id: "hawaii-87", name: "Hawaii 87", specs: "W: 87oz / 1.75in" },
  { id: "idaho-93", name: "Idaho 93", specs: "W: 93oz / 1.75in" },
  { id: "nevada-95", name: "Nevada 95", specs: "W: 95oz / 1.75in" },
  { id: "colorado-95", name: "Colorado 95", specs: "W: 95oz / 1.75in" },
  { id: "hawaii-96", name: "Hawaii 96", specs: "W: 96oz / 2.0in" },
  { id: "super-natural-96", name: "Super Natural 96", specs: "W: 96oz / 2.0in" },
  { id: "texas-108", name: "Texas 108", specs: "W: 108oz / 1.75in" },
  { id: "nevada-110", name: "Nevada 110", specs: "W: 110oz / 2.3in" },
  { id: "super-natural-120", name: "Super Natural 120", specs: "W: 120oz / 2.0in" },
  { id: "texas-130", name: "Texas 130", specs: "W: 130oz / 2.0in" },
  { id: "olive-73-pet", name: "Olive 73 - PET", specs: "W: 73oz / 1.5in" },
  { id: "bermuda-87-pet", name: "Bermuda 87 - PET", specs: "W: 87oz / 1.75in" },
  { id: "olive-92-pet", name: "Olive 92 - PET", specs: "W: 92oz / 2.0in" },
  { id: "bermuda-93-pet", name: "Bermuda 93 - PET", specs: "W: 93oz / 2.0in" },
  { id: "putting-green", name: "Putting Green", specs: "W: 85oz" },
  { id: "thousand-pine-putting", name: "Thousand Pine Putting Green", specs: "W: 79oz" },
];

const usStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming"
];

export default function RequestSamplesPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    email: "",
    phone: "",
  });
  const [selectedSamples, setSelectedSamples] = useState<string[]>([]);
  const [smsConsent, setSmsConsent] = useState(false);

  // Derive allSamplesSelected from selectedSamples instead of separate state
  const allSamplesSelected = selectedSamples.length === turfSamples.length;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStateChange = (value: string) => {
    setFormData((prev) => ({ ...prev, state: value }));
  };

  const handleSampleToggle = (sampleId: string) => {
    setSelectedSamples((prev) =>
      prev.includes(sampleId)
        ? prev.filter((id) => id !== sampleId)
        : [...prev, sampleId]
    );
  };

  const handleAllSamplesToggle = () => {
    setSelectedSamples(allSamplesSelected ? [] : turfSamples.map((s) => s.id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 py-16 text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-forest-500 opacity-20 blur-3xl rounded-full" />
            <div className="relative w-24 h-24 mx-auto rounded-full bg-forest-600 flex items-center justify-center shadow-lg shadow-forest-600/25">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Sample Request Submitted!
          </h1>
          <p className="text-lg text-slate-500 mb-8">
            Thank you for your interest in Turf World products. We&apos;ll process your sample request and ship it out shortly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-forest-600 hover:bg-forest-700 text-white rounded-xl shadow-lg shadow-forest-600/25" asChild>
              <Link href="/products">Browse Products</Link>
            </Button>
            <Button variant="outline" className="border-slate-200 hover:bg-forest-50 hover:border-forest-200 hover:text-forest-700 rounded-xl" asChild>
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-slate-900" />

        {/* Accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-forest-500" />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-forest-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest-500/10 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-forest-400" />
              <span className="text-sm font-semibold text-white">
                Free Sample Pack
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Request Turf Samples
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-4">
              Thank you for showing interest in Turf World products.
            </p>
            <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
              Please enter your info below and select the turf samples you wish to include in your sample pack. We look forward to working with and becoming your go-to wholesale turf provider.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Form Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-forest-100 flex items-center justify-center">
                      <Package className="h-4 w-4 text-forest-600" />
                    </div>
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-semibold text-slate-700">
                        First Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="rounded-xl border-slate-200 focus:border-forest-500 focus:ring-forest-500"
                      />
                    </div>

                    {/* Last Name */}
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-semibold text-slate-700">
                        Last Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="rounded-xl border-slate-200 focus:border-forest-500 focus:ring-forest-500"
                      />
                    </div>

                    {/* Address */}
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address" className="text-sm font-semibold text-slate-700">
                        Address
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="rounded-xl border-slate-200 focus:border-forest-500 focus:ring-forest-500"
                      />
                    </div>

                    {/* City */}
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-sm font-semibold text-slate-700">
                        City
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="rounded-xl border-slate-200 focus:border-forest-500 focus:ring-forest-500"
                      />
                    </div>

                    {/* State */}
                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-sm font-semibold text-slate-700">
                        State
                      </Label>
                      <Select value={formData.state || undefined} onValueChange={handleStateChange}>
                        <SelectTrigger id="state" className="rounded-xl border-slate-200">
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent>
                          {usStates.map((state) => (
                            <SelectItem key={state} value={state}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Postal Code */}
                    <div className="space-y-2">
                      <Label htmlFor="postalCode" className="text-sm font-semibold text-slate-700">
                        Postal Code
                      </Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        placeholder="Postal Code"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="rounded-xl border-slate-200 focus:border-forest-500 focus:ring-forest-500"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-slate-700">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="rounded-xl border-slate-200 focus:border-forest-500 focus:ring-forest-500"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                        Phone <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="rounded-xl border-slate-200 focus:border-forest-500 focus:ring-forest-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Turf Samples Selection */}
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-forest-100 flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-forest-600" />
                    </div>
                    Turf Samples
                  </h2>

                  {/* All Samples Option */}
                  <div
                    className={cn(
                      "flex items-center gap-3 p-4 rounded-xl border-2 mb-4 cursor-pointer transition-all",
                      allSamplesSelected
                        ? "border-forest-500 bg-forest-50"
                        : "border-slate-200 hover:border-forest-300"
                    )}
                    onClick={handleAllSamplesToggle}
                  >
                    <Checkbox
                      id="all-samples"
                      checked={allSamplesSelected}
                      className="pointer-events-none data-[state=checked]:bg-forest-600 data-[state=checked]:border-forest-600"
                    />
                    <label
                      className="text-base font-bold text-slate-900 cursor-pointer flex-1"
                    >
                      ALL Samples
                    </label>
                    <span className="text-sm text-slate-500">
                      ({turfSamples.length} samples)
                    </span>
                  </div>

                  {/* Individual Samples Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2">
                    {turfSamples.map((sample) => (
                      <div
                        key={sample.id}
                        className={cn(
                          "flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all",
                          selectedSamples.includes(sample.id)
                            ? "border-forest-500 bg-forest-50"
                            : "border-slate-200 hover:border-forest-300"
                        )}
                        onClick={() => handleSampleToggle(sample.id)}
                      >
                        <Checkbox
                          id={sample.id}
                          checked={selectedSamples.includes(sample.id)}
                          className="pointer-events-none data-[state=checked]:bg-forest-600 data-[state=checked]:border-forest-600"
                        />
                        <div className="flex-1 min-w-0">
                          <label
                            className="text-sm font-medium text-slate-900 cursor-pointer block truncate"
                          >
                            {sample.name}
                          </label>
                          <span className="text-xs text-slate-500">
                            {sample.specs}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Selected Count */}
                  {selectedSamples.length > 0 && (
                    <p className="mt-4 text-sm text-forest-600 font-medium">
                      {selectedSamples.length} sample{selectedSamples.length !== 1 ? "s" : ""} selected
                    </p>
                  )}
                </div>

                {/* SMS Consent */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Checkbox
                    id="sms-consent"
                    checked={smsConsent}
                    onCheckedChange={(checked) => setSmsConsent(checked as boolean)}
                    className="mt-0.5 data-[state=checked]:bg-forest-600 data-[state=checked]:border-forest-600"
                  />
                  <Label
                    htmlFor="sms-consent"
                    className="text-sm text-slate-500 cursor-pointer leading-relaxed"
                  >
                    I agree to receive SMS messages from Turf-World at the number provided. Msg & data rates may apply. Reply STOP to unsubscribe.
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white font-bold rounded-xl py-6 text-lg shadow-lg shadow-forest-600/25"
                  disabled={isSubmitting || selectedSamples.length === 0}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      SUBMIT
                    </>
                  )}
                </Button>

                {/* Legal Links */}
                <div className="text-center pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-500">
                    <Link
                      href="/privacy-policy"
                      className="hover:text-forest-600 transition-colors underline"
                    >
                      Privacy Policy
                    </Link>
                    {" | "}
                    <Link
                      href="/terms-conditions"
                      className="hover:text-forest-600 transition-colors underline"
                    >
                      Terms & Conditions
                    </Link>
                  </p>
                </div>
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl border border-slate-200">
                <div className="w-14 h-14 mx-auto rounded-full bg-forest-100 flex items-center justify-center mb-4">
                  <Package className="h-7 w-7 text-forest-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Free Samples</h3>
                <p className="text-sm text-slate-500">
                  Get free turf samples shipped directly to you
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl border border-slate-200">
                <div className="w-14 h-14 mx-auto rounded-full bg-forest-100 flex items-center justify-center mb-4">
                  <Send className="h-7 w-7 text-forest-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Fast Shipping</h3>
                <p className="text-sm text-slate-500">
                  Samples typically ship within 1-2 business days
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl border border-slate-200">
                <div className="w-14 h-14 mx-auto rounded-full bg-forest-100 flex items-center justify-center mb-4">
                  <CheckCircle className="h-7 w-7 text-forest-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">No Obligation</h3>
                <p className="text-sm text-slate-500">
                  Try before you buy with no commitment required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
