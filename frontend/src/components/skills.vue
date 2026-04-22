<script setup>
import SectionTitle from './SectionTitle.vue';
 
const skills = [
  { name: 'Vue.js', level: 'Sedang Belajar' },
  { name: 'JavaScript', level: 'Sedang Belajar' },
  { name: 'Tailwind CSS', level: 'Sedang Belajar' },
  { name: 'Node.js', level: 'Pemula' },
  { name: 'Express.js', level: 'Pemula' },
  { name: 'Git & GitHub', level: 'Sedang Belajar' },
  { name: 'HTML5', level: 'Menengah' },
  { name: 'CSS3', level: 'Menengah' },
];
</script>
 
<template>
  <section id="skill" class="py-20 bg-gray-50">
	<div class="container mx-auto px-6">
  	<SectionTitle title="Keahlian & Teknologi" />
  	<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
    	<div v-for="skill in skills"
             :key="skill.name"
             class="bg-white p-6 rounded-lg shadow-lg text-center
                    transform hover:-translate-y-2 transition-transform duration-300">
      	<h3 class="text-xl font-bold text-gray-800">{{ skill.name }}</h3>
      	<p class="text-gray-500 mt-2">{{ skill.level }}</p>
    	</div>
  	</div>
	</div>
  </section>
</template>
