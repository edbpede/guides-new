# Assets Migration

This document details the asset migration process from Gitbook to Astro Starlight.

## Assets Inventory

The migration involved multiple types of assets, primarily images. All assets have been successfully migrated to the new structure.

### Image Assets

Images have been organized into section-specific directories within `/src/assets/images/`:

- `/src/assets/images/gode-links/`
- `/src/assets/images/google-drev/`
- `/src/assets/images/loginproblemer/`
- `/src/assets/images/meebook/`
- `/src/assets/images/os2faktor/`
- `/src/assets/images/skift-af-koder/`
- `/src/assets/images/skoletube/`

Each section directory contains all relevant images for that documentation section, maintaining a clear organizational structure.

### Other Asset Types

A search for other asset types (PDFs, videos, documents) revealed no additional assets requiring migration.

## Assets Directory Structure

The assets structure follows a logical organization pattern:

```
src/assets/
├── edbpede.svg                # Main logo
├── houston.webp               # Starlight mascot
└── images/                    # All documentation images
    ├── gode-links/            # Section-specific images
    ├── google-drev/           # Section-specific images
    ├── loginproblemer/        # Section-specific images
    ├── meebook/               # Section-specific images
    ├── os2faktor/             # Section-specific images
    ├── skift-af-koder/        # Section-specific images
    └── skoletube/             # Section-specific images
```

This structure maintains a clear separation between different content sections, making asset management straightforward.

## Asset Naming Convention

Assets follow a consistent naming convention:

- Section-specific prefix
- Descriptive element name
- Sequential number suffix
- File extension

Example: `login-initial-screen-01.png`

This naming convention ensures:
- Easy identification of which section an asset belongs to
- Clear description of what the asset represents
- Sequential numbering for multiple similar assets
- Original file format preserved

## Asset References in MDX Files

All MDX files have been updated to reference assets using their new paths:

```markdown
![Alt text](/src/assets/images/section-name/image-name.png)
```

These references work correctly with Astro's image handling capabilities.

## Image Optimization

Images have been optimized for web performance:

1. **Format**: Appropriate image formats are used (PNG for screenshots with text, WebP for photos)
2. **Size**: Images are appropriately sized for their display context
3. **Loading**: The OptimizedImage component adds `loading="lazy"` and `decoding="async"` attributes
4. **Quality**: Images maintain sufficient quality while optimizing file size

## Implementation

For displaying images, two approaches are used:

1. **Standard Markdown syntax**:
   ```markdown
   ![Alt text](/src/assets/images/section-name/image-name.png)
   ```

2. **OptimizedImage component** (for more control):
   ```astro
   <OptimizedImage 
     src="/src/assets/images/section-name/image-name.png"
     alt="Description of the image"
     width={800}
     height={600}
   />
   ```

The OptimizedImage component provides additional features like:
- Figure captions from alt text
- Consistent styling
- Lazy loading
- Async decoding

## Migration Complete

All assets have been successfully migrated from the old structure to the new Astro Starlight structure. There are no remaining unmigrated assets.
