# ============================================================
# NO MORE LATER — COMPLETE PROJECT SETUP
# Step 1: Open PowerShell in the folder where you want the project
# Step 2: Run this command first:
#   npx create-next-app@latest no-more-later --no-typescript --no-tailwind --app --src-dir --no-eslint
# Step 3: cd into the project:
#   cd no-more-later
# Step 4: Run this script:
#   .\setup.ps1
# ============================================================

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  NO MORE LATER — PROJECT SETUP" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# ── INSTALL DEPENDENCIES ──────────────────────────────────
Write-Host "Installing dependencies..." -ForegroundColor Yellow

npm install @supabase/supabase-js resend

Write-Host ""
Write-Host "Dependencies installed." -ForegroundColor Green
Write-Host ""

# ── CREATE FOLDERS ────────────────────────────────────────
Write-Host "Creating folder structure..." -ForegroundColor Yellow

$folders = @(
  "public\images",
  "public\fonts",
  "src\app\(public)\about",
  "src\app\(public)\how-it-works",
  "src\app\(public)\community",
  "src\app\(public)\current-read",
  "src\app\(public)\testimonials",
  "src\app\(public)\faq",
  "src\app\(public)\contact",
  "src\app\(public)\wall",
  "src\app\(public)\wall\[slug]",
  "src\app\nml-studio-x7",
  "src\app\api\contact",
  "src\app\api\posts",
  "src\app\api\book",
  "src\app\api\members",
  "src\app\api\testimonials",
  "src\app\api\announcements",
  "src\components\layout",
  "src\components\sections",
  "src\components\wall",
  "src\components\admin",
  "src\components\ui",
  "src\lib"
)

foreach ($folder in $folders) {
  New-Item -ItemType Directory -Force -Path $folder | Out-Null
  Write-Host "  [OK] $folder" -ForegroundColor Green
}

Write-Host ""

# ── CREATE FILES ──────────────────────────────────────────
Write-Host "Creating files..." -ForegroundColor Yellow

$files = @(
  # Lib
  "src\lib\supabase.js",
  "src\lib\data.js",

  # Root layout and globals
  "src\app\globals.css",
  "src\app\layout.js",
  "src\app\sitemap.js",
  "src\app\robots.js",

  # Public group layout
  "src\app\(public)\layout.js",

  # Pages
  "src\app\(public)\page.js",
  "src\app\(public)\about\page.js",
  "src\app\(public)\how-it-works\page.js",
  "src\app\(public)\community\page.js",
  "src\app\(public)\current-read\page.js",
  "src\app\(public)\testimonials\page.js",
  "src\app\(public)\faq\page.js",
  "src\app\(public)\contact\page.js",
  "src\app\(public)\wall\page.js",
  "src\app\(public)\wall\[slug]\page.js",

  # Admin
  "src\app\nml-studio-x7\page.js",
  "src\app\nml-studio-x7\layout.js",

  # API routes
  "src\app\api\contact\route.js",
  "src\app\api\posts\route.js",
  "src\app\api\book\route.js",
  "src\app\api\members\route.js",
  "src\app\api\testimonials\route.js",
  "src\app\api\announcements\route.js",

  # Layout components
  "src\components\layout\Navbar.js",
  "src\components\layout\Footer.js",

  # Section components
  "src\components\sections\Hero.js",
  "src\components\sections\Stats.js",
  "src\components\sections\AboutSummary.js",
  "src\components\sections\WhatWeDo.js",
  "src\components\sections\CommunityLinks.js",
  "src\components\sections\CurrentReadSection.js",
  "src\components\sections\SuggestionsForm.js",
  "src\components\sections\FinalCTA.js",

  # Wall components
  "src\components\wall\WallFeed.js",
  "src\components\wall\PostCard.js",
  "src\components\wall\ComposeModal.js",
  "src\components\wall\TemplateStudio.js",
  "src\components\wall\StoriesRow.js",
  "src\components\wall\FilterPills.js",
  "src\components\wall\BottomNav.js",

  # Admin components
  "src\components\admin\AdminGate.js",
  "src\components\admin\AdminDashboard.js",
  "src\components\admin\EditBook.js",
  "src\components\admin\EditMembers.js",
  "src\components\admin\ApprovePosts.js",
  "src\components\admin\ManageTestimonials.js",
  "src\components\admin\PushAnnouncement.js",

  # UI components
  "src\components\ui\Button.js",
  "src\components\ui\Toast.js",
  "src\components\ui\Spinner.js",

  # Env file
  ".env.local"
)

foreach ($file in $files) {
  New-Item -ItemType File -Force -Path $file | Out-Null
  Write-Host "  [OK] $file" -ForegroundColor Green
}

Write-Host ""

# ── WRITE ENV TEMPLATE ────────────────────────────────────
Write-Host "Writing .env.local template..." -ForegroundColor Yellow

$env = @"
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
RESEND_API_KEY=your_resend_api_key_here
NML_CONTACT_EMAIL=your_email_here
ADMIN_PASSWORD=your_admin_password_here
"@

Set-Content -Path ".env.local" -Value $env -Encoding UTF8
Write-Host "  [OK] .env.local" -ForegroundColor Green

Write-Host ""

# ── WRITE NEXT CONFIG ─────────────────────────────────────
Write-Host "Writing next.config.js..." -ForegroundColor Yellow

$nextConfig = @"
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-supabase-project.supabase.co'],
  },
}

module.exports = nextConfig
"@

Set-Content -Path "next.config.js" -Value $nextConfig -Encoding UTF8
Write-Host "  [OK] next.config.js" -ForegroundColor Green

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  SETUP COMPLETE" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next step: Tell Claude you are ready for Batch 1." -ForegroundColor White
Write-Host ""