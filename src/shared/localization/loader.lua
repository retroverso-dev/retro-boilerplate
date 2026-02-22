Resource = Resource or {}
Resource.LocaleLoader = {}

function Resource.LocaleLoader.Load(localeName)
    localeName = localeName or "en"

    local localeData = LoadResourceFile(GetCurrentResourceName(), "locales/" .. localeName .. ".json")

    if not localeData then
        print(("^3[retro-kit]^7 Locale '%s' not found, fallback to 'en'"):format(localeName))
        localeData = LoadResourceFile(GetCurrentResourceName(), "locales/en.json")
    end

    if not localeData then
        print("^1[retro-kit]^7 Failed to load any locale file!")
        return nil
    end

    local locale = json.decode(localeData)

    if not locale then
        print(("^1[retro-kit]^7 Failed to parse locale '%s'"):format(localeName))
        return nil
    end

    return locale
end
