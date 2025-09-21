import { useState } from 'react'
import Button from './components/Button'
import Badge from './components/Badge'
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
import heroCloset from './assets/hero-closet-clean.png'
import organizedCloset from './assets/organized-closet-new.jpg'
import modernCloset from './assets/modern-closet.webp'
import qualityCloset from './assets/quality-closet-clean.png'
import ocLogo from './assets/oc-logo-new.png'

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
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you soon.')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={ocLogo} 
                alt="Obsessed Closets Logo" 
                className="h-16 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Process</button>
              <button onClick={() => scrollToSection('training')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Training</button>
              <button onClick={() => scrollToSection('quality')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Quality</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</button>
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center text-blue-600">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">(888) 306-3077</span>
              </div>
              <Button onClick={() => scrollToSection('contact')}>
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
                <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-blue-600 font-medium text-left transition-colors">Process</button>
                <button onClick={() => scrollToSection('training')} className="text-gray-700 hover:text-blue-600 font-medium text-left transition-colors">Training</button>
                <button onClick={() => scrollToSection('quality')} className="text-gray-700 hover:text-blue-600 font-medium text-left transition-colors">Quality</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 font-medium text-left transition-colors">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 font-medium text-left transition-colors">Contact</button>
                <div className="flex items-center text-blue-600 pt-2">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">(888) 306-3077</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCloset})` }}
        >
          <div className="absolute inset-0 bg-blue-600 opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              DIY Closets with Expert Guidance
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              Transform your space with our comprehensive DIY program - from design to installation, we guide you every step of the way
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('process')}
                className="bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-900 border-white"
              >
                Learn Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our DIY Program?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get professional results with expert guidance, quality materials, and comprehensive support throughout your project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Design Consultation</h3>
              <p className="text-gray-600">
                Work directly with our professional designers to create a custom solution that fits your space and lifestyle perfectly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Quality Materials</h3>
              <p className="text-gray-600">
                Receive the same high-quality materials and precision fabrication as our full-service customers, delivered to your door.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Training</h3>
              <p className="text-gray-600">
                Get detailed instructions, video tutorials, and optional in-person training to ensure your installation success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our 5-Step DIY Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final installation, we guide you through every step of creating your dream closet.
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <Badge className="text-lg px-4 py-2 mr-4">Step 1</Badge>
                  <h3 className="text-2xl font-bold text-gray-900">Discovery Call</h3>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  We discuss your closet space(s), understand your needs, and begin the design process together. Our expert designers learn about your desires and storage requirements.
                </p>
                <div className="flex items-center text-blue-600">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-medium">Expert consultation included</span>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src={organizedCloset} 
                  alt="Design consultation" 
                  className="rounded-lg shadow-xl w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <Badge className="text-lg px-4 py-2 mr-4">Step 2</Badge>
                  <h3 className="text-2xl font-bold text-gray-900">Finalize & Fabricate</h3>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  We finalize your design, select materials and hardware, then precision-fabricate everything at our Wake Forest, NC facility using professional-grade equipment.
                </p>
                <div className="flex items-center text-blue-600">
                  <Wrench className="w-5 h-5 mr-2" />
                  <span className="font-medium">CNC precision fabrication</span>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src={modernCloset} 
                  alt="Fabrication process" 
                  className="rounded-lg shadow-xl w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <Badge className="text-lg px-4 py-2 mr-4">Step 3</Badge>
                  <h3 className="text-2xl font-bold text-gray-900">Learn & Prepare</h3>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  Receive comprehensive training through detailed assembly manuals, instructional videos, and optional in-person training at our Obsessed Closets Lab in Wake Forest, NC.
                </p>
                <div className="flex items-center text-blue-600">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  <span className="font-medium">Multiple training options available</span>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-slate-100 rounded-lg p-8 h-64 flex items-center justify-center">
                  <GraduationCap className="w-24 h-24 text-blue-600" />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <Badge className="text-lg px-4 py-2 mr-4">Step 4</Badge>
                  <h3 className="text-2xl font-bold text-gray-900">Delivery to You</h3>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  All closet parts, hardware, and accessories are delivered to your location, ready for installation. Everything is carefully packaged and labeled for easy identification.
                </p>
                <div className="flex items-center text-blue-600">
                  <Truck className="w-5 h-5 mr-2" />
                  <span className="font-medium">Direct delivery to your location</span>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-slate-100 rounded-lg p-8 h-64 flex items-center justify-center">
                  <Truck className="w-24 h-24 text-blue-600" />
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <Badge className="text-lg px-4 py-2 mr-4">Step 5</Badge>
                  <h3 className="text-2xl font-bold text-gray-900">Install with Confidence</h3>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  You tackle the installation with the knowledge that we're here to support you if needed. Our team is available for questions and guidance throughout the process.
                </p>
                <div className="flex items-center text-blue-600">
                  <HeadphonesIcon className="w-5 h-5 mr-2" />
                  <span className="font-medium">Ongoing support available</span>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-slate-100 rounded-lg p-8 h-64 flex items-center justify-center">
                  <HeadphonesIcon className="w-24 h-24 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Support */}
      <section id="training" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Training & Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide multiple ways to ensure you have the knowledge and confidence to complete your installation successfully.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Assembly Manuals</h3>
              <p className="text-gray-600">
                Detailed, step-by-step instructions with clear diagrams and photos to guide you through every aspect of the installation process.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Video Tutorials</h3>
              <p className="text-gray-600">
                Professional video demonstrations showing proper techniques and best practices for installing your specific closet components.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">In-Person Training</h3>
              <p className="text-gray-600">
                Optional hands-on training sessions at our Obsessed Closets Lab in Wake Forest, NC, where you can practice before your home installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section id="quality" className="py-20 bg-white">
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
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">CNC-precision fabrication</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Premium materials and hardware</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Soft Close Hardware</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">24V LED Lighting</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Latest accessories and features in the closet industry</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Professional-grade components</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={qualityCloset} 
                alt="Quality craftsmanship" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About Obsessed Closets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a family-owned business obsessed with creating beautiful, functional storage solutions that transform your daily routine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Obsessed</h3>
              <p className="text-gray-600">
                We're obsessed with quality in every detail, from design to fabrication to installation support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Family Owned</h3>
              <p className="text-gray-600">
                As a family business, we treat every customer like family and stand behind our work with personal commitment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Expertise</h3>
              <p className="text-gray-600">
                Based in Wake Forest, NC, we bring local craftsmanship and personalized service to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Ready to Start Your DIY Journey?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact us today to schedule your discovery call and begin creating the closet of your dreams with expert guidance every step of the way.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">(888) 306-3077</p>
                    <p className="text-gray-600">Monday - Friday, 8AM - 6PM EST</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">info@obsessedclosets.com</p>
                    <p className="text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Wake Forest, NC</p>
                    <p className="text-gray-600">Serving the greater Triangle area</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Free discovery call consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Custom design included</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">No obligation estimate</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className="form-select"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6+months">6+ months</option>
                    <option value="planning">Just planning</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Describe your closet space, goals, and any specific requirements..."
                    rows={4}
                    className="form-textarea"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full"
                >
                  Schedule My Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src={ocLogo} 
                  alt="Obsessed Closets Logo" 
                  className="h-14 w-auto"
                />
              </div>
              <p className="text-gray-400">
                Transform your space with expert guidance and professional-quality materials. We're obsessed with helping you create the perfect closet.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('process')} className="block text-gray-400 hover:text-blue-400 transition-colors">Our Process</button>
                <button onClick={() => scrollToSection('training')} className="block text-gray-400 hover:text-blue-400 transition-colors">Training & Support</button>
                <button onClick={() => scrollToSection('quality')} className="block text-gray-400 hover:text-blue-400 transition-colors">Quality Assurance</button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-blue-400 transition-colors">About Us</button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <p className="text-gray-400">(888) 306-3077</p>
                <p className="text-gray-400">info@obsessedclosets.com</p>
                <p className="text-gray-400">Wake Forest, NC</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Obsessed Closets. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
