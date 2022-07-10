use rand::distributions::{Distribution, Uniform};
use enigo::{Enigo, MouseControllable};

#[tauri::command]
pub fn move_mouse() {
    let mut enigo = Enigo::new();
    let mut rng = rand::thread_rng();
    let move_range = Uniform::from(1..1001);
    enigo.mouse_move_to(move_range.sample(&mut rng), move_range.sample(&mut rng));
}