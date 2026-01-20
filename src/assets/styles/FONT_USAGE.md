# Font Usage Guide

This project uses two custom fonts:
- **Manrope** - Sans-serif font (default)
- **Oswald** - Display font for headings

## Methods to Use Fonts

### Method 1: Tailwind Classes (Recommended)

#### Using Manrope (Sans-serif - default)
```jsx
// Default - Manrope is already the default font
<p className="text-lg">This uses Manrope</p>

// Explicitly specify
<p className="font-sans">This also uses Manrope</p>
```

#### Using Oswald (Display font)
```jsx
<h1 className="font-display text-4xl">This uses Oswald</h1>
<h2 className="font-display font-bold">Bold Oswald Heading</h2>
```

### Method 2: Font Weights

Both fonts support multiple weights:

```jsx
<p className="font-sans font-light">Light (300)</p>
<p className="font-sans font-normal">Regular (400)</p>
<p className="font-sans font-medium">Medium (500)</p>
<p className="font-sans font-semibold">SemiBold (600)</p>
<p className="font-sans font-bold">Bold (700)</p>
<p className="font-sans font-extrabold">ExtraBold (800)</p>
```

### Method 3: CSS Custom Properties

```jsx
// Using CSS variables
<div style={{ fontFamily: 'var(--font-sans)' }}>Manrope</div>
<div style={{ fontFamily: 'var(--font-display)' }}>Oswald</div>
```

### Method 4: Direct CSS Class

```css
/* In your CSS file */
.my-heading {
  font-family: var(--font-display);
  font-weight: 700;
}

.my-text {
  font-family: var(--font-sans);
}
```

### Method 5: Inline Styles

```jsx
<div style={{ fontFamily: 'Manrope, sans-serif' }}>Manrope</div>
<div style={{ fontFamily: 'Oswald, sans-serif' }}>Oswald</div>
```

## Best Practices

### ✅ Recommended Patterns

```jsx
// Default body text - Manrope is automatic
<p>Regular text uses Manrope</p>

// Headings with Oswald
<h1 className="font-display text-5xl font-bold">Main Title</h1>
<h2 className="font-display text-3xl font-semibold">Section Title</h2>

// Important text with Manrope
<p className="font-sans font-semibold text-lg">Important content</p>
```

### Common Use Cases

```jsx
function MyComponent() {
  return (
    <div>
      {/* Hero section with display font */}
      <h1 className="font-display text-6xl font-bold">
        Welcome to Prime Clinics
      </h1>
      
      {/* Body text with default Manrope */}
      <p className="text-lg mb-4">
        Your trusted healthcare partner
      </p>
      
      {/* Subheading with Manrope */}
      <h2 className="font-sans text-2xl font-semibold">
        Our Services
      </h2>
      
      {/* Mix of fonts */}
      <div className="font-sans">
        <h3 className="font-display text-xl font-bold mb-2">
          Special Offer
        </h3>
        <p className="font-normal">
          Limited time offer with Manrope text
        </p>
      </div>
    </div>
  );
}
```

## Tailwind Configuration

The fonts are configured in `src/index.css`:

```css
@theme inline {
  --font-sans: "Manrope", "Inter", system-ui, sans-serif;
  --font-display: "Oswald", "Manrope", sans-serif;
}
```

This means:
- `font-sans` → Uses Manrope
- `font-display` → Uses Oswald
- Default (no class) → Uses Manrope

## Font Loading

Fonts are loaded via `@font-face` in `src/assets/styles/fonts.css` and are:
- Optimized for web performance
- Use `font-display: swap` for better loading experience
- Support variable fonts (Manrope & Oswald)
- Include static fallbacks for older browsers
