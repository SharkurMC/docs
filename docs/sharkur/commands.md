# Commands

Sharkur adds only 1 command to the game so far, namely `/sharkur`

| NAME     | DESCRIPTION              | USAGE                                            | EXAMPLES                                                                                           | PERMISSION             |
| -------- | ------------------------ | ------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ---------------------- |
| /sharkur | Sharkur related commands | /sharkur [reload [plugins \| config] \| version] | `/sharkur reload plugins` - Reload all plugins <br/> `/sharkur reload config` - Reload sharkur.yml <br/> `/sharkur version` - Shows the current version | bukkit.command.sharkur |

## Sharkur reload plugins

What is the point of `/sharkur reload plugins` when there is `/reload`?  
This is because Sharkur implements the `onReload` function in plugins, and when you use this command this function is called in all plugins. This command works like Sponge's `/reload` command