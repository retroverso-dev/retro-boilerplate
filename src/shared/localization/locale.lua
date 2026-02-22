Resource = Resource or {}
Resource.Locale = {
    data = {}
}

function Resource.Locale.Init(localeName)
    Resource.Locale.data = Resource.LocaleLoader.Load(localeName) or {}
end

function Resource.Locale.T(key)
    return Resource.Locale.data[key] or key
end
