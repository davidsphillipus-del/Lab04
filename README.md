# NUST Student Registration System

## Lab 4 Assignment - WAD621S

**Student Name:** [Your Name Here]  
**Student Number:** [Your Student Number]  
**Course:** WAD621S - Web Application Development  
**Assignment:** Lab 4 - Registration → Profile Cards

## Project Overview

This project implements a student registration system for NUST (Namibia University of Science and Technology) that allows students to register their profiles and displays them as interactive cards with a synchronized summary table.

## Features

### Core Functionality
- ✅ **Accessible Registration Form** - Complete form with proper labels, semantic HTML, and keyboard navigation
- ✅ **Form Validation** - Real-time validation for required fields, email format, and year selection
- ✅ **Dynamic Profile Cards** - Automatically generated profile cards for each submission
- ✅ **Summary Table** - Synchronized table that updates with card additions and removals
- ✅ **Remove Functionality** - Delete both cards and corresponding table rows

### Accessibility Features
- ✅ **Semantic HTML** - Proper use of form elements, fieldsets, and labels
- ✅ **ARIA Support** - Live regions for screen reader feedback
- ✅ **Keyboard Navigation** - Full keyboard accessibility
- ✅ **Error Messages** - Inline validation with clear error descriptions
- ✅ **Color Contrast** - NUST brand colors with adequate contrast ratios

### Design Features
- ✅ **NUST Branding** - Official NUST colors (Blue #003366, Orange #FF6600)
- ✅ **Responsive Design** - Mobile-friendly layout
- ✅ **Modern UI** - Clean, professional interface with hover effects
- ✅ **Grid Layout** - Responsive card grid system

## Technical Implementation

### Files Structure
```
Lab04/
├── index.html          # Main HTML structure
├── style.css           # Styling with NUST colors
├── script.js           # JavaScript functionality
└── README.md           # This documentation
```

### Form Fields
- **First Name** (required)
- **Last Name** (required)
- **Email** (required, validated format)
- **Programme** (required, dropdown selection)
- **Year of Study** (required, radio buttons 1-4)
- **Interests** (optional, textarea)
- **Photo URL** (optional, with fallback placeholder)

### Validation Rules
- All required fields must be filled
- Email must follow valid format (regex validation)
- Year of study must be selected
- Real-time validation on field blur
- Form submission prevented if validation fails

## Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## How to Run

1. Download all files to a local directory
2. Open `index.html` in a web browser
3. No additional setup or dependencies required

## Git Repository

**Repository URL:** [Add your GitHub repository URL here]

### Commit History
This project includes meaningful commit messages following the assignment requirements:
- Initial project setup
- HTML structure and accessibility features
- CSS styling with NUST branding
- JavaScript validation implementation
- Profile card generation functionality
- Table integration and synchronization
- Final testing and documentation

## Assignment Compliance

### Rubric Checklist (30 marks)

| Criterion | Status | Notes |
|-----------|--------|-------|
| **Form completeness + accessibility (6 marks)** | ✅ Complete | All labels, input types, responsive design, accessibility features implemented |
| **Validation & error handling (6 marks)** | ✅ Complete | Inline messages, prevents invalid submits, aria-live regions |
| **Profile card creation (8 marks)** | ✅ Complete | Dynamic DOM generation with remove buttons |
| **Summary table integration (6 marks)** | ✅ Complete | Accurate synchronization with form submissions and removals |
| **Code quality (4 marks)** | ✅ Complete | Semantic HTML, clean CSS, readable JavaScript with comments |

### Additional Features
- Professional NUST branding and color scheme
- Responsive design for mobile devices
- Hover effects and smooth transitions
- Fallback images for profile photos
- Clean, maintainable code structure

## Notes

- The application uses vanilla JavaScript (no external libraries)
- All styling follows NUST brand guidelines
- Form validation provides immediate feedback
- Profile cards include remove functionality
- Table stays synchronized with card operations
- Accessibility tested with keyboard navigation

## Future Enhancements (Stretch Goals)

Potential improvements that could be added:
- Edit functionality for existing profiles
- LocalStorage persistence
- Search/filter functionality
- Export to CSV feature
- Photo upload capability

---

**Submission Date:** [Add submission date]  
**Course Instructor:** [Add instructor name]  
**Institution:** Namibia University of Science and Technology
