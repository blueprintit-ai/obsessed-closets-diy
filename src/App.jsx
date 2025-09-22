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
    service: '',
    textarea: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbywbmb9MRuExAZGak9H97bIFwrUqFC2CBv_uZPnHOcA-kqFT3Jb16_mpWETs3ocjDsv7g/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        alert('Thank you! We will contact you soon.')
        // Clear the form fields after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          textarea: ''
        })
      } else {
        alert('There was an error submitting the form. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('There was an error submitting the form. Please try again.')
    }
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
                <span className="text-sm font-medium">(919)945-9036</span>
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
                  <span className="text-sm font-medium">(919) 945-9036</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] lg:h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCloset})` }}
        >
          <div className="absolute inset-0 bg-gray-600 opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px
