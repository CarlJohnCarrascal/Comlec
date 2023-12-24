<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class VotersFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // $name = fake()->info
        return [
            'house_number' => 1,
            'purok' => 1,
            'barangay' => 'Brgy 1',
            'municipality' => 'Irosin',
            'city' => 'Sorsogon',
            'fname' => fake()->firstName(),
            'lname' => fake()->lastName(),
            'mname' => fake()->lastName(),
            'suffix' => '',
            'bday' => fake()->date('Y-m-d', '2000-01-01'),
            'mark' => '',
            'gender' => '',
            'status' => '',
            'ishead' => false
        ];
    }
}
