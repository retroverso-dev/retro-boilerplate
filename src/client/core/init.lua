Resource = Resource or {}

Resource.NUI.Register("app:ready", function(data, cb)
    Resource.Ready = true
    print("Resource is ready!")
    Resource.NUI.Send("setLocale", Resource.Locale.data)
    cb({ status = "ok" })
end)
