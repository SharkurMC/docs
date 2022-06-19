# Configuration

When you use Sharkur you will have more configuration files because:
- Sharkur is a fork of Purpur,
- Purpur is a fork of Pufferfish,
- Pufferfish is a fork of Paper,
- Paper is a fork of Spigot,
- Spigot is a fork of CraftBukkit
- CraftBukkit is a fork of vanilla

All configuration files:
- [Server Configuration (server.properties)](https://minecraft.fandom.com/wiki/Server.properties)
- [Bukkit Configuration (bukkit.yml)](https://bukkit.fandom.com/wiki/Bukkit.yml)
- [Spigot Configuration (spigot.yml)](https://www.spigotmc.org/wiki/spigot-configuration/)
- [Paper Configuration (config/paper-global.yml,world/paper-world.yml)](https://docs.papermc.io/paper/reference/paper-global-configuration)
- [Pufferfish Configuration (pufferfish.yml)](https://docs.pufferfish.host/setup/pufferfish-fork-configuration/)
- [Purpur Configuration (purpur.yml)](https://purpurmc.org/docs/Configuration/)
- [Sharkur Configuration (sharkur.yml)](#sharkur-configuration)

## Sharkur Configuration

| NAME           | DESCRIPTION                                                                               | DEFAULT |
| -------------- | ----------------------------------------------------------------------------------------- | ------- |
| verbose        | Sets whether the server should dump all configuration values to the server log on startup | false   |
| config-version | **Do not change this!** This is used internally to help automatically update your config  | -       |

### Settings
| NAME               | DESCRIPTION                                                                                      | DEFAULT |
| ------------------ | ------------------------------------------------------------------------------------------------ | ------- |
| disable-user-cache | Sets whether to use usercache.json file. **We do not recommend disabling it on online servers.** | false   |

#### Messages
Messages use MiniMessage formatting.  
[Web Interface](https://webui.adventure.kyori.net/) | [Documentation](https://docs.adventure.kyori.net/)  

| NAME                    | DESCRIPTION                          | DEFAULT                                                        |
| ----------------------- | ------------------------------------ | -------------------------------------------------------------- |
| sharkur-commands-prefix | Sets the prefix for sharkur commands | <gradient:#1db0f3:#64cdfd>(Sharkur)</gradient:#1db0f3:#64cdfd> |

#### Commands
| NAME    | DESCRIPTION                                     | DEFAULT |
| ------- | ----------------------------------------------- | ------- |
| version | Sets whether to register the `/version` command | true    |
| plugins | Sets whether to register the `/plugins` command | true    |
| reload  | Sets whether to register the `/reload` command  | true    |
| help    | Sets whether to register the `/help` command    | true    |