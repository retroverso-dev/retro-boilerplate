RegisterNetEvent("app:ready")
AddEventHandler("app:ready", function()
    local src = source
    local config = Config
    local resourceName = GetCurrentResourceName()

    local locale = Resource.LocaleLoader.Load(config.Locale, resourceName)

    local nuiConfig = {
        locale = locale,
        config = config,
    }

    TriggerClientEvent("app:initData", src, nuiConfig)

    if config.Debug then
        local localeName = config.Locale or "en"
        local langLabel = locale and locale.language or "unknown"
        print(("^2[retro-kit]^7 Resource is ready! Loaded locale: ^3%s^7 (%s)"):format(langLabel, localeName))
    end
end)