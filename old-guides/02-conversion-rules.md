# Gitbook to Starlight Conversion Rules

This document details the specific conversion rules for migrating content from Gitbook's markdown format to Astro Starlight's MDX format.

## Gitbook-Specific Syntax Identified

After analyzing the current content, we've identified the following Gitbook-specific elements:

1. **Frontmatter** in YAML format with `description` field
2. **Images** with various formats:
   - Standard markdown image syntax: `![alt text](path/to/image.png)`
   - HTML image tags with size attributes: `<img src="path" alt="" data-size="line">`
   - External image URLs with parameters
3. **Internal links** to other markdown files: `[text](../path/to/file.md)`
4. **Numbered lists** with embedded images
5. **Section headers** at various levels
6. **External links** to websites and services

## Conversion Rules

### Frontmatter Conversion

```yaml
# From Gitbook:
---
description: >
  Description text here
---

# To Starlight MDX:
---
title: Page Title
description: Description text here
sidebar:
  order: 2
---
```

### Callouts/Admonitions

While not heavily used in the current content, we'll use Starlight's built-in components:

```markdown
# Info box (blue)
:::note
This is an information box
:::

# Warning/Caution box (yellow)
:::caution
This is a warning box
:::

# Danger box (red)
:::danger
This is a danger box
:::

# Tip box (green)
:::tip
This is a tip box
:::
```

### Code Blocks & Syntax Highlighting

Starlight supports standard markdown code blocks with syntax highlighting:

```markdown
# From Gitbook:
```javascript
const code = 'example';
```

# To Starlight (no change needed):
```javascript
const code = 'example';
```
```

### Tables

Tables will maintain standard markdown format:

```markdown
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
```

### Images and Assets

Images will be migrated to a central `/src/assets/` folder and referenced using relative paths:

```markdown
# From Gitbook:
![alt text](../.gitbook/assets/image-name.png)
<img src="../.gitbook/assets/image-name.png" alt="" data-size="line">

# To Starlight:
![alt text](/src/assets/images/section-name/image-name.png)
<img src="/src/assets/images/section-name/image-name.png" alt="" class="inline-image" />
```

For external image URLs, we'll maintain the original URL when possible or download and store locally if needed.

### Internal Links

Internal links will be updated to reflect the new URL structure:

```markdown
# From Gitbook:
[Link text](../folder/page-name.md)

# To Starlight:
[Link text](/folder/page-name/)
```

### External Links

External links will remain largely unchanged but may include additional attributes for security:

```markdown
# From Gitbook:
[Link text](https://example.com)

# To Starlight:
[Link text](https://example.com){target="_blank" rel="noopener"}
```

### Inline HTML Elements

Where Gitbook uses inline HTML for special formatting, we'll use Starlight/Astro components or CSS classes:

```markdown
# From Gitbook:
<img src="path" alt="" data-size="line">

# To Starlight:
<img src="path" alt="" class="inline-image" />
```

## Standard Frontmatter Fields for Starlight Pages

All MDX pages in Starlight should include these frontmatter fields:

```yaml
---
title: "Page Title" # Required
description: "A brief description for SEO and page previews" # Required
sidebar:
  order: 2 # Optional - controls position in sidebar
  label: "Custom Label" # Optional - different from title
---
```

Additional optional fields:

```yaml
---
lastUpdated: true # Shows last updated timestamp
editUrl: false # Disables "Edit page" link
prev: false # Disables previous page link
next:
  text: "Custom Next Page Text"
  link: "/custom-next-link"
---
```
