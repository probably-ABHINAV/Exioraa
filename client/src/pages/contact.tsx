import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Reveal from '@/components/ui/reveal';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import MagneticButton from '@/components/ui/magnetic-button';
import BookCall from '@/components/BookCall';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.string({
    required_error: "Please select a project type",
  }),
  budget: z.string({
    required_error: "Please select a budget range",
  }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  howDidYouHear: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [formStep, setFormStep] = useState(0);
  const [animateExit, setAnimateExit] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      projectType: '',
      budget: '',
      message: '',
      howDidYouHear: '',
    },
    mode: "onChange"
  });
  
  const onSubmit = async (data: FormValues) => {
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: 'Message sent!',
        description: 'We will get back to you soon.',
      });
      form.reset();
      setFormStep(0);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Failed to send message',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    }
  };

  const nextFormStep = async () => {
    const fields = formStep === 0
      ? ["name", "email"] as const
      : ["projectType", "budget"] as const;
    
    const isValid = await form.trigger(fields);
    
    if (isValid) {
      setAnimateExit(true);
      setTimeout(() => {
        setFormStep(step => step + 1);
        setAnimateExit(false);
      }, 300);
    }
  };

  const prevFormStep = () => {
    setAnimateExit(true);
    setTimeout(() => {
      setFormStep(step => step - 1);
      setAnimateExit(false);
    }, 300);
  };
  
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Set page title and meta description
    document.title = 'Contact Us | Exioraa Creative Agency';
  }, []);
  
  return (
    <main className="pt-32">
      <section className="px-8 md:px-16 mb-24">
        <div className="max-w-6xl mx-auto">
          <Reveal width="100%">
            <div className="text-center mb-16">
              <p className="text-primary mb-4">Get In Touch</p>
              <h1 className="text-5xl md:text-6xl font-clash font-bold mb-6">
                Let's Create <span className="text-primary">Something</span> <span className="text-accent">Amazing</span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Ready to transform your brand? Get in touch with us to discuss your project and how we can help bring your vision to life.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <Reveal width="100%" className="lg:col-span-2">
              <div className="space-y-12">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-clash font-semibold mb-6">Our Contact Details</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <i className="ri-mail-line text-primary text-xl"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Email Us</h3>
                        <a href="mailto:xoxogroovy@gmail.com" className="text-white/70 hover:text-primary transition-colors hoverable">
                          xoxogroovy@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <i className="ri-phone-line text-primary text-xl"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Call Us</h3>
                        <a href="tel:+917765999702" className="text-white/70 hover:text-primary transition-colors hoverable">
                          +91 77659 99702
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <i className="ri-map-pin-line text-primary text-xl"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Visit Us</h3>
                        <p className="text-white/70">
                          Online, Greater Noida, Uttar Pradesh, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-clash font-semibold mb-6">Working Hours</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <p>Monday - Friday</p>
                      <p className="text-white/70">9:00 AM - 6:00 PM</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p>Saturday</p>
                      <p className="text-white/70">10:00 AM - 4:00 PM</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p>Sunday</p>
                      <p className="text-white/70">Closed</p>
                    </div>
                  </div>
                </div>

                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112341.55067021841!2d77.38236670532627!3d28.49697080593968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea64b8f89aef%3A0xec0ccabb5317962e!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1747161070584!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{border: 0}}
                    allowFullScreen 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Exioraa office location"
                    className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  ></iframe>
                </div>
              </div>
            </Reveal>
            
            <Reveal width="100%" delay={0.3} className="lg:col-span-3">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-0 right-0 bg-primary/80 text-background px-6 py-2 rounded-bl-xl rounded-tr-xl font-medium">
                  Step {formStep + 1} of 3
                </div>
                
                <h2 className="text-2xl font-clash font-semibold mb-8 mt-4">
                  Let's Discuss Your Project
                </h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className={`transition-all duration-300 ${animateExit ? 'opacity-0 -translate-x-8' : 'opacity-100 translate-x-0'}`}>
                      {formStep === 0 && (
                        <div className="space-y-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Your Name*</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="John Doe" 
                                    className="bg-white/5 border-white/20 focus:border-primary py-6" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address*</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="your@email.com" 
                                    className="bg-white/5 border-white/20 focus:border-primary py-6" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number (Optional)</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="+1 (234) 567-890" 
                                    className="bg-white/5 border-white/20 focus:border-primary py-6" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company (Optional)</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Your Company" 
                                    className="bg-white/5 border-white/20 focus:border-primary py-6" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}
                      
                      {formStep === 1 && (
                        <div className="space-y-8">
                          <FormField
                            control={form.control}
                            name="projectType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>What type of project are you looking for?*</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-white/5 border-white/20 focus:border-primary py-6">
                                      <SelectValue placeholder="Select project type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-background/95 backdrop-blur-md border-white/10">
                                    <SelectItem value="website">Website Design & Development</SelectItem>
                                    <SelectItem value="branding">Branding & Identity</SelectItem>
                                    <SelectItem value="app">Mobile Application</SelectItem>
                                    <SelectItem value="marketing">Digital Marketing</SelectItem>
                                    <SelectItem value="ecommerce">E-commerce Solution</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormLabel>What's your estimated budget?*</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="₹15,000 - ₹30,000" />
                                      </FormControl>
                                      <FormLabel className="font-normal cursor-pointer">
                                        ₹15,000 - ₹30,000
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="₹30,000 - ₹50,000" />
                                      </FormControl>
                                      <FormLabel className="font-normal cursor-pointer">
                                        ₹30,000 - ₹50,000
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="₹50,000 - ₹1,00,000" />
                                      </FormControl>
                                      <FormLabel className="font-normal cursor-pointer">
                                        ₹50,000 - ₹1,00,000
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="₹1,00,000+" />
                                      </FormControl>
                                      <FormLabel className="font-normal cursor-pointer">
                                        ₹1,00,000+
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="howDidYouHear"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>How did you hear about us? (Optional)</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-white/5 border-white/20 focus:border-primary py-6">
                                      <SelectValue placeholder="Select an option" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-background/95 backdrop-blur-md border-white/10">
                                    <SelectItem value="google">Google Search</SelectItem>
                                    <SelectItem value="social">Social Media</SelectItem>
                                    <SelectItem value="referral">Referral</SelectItem>
                                    <SelectItem value="article">Article or Blog Post</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}
                      
                      {formStep === 2 && (
                        <div className="space-y-6">
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Tell us about your project*</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Describe your project, goals, timeline, and any specific requirements..." 
                                    className="bg-white/5 border-white/20 focus:border-primary min-h-[180px]" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                            <h3 className="font-medium text-lg mb-3">Project Summary</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <p className="text-white/50 text-sm">Name</p>
                                <p>{form.watch("name")}</p>
                              </div>
                              <div>
                                <p className="text-white/50 text-sm">Email</p>
                                <p>{form.watch("email")}</p>
                              </div>
                              <div>
                                <p className="text-white/50 text-sm">Project Type</p>
                                <p>{form.watch("projectType")}</p>
                              </div>
                              <div>
                                <p className="text-white/50 text-sm">Budget</p>
                                <p>{form.watch("budget")}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      {formStep > 0 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={prevFormStep}
                          className="border-white/20 hover:bg-white/5"
                        >
                          <i className="ri-arrow-left-line mr-2"></i> Back
                        </Button>
                      )}
                      
                      {formStep === 2 ? (
                        <MagneticButton className="ml-auto">
                          <Button
                            type="submit"
                            className="bg-primary hover:bg-primary/90 text-black font-medium py-6 px-8"
                            disabled={form.formState.isSubmitting}
                          >
                            {form.formState.isSubmitting ? (
                              <span className="flex items-center">
                                Sending... <i className="ri-loader-4-line animate-spin ml-2"></i>
                              </span>
                            ) : (
                              <span className="flex items-center">
                                Submit <i className="ri-send-plane-fill ml-2"></i>
                              </span>
                            )}
                          </Button>
                        </MagneticButton>
                      ) : (
                        <Button
                          type="button"
                          onClick={nextFormStep}
                          className="bg-primary hover:bg-primary/90 text-black font-medium py-6 px-8 ml-auto"
                        >
                          Next <i className="ri-arrow-right-line ml-2"></i>
                        </Button>
                      )}
                    </div>
                  </form>
                </Form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      
      <BookCall />
      
      <section className="py-24 px-8 md:px-16 bg-background/50">
        <Reveal width="100%">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-clash font-bold mb-12">
              Follow Us on Social Media
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: 'instagram', label: 'Instagram' },
                { name: 'twitter-x', label: 'Twitter' },
                { name: 'linkedin', label: 'LinkedIn' },
                { name: 'behance', label: 'Behance' },
                { name: 'dribbble', label: 'Dribbble' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  aria-label={`Visit our ${social.label} page`}
                  className="group"
                >
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white/70 group-hover:text-primary group-hover:border-primary transition-colors hoverable text-2xl">
                    <i className={`ri-${social.name}-line`}></i>
                  </div>
                  <p className="mt-2 text-sm text-white/60 group-hover:text-primary">{social.label}</p>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default Contact;
