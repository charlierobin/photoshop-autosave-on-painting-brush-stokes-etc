# Photoshop script that autosaves current document on painting (brush stokes etc)

## (and also on a bunch of other events: adjustment layers, adjustments, layer visibility)

This was the next experimental iteration on the script that started life as part of this idea here…

https://github.com/charlierobin/cinema-4d-bitmap-files-texture-auto-reloader-with-photoshop-save-all-plugin
 
In that project, users painted (or whatever) in Photoshop, hit `command S`, and all their open documents were saved (on the assumption that everything they had open and were working on was linked to the same Cinema 4D project).

The Cinema 4D “files watcher” plug in then detected those file changes, and automatically updated the materials using those external bitmap files.

https://github.com/charlierobin/cinema-4d-bitmap-files-texture-auto-reloader-with-photoshop-save-all-plugin/tree/main/TextureAutoReload

But as it started to get used in actual production, some users wanted something a little different: no "save all", but saving automatically as they painted. 

(And of course, as soon as I was using it with the paintbrush tool, I found that I wanted it to work with a whole lot of other stuff.)

This was the first end result of all those ideas.

https://github.com/user-attachments/assets/88352a2a-f1aa-4214-80cc-a2d5927af7db

Installation is through the Photoshop `File ▶︎ Script Events Manager`.

<img width="1552" height="1570" alt="Screenshot 2026-11-17 at 19 27 16" src="https://github.com/user-attachments/assets/9b28d178-8069-4d86-bd6b-f84765d1f8e3" />

You select `Everything` for Photoshop event, and then select this script (wherever you’ve put it on your hard drive).

<img width="1354" height="836" alt="Screenshot 2026-11-17 at 19 27 55" src="https://github.com/user-attachments/assets/ab197c50-11cb-4bdd-8ebd-799d0cfe74a8" />

(I think in my README on the [Cinema 4D automatically reload/refresh/update](https://github.com/charlierobin/cinema-4d-bitmap-files-texture-auto-reloader-with-photoshop-save-all-plugin) repository I’ve said that the Photoshop script has to go in the Photoshop install folder, but of course that’s nonsense: it can go wherever you want. Regrettably the same is not true of the Cinema 4D side of things.)

