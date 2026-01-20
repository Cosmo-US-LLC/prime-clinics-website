function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* Method 1: Using Tailwind font-sans (Manrope) - default */}
        <h1 className="text-4xl font-bold font-sans">
          Prime Clinics Website
        </h1>
        
        {/* Method 2: Using Tailwind font-display (Oswald) */}
        <h2 className="text-3xl font-bold font-display">
          Using Oswald Display Font
        </h2>
        
        {/* Method 3: Explicitly using font-sans (Manrope) */}
        <p className="text-lg text-muted-foreground font-sans">
          Welcome to your new React + Vite + Tailwind + shadcn/ui project
        </p>
        
        {/* Method 4: Different font weights */}
        <div className="space-y-2">
          <p className="font-sans font-light">Light (300) - Manrope</p>
          <p className="font-sans font-normal">Regular (400) - Manrope</p>
          <p className="font-sans font-medium">Medium (500) - Manrope</p>
          <p className="font-sans font-semibold">SemiBold (600) - Manrope</p>
          <p className="font-sans font-bold">Bold (700) - Manrope</p>
          <p className="font-sans font-extrabold">ExtraBold (800) - Manrope</p>
        </div>
        
        {/* Method 5: Using CSS custom property directly */}
        <div style={{ fontFamily: 'var(--font-display)' }} className="text-2xl">
          Direct CSS Variable - Oswald
        </div>
      </div>
    </div>
  );
}

export default Home;
