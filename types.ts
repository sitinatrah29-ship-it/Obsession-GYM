
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

// Fix: Adding WorkoutPlan and Exercise interfaces to resolve module export errors in related services and components
export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  description: string;
}

export interface WorkoutPlan {
  title: string;
  exercises: Exercise[];
  tips: string[];
}
