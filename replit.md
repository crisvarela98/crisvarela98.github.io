# Portfalio | Cristian Varela

A personal professional portfolio website for Cristian Varela, an Aspiring Cybersecurity Junior Analyst.

## Project Overview

- **Type**: Static Website
- **Languages**: HTML5, CSS3, JavaScript (inline)
- **No build system or package manager** — single `index.html` file

## Structure

- `index.html` — Main (and only) page, contains all HTML, CSS, and JS inline

## Running the Project

The site is served via Python's built-in HTTP server:

```
python3 -m http.server 5000 --bind 0.0.0.0
```

This runs on port 5000 and is configured as the "Start application" workflow.

## Deployment

Configured as a **static** deployment with `publicDir: "."`.
