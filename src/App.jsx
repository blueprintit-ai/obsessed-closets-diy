import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Users, 
  Wrench, 
  GraduationCap, 
  Truck, 
  HeadphonesIcon,
  Star,
  ArrowRight,
  Menu,
  X
} from 'lucide-react'
import heroCloset from './assets/hero-closet.jpg'
import organizedCloset from './assets/organized-closet.jpg'
import modernCloset from './assets/modern-closet.webp'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    timeline: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-green-600 text-white p-2 rounded-lg mr-3">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">OC</div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Obsessed Closets</h1>
                <p className="text-sm text-green-600 font-medium">DIY Program</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-green-600 transition-colors">Process</button>
              <button onClick={() => scrollToSection('training')} className="text-gray-700 hover:text-green-600 transition-colors">Training</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-600 transition-colors">Contact</button>
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:8883063077" className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                <Phone className="w-4 h-4 mr-1" />
                (888) 306-3077
              </a>
              <Button onClick={() => scrollToSection('contact')} className="bg-green-600 hover:bg-green-700">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-green-600 transition-colors">Home</button>
                <button onClick={() => scrollToSection('process')} className="text-left text-gray-700 hover:text-green-600 transition-colors">Process</button>
                <button onClick={() => scrollToSection('training')} className="text-left text-gray-700 hover:text-green-600 transition-colors">Training</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-green-600 transition-colors">Contact</button>
                <a href="tel:8883063077" className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  (888) 306-3077
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img 
            src={heroCloset} 
            alt="Beautiful organized closet" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              DIY Your Dream Closet with Expert Guidance
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              Transform your space with our comprehensive DIY program - from design to installation, we guide you every step of the way
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
                onClick={() => scrollToSection('contact')}
              >
                Start Your DIY Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3"
                onClick={() => scrollToSection('process')}
              >
                Learn Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Obsessed Closets DIY?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get professional-quality results with expert support and training. We provide everything you need to create your dream closet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Expert Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Professional consultation and custom design tailored to your space and lifestyle. Our expert designers work with you to create the perfect solution.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Quality Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Same high-quality materials and precision fabrication as our full-service projects. CNC-crafted components built to last.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Comprehensive Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Detailed manuals, instructional videos, and optional in-person training at our Wake Forest, NC facility. We ensure your success.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5-Step Process Section */}
      <section id="process" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your DIY Journey: 5 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We guide you through every phase of your closet transformation, ensuring success at each step.
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <Badge className="bg-green-600 text-white text-lg px-4 py-2 mr-4">Step 1</Badge>
                  <h3 className="text-2xl font-bold text-gray-900">Design Consultation</h3>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  We discuss your closet space(s), take measurements, understand your needs, and begin the design process together. Our expert designers learn about your lifestyle and storage requirements.
                </p>
                <div className="flex items-center text-green-600">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-medium">Expert consultation included</span>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src={organizedCloset} 
                  alt="Design consultation" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <Badge className="bg-green-600 text-white text-lg px-4 py-2 mr-4">Step 2</Badge>
                  <h3 className="text-2xl font-bold text-gray-900">Finalize & Fabricate</h3>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  We finalize your design, select materials and hardware, then fabricate everything at our Wake Forest, NC facility using precision CNC technology and traditional craftsmanship.
                </p>
                <div className="flex items-center text-green-600">
                  <Wrench className="w-5 h-5 mr-2" />
                  <span className="font-medium">Precision fabrication guaranteed</span>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src={modernCloset} 
                  alt="Fabrication process" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <Badge className="bg-green-600 text-white text-lg px-4 py-2 mr-4">Step 3</Badge>
                  <h3 className="text-2xl font-bold text-gray-900">Learn & Prepare</h3>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  Access assembly manuals, instructional videos, and optional in-person training at the Obsessed Closets Lab in Wake Forest, NC. We ensure you're fully prepared for installation.
                </p>
                <div className="flex items-center text-green-600">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  <span className="font-medium">Multiple training options available</span>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-100 rounded-lg p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <GraduationCap className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Training Materials & Videos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <Badge className="bg-green-600 text-white text-lg px-4 py-2 mr-4">Step 4</Badge>
                  <h3 className="text-2xl font-bold text-gray-900">Delivery to You</h3>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  All closet parts, hardware, and accessories are delivered directly to your location, ready for installation. Everything is carefully packaged and labeled for easy identification.
                </p>
                <div className="flex items-center text-green-600">
                  <Truck className="w-5 h-5 mr-2" />
                  <span className="font-medium">Direct delivery to your location</span>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-100 rounded-lg p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Truck className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Professional Delivery Service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <Badge className="bg-green-600 text-white text-lg px-4 py-2 mr-4">Step 5</Badge>
                  <h3 className="text-2xl font-bold text-gray-900">Install with Confidence</h3>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  Tackle the installation knowing we're here to support you every step of the way if you need assistance. Our team is just a phone call away for any questions or guidance.
                </p>
                <div className="flex items-center text-green-600">
                  <HeadphonesIcon className="w-5 h-5 mr-2" />
                  <span className="font-medium">Ongoing support included</span>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-100 rounded-lg p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <HeadphonesIcon className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Expert Support Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Training & Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We ensure you have everything you need to succeed with multiple training options and ongoing support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Assembly Manuals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Detailed step-by-step assembly manuals with clear illustrations and instructions for every component of your closet system.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Video Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional video tutorials showing installation techniques, tips, and best practices from our expert installers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>In-Person Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Optional hands-on training at our Obsessed Closets Lab in Wake Forest, NC. Learn directly from our expert team.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Professional Quality, DIY Satisfaction
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our DIY customers receive the same high-quality materials and precision fabrication as our full-service customers. Every component is crafted with care at our Wake Forest, NC facility.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">CNC-precision fabrication</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Premium materials and hardware</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Custom HDF cabinet doors</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Professional-grade components</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroCloset} 
                alt="Quality craftsmanship" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-green-600 opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Obsessed Closets?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a family-owned business obsessed with quality, craftsmanship, and helping you create the closet of your dreams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Family-Owned</h3>
              <p className="text-gray-600">
                As a family-owned business, we take pride in delivering personalized service and building lasting relationships with our customers.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Wake Forest, NC</h3>
              <p className="text-gray-600">
                Located in Wake Forest, North Carolina, our facility combines traditional craftsmanship with cutting-edge technology.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Obsessed with Quality</h3>
              <p className="text-gray-600">
                We're truly obsessed with every detail, constantly improving and creating spaces that are functional, beautiful, and inspiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your DIY Closet Project?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us today to begin your journey toward the organized, beautiful closet you've always wanted.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Start Your Project Today</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours to discuss your DIY closet project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Describe your closet project..."
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={4}
                    />
                  </div>
                  <div>
                    <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Project Timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2-weeks">1-2 Weeks</SelectItem>
                        <SelectItem value="2-4-weeks">2-4 Weeks</SelectItem>
                        <SelectItem value="4-plus-weeks">4+ Weeks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">(888) 306-3077</p>
                      <p className="text-gray-600">Call us for immediate assistance</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">info@obsessedclosets.com</p>
                      <p className="text-gray-600">Email us your questions</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Wake Forest, NC</p>
                      <p className="text-gray-600">Visit our facility for in-person training</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Why Choose Our DIY Program?</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Professional design consultation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    High-quality materials and fabrication
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Comprehensive training and support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Ongoing assistance throughout installation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-green-600 text-white p-2 rounded-lg mr-3">
                  <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">OC</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Obsessed Closets</h3>
                  <p className="text-green-400 font-medium">DIY Program</p>
                </div>
              </div>
              <p className="text-gray-400">
                Transform your space with expert guidance and professional-quality materials. We're obsessed with helping you create the perfect closet.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (888) 306-3077
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@obsessedclosets.com
                </p>
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Wake Forest, NC
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white transition-colors">Home</button>
                <button onClick={() => scrollToSection('process')} className="block text-gray-400 hover:text-white transition-colors">Our Process</button>
                <button onClick={() => scrollToSection('training')} className="block text-gray-400 hover:text-white transition-colors">Training</button>
                <a href="https://obsessedclosets.com" className="block text-gray-400 hover:text-white transition-colors">Main Website</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Obsessed Closets. All rights reserved. | Family-owned business in Wake Forest, NC</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
