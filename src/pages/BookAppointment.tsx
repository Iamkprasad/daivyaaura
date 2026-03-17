import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
import {
  CalendarIcon,
  Clock,
  Sparkles,
  Star,
  Moon,
  Sun,
  User,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const consultationTypes = [
  {
    id: "astrology",
    label: "Vedic Astrology",
    icon: Star,
    desc: "Birth chart analysis, planetary insights & life predictions",
    duration: "45-60 min",
    price: "₹1,500",
  },
  {
    id: "numerology",
    label: "Numerology",
    icon: Moon,
    desc: "Name analysis, lucky numbers & life path guidance",
    duration: "30-45 min",
    price: "₹1,200",
  },
  {
    id: "kundli",
    label: "Kundli Matching",
    icon: Sun,
    desc: "Marriage compatibility & horoscope matching",
    duration: "45 min",
    price: "₹2,000",
  },
  {
    id: "remedies",
    label: "Spiritual Remedies",
    icon: Sparkles,
    desc: "Personalized remedies, gemstone & mantra suggestions",
    duration: "30-45 min",
    price: "₹1,000",
  },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];

const concerns = [
  "Career & Business",
  "Marriage & Relationships",
  "Health & Wellness",
  "Finance & Wealth",
  "Education & Exams",
  "Family Issues",
  "Travel & Migration",
  "Legal Matters",
  "Spiritual Growth",
  "Other",
];

export default function BookAppointment() {
  const [consultationType, setConsultationType] = useState("");
  const [dob, setDob] = useState<Date>();
  const [preferredDate, setPreferredDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleConcern = (concern: string) => {
    setSelectedConcerns((prev) =>
      prev.includes(concern)
        ? prev.filter((c) => c !== concern)
        : prev.length < 3
          ? [...prev, concern]
          : prev
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!consultationType) {
      toast.error("Please select a consultation type");
      return;
    }
    if (!dob) {
      toast.error("Please select your date of birth");
      return;
    }
    if (!preferredDate) {
      toast.error("Please select a preferred appointment date");
      return;
    }
    if (!selectedTime) {
      toast.error("Please select a preferred time slot");
      return;
    }

    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("consultation_type", consultationType);
    formData.append("date_of_birth", dob ? format(dob, "PPP") : "");
    formData.append("preferred_date", preferredDate ? format(preferredDate, "PPP") : "");
    formData.append("preferred_time", selectedTime);
    formData.append("concerns", selectedConcerns.join(", "));

    try {
      const res = await fetch("https://formspree.io/f/xykdvjdg", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        toast.success("Appointment request submitted successfully! 🙏");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 md:py-28">
        <div className="container max-w-lg text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-2xl border border-border/50 p-10 shadow-card"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-display font-bold mb-3">Booking Confirmed!</h1>
            <p className="text-muted-foreground font-body mb-2">
              Thank you for booking with Daivyaura. Our astrologer will review your details and confirm your appointment shortly.
            </p>
            <p className="text-sm text-muted-foreground font-body mb-8">
              You will receive a confirmation call/WhatsApp within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="font-heading border-primary/30 hover:bg-primary/10"
              >
                Book Another
              </Button>
              <Button asChild className="bg-gradient-gold text-primary-foreground font-heading">
                <a href="https://wa.me/919911573173" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-cosmic-radial cosmic-particles py-16 md:py-20 text-center">
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
              Book Your <span className="text-gradient-gold">Consultation</span>
            </h1>
            <p className="text-primary-foreground/50 max-w-xl mx-auto font-heading text-lg">
              Connect with our experienced astrologers for personalized guidance on your life's journey
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-4xl">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Consultation Type */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-display font-bold">1</span>
                <h2 className="text-xl font-display font-bold">Choose Consultation Type</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {consultationTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setConsultationType(type.id)}
                    className={cn(
                      "text-left p-5 rounded-xl border-2 transition-all duration-300 group",
                      consultationType === type.id
                        ? "border-primary bg-primary/5 shadow-glow"
                        : "border-border/50 bg-card hover:border-primary/30 hover:shadow-card"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                          consultationType === type.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                        )}
                      >
                        <type.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base">{type.label}</h3>
                        <p className="text-xs text-muted-foreground font-body mt-1">{type.desc}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs font-body text-primary font-medium">
                            <Clock className="w-3 h-3 inline mr-1" />
                            {type.duration}
                          </span>
                          <span className="text-xs font-display font-bold text-foreground">
                            {type.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 2: Personal Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-10"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-display font-bold">2</span>
                <h2 className="text-xl font-display font-bold">Personal Details</h2>
              </div>
              <div className="bg-card rounded-xl border border-border/50 p-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="font-heading text-sm flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-primary" /> Full Name *
                    </Label>
                    <Input name="full_name" required placeholder="Enter your full name" className="mt-1.5" maxLength={100} />
                  </div>
                  <div>
                    <Label className="font-heading text-sm flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-primary" /> Gender *
                    </Label>
                    <select name="gender" required className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-body">
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="font-heading text-sm flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-primary" /> Email *
                    </Label>
                    <Input name="email" type="email" required placeholder="your@email.com" className="mt-1.5" maxLength={255} />
                  </div>
                  <div>
                    <Label className="font-heading text-sm flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-primary" /> Phone / WhatsApp *
                    </Label>
                    <Input name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" className="mt-1.5" maxLength={15} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3: Birth Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-10"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-display font-bold">3</span>
                <h2 className="text-xl font-display font-bold">Birth Details</h2>
                <span className="text-xs text-muted-foreground font-body ml-1">(Required for accurate readings)</span>
              </div>
              <div className="bg-card rounded-xl border border-border/50 p-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="font-heading text-sm flex items-center gap-1.5">
                      <CalendarIcon className="w-3.5 h-3.5 text-primary" /> Date of Birth *
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full mt-1.5 justify-start text-left font-normal",
                            !dob && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {dob ? format(dob, "PPP") : "Select your date of birth"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={dob}
                          onSelect={setDob}
                          disabled={(date) => date > new Date() || date < new Date("1920-01-01")}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                          captionLayout="dropdown-buttons"
                          fromYear={1920}
                          toYear={new Date().getFullYear()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label className="font-heading text-sm flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-primary" /> Birth Time *
                    </Label>
                    <Input name="birth_time" type="time" required className="mt-1.5" />
                    <p className="text-xs text-muted-foreground mt-1">Exact time helps in accurate chart calculation</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="font-heading text-sm flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary" /> Birth Place (City) *
                    </Label>
                    <Input name="birth_place" required placeholder="e.g. New Delhi" className="mt-1.5" maxLength={100} />
                  </div>
                  <div>
                    <Label className="font-heading text-sm flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary" /> Birth State / Country
                    </Label>
                    <Input name="birth_state" placeholder="e.g. Delhi, India" className="mt-1.5" maxLength={100} />
                  </div>
                </div>

                <div>
                  <Label className="font-heading text-sm">Marital Status</Label>
                  <select name="marital_status" className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-body">
                    <option value="">Select (Optional)</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Step 4: Concerns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-10"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-display font-bold">4</span>
                <h2 className="text-xl font-display font-bold">Areas of Concern</h2>
                <span className="text-xs text-muted-foreground font-body ml-1">(Select up to 3)</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {concerns.map((concern) => (
                  <button
                    key={concern}
                    type="button"
                    onClick={() => toggleConcern(concern)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-body transition-all border",
                      selectedConcerns.includes(concern)
                        ? "bg-primary text-primary-foreground border-primary shadow-gold"
                        : "bg-card border-border/50 text-muted-foreground hover:border-primary/30 hover:text-primary"
                    )}
                  >
                    {concern}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 5: Preferred Date & Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-10"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-display font-bold">5</span>
                <h2 className="text-xl font-display font-bold">Preferred Appointment</h2>
              </div>
              <div className="bg-card rounded-xl border border-border/50 p-6 space-y-5">
                <div>
                  <Label className="font-heading text-sm flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-primary" /> Preferred Date *
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full sm:w-[280px] mt-1.5 justify-start text-left font-normal",
                          !preferredDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {preferredDate ? format(preferredDate, "PPP") : "Choose your preferred date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={preferredDate}
                        onSelect={setPreferredDate}
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          return date < today;
                        }}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label className="font-heading text-sm flex items-center gap-1.5 mb-2">
                    <Clock className="w-3.5 h-3.5 text-primary" /> Preferred Time Slot *
                  </Label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "px-3 py-2.5 rounded-lg text-xs font-body transition-all border text-center",
                          selectedTime === time
                            ? "bg-primary text-primary-foreground border-primary shadow-gold"
                            : "bg-background border-border/50 text-muted-foreground hover:border-primary/30 hover:text-primary"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="font-heading text-sm">Consultation Mode *</Label>
                  <div className="flex flex-wrap gap-3 mt-1.5">
                    {["Phone Call", "WhatsApp Video", "In-Person (Delhi)"].map((mode) => (
                      <label key={mode} className="flex items-center gap-2 p-3 rounded-lg border border-border/50 hover:border-primary/30 cursor-pointer transition-colors">
                        <input type="radio" name="consultation_mode" value={mode} required className="accent-primary" defaultChecked={mode === "Phone Call"} />
                        <span className="font-body text-sm">{mode}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 6: Additional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-10"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-display font-bold">6</span>
                <h2 className="text-xl font-display font-bold">Additional Information</h2>
              </div>
              <div className="bg-card rounded-xl border border-border/50 p-6 space-y-5">
                <div>
                  <Label className="font-heading text-sm">Your Questions / Specific Concerns</Label>
                  <Textarea
                    name="questions"
                    placeholder="Share any specific questions or topics you'd like the astrologer to focus on..."
                    rows={4}
                    className="mt-1.5"
                    maxLength={1000}
                  />
                </div>
                <div>
                  <Label className="font-heading text-sm">How did you hear about us?</Label>
                  <select name="referral_source" className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-body">
                    <option value="">Select (Optional)</option>
                    <option value="Instagram">Instagram</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="YouTube">YouTube</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Friend/Family">Friend / Family</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" name="terms_agreed" required className="mt-1 accent-primary" />
                  <span className="text-xs text-muted-foreground font-body">
                    I understand that astrology consultations are for guidance purposes only and agree to the{" "}
                    <a href="/terms-conditions" className="text-primary hover:underline">Terms & Conditions</a> and{" "}
                    <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Submit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full sm:w-auto bg-gradient-gold text-primary-foreground font-display text-sm tracking-wider shadow-glow px-10 py-6"
              >
                {submitting ? "Submitting..." : "Book Appointment"} <Sparkles className="ml-2 w-4 h-4" />
              </Button>
              <p className="text-xs text-muted-foreground font-body text-center sm:text-left">
                Our team will confirm your appointment within 24 hours via call or WhatsApp.
              </p>
            </motion.div>
          </form>
        </div>
      </section>
    </>
  );
}
