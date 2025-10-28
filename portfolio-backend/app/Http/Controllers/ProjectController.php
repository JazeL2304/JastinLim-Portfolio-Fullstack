<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Untuk sekarang pakai dummy data, nanti bisa diganti dengan:
        // return response()->json(Project::all());
        
        return response()->json([
            'success' => true,
            'data' => [
                [
                    'id' => 1,
                    'title' => 'Portfolio Website',
                    'description' => 'Website portfolio modern dengan React dan Laravel',
                    'tech_stack' => ['React', 'Laravel', 'Tailwind CSS', 'MySQL'],
                    'image' => 'https://via.placeholder.com/400x300',
                    'github_url' => 'https://github.com/yourusername/portfolio',
                    'live_url' => 'https://yourportfolio.com',
                    'created_at' => '2025-01-15'
                ],
                [
                    'id' => 2,
                    'title' => 'E-Commerce Platform',
                    'description' => 'Platform e-commerce dengan fitur payment gateway',
                    'tech_stack' => ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
                    'image' => 'https://via.placeholder.com/400x300',
                    'github_url' => 'https://github.com/yourusername/ecommerce',
                    'live_url' => 'https://yourecommerce.com',
                    'created_at' => '2024-11-20'
                ],
                [
                    'id' => 3,
                    'title' => 'Task Management App',
                    'description' => 'Aplikasi manajemen task dengan real-time collaboration',
                    'tech_stack' => ['React', 'Firebase', 'Material UI'],
                    'image' => 'https://via.placeholder.com/400x300',
                    'github_url' => 'https://github.com/yourusername/taskapp',
                    'live_url' => 'https://yourtaskapp.com',
                    'created_at' => '2024-09-10'
                ]
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Tidak diperlukan untuk API (ini untuk form view di web)
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Nanti untuk create project baru (kalau ada admin panel)
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'tech_stack' => 'required|array',
        ]);

        // Kalau sudah pakai database Model:
        // $project = Project::create($validated);
        // return response()->json($project, 201);

        return response()->json([
            'success' => true,
            'message' => 'Project created successfully'
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        // Untuk sekarang pakai dummy data berdasarkan ID
        // Parameter $project akan otomatis di-bind oleh Laravel (Route Model Binding)
        
        // Tapi karena belum ada data di database, pakai cara manual dulu:
        $id = request()->route('project'); // Ambil ID dari URL
        
        return response()->json([
            'success' => true,
            'data' => [
                'id' => $id,
                'title' => 'Project ' . $id,
                'description' => 'Detail lengkap dari project ' . $id,
                'tech_stack' => ['React', 'Laravel', 'Tailwind CSS'],
                'image' => 'https://via.placeholder.com/800x600',
                'github_url' => 'https://github.com/yourusername/project-' . $id,
                'live_url' => 'https://project' . $id . '.com',
                'features' => [
                    'Responsive design',
                    'Dark mode support',
                    'SEO optimized',
                    'Fast performance'
                ],
                'created_at' => '2024-10-27'
            ]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        // Tidak diperlukan untuk API
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        // Nanti untuk update project (kalau ada admin panel)
        $validated = $request->validate([
            'title' => 'string|max:255',
            'description' => 'string',
            'tech_stack' => 'array',
        ]);

        // Kalau sudah pakai database:
        // $project->update($validated);
        // return response()->json($project);

        return response()->json([
            'success' => true,
            'message' => 'Project updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        // Nanti untuk delete project
        // $project->delete();
        
        return response()->json([
            'success' => true,
            'message' => 'Project deleted successfully'
        ], 204);
    }
}
