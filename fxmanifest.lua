fx_version 'cerulean'
game 'gta5'
lua54 'yes'

name 'Nome do Script'
author 'retroverso.dev'
version '0.1.0'
description 'Adicionar descrição'

dependencies {
    --'oxmysql', -- Descomentar se for usar banco de dados
    'retro-kit'
}

ui_page 'web/dist/index.html'

files {
    'locales/*.json',
    'web/dist/**/*'
}

shared_scripts {
    '@retro-kit/init.lua',
    'src/shared/config/config.lua',
    'src/shared/localization/loader.lua',
    'src/shared/localization/locale.lua',
    'src/shared/localization/init.lua',
    'src/shared/**/*.lua'
}

client_scripts {
    "src/client/core/nui.lua",
    "src/client/core/events.lua",
    "src/client/core/commands.lua",
    "src/client/core/init.lua",
    "src/client/**/*.lua"
}

server_scripts {
    -- '@oxmysql/lib/MySQL.lua', -- Descomentar se for usar banco de dados
    "src/server/core/events.lua",
    "src/server/core/init.lua",
    "src/server/**/*.lua"
}