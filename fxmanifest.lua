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
    'web/dist/**/*'
}

shared_scripts {
    '@retro-kit/init.lua',
    'shared/config/config.lua',
    'shared/localization/loader.lua',
    'shared/localization/locales.lua',
    'shared/localization/init.lua',
    'shared/**/*.lua'
}

client_scripts {
    "client/core/init.lua",
    "client/**/*.lua"
}

server_scripts {
    -- '@oxmysql/lib/MySQL.lua', -- Descomentar se for usar banco de dados
    "server/core/init.lua",
    "server/**/*.lua"
}