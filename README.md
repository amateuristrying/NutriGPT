# NutriGPT — AI-Powered Health Decision Engine

## Overview

NutriGPT is a next-generation web-based health and nutrition assistant designed to go beyond traditional calorie tracking applications. Instead of merely logging user inputs, NutriGPT acts as an intelligent decision-making system that analyzes user behavior, interprets health data, and provides actionable recommendations in real time.

The core philosophy behind NutriGPT is simple:

> Users should not have to figure out what to do next — the system should tell them.

Unlike existing solutions that rely heavily on manual input and fragmented tools, NutriGPT integrates multiple aspects of health tracking into a unified, AI-driven platform. It combines conversational intelligence, visual tracking, and contextual analysis to deliver a seamless and intuitive experience.

---

## Problem Statement

Current health and fitness applications suffer from several critical limitations:

* Excessive reliance on manual input
* Lack of real-time contextual awareness
* Fragmented tools for BMI, calorie tracking, and workouts
* Limited actionable insights
* Static dashboards without intelligent guidance

These limitations create friction, reduce user engagement, and fail to provide meaningful value in decision-making.

---

## Solution

NutriGPT addresses these gaps by introducing an AI-powered decision engine that:

* Interprets user inputs (text, images, logs)
* Understands behavioral patterns over time
* Generates personalized, actionable recommendations
* Continuously adapts based on user activity and goals

The system is designed to function as a **smart assistant**, not just a tracker.

---

## Key Features

### 1. Conversational AI Assistant (Core Engine)

The chatbot serves as the central interface for user interaction. Users can input queries in natural language, such as:

* "Calculate my BMI"
* "I ate biryani, what should I do now?"
* "Help me lose 10 kg"

The system processes these inputs and provides:

* Health insights
* Calorie estimates
* Personalized recommendations

This feature transforms the experience from passive tracking to active guidance.

---

### 2. Visual Exercise Tracker (Muscle Interaction System)

NutriGPT introduces an interactive body-based tracking system:

* Front and back human body outlines
* Clickable muscle groups
* Exercise logging via modal interface
* Reps and sets tracking

Each muscle group dynamically changes color based on activity intensity:

* No activity → neutral
* Low activity → light highlight
* High activity → strong highlight

This creates a real-time visual representation of physical engagement.

---

### 3. Muscle Activity Monitor

A dedicated monitoring view provides:

* Muscle-wise activity percentages
* Progress bars
* Visual analytics

This helps users identify imbalances and optimize workout routines.

---

### 4. Workout Planner with Intelligent Recommendations

The planner includes:

* Calendar-based workout tracking
* Daily activity logs
* Expandable exercise history

A key feature is the **AI recommendation engine**, which analyzes user activity and suggests:

* Missing muscle groups
* Workout adjustments
* Meal improvements

Example:

> “You have not trained legs in 5 days. Consider adding squats or lunges.”

---

### 5. AI-Powered Meal Logger and Calorie Estimation

Users can:

* Upload meal images
* Scan food in real time
* Log meals for specific dates

Using image recognition and AI inference, NutriGPT:

* Identifies food items
* Estimates portion sizes
* Calculates calories

The system also supports contextual estimation (e.g., multiple items in a single image).

---

### 6. Smart Nutrition Guidance (NutriGPT Recommendations)

Instead of integrating directly with external delivery platforms, the system provides:

* Budget-based meal suggestions
* Goal-oriented food recommendations
* Nutritional balance insights

Example:

> “For a 500 calorie deficit, prefer grilled protein and avoid fried items.”

---

### 7. User Profile and Health Metrics

The profile system includes:

* Height and weight tracking
* BMI calculation
* Body fat estimation
* Daily calorie targets

Users can easily compute and update their metrics within the platform.

---

## System Architecture

NutriGPT follows a modular and scalable architecture:

```
Frontend (React Web App)
       ↓
Backend (Node.js / Serverless APIs)
       ↓
Database (Firestore)
       ↓
AI Layer (Gemini API)
       ↓
Vision Processing (Google Vision API)
```

---

### Frontend

* Built using React (Vite)
* Component-based architecture
* Mobile-first responsive design
* Clean and minimal UI inspired by Apple design principles

---

### Backend

* Node.js-based API layer (or serverless functions)
* Handles:

  * User data processing
  * AI request orchestration
  * Business logic execution

---

### Database

* Firebase Firestore
* Stores:

  * User profiles
  * Exercise logs
  * Meal data
  * Activity history

---

### AI Layer

* Google Gemini API
* Responsible for:

  * Natural language understanding
  * Recommendation generation
  * Contextual reasoning

---

### Vision Layer

* Google Cloud Vision API
* Handles:

  * Food detection
  * Image labeling
  * Input preprocessing for calorie estimation

---

## Deployment Strategy

NutriGPT is deployed using Google Cloud Platform:

* **Cloud Run** for hosting backend services
* **Firebase Hosting** (optional) for frontend
* **Firestore** for database
* **Gemini API** for AI processing
* **Vision API** for image analysis

This ensures:

* Scalability
* Low latency
* High availability

---

## Design Philosophy

The UI is designed with the following principles:

* Minimalism and clarity
* High usability with low cognitive load
* Soft color palette (white + light yellow)
* Structured layouts with clear visual hierarchy
* Mobile-first approach

---

## MVP Scope

The current implementation focuses on:

* Chat interface
* Exercise tracker (basic interaction)
* Meal image upload and estimation
* Profile management

Advanced features such as deep personalization and real-time adaptive recommendations are simulated using AI prompts.

---

## Future Enhancements

* Real-time activity tracking integration (Google Fit / wearables)
* Advanced nutrition modeling
* Automated habit tracking
* Predictive health analytics
* Full integration with food delivery platforms
* Personalized long-term health planning

---

## Assumptions

* Users provide reasonably accurate inputs
* Image-based calorie estimation is approximate
* AI recommendations are advisory, not medical guidance

---

## Evaluation Alignment

This project demonstrates:

* Smart AI-driven assistant design
* Context-aware decision-making
* Integration of Google Cloud services
* Clean and maintainable architecture
* Practical real-world usability


## Conclusion

NutriGPT redefines how users interact with health applications by shifting the paradigm from tracking to decision-making.

By combining AI intelligence, visual interaction, and contextual awareness, it delivers a system that actively guides users toward better health outcomes rather than passively recording their data.

---
