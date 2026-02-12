
import React, { useState } from 'react';
import { generateWorkoutPlan } from '../services/geminiService';
import { WorkoutPlan } from '../types';

const AIWorkoutPlanner: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [level, setLevel] = useState('Intermediate');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<WorkoutPlan | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal) return;
    
    setLoading(true);
    setError('');
    setPlan(null);
    
    try {
      const generatedPlan = await generateWorkoutPlan(goal, level);
      setPlan(generatedPlan);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-brand-secondary/80 rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-accent/20 text-brand-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-brand-accent/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              Powered by Gemini AI
            </div>
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              GET YOUR PERSONALIZED <br />
              <span className="text-brand-primary">AI WORKOUT PLAN</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Not sure where to start? Describe your fitness goal and our AI will generate a science-backed mini-session just for you.
            </p>
            
            <form onSubmit={handleGenerate} className="space-y-6">
              <div>
                <label className="block text-gray-300 font-semibold mb-2 text-sm uppercase">Your Goal</label>
                <input
                  type="text"
                  placeholder="e.g. Build massive shoulders, lose 5kg, or improve squat mobility"
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-all"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {['Beginner', 'Intermediate', 'Pro'].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setLevel(lvl)}
                    className={`py-3 rounded-lg font-bold text-sm transition-all ${level === lvl ? 'bg-brand-primary text-white border-brand-primary' : 'bg-black/40 text-gray-400 border border-gray-700 hover:border-gray-500'}`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
              
              <button
                type="submit"
                disabled={loading || !goal}
                className={`w-full py-4 rounded-lg font-bold text-lg uppercase transition-all flex items-center justify-center gap-3 ${loading ? 'bg-gray-700 cursor-not-allowed' : 'bg-brand-primary hover:bg-red-700 text-white shadow-lg shadow-brand-primary/20'}`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : 'Generate My Plan'}
              </button>
            </form>
            
            {error && <p className="mt-4 text-red-500 font-medium">{error}</p>}
          </div>

          <div className="min-h-[400px]">
            {plan ? (
              <div className="bg-black/50 border border-gray-700 rounded-2xl p-6 animate-fade-in">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-display font-bold text-brand-accent">{plan.title}</h3>
                  <span className="bg-brand-primary text-white text-[10px] px-2 py-1 rounded font-black uppercase">Customized</span>
                </div>
                
                <div className="space-y-6">
                  {plan.exercises.map((ex, i) => (
                    <div key={i} className="border-l-4 border-brand-primary pl-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white font-bold">{ex.name}</span>
                        <span className="text-brand-primary text-xs font-bold">{ex.sets} Sets × {ex.reps}</span>
                      </div>
                      <p className="text-gray-400 text-sm leading-snug">{ex.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <h4 className="text-sm font-bold text-gray-200 uppercase mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.582 3.954H18a1 1 0 110 2h-1.464l-1.582 3.954L11 15.677V17a1 1 0 11-2 0v-1.323l-3.954-1.582-1.582-3.954H2a1 1 0 110-2h1.464l1.582-3.954L9 4.323V3a1 1 0 011-1z" />
                    </svg>
                    Trainer Tips
                  </h4>
                  <ul className="space-y-2">
                    {plan.tips.map((tip, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex gap-2">
                        <span className="text-brand-primary">•</span> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="h-full border-2 border-dashed border-gray-700 rounded-2xl flex flex-col items-center justify-center p-8 text-center bg-black/20">
                <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-gray-400 font-display font-bold text-xl mb-2">Ready for Lift Off</h3>
                <p className="text-gray-600 text-sm">Submit your goal to see a personalized session strategy generated instantly by AI.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWorkoutPlanner;
