Resource = Resource or {}

Resource.NUI.Register("app:ready", function(data, cb)
    Resource.Ready = true
    print("Resource is ready!")
    TriggerServerEvent("app:ready")
    cb({ status = "ok" })
end)

RegisterNetEvent("app:initData")
AddEventHandler("app:initData", function(data)
    if data and data.locale then
        print(("Loaded locale: %s"):format(data.locale.language or "unknown"))
        Resource.NUI.Send("setLocale", data.locale) -- sem .data
    end
end)
