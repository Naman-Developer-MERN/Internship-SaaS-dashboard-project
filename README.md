# College Management SaaS Dashboard

A modern, fully responsive **College Management Admin Dashboard** built using **React.js + Tailwind CSS + Recharts** with reusable components, dark mode support, and professional SaaS-style UI.

This project is designed to simulate a real-world college ERP/admin panel where admins can manage students, courses, faculty, attendance, fees, and overall analytics from one centralized dashboard.

---

## Live Demo

🔗 Live Project: https://internship-saa-s-dashboard-project.vercel.app/

---

## GitHub Repository

🔗 GitHub Repo: https://github.com/Naman-Developer-MERN/Internship-SaaS-dashboard-project

---

## Features

## Dashboard Analytics

- Reusable Stat Cards
- Student Growth Overview
- Payment Overview
- Courses Overview
- Revenue Insights
- Attendance Overview
- Fees Collection Overview
- Interactive Area, Line, Bar & Donut Charts

---

## Student Management

- Student Records Table
- Attendance Status
- Fee Status
- Student Overview

---

## Course Management

- Course Listing
- Course Duration
- Enrolled Students
- Course Status

---

## Faculty Management

- Faculty Records
- Department Allocation
- Faculty Status

---

## Attendance Module

- Attendance Tracking
- Student Attendance Overview
- Monthly Attendance Summary

---

## Fees & Payments

- Payment Status
- Paid / Pending Fees
- Collection Analytics

---

## Settings

- Dashboard Settings UI
- Theme Preferences
- User Settings

---

## Dark Mode Support

- Fully functional Dark / Light Mode Toggle
- Persistent theme using LocalStorage
- Professional SaaS UI behavior

---

## Fully Responsive Design

Optimized for:

- Mobile Devices
- Tablets
- Laptops
- Desktop Screens

Built with production-style responsive architecture.

---

## Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM

## Charts & UI

- Recharts
- Lucide React Icons

## Deployment

- GitHub
- Vercel

---

## Concepts Practiced

- Reusable Component Architecture
- Dynamic Sidebar Navigation
- Dashboard Layout Systems
- Chart Reusability
- State Management using useState
- Theme Persistence using LocalStorage
- React Router Nested Routing
- Responsive SaaS UI Design
- Production-Level Folder Structure

---

## Folder Structure

```bash
src/
│
├── assets/
│
├── Components/
│   ├── DashLayout.jsx
│   ├── DashNavbar.jsx
│   ├── DashSidebar.jsx
│   ├── DashHome.jsx
│   ├── DashStudent.jsx
│   ├── DashCourse.jsx
│   ├── DashFaculty.jsx
│   ├── DashAttendance.jsx
│   ├── DashFees.jsx
│   └── DashSetting.jsx
│
├── layout/
│   ├── StatCard.jsx
│   ├── CustomAreaChart.jsx
│   ├── CustomBarChart.jsx
│   ├── CustomLineChart.jsx
│   └── CustomPieChart.jsx
│
├── data/
│   ├── studentData.jsx
│   ├── courseData.jsx
│   ├── faculty.jsx
│   ├── attendance.jsx
│   ├── Payment.js
│   └── dashstats.jsx
│
├── DashboardChartsData/
│   ├── studentGrowthMiniChartData.jsx
│   ├── paymentStatusData.jsx
│   ├── topCourseData.jsx
│   ├── revenueMiniChartData.jsx
│   └── attendanceMiniChartData.jsx
│
├── App.jsx
├── main.jsx
└── index.css
