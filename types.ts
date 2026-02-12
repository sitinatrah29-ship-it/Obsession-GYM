
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

export interface WorkoutPlan {
  title: string;
  exercises: {
    name: string;
    sets: number;
    reps: string;
    description: string;
  }[];
  tips: string[];
}
