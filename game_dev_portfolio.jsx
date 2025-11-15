import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4"
        >
          Game Developer Portfolio
        </motion.h1>
        <p className="text-gray-300 text-lg">
          Showcasing game projects, prototypes, experiments, and interactive experiences.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Example Project Card */}
        <Card className="bg-gray-900 border-gray-800 rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Project Title</h2>
            <p className="text-gray-400 mb-4">
              Short description of the game project. Built with Unity/Godot/etc.
            </p>
            <div className="aspect-video bg-gray-800 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-gray-600 text-sm">Embed iframe or image here</span>
            </div>
            <Button className="w-full">View Project</Button>
          </CardContent>
        </Card>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto mt-24 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 text-lg">
          I'm a game developer with experience in Unity/Godot/etc. I create 2D/3D games, prototypes, and interactive tools.
        </p>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-400 mb-6">Feel free to reach out for collaborations or opportunities.</p>
        <Button>Email Me</Button>
      </section>
    </div>
  );
}
