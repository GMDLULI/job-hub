import { useRef, useState } from 'react'
import type { Service } from '../SignIn.types'
import Supabase, { supabase } from '../../../config/SupaBaseConfig'

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

    // 1. Sign up the user
    const {data : authData, error:authError} = Supabase.auth.getUser()
    if(authError) {
      console.error('Error fetching user:', authError)
      email: form.email
      password:'defaultpassword'
    }
    
    if (authError) { setShowError(true); return; }

      // 2. Upload avatar if present

    let avatarUrl = ''
    if (images.length > 0) {
      const file = images[0]
      const { data } = Supabase.storage
        .from('provider-assets')
        .upload(`avatar/${authData.user!.id}`, file)
      avatarUrl = supabase.storage.from('provider-assets').getPublicUrl(data!.path).data.publicUrl
    setSubmitted(true);
    return;
  }

  // 3. Insert provider row
  const { data: provider, error: provError } = await supabase
    .from('providers')
    .insert({
      user_id: authData.user!.id,
      name: form.fullName,
      title: form.title,
      about: form.about,
      email: form.email,
      phone: form.number,
      location: form.location,
      avatar_url: avatarUrl,
      category: form.service,
    })
    .select()
    .single()
  if (provError) { setShowError(true); return }

    // 4. Insert services
  await supabase.from('services').insert(
    services.map(s => ({
      provider_id: provider.id,
      name: s.service,
      price: s.price,
      duration: s.duration,
    }))
  )

  // 5. Upload gallery images
  for (const img of images) {
    const { data } = await supabase.storage
      .from('provider-assets')
      .upload(`gallery/${provider.id}/${img.name}`, img)
    const url = supabase.storage.from('provider-assets').getPublicUrl(data!.path).data.publicUrl
    await supabase.from('gallery').insert({ provider_id: provider.id, image_url: url })
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