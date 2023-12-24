<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $v1 = \App\Models\Voters::factory(10)->create(["house_number" => 1]);
        $v2 = \App\Models\Voters::factory(2)->create(["house_number" => 2]);
        $v3 = \App\Models\Voters::factory(5)->create(["house_number" => 3]);
        $v4 = \App\Models\Voters::factory(1)->create(["house_number" => 4]);
        $v5 = \App\Models\Voters::factory(6)->create(["house_number" => 5]);
        $v5 = \App\Models\Voters::factory(4)->create(["house_number" => 6]);
        $v5 = \App\Models\Voters::factory(7)->create(["house_number" => 7]);
        $v5 = \App\Models\Voters::factory(3)->create(["house_number" => 8]);
        $v5 = \App\Models\Voters::factory(4)->create(["house_number" => 9]);
        $v5 = \App\Models\Voters::factory(6)->create(["house_number" => 10]);
        // \App\Models\Voter::class->crea([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        \App\Models\City::create(["name" => "Sorsogon"]);
        \App\Models\Municipality::create(["name" => "Irosin"]);
        \App\Models\Barangay::create(["name" => "Brgy 1", "purok" => 10]);
        \App\Models\Barangay::create(["name" => "Brgy 2", "purok" => 5]);
        \App\Models\Barangay::create(["name" => "Brgy 3", "purok" => 9]);
        \App\Models\Barangay::create(["name" => "Brgy 4", "purok" => 12]);
    }
}
