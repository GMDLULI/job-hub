import { useRef, useState } from 'react'
import type { Service } from '../SignIn.types'
import { supabase } from '../../../config/SupaBaseConfig'

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
    password: 'temp-password',
    location: '',
    instagram: '',
    twitter: '',
    facebook:''
  })

  const [services, setServices] = useState<Service[]>([
    {
      service: '',
      price: '',
      duration: '',
    },
  ])

  const [images, setImages] = useState<File[]>([])
  const [avatarFile, setAvatar] = useState<File | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)

  const [submitting, setSubmitting] = useState(false)

const handleSubmit = async () => {
  setSubmitting(true)

  try {
    // 1 — Create auth account
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    })
    if (authError) throw authError

    const userId = authData.user!.id

    // 2 — Upload avatar (if one was chosen)
    let avatarUrl = ''
    if (avatarFile) {
      const ext = avatarFile.name.split('.').pop()
      const path = `avatars/${userId}.${ext}`
      const { data: uploaded, error: uploadError } = await supabase.storage
        .from('provider-assets')
        .upload(path, avatarFile, { upsert: true })
      if (uploadError) throw uploadError
      avatarUrl = supabase.storage
        .from('provider-assets')
        .getPublicUrl(uploaded.path).data.publicUrl
    }

    // 3 — Insert provider row
    const { data: provider, error: provError } = await supabase
      .from('providers')
      .insert({
        user_id: userId,
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
    if (provError) throw provError

    // 4 — Insert services (batch insert)
    if (services.length > 0) {
      const { error: svcError } = await supabase.from('services').insert(
        services.map(s => ({
          provider_id: provider.id,
          name: s.service,
          price: s.price,
          duration: s.duration,
        }))
      )
      if (svcError) throw svcError
    }

    // 5 — Upload gallery images and insert rows
    for (const img of images) {
      const path = `gallery/${provider.id}/${Date.now()}-${img.name}`
      const { data: uploaded, error: imgError } = await supabase.storage
        .from('provider-assets')
        .upload(path, img)
      if (imgError) throw imgError
      const url = supabase.storage
        .from('provider-assets')
        .getPublicUrl(uploaded.path).data.publicUrl
      await supabase.from('gallery').insert({ provider_id: provider.id, image_url: url })
    }

    setSubmitted(true)

  } catch (err) {
    console.error('Registration failed:', err)
    setShowError(true)
  } finally {
    setSubmitting(false)
  }
}
  // ── Form field change ──────────────────────────────────────────────────────

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // ── Step navigation ────────────────────────────────────────────────────────

 const handleNext = async (e: React.MouseEvent<HTMLButtonElement>) => {
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
    form.password &&
    form.location
  ) {
    await handleSubmit()
  }
    // Validation failed
    console.log(step)
    setShowError(true);
    return

}

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1))
  }

  // ── Avatar / single image change ───────────────────────────────────────────

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    if (file) {
      console.log(file)
      setAvatar(file)
      setAvatarPreview(URL.createObjectURL(file))
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
    submitting,
    form,
    services,
    images,
    showError,
    avatarPreview,
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