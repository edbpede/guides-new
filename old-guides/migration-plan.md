# Migration Plan: Gitbook to Astro Starlight

## Overview
This document outlines the step-by-step process for migrating content from Gitbook's markdown format to Astro Starlight's MDX format, ensuring proper organization, metadata handling, and feature parity.

## Migration Checklist

### 1. Content Inventory and Structure
- [ ] Create an inventory of all content in old-guides directory
- [ ] Map the current Gitbook structure (from SUMMARY.md) to Starlight's folder structure
- [ ] Design the new navigation structure in Starlight format
- [ ] Create a directory structure plan for /src/content/docs/
- [ ] Decide on URL slugs and permalink strategy

### 2. Content Preparation
- [ ] Identify Gitbook-specific syntax and features used in current documentation
- [ ] Create conversion rules for:
  - [ ] Callouts/admonitions (info, warning, danger boxes)
  - [ ] Code blocks and syntax highlighting
  - [ ] Tables
  - [ ] Images and other assets
  - [ ] Internal links
  - [ ] External links
- [ ] Define standard frontmatter fields for Starlight pages

### 3. Frontmatter and Metadata
- [ ] Create template for standard frontmatter in MDX files
- [ ] Define and document:
  - [ ] title
  - [ ] description
  - [ ] sidebar positioning
  - [ ] tags/categories
  - [ ] last updated information
  - [ ] author information (if needed)

### 4. MD to MDX Conversion Process
- [ ] Set up a conversion pipeline or manual process
- [ ] For each source file:
  - [ ] Rename from .md to .mdx
  - [ ] Add proper frontmatter
  - [ ] Convert Gitbook-specific syntax to MDX/Starlight equivalents
  - [ ] Update internal links to new URL structure
  - [ ] Optimize images and update paths
  - [ ] Test code blocks and syntax highlighting
  - [ ] Add any JSX components as needed

### 5. Starlight-Specific Enhancements
- [ ] Implement Starlight navigation configuration in astro.config.mjs
- [ ] Configure sidebar structure according to design
- [ ] Set up custom components for specific content types
- [ ] Implement language/internationalization if needed
- [ ] Add search functionality configuration
- [ ] Set up content collections schema (if using TypeScript)

### 6. Assets Migration
- [ ] Inventory all images, PDFs, and other assets
- [ ] Create organized assets directory structure
- [ ] Move and rename assets as needed
- [ ] Update all references to assets in MDX files
- [ ] Optimize images for web performance

### 7. Custom Components
- [ ] Identify repetitive content patterns that could benefit from components
- [ ] Create reusable components for:
  - [ ] Custom callouts/admonitions
  - [ ] Interactive elements
  - [ ] Specialized code blocks
  - [ ] Diagrams or visualizations
- [ ] Document how to use these components in MDX

### 8. Quality Assurance
- [ ] Create QA checklist for each migrated document
- [ ] Verify all links (internal and external) work correctly
- [ ] Check rendering of all special elements (code, tables, images)
- [ ] Verify navigation and sidebar structure works as expected
- [ ] Test search functionality with migrated content
- [ ] Cross-browser and mobile testing

### 9. Progressive Migration Strategy
- [ ] Determine migration order (by section or importance)
- [ ] Set up redirect strategy for old URLs (if applicable)
- [ ] Define content freeze period during migration (if needed)
- [ ] Create testing milestones after each section migration

### 10. Documentation and Training
- [ ] Document new content authoring workflow
- [ ] Create style guide for MDX content
- [ ] Document component usage for content authors
- [ ] Create templates for new content
- [ ] Provide examples of complex patterns in MDX

### 11. Tailwind CSS Integration
- [ ] Ensure all styles properly use Tailwind classes
- [ ] Set up custom Tailwind configuration if needed
- [ ] Create utility classes for commonly used styling patterns
- [ ] Document styling guidelines for content authors

### 12. Post-Migration Tasks
- [ ] Implement redirects from old URLs if needed
- [ ] Set up analytics
- [ ] Create content maintenance schedule
- [ ] Review and update broken content

## Implementation Notes

### Starlight Frontmatter Example
```yaml
---
title: Guide Title
description: A brief description of the guide for SEO and display
sidebar:
  order: 2
  label: Custom Sidebar Name (if different from title)
tags: [category1, category2]
lastUpdated: true
---
```

### Folder Structure Example
```
src/content/docs/
├── index.mdx                  # Home page
├── loginproblemer/
│   └── den-bedste-made-at-logge-ind-pa.mdx
├── google-drev/
│   └── oversigt/
│       ├── index.mdx          # Main overview page
│       └── generelt/
│           ├── index.mdx      # Main generelt page
│           └── hvordan-deler-jeg-dokumenter.mdx
├── assets/                    # Shared assets
│   ├── images/
│   ├── downloads/
│   └── videos/
```

### Internal Linking Pattern
From:
```md
[Link text](path/to/page.md)
```

To:
```mdx
<a href="/path/to/page/">Link text</a>
```
Or:
```mdx
[Link text](/path/to/page/)
```

### Common Transformations
| Gitbook Element | Starlight/MDX Equivalent |
|-----------------|--------------------------|
| Info box        | `<Note>Content</Note>` |
| Warning box     | `<Tip type="caution">Content</Tip>` |
| Danger box      | `<Tip type="danger">Content</Tip>` |
| Code tabs       | Custom component |
| Embedded media  | JSX components |
