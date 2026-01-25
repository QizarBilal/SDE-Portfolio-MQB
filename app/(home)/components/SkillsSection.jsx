"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiPython, SiJavascript, SiTypescript, SiMysql, SiReact, SiNextdotjs, 
  SiFlask, SiTensorflow, SiMongodb, SiPostgresql, SiRedis, SiGit, 
  SiLinux, SiDocker, SiVercel, SiScikitlearn, SiPandas, SiNumpy 
} from 'react-icons/si'
import { HiCode, HiDatabase } from 'react-icons/hi'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const SkillsSection = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'Python', usage: 'Backend APIs, ML pipelines, data processing', icon: SiPython },
        { name: 'JavaScript', usage: 'Frontend logic, Node.js servers, async operations', icon: SiJavascript },
        { name: 'TypeScript', usage: 'Type-safe React apps, reducing runtime errors', icon: SiTypescript },
        { name: 'SQL', usage: 'Complex queries, joins, database optimization', icon: SiMysql }
      ]
    },
    {
      category: 'Core CS Fundamentals',
      skills: [
        { name: 'DSA', usage: 'Algorithm design, time/space complexity analysis', icon: HiCode },
        { name: 'OOP', usage: 'Class hierarchies, design patterns, encapsulation', icon: HiCode },
        { name: 'DBMS', usage: 'Normalization, indexing, transaction management', icon: HiDatabase },
        { name: 'OS Basics', usage: 'Process scheduling, memory management concepts', icon: HiCode }
      ]
    },
    {
      category: 'Frameworks & Libraries',
      skills: [
        { name: 'React', usage: 'Component architecture, state management, hooks', icon: SiReact },
        { name: 'Next.js', usage: 'SSR, routing, API routes, performance optimization', icon: SiNextdotjs },
        { name: 'Flask', usage: 'RESTful APIs, middleware, request handling', icon: SiFlask },
        { name: 'TensorFlow', usage: 'Model training, inference, ML deployment', icon: SiTensorflow }
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', usage: 'Relational data modeling, stored procedures', icon: SiMysql },
        { name: 'MongoDB', usage: 'Document stores, aggregation pipelines', icon: SiMongodb },
        { name: 'PostgreSQL', usage: 'Advanced queries, JSONB, full-text search', icon: SiPostgresql },
        { name: 'Redis', usage: 'Caching layers, session storage, pub/sub', icon: SiRedis }
      ]
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Git', usage: 'Version control, branching strategies, merge conflicts', icon: SiGit },
        { name: 'Linux', usage: 'Command line, scripting, server management', icon: SiLinux },
        { name: 'Docker', usage: 'Containerization, image building, deployment', icon: SiDocker },
        { name: 'Vercel/Netlify', usage: 'CI/CD, serverless functions, edge deployment', icon: SiVercel }
      ]
    },
    {
      category: 'Machine Learning',
      skills: [
        { name: 'Scikit-learn', usage: 'Classification, regression, model evaluation', icon: SiScikitlearn },
        { name: 'Pandas', usage: 'Data cleaning, transformation, analysis', icon: SiPandas },
        { name: 'NumPy', usage: 'Array operations, mathematical computations', icon: SiNumpy },
        { name: 'NLP', usage: 'Text processing, entity recognition, sentiment analysis', icon: HiCode }
      ]
    }
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-7xl w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Engineering <span className="text-gradient-green">Stack</span>
          </h2>
          <p className="text-text-muted text-lg">
            Tools and technologies used for building production systems
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="glass-strong rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-accent-green rounded"></div>
                {category.category}
              </h3>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <skill.icon className="w-5 h-5 text-accent-green group-hover:scale-110 transition-transform flex-shrink-0" />
                      <span className="text-text-primary font-medium group-hover:text-accent-green transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex-1 border-b border-dashed border-white/10"></div>
                    </div>
                    <p className="text-sm text-text-muted pl-8">
                      {skill.usage}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
