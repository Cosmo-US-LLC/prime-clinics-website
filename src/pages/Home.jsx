function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl space-y-8">
        {/* Headings automatically use Oswald */}
        <h1 className="text-5xl font-bold text-center">
          Prime Clinics Website
        </h1>
        
        <h2 className="text-3xl font-semibold">
          Our Services
        </h2>
        
        {/* Body text automatically uses Manrope */}
        <p className="text-lg text-muted-foreground">
          Welcome to Prime Clinics, your trusted healthcare partner. We provide 
          comprehensive medical services with a focus on patient care and comfort.
        </p>
        
        <h3 className="text-2xl font-bold">
          About Us
        </h3>
        
        <p className="text-base leading-relaxed">
          Our team of experienced healthcare professionals is dedicated to providing 
          the highest quality medical care. We use state-of-the-art technology and 
          evidence-based practices to ensure the best outcomes for our patients.
        </p>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">
            Contact Information
          </h4>
          <p className="text-sm">
            Phone: (555) 123-4567 | Email: info@primeclinics.com
          </p>
        </div>
        
        {/* You can still override if needed */}
        <div className="border-t pt-4">
          <p className="text-sm font-medium">
            Note: All headings use Oswald font automatically, while body text uses Manrope.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
