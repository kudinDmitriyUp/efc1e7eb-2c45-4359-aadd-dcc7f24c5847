"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, Users, Star, HelpCircle, Linkedin, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="medium"
      background="animatedGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="AquaDive"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/scuba-diving-logo-underwater-1764603109225-2bf2295b.jpg"
          logoAlt="AquaDive Center Logo"
          navItems={[
            {"name":"Courses","id":"courses"},
            {"name":"About","id":"about"},
            {"name":"Team","id":"team"},
            {"name":"FAQ","id":"faq"},
            {"name":"Contact","id":"contact"}
          ]}
          button={{
            "text":"Book Now",
            "href":"contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="AQUADIVE"
          description="Explore the underwater world with certified instructors. Professional scuba diving courses for all levels, from beginners to advanced divers."
          buttons={[
            {"text":"Start Diving","href":"courses"},
            {"text":"Learn More","href":"about"}
          ]}
          slides={[
            {"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/underwater-coral-reef-diving-1764603110753-4898a9e9.jpg","imageAlt":"Colorful coral reef with fish"},
            {"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/scuba-diver-underwater-ocean-1764603112260-89d1264a.jpg","imageAlt":"Scuba diver exploring underwater"},
            {"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/tropical-fish-underwater-diving-1764603113791-7124424f.jpg","imageAlt":"Tropical marine life underwater"}
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About AquaDive Center"
          description={[
            "AquaDive Center has been providing world-class scuba diving instruction for over 15 years. We are committed to making diving accessible and safe for everyone, regardless of experience level.",
            "Our certified instructors hold international diving certifications and have logged thousands of hours underwater. We maintain the highest safety standards and use only premium equipment to ensure your diving experience is both thrilling and secure.",
            "Whether you're taking your first breath underwater or seeking advanced technical training, our experienced team will guide you every step of the way."
          ]}
          buttons={[
            {"text":"View Courses","href":"courses"}
          ]}
          showBorder={true}
        />
      </div>

      <div id="courses" data-section="courses">
        <FeatureCardOne
          title="Our Diving Courses"
          description="Professional PADI-certified courses designed for all skill levels. Master the underwater world with hands-on training and expert guidance."
          tag="Certifications"
          tagIcon={Award}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          features={[
            {
              "title":"Open Water Certification",
              "description":"Perfect for beginners. Learn fundamental diving skills in confined water, then advance to open water dives. Complete certification in 3-4 days.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/scuba-diving-instructor-beginner-lesson-1764603115119-d68833f1.jpg",
              "imageAlt":"Beginner scuba diving lesson"
            },
            {
              "title":"Advanced Open Water",
              "description":"Expand your skills and confidence. Develop advanced techniques in deep diving, navigation, and underwater photography with our certified instructors.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/advanced-scuba-diving-underwater-1764603116611-bbfc38a8.jpg",
              "imageAlt":"Advanced diving techniques"
            },
            {
              "title":"Rescue Diver Program",
              "description":"Become a confident rescue diver and help others. Learn emergency protocols, rescue techniques, and CPR certification for complete water safety.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/rescue-diving-safety-equipment-1764603118132-6398f340.jpg",
              "imageAlt":"Rescue diving training"
            }
          ]}
          buttons={[
            {"text":"Book a Course","href":"contact"}
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Our Expert Instructors"
          description="Meet the certified professionals dedicated to making your diving experience unforgettable. Each instructor brings years of expertise and passion for the ocean."
          tag="Certified Professionals"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          members={[
            {
              "id":"1",
              "name":"Marcus Johnson",
              "role":"Head Instructor",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/professional-diver-instructor-portrait-1764603119539-fdee483a.jpg",
              "imageAlt":"Marcus Johnson",
              "socialLinks":[
                {"icon":Linkedin,"url":"https://linkedin.com"},
                {"icon":Mail,"url":"mailto:marcus@aquadive.com"}
              ]
            },
            {
              "id":"2",
              "name":"Sophie Chen",
              "role":"Senior Instructor",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/certified-scuba-instructor-smiling-1764603120844-6c7e9f8c.jpg",
              "imageAlt":"Sophie Chen",
              "socialLinks":[
                {"icon":Linkedin,"url":"https://linkedin.com"},
                {"icon":Mail,"url":"mailto:sophie@aquadive.com"}
              ]
            },
            {
              "id":"3",
              "name":"Rafael Santos",
              "role":"Technical Diving Specialist",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/experienced-diver-diving-professional-1764603122715-104f74ff.jpg",
              "imageAlt":"Rafael Santos",
              "socialLinks":[
                {"icon":Linkedin,"url":"https://linkedin.com"},
                {"icon":Mail,"url":"mailto:rafael@aquadive.com"}
              ]
            },
            {
              "id":"4",
              "name":"Emma Wilson",
              "role":"Safety Coordinator",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/underwater-diving-guide-professional-1764603124461-536891e4.jpg",
              "imageAlt":"Emma Wilson",
              "socialLinks":[
                {"icon":Linkedin,"url":"https://linkedin.com"},
                {"icon":Mail,"url":"mailto:emma@aquadive.com"}
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Divers Say"
          description="Real experiences from our students and certified divers. Their stories inspire us to keep delivering exceptional diving education."
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          testimonials={[
            {
              "id":"1",
              "name":"James Mitchell",
              "role":"Adventure Enthusiast",
              "company":"Tech Startup",
              "rating":5,
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/happy-diver-with-group-underwater-1764603125994-3700aacf.jpg",
              "imageAlt":"James Mitchell diving"
            },
            {
              "id":"2",
              "name":"Lisa Rodriguez",
              "role":"Marine Biologist",
              "company":"Ocean Research Institute",
              "rating":5,
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/scuba-divers-enjoying-dive-trip-1764603127719-31ee3cd4.jpg",
              "imageAlt":"Lisa Rodriguez underwater"
            },
            {
              "id":"3",
              "name":"David Park",
              "role":"Photography Enthusiast",
              "company":"Creative Agency",
              "rating":5,
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/professional-diver-ocean-reef-1764603129387-cdfe9eed.jpg",
              "imageAlt":"David Park diving"
            },
            {
              "id":"4",
              "name":"Anna Mueller",
              "role":"Travel Blogger",
              "company":"Wanderlust Media",
              "rating":5,
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/certified-divers-underwater-adventure-1764603130841-360af658.jpg",
              "imageAlt":"Anna Mueller diving"
            },
            {
              "id":"5",
              "name":"Carlos Gonzalez",
              "role":"Retired Pilot",
              "company":"Adventure Club",
              "rating":5,
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/diving-group-tropical-waters-1764603132223-593f9474.jpg",
              "imageAlt":"Carlos Gonzalez diving"
            },
            {
              "id":"6",
              "name":"Sarah Thompson",
              "role":"Environmental Advocate",
              "company":"Green Living Co",
              "rating":5,
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/underwater-exploration-divers-1764603133497-fa97fc8b.jpg",
              "imageAlt":"Sarah Thompson diving"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about our diving courses, safety practices, and what to expect during your training."
          tag="Help & Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              "id":"1",
              "title":"Do I need any prior diving experience?",
              "content":"No prior experience is required for our Open Water Certification course. Our instructors will teach you everything from the basics in a safe, controlled environment."
            },
            {
              "id":"2",
              "title":"How long does the certification process take?",
              "content":"The Open Water Certification typically takes 3-4 days. We offer flexible scheduling to fit your availability, including weekend and extended courses."
            },
            {
              "id":"3",
              "title":"What is your safety record?",
              "content":"Safety is our top priority. We maintain an excellent safety record with rigorous training protocols, regular equipment inspections, and a maximum student-to-instructor ratio of 4:1."
            },
            {
              "id":"4",
              "title":"What should I bring to my first course?",
              "content":"We provide all necessary diving equipment including wetsuit, tank, and regulator. Just bring a towel, change of clothes, and your certification card if you have previous training."
            },
            {
              "id":"5",
              "title":"Are there age restrictions?",
              "content":"Minimum age for Junior Open Water is 10 years old. Adult certifications require minimum age of 15. There is no maximum age limit for healthy individuals."
            },
            {
              "id":"6",
              "title":"What diving destinations do you recommend?",
              "content":"We organize regular trips to popular dive sites including coral reefs, shipwrecks, and tropical destinations. We can help you plan the perfect diving adventure."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Dive In?"
          description="Contact AquaDive Center to book your course, ask questions, or learn more about our services. Our team will get back to you within 24 hours."
          inputs={[
            {"name":"name","type":"text","placeholder":"Your Full Name","required":true},
            {"name":"email","type":"email","placeholder":"Your Email Address","required":true},
            {"name":"phone","type":"tel","placeholder":"Your Phone Number","required":false},
            {"name":"course","type":"text","placeholder":"Interested Course (e.g., Open Water Certification)","required":true}
          ]}
          textarea={{
            "name":"message",
            "placeholder":"Tell us about your diving goals and any questions...",
            "rows":5,
            "required":true
          }}
          buttonText="Send Inquiry"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              "title":"Quick Links",
              "items":[
                {"label":"Courses","href":"courses"},
                {"label":"Our Team","href":"team"},
                {"label":"FAQ","href":"faq"},
                {"label":"Contact Us","href":"contact"}
              ]
            },
            {
              "title":"Contact Info",
              "items":[
                {"label":"Phone: +1 (555) 123-4567","href":"tel:+15551234567"},
                {"label":"Email: info@aquadive.com","href":"mailto:info@aquadive.com"},
                {"label":"Location: Tropical Island Resort","href":"#"}
              ]
            },
            {
              "title":"Legal",
              "items":[
                {"label":"Privacy Policy","href":"#"},
                {"label":"Terms & Conditions","href":"#"},
                {"label":"Safety Guidelines","href":"#"}
              ]
            }
          ]}
          copyrightText="© 2025 AquaDive Center. All rights reserved. Certified PADI Diving Instruction."
        />
      </div>
    </ThemeProvider>
  );
}