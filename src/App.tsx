/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Award,
  Sparkles,
  Car,
  Truck,
  Wrench,
  CheckCircle2,
  Clock,
  Star,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Send,
  Calendar,
  ThumbsUp,
  Disc,
  ExternalLink,
  ChevronDown,
  Info
} from 'lucide-react';

// Imported local visual assets generated for Otter Car Detailing
import heroImage from './assets/images/hero_supercar_glow_1791311544501.jpg';
import paintImage from './assets/images/detail_paint_polishing_1791311557785.jpg';
import wheelImage from './assets/images/detail_alloy_wheel_1791311571624.jpg';
import interiorImage from './assets/images/detail_interior_valet_1791311582710.jpg';
import vanImage from './assets/images/detail_van_caravan_1791311593182.jpg';

// Core Business Constants
const PHONE_NUMBER = '07850 238210';
const PHONE_TEL = 'tel:07850238210';
const WHATSAPP_URL = 'https://wa.me/447850238210';
const SERVICE_AREA_MAIN = 'Ottery St Mary & the East Devon area';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeGalleryCategory, setActiveGalleryCategory] = useState<'all' | 'paint' | 'interior' | 'wheels' | 'vans'>('all');
  
  // Quick Booking / Calculator state
  const [selectedVehicle, setSelectedVehicle] = useState<'car' | 'suv' | 'van' | 'caravan'>('car');
  const [selectedPackage, setSelectedPackage] = useState<'valet' | 'paint' | 'wheels' | 'full'>('full');

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleType: 'Car (Hatchback / Saloon)',
    serviceNeeded: 'Full Showroom Detail & Protection',
    location: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Reviews data
  const reviews = [
    {
      name: 'Mark T.',
      location: 'Ottery St Mary',
      vehicle: 'Range Rover Sport',
      rating: 5,
      date: 'March 2026',
      text: 'Otter Car Detailing completely revitalised my Range Rover. Years of harsh car wash swirls vanished after the two-stage machine polish, and the ceramic coating makes water slide right off. Professional, punctual, and worth every penny.'
    },
    {
      name: 'Sarah & Callum L.',
      location: 'Sidmouth',
      vehicle: 'VW Transporter Campervan',
      rating: 5,
      date: 'February 2026',
      text: 'Having a mobile detailer who can handle larger campervans is rare in East Devon! They brought all equipment right to our driveway. Interior upholstery looks fresh and the high-roof paintwork gleams like brand new.'
    },
    {
      name: 'David R.',
      location: 'Honiton',
      vehicle: 'BMW M3 Competition',
      rating: 5,
      date: 'January 2026',
      text: 'The alloy wheel deep clean and caliper treatment alone blew me away. Every single vent and badge was meticulously cleaned with fine brushes. You can see the genuine passion for precision in every square inch.'
    }
  ];

  // Auto-advance reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  // Handle direct WhatsApp generation from calculator
  const handleCalculatorWhatsApp = () => {
    const vehicleNames: Record<string, string> = {
      car: 'Standard Car / Hatchback',
      suv: 'Estate / SUV / 4x4',
      van: 'Commercial Van / Transporter',
      caravan: 'Touring Caravan / Motorhome'
    };
    const packageNames: Record<string, string> = {
      valet: 'Car Valeting (Interior & Exterior)',
      paint: 'Paint Protection & Ceramic Coating',
      wheels: 'Alloy Wheel Care & Caliper Restoration',
      full: 'Full Showroom Precision Detail'
    };
    const text = encodeURIComponent(
      `Hello Otter Car Detailing! I'd like a quote for:\n• Vehicle: ${vehicleNames[selectedVehicle]}\n• Service: ${packageNames[selectedPackage]}\n• Location: East Devon area\nWhen is your earliest available mobile slot?`
    );
    window.open(`${WHATSAPP_URL}?text=${text}`, '_blank');
  };

  // Form submit handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  // Direct WhatsApp from contact form
  const handleFormWhatsApp = () => {
    if (!formData.name) {
      alert('Please enter your name first');
      return;
    }
    const text = encodeURIComponent(
      `Hello Otter Car Detailing!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nVehicle: ${formData.vehicleType}\nService: ${formData.serviceNeeded}\nLocation: ${formData.location || 'East Devon'}\nNotes: ${formData.message || 'Looking for an appointment'}`
    );
    window.open(`${WHATSAPP_URL}?text=${text}`, '_blank');
  };

  // Services detailed data
  const servicesData = [
    {
      id: 'valeting',
      title: 'Car Valeting',
      tagline: 'Interior & Exterior Precision Clean',
      image: interiorImage,
      icon: Sparkles,
      priceGuide: 'From £65',
      timeGuide: '2 - 3.5 Hours',
      features: [
        'Safe multi-stage snow foam & pH-neutral two-bucket wash',
        'Deep chemical decontamination (iron fallout & tar spots)',
        'Full interior vacuum, boot cleaning & dash sanitation',
        'Upholstery steam cleaning & leather conditioning',
        'Hydrophobic glass treatment & satin tyre dress'
      ],
      whatsappMsg: 'Hi Otter Car Detailing, I would like to book a Car Valeting service.'
    },
    {
      id: 'paint-protection',
      title: 'Paint Protection',
      tagline: 'Ceramic Coating, Wax & Sealant',
      image: paintImage,
      icon: ShieldCheck,
      priceGuide: 'From £160',
      timeGuide: '1 - 2 Days',
      features: [
        'Single or multi-stage machine paint correction',
        '90%+ swirl mark, scratch and haze elimination',
        '2 to 5-year ceramic quartz barrier application',
        'Extreme water-beading hydrophobic gloss',
        'UV ray, bird dropping & acid rain protection'
      ],
      whatsappMsg: 'Hi Otter Car Detailing, I am interested in Paint Protection & Ceramic Coating.'
    },
    {
      id: 'wheel-care',
      title: 'Alloy Wheel Care',
      tagline: 'Deep Clean & Restoration',
      image: wheelImage,
      icon: Disc,
      priceGuide: 'From £45',
      timeGuide: '1.5 - 2 Hours',
      features: [
        'Dedicated acid-free iron decontaminating wheel bath',
        'Deep barrel, behind-spoke & hub scrubbing',
        'Brake caliper degrease & high-temp coating',
        'High-gloss ceramic wheel face protection',
        'Non-sling hydrophobic tyre wall nourishment'
      ],
      whatsappMsg: 'Hi Otter Car Detailing, I would like to book Alloy Wheel Care & Detailing.'
    },
    {
      id: 'vans-fleet',
      title: 'Vans & Fleet Services',
      tagline: 'Commercial Vehicles, Caravans & Motorhomes',
      image: vanImage,
      icon: Truck,
      priceGuide: 'Custom Quote',
      timeGuide: 'Half or Full Day',
      features: [
        'High-roof commercial vans, campervans & fleets',
        'Touring caravan & motorhome fiberglass wash & seal',
        'Signwriting vinyl-safe washing & oxidation removal',
        'Heavy-duty cab sanitising & cargo bed pressure wash',
        'On-site fleet maintenance schedules available'
      ],
      whatsappMsg: 'Hi Otter Car Detailing, I would like a quote for Commercial Van / Caravan detailing.'
    }
  ];

  // Gallery items
  const galleryItems = [
    {
      id: 1,
      category: 'paint',
      title: 'Obsidian Black Paint Correction',
      subtitle: '95% Swirl Removal & 3-Year Ceramic Quartz',
      image: paintImage,
      tag: 'Paint Correction'
    },
    {
      id: 2,
      category: 'interior',
      title: 'Executive Leather & Cockpit Restoration',
      subtitle: 'Deep Steam Clean & Matte Leather Finish',
      image: interiorImage,
      tag: 'Interior Valet'
    },
    {
      id: 3,
      category: 'wheels',
      title: 'Diamond-Cut Wheel Decontamination',
      subtitle: 'Iron Fallout Dissolve & Ceramic Rim Seal',
      image: wheelImage,
      tag: 'Wheel Detailing'
    },
    {
      id: 4,
      category: 'vans',
      title: 'Touring Caravan & Commercial Van Protection',
      subtitle: 'High-Gloss Exterior Shield in East Devon',
      image: vanImage,
      tag: 'Vans & Caravans'
    },
    {
      id: 5,
      category: 'paint',
      title: 'Supercar Showroom Mirror Gloss',
      subtitle: 'Hydrophobic Ceramic Beading & Rim Detailing',
      image: heroImage,
      tag: 'Showroom Finish'
    }
  ];

  const filteredGallery = activeGalleryCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeGalleryCategory);

  return (
    <div className="min-h-screen bg-[#050505] text-[#b5b5b5] font-sans relative selection:bg-[#39FF14] selection:text-black">
      
      {/* 1. STICKY NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand Zone */}
          <a href="#" className="flex items-center gap-2 group cursor-pointer">
            <span className="font-heading italic font-extrabold text-2xl sm:text-3xl tracking-wider text-white">
              OTTER <span className="text-[#39FF14] text-glow transition-all duration-300 group-hover:text-[#7CFF2B]">CAR</span> DETAILING
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase">
            <a href="#home" className="text-white hover:text-[#39FF14] transition-colors duration-200">Home</a>
            <a href="#services" className="text-[#b5b5b5] hover:text-[#39FF14] transition-colors duration-200">Services</a>
            <a href="#why-us" className="text-[#b5b5b5] hover:text-[#39FF14] transition-colors duration-200">Why Us</a>
            <a href="#gallery" className="text-[#b5b5b5] hover:text-[#39FF14] transition-colors duration-200">Gallery</a>
            <a href="#reviews" className="text-[#b5b5b5] hover:text-[#39FF14] transition-colors duration-200">Reviews</a>
            <a href="#contact" className="text-[#b5b5b5] hover:text-[#39FF14] transition-colors duration-200">Contact</a>
          </nav>

          {/* Top Actions: Phone & WhatsApp Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-white/90 hover:text-[#39FF14] transition-colors whitespace-nowrap"
              title="Call Otter Car Detailing"
            >
              <Phone className="w-4 h-4 text-[#39FF14]" />
              <span>{PHONE_NUMBER}</span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#39FF14] text-black font-heading italic font-bold text-sm tracking-wider uppercase hover:bg-[#7CFF2B] transition-all duration-200 glow-lime-sm hover:glow-lime whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 text-white hover:text-[#39FF14] hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d0d0d] border-b border-neutral-800 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3 text-base font-medium">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#39FF14] py-1 border-b border-white/5"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#39FF14] py-1 border-b border-white/5"
              >
                Services & Pricing
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#39FF14] py-1 border-b border-white/5"
              >
                Why Choose Us
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#39FF14] py-1 border-b border-white/5"
              >
                Before / After Gallery
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#39FF14] py-1 border-b border-white/5"
              >
                Customer Reviews
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#39FF14] py-1"
              >
                Contact & Booking
              </a>
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={PHONE_TEL}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-neutral-900 border border-neutral-700 text-white font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-[#39FF14]" />
                <span>Call {PHONE_NUMBER}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#39FF14] text-black font-heading italic font-bold tracking-wider uppercase text-sm glow-lime-sm"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Message Now on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative min-h-[90vh] flex items-center pt-8 pb-16 overflow-hidden bg-radial-streak">
        
        {/* Background neon ambient glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#39FF14]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-[#1faa00]/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-[#39FF14]/30 text-xs font-semibold tracking-wider uppercase text-white shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping" />
                <span className="text-[#39FF14]">Ottery St Mary & East Devon Mobile Detailing</span>
              </div>

              {/* Big Headline */}
              <h1 className="font-heading italic font-extrabold text-4xl sm:text-6xl xl:text-7xl uppercase tracking-tight text-white leading-[1.05]">
                PRECISION <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-[#7CFF2B] text-glow">CAR DETAILING</span>
              </h1>

              {/* Tagline & Description */}
              <p className="text-lg sm:text-xl text-[#d4d4d4] font-medium max-w-2xl leading-relaxed">
                Precision Detailing for <span className="text-white font-semibold">Cars, Vans & Caravans</span> – Serving Ottery St Mary & the East Devon area.
              </p>

              <p className="text-sm sm:text-base text-[#999999] max-w-xl">
                We bring master-level machine polishing, multi-year ceramic coatings, deep interior sanitisation, and alloy wheel restoration directly to your doorstep. Fully equipped, self-sufficient mobile service.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#39FF14] text-black font-heading italic font-extrabold text-base sm:text-lg tracking-wider uppercase hover:bg-[#7CFF2B] transition-all duration-300 glow-lime hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-black" />
                  <span>Message Now on WhatsApp</span>
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-neutral-900/80 border border-neutral-700 hover:border-[#39FF14]/60 text-white font-heading italic font-bold text-base sm:text-lg tracking-wider uppercase hover:bg-neutral-800 transition-all duration-300 hover:glow-lime-sm"
                >
                  <span>View Services</span>
                  <ChevronRight className="w-4 h-4 text-[#39FF14]" />
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-neutral-800/80">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[#39FF14]">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-heading italic font-bold text-base text-white">PROFESSIONAL</span>
                  </div>
                  <p className="text-xs text-neutral-400">Master craft standards</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[#39FF14]">
                    <Clock className="w-4 h-4" />
                    <span className="font-heading italic font-bold text-base text-white">RELIABLE</span>
                  </div>
                  <p className="text-xs text-neutral-400">Punctual mobile slots</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[#39FF14]">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-heading italic font-bold text-base text-white">CERAMIC COATING</span>
                  </div>
                  <p className="text-xs text-neutral-400">Multi-year protection</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[#39FF14]">
                    <Star className="w-4 h-4 fill-[#39FF14]" />
                    <span className="font-heading italic font-bold text-base text-white">5-STAR RATED</span>
                  </div>
                  <p className="text-xs text-neutral-400">East Devon verified</p>
                </div>
              </div>
            </div>

            {/* Right Showcase Column: Automotive Silhouette & Visual Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Glowing Outline Ring */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#1faa00] via-[#39FF14] to-[#7CFF2B] opacity-60 blur-md group-hover:opacity-100 transition duration-1000" />

                <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-[#39FF14]/40 shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Otter Car Detailing showroom sports car ceramic mirror gloss finish"
                    referrerPolicy="no-referrer"
                    className="w-full h-[360px] sm:h-[420px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-[#39FF14]/30 flex items-center justify-between">
                    <div>
                      <p className="font-heading italic font-bold text-lg text-white">PRECISION MOBILE UNIT</p>
                      <p className="text-xs text-[#b5b5b5] flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#39FF14]" />
                        <span>Covering Ottery St Mary, Sidmouth & Honiton</span>
                      </p>
                    </div>
                    <a
                      href={PHONE_TEL}
                      className="px-3.5 py-2 rounded-lg bg-[#39FF14] text-black font-bold text-xs uppercase hover:bg-[#7CFF2B] transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                </div>

                {/* Floating Micro Badge */}
                <div className="absolute -top-4 -right-4 bg-black/90 border border-[#39FF14]/50 rounded-xl px-4 py-2.5 shadow-xl hidden sm:flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#39FF14]/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Showroom Results</p>
                    <p className="font-heading italic font-bold text-sm text-white">100% Mobile to Your Door</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="py-24 bg-[#0d0d0d] relative border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#39FF14] font-heading italic font-bold tracking-widest text-sm uppercase">
              MASTER DETAIL PACKAGES
            </span>
            <h2 className="font-heading italic font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
              PRECISION DETAILING <span className="text-[#39FF14] text-glow">SERVICES</span>
            </h2>
            <p className="text-base text-neutral-400">
              Tailored treatments engineered for daily drivers, exotic supercars, commercial vans, and touring caravans throughout East Devon.
            </p>
          </div>

          {/* 4 Glowing Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="rounded-2xl bg-[#111111] border border-neutral-800 hover:border-[#39FF14]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(57,255,20,0.25)] flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Card Image Banner */}
                    <div className="relative h-48 overflow-hidden bg-neutral-950">
                      <img
                        src={service.image}
                        alt={service.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/30" />
                      
                      {/* Service Icon Badge */}
                      <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-[#39FF14]/40 text-[#39FF14]">
                        <IconComp className="w-5 h-5" />
                      </div>

                      {/* Price guide tag */}
                      <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded bg-black/90 border border-neutral-700 text-xs font-bold text-[#39FF14]">
                        {service.priceGuide}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-heading italic font-bold text-2xl text-white group-hover:text-[#39FF14] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-neutral-400 font-medium mt-1">
                          {service.tagline}
                        </p>
                      </div>

                      {/* Estimated Time */}
                      <div className="flex items-center gap-2 text-xs text-neutral-300 bg-neutral-900/80 px-3 py-1.5 rounded-md border border-neutral-800">
                        <Clock className="w-3.5 h-3.5 text-[#39FF14]" />
                        <span>Estimated duration: <strong className="text-white">{service.timeGuide}</strong></span>
                      </div>

                      {/* Checklist */}
                      <ul className="space-y-2 text-xs text-neutral-300">
                        {service.features.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF14] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="p-6 pt-0">
                    <a
                      href={`${WHATSAPP_URL}?text=${encodeURIComponent(service.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-[#39FF14] hover:bg-[#39FF14] text-white hover:text-black font-heading italic font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Estimate Calculator Widget */}
          <div className="mt-16 rounded-2xl bg-neutral-950 border border-neutral-800 p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#39FF14]/5 blur-[90px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-[#39FF14] font-heading italic font-bold text-xs uppercase tracking-wider">
                  QUICK ESTIMATE CALCULATOR
                </span>
                <h3 className="font-heading italic font-extrabold text-2xl sm:text-3xl uppercase text-white">
                  CUSTOMISE YOUR <span className="text-[#39FF14]">VALET & DETAIL</span>
                </h3>
                <p className="text-sm text-neutral-400">
                  Select your vehicle category and service package to see package recommendations and message us directly for confirmed availability.
                </p>
              </div>

              {/* Selector Controls */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block mb-2">
                    1. Select Vehicle Size:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'car', label: 'Car / Hatch' },
                      { id: 'suv', label: 'Estate / SUV' },
                      { id: 'van', label: 'Commercial Van' },
                      { id: 'caravan', label: 'Caravan / Camper' }
                    ].map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVehicle(v.id as any)}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all border ${
                          selectedVehicle === v.id
                            ? 'bg-[#39FF14] text-black border-[#39FF14] glow-lime-sm'
                            : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                        }`}
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block mb-2">
                    2. Select Service Package:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'valet', label: 'Valeting Clean' },
                      { id: 'paint', label: 'Paint & Ceramic' },
                      { id: 'wheels', label: 'Alloy Wheels' },
                      { id: 'full', label: 'Full Showroom' }
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setSelectedPackage(p.id as any)}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all border ${
                          selectedPackage === p.id
                            ? 'bg-[#39FF14] text-black border-[#39FF14] glow-lime-sm'
                            : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 bg-neutral-900/90 p-4 rounded-xl border border-neutral-800">
                  <div className="text-left w-full sm:w-auto">
                    <p className="text-xs text-neutral-400">Guaranteed mobile appointment</p>
                    <p className="font-heading italic font-bold text-lg text-white">
                      Fast slots in Ottery St Mary & East Devon
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleCalculatorWhatsApp}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#39FF14] text-black font-heading italic font-extrabold text-sm uppercase tracking-wider hover:bg-[#7CFF2B] transition-all glow-lime-sm whitespace-nowrap flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" />
                    <span>Get Exact WhatsApp Quote</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section id="why-us" className="py-24 bg-[#050505] relative border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#39FF14] font-heading italic font-bold tracking-widest text-sm uppercase">
              THE OTTER CAR DETAILING STANDARD
            </span>
            <h2 className="font-heading italic font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
              WHY CHOOSE <span className="text-[#39FF14] text-glow">US</span>
            </h2>
            <p className="text-base text-neutral-400">
              We treat every vehicle with uncompromising care, using top-tier chemistry and certified detailing techniques.
            </p>
          </div>

          {/* 5 Icon Badges Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* 1. Professional */}
            <div className="p-6 rounded-2xl bg-[#0d0d0d] border border-neutral-800 hover:border-[#39FF14]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] text-center group">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-neutral-900 border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] mb-4 group-hover:scale-110 group-hover:bg-[#39FF14]/10 transition-all">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-heading italic font-bold text-xl text-white mb-2 group-hover:text-[#39FF14] transition-colors">
                PROFESSIONAL
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Trained in multi-stage paint correction, leather restoration, and streak-free detailing protocols.
              </p>
            </div>

            {/* 2. Reliable */}
            <div className="p-6 rounded-2xl bg-[#0d0d0d] border border-neutral-800 hover:border-[#39FF14]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] text-center group">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-neutral-900 border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] mb-4 group-hover:scale-110 group-hover:bg-[#39FF14]/10 transition-all">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-heading italic font-bold text-xl text-white mb-2 group-hover:text-[#39FF14] transition-colors">
                RELIABLE
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Guaranteed arrival times, prompt WhatsApp confirmation, and respect for your busy calendar.
              </p>
            </div>

            {/* 3. Premium Products */}
            <div className="p-6 rounded-2xl bg-[#0d0d0d] border border-neutral-800 hover:border-[#39FF14]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] text-center group">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-neutral-900 border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] mb-4 group-hover:scale-110 group-hover:bg-[#39FF14]/10 transition-all">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="font-heading italic font-bold text-xl text-white mb-2 group-hover:text-[#39FF14] transition-colors">
                PREMIUM PRODUCTS
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Only pH-neutral snow foams, German machine polishes, and SiO2 quartz ceramic coatings used.
              </p>
            </div>

            {/* 4. Mobile Service */}
            <div className="p-6 rounded-2xl bg-[#0d0d0d] border border-neutral-800 hover:border-[#39FF14]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] text-center group">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-neutral-900 border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] mb-4 group-hover:scale-110 group-hover:bg-[#39FF14]/10 transition-all">
                <Car className="w-7 h-7" />
              </div>
              <h3 className="font-heading italic font-bold text-xl text-white mb-2 group-hover:text-[#39FF14] transition-colors">
                MOBILE SERVICE
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Self-equipped mobile detailing vehicle visiting your driveway, garage, or office anywhere in Devon.
              </p>
            </div>

            {/* 5. Local & Trusted */}
            <div className="p-6 rounded-2xl bg-[#0d0d0d] border border-neutral-800 hover:border-[#39FF14]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] text-center group">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-neutral-900 border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] mb-4 group-hover:scale-110 group-hover:bg-[#39FF14]/10 transition-all">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-heading italic font-bold text-xl text-white mb-2 group-hover:text-[#39FF14] transition-colors">
                LOCAL & TRUSTED
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Proudly based in Ottery St Mary. Longstanding relationships with car enthusiasts and families across the region.
              </p>
            </div>

          </div>

          {/* Regional coverage banner */}
          <div className="mt-12 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading italic font-bold text-lg text-white">
                  Direct Mobile Coverage Across East Devon
                </h4>
                <p className="text-xs text-neutral-400">
                  Ottery St Mary · Sidmouth · Honiton · West Hill · Feniton · Whimple · Exmouth · Axminster · Colyton · Exeter outskirts
                </p>
              </div>
            </div>

            <a
              href={PHONE_TEL}
              className="px-6 py-2.5 rounded-lg bg-neutral-800 hover:bg-[#39FF14] text-white hover:text-black font-semibold text-xs transition-colors whitespace-nowrap flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#39FF14]" />
              <span>Check Slot For Your Postcode</span>
            </a>
          </div>

        </div>
      </section>

      {/* 5. GALLERY & BEFORE / AFTER SHOWCASE */}
      <section id="gallery" className="py-24 bg-[#0d0d0d] relative border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#39FF14] font-heading italic font-bold tracking-widest text-sm uppercase">
              SHOWROOM TRANSFORMATIONS
            </span>
            <h2 className="font-heading italic font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
              BEFORE & AFTER <span className="text-[#39FF14] text-glow">GALLERY</span>
            </h2>
            <p className="text-base text-neutral-400">
              Drag the interactive slider below to see the dramatic contrast between swirled, neglected paintwork and our corrected ceramic finish.
            </p>
          </div>

          {/* Interactive Before & After Slider */}
          <div className="max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden border border-[#39FF14]/40 bg-black relative shadow-2xl select-none">
            
            <div className="relative h-[320px] sm:h-[450px] w-full overflow-hidden">
              
              {/* "After" Image Layer (Full base) */}
              <img
                src={heroImage}
                alt="After Ceramic Coating mirror gloss"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded bg-[#39FF14] text-black font-heading italic font-extrabold text-xs tracking-wider uppercase glow-lime-sm">
                AFTER: CERAMIC SHINE
              </div>

              {/* "Before" Image Layer (Clipped by slider) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={paintImage}
                  alt="Before Machine Polishing with swirl marks"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center max-w-none grayscale contrast-125"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded bg-black/80 border border-neutral-600 text-white font-heading italic font-bold text-xs tracking-wider uppercase">
                  BEFORE: SWIRLS & OXIDATION
                </div>
              </div>

              {/* Draggable Vertical Divider */}
              <div
                className="absolute top-0 bottom-0 z-30 w-1 bg-[#39FF14] cursor-ew-resize glow-lime"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#39FF14] text-black flex items-center justify-center font-bold text-xs shadow-lg glow-lime">
                  <div className="flex gap-0.5">
                    <ChevronLeft className="w-3.5 h-3.5 -mr-1" />
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Range input for smooth touch / mouse drag control */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                aria-label="Before and after transformation slider"
              />
            </div>

            {/* Slider instructions caption */}
            <div className="p-3 bg-neutral-900 text-center text-xs text-neutral-400 border-t border-neutral-800 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#39FF14]" />
              <span>Slide horizontally to inspect paint correction & ceramic coating clarity</span>
            </div>
          </div>

          {/* Gallery Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'paint', label: 'Paint Correction' },
              { id: 'interior', label: 'Interior Valet' },
              { id: 'wheels', label: 'Alloy Wheels' },
              { id: 'vans', label: 'Vans & Caravans' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveGalleryCategory(tab.id as any)}
                className={`px-5 py-2 rounded-lg text-xs font-heading italic font-bold uppercase tracking-wider transition-all ${
                  activeGalleryCategory === tab.id
                    ? 'bg-[#39FF14] text-black glow-lime-sm'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Responsive Gallery Grid with Hover Zoom & Green Overlay */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-[#39FF14]/60 transition-all duration-500 hover:shadow-[0_0_25px_rgba(57,255,20,0.25)]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Neon green overlay reveal */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                
                {/* Thin lime green corner framing accent on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#39FF14]/40 rounded-2xl pointer-events-none transition-colors duration-300" />

                {/* Content info */}
                <div className="absolute bottom-0 inset-x-0 p-5 space-y-1 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-0.5 rounded bg-[#39FF14]/20 border border-[#39FF14]/40 text-[#39FF14] text-[10px] font-bold uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <h4 className="font-heading italic font-bold text-lg text-white group-hover:text-[#39FF14] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS CAROUSEL */}
      <section id="reviews" className="py-24 bg-[#050505] relative border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <span className="text-[#39FF14] font-heading italic font-bold tracking-widest text-sm uppercase">
              LOCAL SATISFACTION
            </span>
            <h2 className="font-heading italic font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
              WHAT OUR <span className="text-[#39FF14] text-glow">CUSTOMERS SAY</span>
            </h2>
            <p className="text-base text-neutral-400">
              Trusted by vehicle owners throughout Ottery St Mary, Sidmouth, Honiton, and surrounding Devon villages.
            </p>
          </div>

          {/* Carousel Card */}
          <div className="rounded-3xl bg-neutral-900/90 border border-neutral-800 p-8 sm:p-12 relative shadow-2xl transition-all">
            
            {/* 5-Star Rating in Neon Green */}
            <div className="flex items-center gap-1.5 mb-6">
              {[...Array(reviews[activeReviewIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#39FF14] text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]"
                />
              ))}
              <span className="ml-2 text-xs font-bold text-white uppercase tracking-wider">
                5.0 Verified Review
              </span>
            </div>

            {/* Review Text */}
            <p className="text-base sm:text-xl text-neutral-200 italic leading-relaxed mb-8">
              "{reviews[activeReviewIndex].text}"
            </p>

            {/* Author Details */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-neutral-800 pt-6">
              <div>
                <p className="font-heading italic font-bold text-lg text-white">
                  {reviews[activeReviewIndex].name}
                </p>
                <p className="text-xs text-neutral-400 flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#39FF14]" />
                  <span>{reviews[activeReviewIndex].location}</span>
                  <span>·</span>
                  <span className="text-neutral-300 font-medium">{reviews[activeReviewIndex].vehicle}</span>
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveReviewIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))}
                  className="p-2.5 rounded-full bg-neutral-800 hover:bg-[#39FF14] text-white hover:text-black transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dot indicators */}
                <div className="flex gap-1.5">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveReviewIndex(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        activeReviewIndex === i ? 'bg-[#39FF14] w-6 glow-lime-sm' : 'bg-neutral-700'
                      }`}
                      aria-label={`Go to review ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveReviewIndex((prev) => (prev + 1) % reviews.length)}
                  className="p-2.5 rounded-full bg-neutral-800 hover:bg-[#39FF14] text-white hover:text-black transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. CALL-TO-ACTION BANNER */}
      <section className="py-20 bg-gradient-to-b from-[#0d0d0d] via-[#111111] to-[#050505] relative border-t border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 bg-radial-streak pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] text-xs font-heading italic font-bold tracking-widest uppercase">
            EAST DEVON MOBILE BOOKINGS
          </span>

          <h2 className="font-heading italic font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-white leading-tight">
            READY FOR A <span className="text-[#39FF14] text-glow">SHOWROOM SHINE?</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
            Book your slot now for precision car valeting, paint correction, or caravan detailing. Quick quotes and friendly advice on WhatsApp.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-[#39FF14] text-black font-heading italic font-extrabold text-lg sm:text-xl tracking-wider uppercase hover:bg-[#7CFF2B] transition-all duration-300 glow-lime hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 fill-black" />
              <span>Chat Now on WhatsApp</span>
            </a>

            <a
              href={PHONE_TEL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-neutral-900 border border-neutral-700 hover:border-[#39FF14] text-white font-heading italic font-bold text-lg uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              <Phone className="w-5 h-5 text-[#39FF14]" />
              <span>Call 07850 238210</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section id="contact" className="py-24 bg-[#0a0a0a] relative border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details & Service Area */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[#39FF14] font-heading italic font-bold tracking-widest text-sm uppercase">
                  GET IN TOUCH
                </span>
                <h2 className="font-heading italic font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white mt-2">
                  CONTACT <span className="text-[#39FF14] text-glow">OTTER CAR DETAILING</span>
                </h2>
                <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
                  Have a question or want to discuss a customized detailing schedule? Message us directly or send an enquiry and we will respond promptly.
                </p>
              </div>

              {/* Action Contact Cards */}
              <div className="space-y-4">
                
                {/* WhatsApp Direct Card */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-[#39FF14] flex items-center justify-between group transition-all glow-lime-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[#39FF14] text-black">
                      <MessageCircle className="w-6 h-6 fill-black" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 uppercase font-semibold">Fastest Response</p>
                      <p className="font-heading italic font-bold text-lg text-white group-hover:text-[#39FF14] transition-colors">
                        WhatsApp (07850 238210)
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#39FF14] group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Direct Phone Card */}
                <a
                  href={PHONE_TEL}
                  className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-[#39FF14] flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-neutral-800 text-[#39FF14] border border-[#39FF14]/30">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 uppercase font-semibold">Click to Call</p>
                      <p className="font-heading italic font-bold text-lg text-white group-hover:text-[#39FF14] transition-colors">
                        07850 238210
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-neutral-500 group-hover:text-[#39FF14] group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Service Area Card */}
                <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-neutral-800 text-[#39FF14] border border-[#39FF14]/30 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 uppercase font-semibold">Mobile Service Area</p>
                      <p className="font-heading italic font-bold text-lg text-white">
                        Ottery St Mary & the East Devon Area
                      </p>
                      <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                        Serving Sidmouth, Honiton, West Hill, Feniton, Whimple, Exmouth, Axminster, Colyton, Cranbrook & broader Devon.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-neutral-800 text-[#39FF14] border border-[#39FF14]/30 shrink-0">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 uppercase font-semibold">Operating Schedule</p>
                      <p className="font-heading italic font-bold text-base text-white">
                        Monday – Saturday: 8:00 AM – 6:00 PM
                      </p>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        Weekend mobile appointments available by advance booking.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Contact / Booking Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-[#111111] border border-neutral-800 p-6 sm:p-10 relative shadow-2xl">
                
                <h3 className="font-heading italic font-extrabold text-2xl uppercase text-white mb-2">
                  BOOK OR REQUEST A <span className="text-[#39FF14]">FREE QUOTE</span>
                </h3>
                <p className="text-xs text-neutral-400 mb-6">
                  Fill in your details below. You can send this instantly via WhatsApp or submit an enquiry.
                </p>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-neutral-900 border border-[#39FF14]/50 text-center space-y-4 animate-in fade-in">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#39FF14]/20 border border-[#39FF14] flex items-center justify-center text-[#39FF14]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-heading italic font-bold text-2xl text-white">
                      ENQUIRY RECEIVED!
                    </h4>
                    <p className="text-sm text-neutral-300 max-w-md mx-auto">
                      Thank you <strong className="text-white">{formData.name}</strong>. We have recorded your request for your <strong className="text-white">{formData.vehicleType}</strong>. We will contact you at <strong className="text-white">{formData.phone}</strong> shortly.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleFormWhatsApp}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#39FF14] text-black font-heading italic font-bold text-sm uppercase glow-lime-sm"
                      >
                        <MessageCircle className="w-4 h-4 fill-black" />
                        <span>Open Details on WhatsApp Now</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Smith"
                          className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1.5">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 07850 123456"
                          className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1.5">
                          Vehicle Make & Model
                        </label>
                        <input
                          type="text"
                          value={formData.vehicleType}
                          onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                          placeholder="e.g. BMW 3 Series / VW Transporter"
                          className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1.5">
                          Location / Postcode (East Devon)
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Ottery St Mary (EX11)"
                          className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] transition-colors"
                      >
                        <option value="Car Valeting (Interior & Exterior)">Car Valeting (Interior & Exterior Clean)</option>
                        <option value="Paint Protection & Ceramic Coating">Paint Protection (Ceramic Coating, Wax & Sealant)</option>
                        <option value="Alloy Wheel Care & Deep Clean">Alloy Wheel Care (Deep Clean & Restoration)</option>
                        <option value="Commercial Vans & Fleet Services">Vans & Fleet Services (Commercials & Caravans)</option>
                        <option value="Full Showroom Detail & Protection">Full Showroom Precision Detail</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1.5">
                        Specific Notes or Preferred Date (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the condition of the vehicle, pet hair, ceramic coating interest, or specific dates..."
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] transition-colors"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="button"
                        onClick={handleFormWhatsApp}
                        className="w-full sm:flex-1 py-3.5 px-4 rounded-xl bg-[#39FF14] hover:bg-[#7CFF2B] text-black font-heading italic font-extrabold text-sm uppercase tracking-wider glow-lime-sm flex items-center justify-center gap-2 transition-all"
                      >
                        <MessageCircle className="w-4 h-4 fill-black" />
                        <span>Send via WhatsApp</span>
                      </button>

                      <button
                        type="submit"
                        className="w-full sm:flex-1 py-3.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-heading italic font-bold text-sm uppercase tracking-wider border border-neutral-600 flex items-center justify-center gap-2 transition-all"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Enquiry</span>
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-[#050505] border-t border-neutral-800 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-800/80">
            
            {/* Col 1: Brand & Tagline */}
            <div className="space-y-4">
              <a href="#" className="inline-block">
                <span className="font-heading italic font-extrabold text-2xl tracking-wider text-white">
                  OTTER <span className="text-[#39FF14]">CAR</span> DETAILING
                </span>
              </a>
              <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                "Precision Detailing for Cars, Vans & Caravans"
              </p>
              <p className="text-xs text-neutral-500">
                Professional, reliable mobile valeting & ceramic coating specialists based in Ottery St Mary.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="px-3 py-1 rounded bg-neutral-900 border border-[#39FF14]/30 text-[#39FF14] text-[11px] font-bold uppercase">
                  Fully Insured
                </div>
                <div className="px-3 py-1 rounded bg-neutral-900 border border-[#39FF14]/30 text-[#39FF14] text-[11px] font-bold uppercase">
                  100% Mobile
                </div>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-3">
              <p className="font-heading italic font-bold text-sm uppercase text-white tracking-wider">
                QUICK NAVIGATION
              </p>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><a href="#home" className="hover:text-[#39FF14] transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-[#39FF14] transition-colors">Services & Pricing</a></li>
                <li><a href="#why-us" className="hover:text-[#39FF14] transition-colors">Why Choose Us</a></li>
                <li><a href="#gallery" className="hover:text-[#39FF14] transition-colors">Before / After Gallery</a></li>
                <li><a href="#reviews" className="hover:text-[#39FF14] transition-colors">Customer Testimonials</a></li>
                <li><a href="#contact" className="hover:text-[#39FF14] transition-colors">Book an Appointment</a></li>
              </ul>
            </div>

            {/* Col 3: Services Summary */}
            <div className="space-y-3">
              <p className="font-heading italic font-bold text-sm uppercase text-white tracking-wider">
                CORE SPECIALISMS
              </p>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li>Car Valeting (Deep Interior & Exterior)</li>
                <li>Paint Protection & Ceramic Coating</li>
                <li>Alloy Wheel Care & Caliper Detailing</li>
                <li>Commercial Vans & Work Fleets</li>
                <li>Touring Caravans & Motorhomes</li>
              </ul>
            </div>

            {/* Col 4: Contact & Area */}
            <div className="space-y-3">
              <p className="font-heading italic font-bold text-sm uppercase text-white tracking-wider">
                DIRECT CONTACT
              </p>
              <p className="text-xs text-neutral-400">
                Phone & WhatsApp: <strong className="text-white block mt-0.5">{PHONE_NUMBER}</strong>
              </p>
              <p className="text-xs text-neutral-400">
                Primary Base: <strong className="text-white block mt-0.5">Ottery St Mary, Devon</strong>
              </p>
              <p className="text-xs text-neutral-400">
                Coverage: <span className="text-neutral-300">East Devon, Sidmouth, Honiton, Exmouth & Exeter</span>
              </p>
              <div className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#39FF14] hover:underline font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Start WhatsApp Conversation &rarr;</span>
                </a>
              </div>
            </div>

          </div>

          {/* Copyright Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
            <p>
              &copy; {new Date().getFullYear()} Otter Car Detailing. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#39FF14]" />
              <span>Precision Detailing for Cars, Vans & Caravans</span>
            </p>
          </div>

        </div>
      </footer>

      {/* 10. FLOATING WHATSAPP BUTTON (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Floating Tooltip Pill */}
        <div className="hidden sm:flex items-center bg-black/90 backdrop-blur-md border border-[#39FF14]/40 px-3.5 py-1.5 rounded-full shadow-xl text-xs font-semibold text-white pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping mr-2" />
          <span>Need a quick quote? Chat on WhatsApp!</span>
        </div>

        {/* Pulsing Glowing Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#39FF14] text-black flex items-center justify-center animate-neon-pulse hover:scale-110 transition-transform duration-300 shadow-2xl focus:outline-none"
          title="Chat with Otter Car Detailing on WhatsApp (07850 238210)"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-black text-black" />
        </a>
      </div>

    </div>
  );
}
