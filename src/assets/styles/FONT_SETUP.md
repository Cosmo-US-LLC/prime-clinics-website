# Font Setup - Automatic Configuration

## Current Configuration

✅ **Oswald** - Automatically applied to ALL headings (h1, h2, h3, h4, h5, h6)  
✅ **Manrope** - Automatically applied to body text and all other content

## How It Works

The fonts are automatically configured in `src/index.css`:

```css
@layer base {
  body {
    @apply font-sans; /* Manrope */
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-display; /* Oswald */
  }
}
```

## Usage Examples

### Headings (Oswald - Automatic)
```jsx
// No need to add font-display class - it's automatic!
<h1 className="text-4xl font-bold">Main Title</h1>
<h2 className="text-3xl font-semibold">Section Title</h2>
<h3 className="text-2xl font-bold">Subsection</h3>
<h4 className="text-xl font-medium">Minor Heading</h4>
```

### Body Text (Manrope - Automatic)
```jsx
// No need to add font-sans class - it's automatic!
<p>Regular paragraph text</p>
<span>Inline text</span>
<div>Any div content</div>
```

### Override When Needed
```jsx
// If you want Manrope on a heading (rare case)
<h1 className="font-sans">Heading with Manrope</h1>

// If you want Oswald on non-heading (rare case)
<p className="font-display">Paragraph with Oswald</p>
```

## Font Weights Available

### Oswald (Headings)
- `font-light` (200)
- `font-normal` (400)
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)

### Manrope (Body)
- `font-light` (200)
- `font-normal` (400)
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)
- `font-extrabold` (800)

## Best Practices

✅ **Do this:**
```jsx
<h1 className="text-5xl font-bold">Title</h1>
<p className="text-lg">Body text</p>
```

❌ **Don't do this:**
```jsx
<h1 className="text-5xl font-bold font-display">Title</h1> // font-display is redundant
<p className="text-lg font-sans">Body text</p> // font-sans is redundant
```

## Summary

- **Headings** → Oswald (automatic)
- **Everything else** → Manrope (automatic)
- No classes needed unless you want to override!
