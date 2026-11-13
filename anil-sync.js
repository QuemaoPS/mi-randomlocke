// anil-sync.js - Gestión segura de estado local, backups y sincronización con GitHub
const STORAGE_KEY = "anil_randomlocke_v2_data";
const BACKUP_KEY = "anil_randomlocke_v2_backup";

class AnilTrackerStore {
  constructor() {
    this.data = this.loadLocal();
  }

  loadLocal() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        this.saveLocal(DEFAULT_TRACKER_DATA);
        return JSON.parse(JSON.stringify(DEFAULT_TRACKER_DATA));
      }
      return JSON.parse(raw);
    } catch (e) {
      console.error("Error leyendo localStorage, cargando datos por defecto:", e);
      return JSON.parse(JSON.stringify(DEFAULT_TRACKER_DATA));
    }
  }

  saveLocal(newData = this.data) {
    // Crear backup automático antes de sobreescribir
    const current = localStorage.getItem(STORAGE_KEY);
    if (current) {
      localStorage.setItem(BACKUP_KEY, current);
    }
    newData.lastUpdated = Date.now();
    this.data = newData;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    this.notify("Cambios guardados localmente");
  }

  async syncFromGitHub(url) {
    const targetUrl = url || this.data.config.githubRawUrl;
    if (!targetUrl) {
      alert("Configura primero la URL Raw de GitHub en Ajustes o pega el enlace.");
      return false;
    }
    try {
      const cacheBuster = `${targetUrl}${targetUrl.includes('?') ? '&' : '?'}t=${Date.now()}`;
      const res = await fetch(cacheBuster);
      if (!res.ok) throw new Error("No se pudo descargar el JSON remoto");
      const remoteData = await res.json();
      if (!remoteData.players) throw new Error("Formato JSON inválido");

      // Guardar backup local por seguridad y aplicar remoto
      this.saveLocal(remoteData);
      this.notify("¡Sincronizado con GitHub con éxito!");
      return true;
    } catch (err) {
      console.error(err);
      alert("Error al sincronizar desde GitHub: " + err.message);
      return false;
    }
  }

  exportJSON() {
    const blob = new Blob([JSON.stringify(this.data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `anil-tracker-backup-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  importJSON(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (!parsed.players) throw new Error("Archivo JSON no válido para el tracker");
        this.saveLocal(parsed);
        if (callback) callback();
      } catch (err) {
        alert("Error importando archivo: " + err.message);
      }
    };
    reader.readAsText(file);
  }

  restoreBackup() {
    const backup = localStorage.getItem(BACKUP_KEY);
    if (!backup) {
      alert("No hay copia de seguridad anterior disponible.");
      return false;
    }
    localStorage.setItem(STORAGE_KEY, backup);
    this.data = JSON.parse(backup);
    this.notify("Copia de seguridad restaurada");
    return true;
  }

  getSpriteUrl(species) {
    if (!species) return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";
    const clean = species.toLowerCase().trim().replace(/[^a-z0-9-]/g, "");
    return `https://img.pokemondb.net/sprites/black-white/anim/normal/${clean}.gif`;
  }

  notify(msg) {
    const toast = document.getElementById("toast");
    if (toast) {
      toast.textContent = msg;
      toast.style.display = "block";
      setTimeout(() => { toast.style.display = "none"; }, 2800);
    }
  }
}

const store = new AnilTrackerStore();
