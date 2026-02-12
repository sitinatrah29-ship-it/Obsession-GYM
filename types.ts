
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface TrainingPlan {
  title: string;
  level: string;
  focus: string;
  description: string;
  icon: string;
}

// Exercise interface used within the WorkoutPlan
export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  description: string;
}

// WorkoutPlan interface for structured Gemini AI responses
export interface WorkoutPlan {
  title: string;
  exercises: Exercise[];
  tips: string[];
}
