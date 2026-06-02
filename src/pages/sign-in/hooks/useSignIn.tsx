import { useRef, useState } from 'react'
import type { Service } from '../SignIn.types'

const useSignIn = () => {
  const [step, setStep] = useState<number>(1)
  const [submitted, setSubmitted] = useState(false)
  const [showError, setShowError] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    title: '',
    subject: '',
    service: '',
    about: '',
    number: '0',
    email: '',
    location: '',
  })

  const [services, setServices] = useState<Service[]>([
    {
      service: '',
      price: '',
      duration: '',
    },
  ])

  const [images, setImages] = useState<File[]>([])


  // ── Form field change ──────────────────────────────────────────────────────

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // ── Step navigation ────────────────────────────────────────────────────────

 const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();

  setShowError(false);

  if (
    step === 1 &&
    form.fullName &&
    form.title &&
    form.about
  ) {
    setStep(2);
    return;
  }

  if (
    step === 2 &&
    services.length > 0 &&
    services.every(
      service =>
        service.service &&
        service.price &&
        service.duration
    )
  ) {
    setStep(3);
    return;
  }

  if (step === 3) {
    setStep(4);
    return;
  }

  if (
    step === 4 &&
    form.number &&
    form.email &&
    form.location
  ) {
    setSubmitted(true);
    return;
  }

  // Validation failed
  console.log(step)
  setShowError(true);
};

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1))
  }

  // ── Avatar / single image change ───────────────────────────────────────────

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      console.log(file)
    }
  }

  // ── Gallery ────────────────────────────────────────────────────────────────

 

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) return
    const selectedFiles = Array.from(e.target.files)
    setImages(prev => [...prev, ...selectedFiles])
    e.target.value = ''
  }

  const deleteImage = (index: number): void => {
    setImages(prev => prev.filter((_, i) => i !== index))
  }

  // ── Services ───────────────────────────────────────────────────────────────

  const addService = () => {
    setServices(prev => [...prev, { service: '', price: '', duration: '' }])
  }

  const deleteService = (index: number) => {
    setServices(prev => prev.filter((_, i) => i !== index))
  }

  const handleServiceChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target
    setServices(prev => {
      const updated = [...prev]
      updated[index] = { ...updated[index], [name]: value }
      return updated
    })
  }

  return {
    // state
    step,
    submitted,
    form,
    services,
    images,
    showError,
    // handlers
    handleChange,
    handleNext,
    handleBack,
    handleImageChange,
    handleImageUpload,
    deleteImage,
    addService,
    deleteService,
    handleServiceChange,
  }
}

export default useSignIn