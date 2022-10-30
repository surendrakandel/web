
import { writable, type Unsubscriber, type Writable } from "svelte/store";
export let unsubsList: Writable<Unsubscriber[]> = writable([])

