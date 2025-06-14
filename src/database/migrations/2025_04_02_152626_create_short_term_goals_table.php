<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('short_term_goals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pulse_survey_id')->constrained()->onDelete('cascade');
            $table->integer('target_score');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('short_term_goals');
    }
};
