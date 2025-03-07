# MD to MDX Conversion Process

This document outlines the process for converting markdown (.md) files from Gitbook to MDX (.mdx) files for Astro Starlight.

## Progress Update (March 7, 2025)

### Completed Tasks
- ✅ Created directory structure in `/src/content/docs/` according to content inventory
- ✅ Set up image directory structure in `/src/assets/images/`
- ✅ Implemented proper frontmatter for all Starlight converted files
- ✅ Migrated and optimized images for all converted sections
- ✅ Added target="_blank" attributes to external links
- ✅ Updated internal links to use the new URL structure
- ✅ Implemented custom styling for external link cards

### Conversion Progress
- **Files Converted**: 20/20
- **Sections Completed**: 7/7
- **Images Migrated**: ~70

### Completed Sections
- ✅ **Google Drev**: Converted directory structure, index files, and guide for document sharing
- ✅ **Meebook**: Converted guide for copying message books to new school years
- ✅ **OS2faktor**: Converted all three guides (installation, usage, and device removal)
- ✅ **Skift-af-koder**: Converted all three guides (uni-login, meddel.dk, and Chromebook)
- ✅ **Skoletube**: Converted all guides including kanaler and WeVideo sections
- ✅ **Gode Links**: Converted link overview with enhanced styling for external links
- ✅ **Loginproblemer**: Converted login guide

## Conversion Pipeline Setup

We are using a semi-automated approach for the conversion process:

1. **Manual Assessment**: Review each file to identify Gitbook-specific syntax and elements
2. **Automated Transformations**: Use text processing for bulk transformations
3. **Manual Refinement**: Review and refine each converted file for quality assurance

## File Conversion Steps

For each source file in the old Gitbook documentation, follow these steps:

### 1. File Preparation

- Create the appropriate directory structure in `/src/content/docs/` as defined in the [content inventory](./01-content-inventory.md)
- Rename the file from `.md` to `.mdx`
- Place the file in its designated directory based on the URL structure

### 2. Frontmatter Conversion

- Remove existing Gitbook frontmatter
- Add standard Starlight frontmatter based on the [frontmatter guide](./03-frontmatter-guide.md)
- Ensure required fields (title, description) are properly populated
- Add sidebar ordering if applicable
- Example:

```yaml
---
title: "How to Share Google Documents"
description: "Step-by-step guide for sharing documents in Google Drive with different permission levels."
sidebar:
  order: 2
lastUpdated: true
---
```

### 3. Content Syntax Transformation

Apply the conversion rules defined in the [conversion rules](./02-conversion-rules.md) document:

#### a. Callouts/Admonitions

Convert Gitbook-style info/warning/danger boxes to Starlight admonitions:

```markdown
# From:
> This is an information box

# To:
:::note
This is an information box
:::
```

#### b. Code Blocks

Ensure code blocks use the appropriate syntax highlighting:

```markdown
# Already compliant format:
```javascript
const code = 'example';
```
```

#### c. Tables

Ensure tables maintain standard markdown format:

```markdown
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
```

#### d. Internal Links

Update internal links to reflect the new URL structure:

```markdown
# From:
[Link text](../folder/page-name.md)

# To:
[Link text](/folder/page-name/)
```

#### e. External Links

Add target attributes to external links:

```markdown
# From:
[Link text](https://example.com)

# To:
[Link text](https://example.com){target="_blank" rel="noopener"}
```

### 4. Image Migration

- Create an organized directory structure in `/src/assets/images/`
- Move images from `.gitbook/assets/` to the appropriate directory in the new structure
- Update image references in the MDX files:

```markdown
# From:
![alt text](../.gitbook/assets/image-name.png)

# To:
![alt text](/src/assets/images/section-name/image-name.png)
```

- For inline HTML images, update paths and classes:

```html
<!-- From: -->
<img src="../.gitbook/assets/image-name.png" alt="" data-size="line">

<!-- To: -->
<img src="/src/assets/images/section-name/image-name.png" alt="" class="inline-image" />
```

### 5. Component Integration

- Identify content patterns that could benefit from Starlight components
- Replace with appropriate components:
  - Use built-in `<Note>`, `<Tip>`, etc. for admonitions
  - Create custom components for specialized content patterns

### 6. Quality Check

For each converted file, verify:

- Frontmatter is correctly formatted
- All internal links work correctly
- Images display properly
- Code blocks have proper syntax highlighting
- Tables render correctly
- Admonitions and other special elements display as expected

## Current Implementation Approach

Our current implementation workflow:

1. **Directory Structure Setup**: Create all necessary directories in `src/content/docs/` and `src/assets/images/`
2. **Image Migration**: Download/copy all images to their respective directories and optimize them
3. **File Conversion**: Convert each markdown file to MDX following Starlight standards
4. **Verification**: Perform quality checks on each converted file

## Next Steps

1. Continue converting remaining files in the following order:
   - Google Drev section
   - Meebook section
   - OS2faktor section
   - Skift-af-koder section
   - Skoletube section
   - Gode Links section

2. Update the astro.config.mjs file to reflect the new navigation structure

3. Create an improved index page for the documentation site

## Example Conversion

### Original Markdown (Gitbook)

```markdown
---
description: How to share documents in Google Drive
---

# Sharing Documents

> Make sure you have edit permissions before sharing.

1. Open your document
2. Click the "Share" button
   ![Share button](../.gitbook/assets/share-button.png)
3. Enter email addresses
4. Choose permission level

See [other Google Drive features](../google-drive/overview.md) for more options.
```

### Converted MDX (Starlight)

```mdx
---
title: "Sharing Documents"
description: "How to share documents in Google Drive"
sidebar:
  order: 1
lastUpdated: true
---

:::note
Make sure you have edit permissions before sharing.
:::

1. Open your document
2. Click the "Share" button
   ![Share button](/src/assets/images/google-drev/share-button.png)
3. Enter email addresses
4. Choose permission level

See [other Google Drive features](/google-drev/oversigt/) for more options.
```
