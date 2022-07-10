mod mover;

fn main() {
  tauri::Builder::default()
    .manage(mover::MoveState(Default::default()))
    .invoke_handler(tauri::generate_handler![mover::start_move, mover::stop_move])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
