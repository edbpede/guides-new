# Frontmatter Guide for Starlight MDX

This document details the standard frontmatter fields and their usage for the Astro Starlight MDX content.

## Standard Frontmatter Template

```yaml
---
title: "Page Title"                    # Required - The main title of the page
description: "Brief page description"  # Required - For SEO and page previews
sidebar:
  order: 2                             # Optional - Controls position in sidebar
  label: "Custom Sidebar Label"        # Optional - Different from title if needed
tags: ["category1", "category2"]       # Optional - For content categorization
lastUpdated: true                      # Optional - Shows last updated timestamp
author: "Author Name"                  # Optional - For attribution if needed
---
```

## Frontmatter Field Documentation

### 1. Required Fields

#### title
- The main heading for the page
- Will be used as the HTML <title> element
- Should be clear, concise, and descriptive

#### description
- Brief summary of the page content (2-3 sentences)
- Used for SEO, social media sharing, and search results
- Should be under 160 characters for optimal SEO

### 2. Optional Fields

#### sidebar
- Controls how the page appears in the navigation sidebar
- **order**: Numeric value determining position (lower numbers appear first)
- **label**: Custom text to show in sidebar (if different from title)

#### tags
- Array of category identifiers for content organization
- Useful for content filtering and related page suggestions
- Example: `tags: ["google", "sharing", "permissions"]`

#### lastUpdated
- Boolean value to show/hide the last updated timestamp
- Default is `true` (shows timestamp)
- Set to `false` to hide timestamp

#### author
- Content creator's name for attribution
- Will only be included when specific attribution is needed

## Additional Optional Fields

```yaml
---
editUrl: false               # Disables "Edit page" link
prev: false                  # Disables previous page link
next:
  text: "Custom Next Text"   # Custom text for next page link
  link: "/custom-next-link"  # Custom URL for next page link
---
```

## Examples

### Basic Page

```yaml
---
title: "How to Share Google Documents"
description: "Step-by-step guide for sharing documents in Google Drive with different permission levels."
---
```

### Advanced Configuration

```yaml
---
title: "Configuring OS2faktor on Chromebooks"
description: "Learn how to install and configure OS2faktor authentication on your school Chromebook."
sidebar:
  order: 1
  label: "OS2faktor Setup"
tags: ["os2faktor", "chromebook", "security"]
lastUpdated: true
---
```

### Special Navigation

```yaml
---
title: "Using WeVideo in Skoletube"
description: "Guide to using WeVideo for creating and editing videos in Skoletube."
prev: false
next:
  text: "Saving Your Video"
  link: "/skoletube/oversigt/wevideo/sadan-gemmer-du-din-video/"
---
```
