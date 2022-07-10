mod mover;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![mover::move_mouse])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
