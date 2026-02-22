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
        Resource.NUI.Send("setLocale", data.locale)
    end

    if data and data.colors then
        Resource.NUI.Send("setConfig", data.colors)
    end
end)
