use std::sync::RwLock;
// use std::sync::mpsc::{channel, Sender, TryRecvError};
use std::thread;
use std::time::Duration;
use rand::distributions::{Distribution, Uniform};
use enigo::{Enigo, MouseControllable};

pub struct MoveState(pub RwLock<bool>);

#[tauri::command(async)]
pub fn start_move(delay: u64, state: tauri::State<MoveState>) {
    *state.0.write().unwrap() = true;
    let mut enigo = Enigo::new();
    let mut rng = rand::thread_rng();
    let move_range = Uniform::from(1..1001);
    let sleep_duration = Duration::from_secs(delay);
    let mut moving = *state.0.read().unwrap();

    while moving {
        thread::sleep(sleep_duration);
        enigo.mouse_move_to(move_range.sample(&mut rng), move_range.sample(&mut rng));
        // We have to set the state every iteration since the state could have changed.
        moving = *state.0.read().unwrap();
    }
}

#[tauri::command]
pub fn stop_move(state: tauri::State<MoveState>) {
    let mut state_guard = state.0.write().unwrap();
    *state_guard = false
}