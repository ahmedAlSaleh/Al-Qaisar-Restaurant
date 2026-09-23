"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Clock, Phone, Shirt, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { MovingBorderButton } from "@/components/ui/moving-border";

export function ReserveSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "20:00",
    guests: "2 Guests",
    location: "Al-Qaisar — Four Seasons Downtown Dubai",
    requests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section id="reserve" className="relative py-28 px-6 md:px-16 bg-[#080808] overflow-hidden">
      {/* Ambient luxury lighting (CSS, zero GPU overhead) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-80 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_70%)] filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Reservation Information */}
        <div>
          <ScrollReveal>
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#C9A84C] mb-2 block font-medium">
              Reservations
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#F5F0E8] leading-tight mb-4">
              Reserve Your <br />
              <em className="italic text-[#C9A84C]">Table</em>
            </h2>
            <div className="w-16 h-[1px] bg-[#C9A84C] my-5" />

            <p className="text-xs sm:text-sm text-[#F5F0E8]/60 leading-relaxed font-light mb-10 max-w-md">
              We recommend reserving at least two weeks in advance. For private salon dining, tasting journeys, and private event celebrations, contact our concierge directly.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg border border-[#C9A84C]/25 flex items-center justify-center text-[#C9A84C] shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#F5F0E8] font-normal">
                    Dining Hours
                  </h4>
                  <p className="text-xs text-[#F5F0E8]/50 mt-0.5 leading-relaxed">
                    Lunch: 12:30 &ndash; 14:30 &middot; Dinner: 19:00 &ndash; 23:00 <br />
                    Closed Mondays
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg border border-[#C9A84C]/25 flex items-center justify-center text-[#C9A84C] shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#F5F0E8] font-normal">
                    Direct Line
                  </h4>
                  <p className="text-xs text-[#F5F0E8]/50 mt-0.5 leading-relaxed">
                    +971 4 270 7777 <br />
                    dining@alqaisar-fourseasons.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg border border-[#C9A84C]/25 flex items-center justify-center text-[#C9A84C] shrink-0">
                  <Shirt className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#F5F0E8] font-normal">
                    Dress Code
                  </h4>
                  <p className="text-xs text-[#F5F0E8]/50 mt-0.5 leading-relaxed">
                    Smart Elegant &middot; Jacket preferred for gentlemen &middot; No athletic wear
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Reservation Form */}
        <div className="rounded-2xl border border-[#C9A84C]/30 bg-[#141414]/90 backdrop-blur-xl p-8 sm:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.8),0_0_24px_rgba(201,168,76,0.1)]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C]">
                  First Name
                </label>
                <Input
                  required
                  placeholder="Antoine"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C]">
                  Last Name
                </label>
                <Input
                  required
                  placeholder="Dubois"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C]">
                Email Address
              </label>
              <Input
                type="email"
                required
                placeholder="antoine@luxury.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C]">
                Phone Number
              </label>
              <Input
                type="tel"
                placeholder="+971 50 000 0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C]">
                  Date
                </label>
                <Input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C]">
                  Time
                </label>
                <select
                  className="flex h-11 w-full rounded-md border border-[#C9A84C]/25 bg-[#1c1c1c]/80 px-3.5 py-2 text-sm text-[#F5F0E8] font-light focus:border-[#C9A84C] focus:outline-none"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                >
                  <optgroup label="Dinner">
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                  </optgroup>
                  <optgroup label="Lunch">
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                  </optgroup>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C]">
                  Guests
                </label>
                <select
                  className="flex h-11 w-full rounded-md border border-[#C9A84C]/25 bg-[#1c1c1c]/80 px-3.5 py-2 text-sm text-[#F5F0E8] font-light focus:border-[#C9A84C] focus:outline-none"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5 Guests</option>
                  <option>6 Guests</option>
                  <option>Private Dining (8+)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C]">
                  Location
                </label>
                <select
                  className="flex h-11 w-full rounded-md border border-[#C9A84C]/25 bg-[#1c1c1c]/80 px-3.5 py-2 text-sm text-[#F5F0E8] font-light focus:border-[#C9A84C] focus:outline-none"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                >
                  <option>Al-Qaisar — Four Seasons Downtown Dubai</option>
                  <option>Al-Qaisar — Four Seasons DIFC</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C]">
                Special Requests
              </label>
              <textarea
                rows={3}
                placeholder="Dietary requirements, anniversary celebration, chef's table preference..."
                value={formData.requests}
                onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                className="w-full rounded-md border border-[#C9A84C]/25 bg-[#1c1c1c]/80 p-3.5 text-sm text-[#F5F0E8] font-light placeholder:text-[#F5F0E8]/30 focus:border-[#C9A84C] focus:outline-none"
              />
            </div>

            <MovingBorderButton
              as="button"
              type="submit"
              borderRadius="0.5rem"
              containerClassName="w-full mt-4 h-12"
              className="bg-[#181818] text-[#F5F0E8] hover:text-[#C9A84C] font-serif tracking-[0.2em] text-xs transition-colors"
              duration={3500}
            >
              Confirm Reservation Request
            </MovingBorderButton>
          </form>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader className="items-center">
            <CheckCircle className="h-12 w-12 text-[#C9A84C] mb-2" />
            <DialogTitle className="text-center font-serif text-3xl">
              Reservation Confirmed
            </DialogTitle>
            <div className="w-16 h-[1px] bg-[#C9A84C] mx-auto my-3" />
            <DialogDescription className="text-center text-xs">
              Thank you, {formData.firstName || "esteemed guest"}. Your reservation for {formData.guests} on {formData.date || "your selected date"} at {formData.time} at {formData.location} has been registered. Our concierge will send your formal confirmation via email.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center mt-4">
            <Button variant="default" onClick={() => setIsModalOpen(false)}>
              Acknowledge
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
