//On affiche un message si il n'y a pas de tâches à faire. Un champ texte
accompagné d'un bouton "Ajouter" sera présent au dessus de la liste et permettra
d'ajouter une nouvelle tâche. Pour chaque tâche, une case à cocher permettra de
marquer la tâche comme faite. Une tâche terminée sera barrée (à l'aide de CSS).
Les tâches à faire seront toujours affichées en premier. Une case, en bas de
liste, permettra de masquer les tâches terminées.

<template>
  <body class="card">
    <section class="title">
      <h1>To-Do-List</h1>
      <font-awesome-icon class="listCheck" icon="list-check" />
    </section>
    <section class="addTask">
      <form action="" @submit.prevent="addTask">
        <input
          type="text"
          placeholder="Add your task"
          v-model="newTask"
        /><button @click="openYoutube">ADD</button>
      </form>
    </section>
    <section class="tasks">
      <span class="nothing" v-show="tasks.length === 0"
        >It's a litlle bit boring here, you should add something to do !</span
      >
      <ul>
        <li class="task" v-for="task in tasks">
          <div class="titleTask">
            <input type="checkbox" v-model="task.completed" />
            <span :class="{ completed: task.completed }">{{ task.title }}</span>
          </div>
          <div class="deleteTask">
            <button @click="deleteTask(task)">
              <font-awesome-icon class="trashIcon" icon="trash" />
            </button>
          </div>
        </li>
      </ul>
    </section>
  </body>
</template>

<script setup>
import { onMounted, ref } from "vue";

const tasks = ref([]);
const newTask = ref("");
onMounted(() => {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    tasks.value = JSON.parse(saved);
  }
});
const saveTask = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
};
const date = new Date().toISOString().split("T")[0];

const addTask = () => {
  const add = newTask.value.trim();
  if (add === "") {
    return;
  }
  tasks.value.push({
    title: add,
    completed: false,
    date: date,
  });
  newTask.value = "";
  saveTask();
};

const deleteTask = (task) => {
  tasks.value = tasks.value.filter((t) => t !== task);
};

const openYoutube = () => {
  window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran");
};
</script>

<style>
button {
  cursor: pointer;
}
ul {
  padding: 0;
}
.card {
  background-color: #faf2ea;
  display: flex;
  flex-direction: column;
  padding: 0 2.5rem 5rem 2.5rem;
  width: 60%;
  border-radius: 10px;
}
.title {
  font-size: 25px;
  display: flex;
  align-items: center;
  gap: 25px;
}
.listCheck {
  color: #f27438;
  font-size: 30px;
}
.addTask {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  height: 4.2rem;
  padding-left: 0.5rem;

  input {
    font-size: 25px;
    padding-right: 2rem;
    border-radius: 30px;
    height: 4rem;
    width: 89.4vh;
    border: none;
  }
  input:focus {
    outline: none;
  }
  button {
    color: white;
    font-size: 25px;
    font-weight: bold;
    background-color: #f27438;
    border: none;
    border-radius: 30px;
    width: 20vh;
    height: 4.1rem;
  }
}
.tasks {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2rem 0rem;
}
.completed {
  text-decoration: line-through #f27438;
  color: gray;
}
.nothing {
  padding-left: 0.5rem;
  font-size: 20px;
}
.task {
  font-size: 25px;
  display: flex;
  align-items: center;
  padding: 0.5rem;

  button {
    background: none;
    border: none;
  }
}
.trashIcon {
  font-size: 22px;
  color: #f27438;
}
.titleTask {
  display: flex;
  align-items: center;
  width: 90%;
  gap: 20px;
}
.deleteTask {
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: end;
}

input[type="checkbox"] {
  appearance: none;

  width: 20px;
  height: 20px;
  border: 2px solid #f27438;
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  position: relative;
}

input[type="checkbox"]:checked {
  background-color: #f27438;
}
</style>
