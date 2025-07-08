## Lazy AdSense

A small and fast JavaScript plugin that loads Google AdSense only when the user scrolls or clicks.  
This helps your website load faster and improves Core Web Vitals.

[View Demo](https://mukeshkushwahae.github.io/lazy-adsense/demo/) | [Visit GitHub](https://github.com/mukeshkushwahae/lazy-adsense)

## Features

- Loads AdSense only when user interacts
- Helps with Core Web Vitals and speed
- Optional Publisher ID support
- Uses localStorage to avoid reloading
- No dependencies, just 2KB
- Works on all browsers

## How to Use (Step by Step)

### Option 1: Use via CDN (Recommended)

Use this link from jsDelivr:

```html
<script>
   window.lazyAdClient = "ca-pub-1234567890123456"; // Replace with your ID
</script>
<script src="https://cdn.jsdelivr.net/gh/mukeshkushwahae/lazy-adsense@main/dist/lazy-adsense.min.js" defer></script>
```

Add this before </body> in your HTML file.

### Option 2: Self-Host from GitHub

1. Download or clone the repo:

```bash
git clone https://github.com/mukeshkushwahae/lazy-adsense.git
```

2. Copy the file:

```
dist/lazy-adsense.min.js
```

3. Include it in your page:

```html
<script>
   window.lazyAdClient = "ca-pub-1234567890123456"; // Replace with your ID
</script>
<script src="your-path/lazy-adsense.min.js" defer></script>
```

## How It Works

- When the user scrolls or clicks, AdSense is loaded.
- A value is saved in localStorage so it only loads once.
- If a window.lazyAdClient is set, it adds the client=ca-pub-XXXX to the AdSense script.

## Example HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>Lazy AdSense</title>
</head>
<body>
   <script>
      window.lazyAdClient = "ca-pub-1234567890123456"; // Replace with your ID
   </script>
   <script src="https://cdn.jsdelivr.net/gh/mukeshkushwahae/lazy-adsense@main/dist/lazy-adsense.min.js" defer></script>
</body>
</html>
```

## License

MIT License © [Mukesh Kushwaha](https://github.com/mukeshkushwahae)