import React, { useState } from 'react';
import { generateWorkoutPlan } from '../services/geminiService.ts';
import { WorkoutPlan } from '../types.ts';

const h: any = React.createElement;

const AIWorkoutPlanner = () => {
  const [goal, setGoal] = useState('');
  const [level, setLevel] = useState('Beginner');
  const [focus, setFocus] = useState('Full Body');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<WorkoutPlan | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal.trim()) return;
    
    setLoading(true);
    setError(null);
    try {
      const result = await generateWorkoutPlan(goal, level, focus);
      setPlan(result);
    } catch (err) {
      setError('CONNECTION ERROR: THE FORGE IS TEMPORARILY OFFLINE.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return h('div', { className: "max-w-4xl mx-auto px-4" },
    h('div', { className: "bg-brand-secondary/40 border border-white/10 rounded-lg p-8 md:p-12 shadow-2xl relative overflow-hidden" },
      h('div', { className: "absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-3xl -mr-32 -mt-32" }),
      h('div', { className: "relative z-10" },
        h('div', { className: "text-center mb-12" },
          h('span', { className: "text-brand-primary font-black uppercase tracking-[0.4em] text-[10px] block mb-4" }, "AI Forge"),
          h('h2', { className: "text-3xl md:text-5xl font-black font-display text-white italic uppercase tracking-tighter" }, "Custom Blueprint")
        ),
        h('form', { onSubmit: handleSubmit, className: "space-y-8" },
          h('div', { className: "grid md:grid-cols-3 gap-6" },
            h('div', { className: "space-y-2" },
              h('label', { className: "text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1" }, "Objective"),
              h('input', { 
                value: goal, 
                onChange: (e: any) => setGoal(e.target.value),
                className: "w-full bg-black/60 border border-white/10 rounded-sm px-4 py-4 text-white text-sm font-bold focus:border-brand-primary focus:outline-none transition-all",
                placeholder: "E.G. FAT LOSS / HYPERTROPHY"
              })
            ),
            h('div', { className: "space-y-2" },
              h('label', { className: "text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1" }, "Experience"),
              h('select', { 
                value: level, 
                onChange: (e: any) => setLevel(e.target.value),
                className: "w-full bg-black/60 border border-white/10 rounded-sm px-4 py-4 text-white text-sm font-bold focus:border-brand-primary focus:outline-none appearance-none"
              },
                ['Beginner', 'Intermediate', 'Advanced'].map(l => h('option', { key: l, value: l, className: "bg-gray-900" }, l.toUpperCase()))
              )
            ),
            h('div', { className: "space-y-2" },
              h('label', { className: "text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1" }, "Focus Area"),
              h('select', { 
                value: focus, 
                onChange: (e: any) => setFocus(e.target.value),
                className: "w-full bg-black/60 border border-white/10 rounded-sm px-4 py-4 text-white text-sm font-bold focus:border-brand-primary focus:outline-none appearance-none"
              },
                ['Full Body', 'Upper Body', 'Lower Body', 'Core', 'Push/Pull/Legs'].map(f => h('option', { key: f, value: f, className: "bg-gray-900" }, f.toUpperCase()))
              )
            )
          ),
          h('button', { 
            type: "submit", 
            disabled: loading || !goal.trim(),
            className: "w-full py-5 bg-brand-primary hover:bg-red-700 text-white font-black uppercase tracking-[0.3em] transition-all rounded-sm shadow-xl shadow-brand-primary/20 disabled:opacity-30 disabled:cursor-not-allowed"
          }, loading ? "FORGING PROGRAM..." : "GENERATE CUSTOM BLUEPRINT")
        )
      )
    ),
    error && h('div', { className: "mt-6 text-brand-primary text-center font-black uppercase tracking-widest text-[10px] animate-pulse" }, error),
    plan && h('div', { className: "mt-12 bg-black/60 border border-white/10 rounded-lg p-8 md:p-12 animate-fade-in backdrop-blur-md" },
      h('div', { className: "flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4" },
        h('div', null,
          h('span', { className: "text-brand-primary font-black uppercase tracking-widest text-[10px] block mb-2" }, "Verified AI Program"),
          h('h3', { className: "text-3xl font-black text-white italic uppercase tracking-tighter" }, plan.title)
        ),
        h('div', { className: "text-right" },
          h('span', { className: "text-gray-500 font-black uppercase tracking-widest text-[10px]" }, "PROCESSED BY GEMINI 3 PRO")
        )
      ),
      h('div', { className: "grid gap-6 mb-12" },
        plan.exercises.map((ex, i) => h('div', { key: i, className: "group border-l-2 border-brand-primary/20 hover:border-brand-primary pl-8 py-2 transition-all" },
          h('div', { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3" },
            h('h4', { className: "text-xl font-black text-white uppercase tracking-tight group-hover:text-brand-primary transition-colors" }, ex.name),
            h('div', { className: "flex items-center space-x-4" },
              h('div', { className: "px-3 py-1 bg-white/5 border border-white/10 rounded-sm" },
                h('span', { className: "text-gray-400 text-[10px] font-black uppercase tracking-widest mr-2" }, "Sets:"),
                h('span', { className: "text-white font-black" }, ex.sets)
              ),
              h('div', { className: "px-3 py-1 bg-white/5 border border-white/10 rounded-sm" },
                h('span', { className: "text-gray-400 text-[10px] font-black uppercase tracking-widest mr-2" }, "Reps:"),
                h('span', { className: "text-white font-black" }, ex.reps)
              )
            )
          ),
          h('p', { className: "text-gray-400 text-sm leading-relaxed max-w-2xl font-medium" }, ex.description)
        ))
      ),
      h('div', { className: "pt-10 border-t border-white/5" },
        h('h5', { className: "text-white font-black uppercase tracking-[0.2em] text-[10px] mb-6 flex items-center" }, 
          h('span', { className: "w-8 h-px bg-brand-primary mr-3" }), "PERFORMANCE TIPS"
        ),
        h('div', { className: "grid sm:grid-cols-2 gap-4" },
          plan.tips.map((tip, i) => h('div', { key: i, className: "flex items-start space-x-3" },
            h('div', { className: "w-1.5 h-1.5 bg-brand-primary rounded-full mt-1.5 shrink-0" }),
            h('p', { className: "text-gray-400 text-xs font-bold leading-relaxed uppercase tracking-wider" }, tip)
          ))
        )
      )
    )
  );
};

export default AIWorkoutPlanner;