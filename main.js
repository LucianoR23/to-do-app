import './style.css'
import { App } from "./src/to-do/app";
import toDoStore from "./src/store/to-do.store";


toDoStore.initStore();

App('#app');