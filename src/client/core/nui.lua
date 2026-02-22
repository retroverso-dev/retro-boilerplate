Resource = Resource or {}
Resource.NUI = {}

Resource.NUI.IsOpen = false

function Resource.NUI.Send(action, data)
    SendNUIMessage({
        action = action,
        data = data
    })
end

function Resource.NUI.Register(eventName, handler)
    RegisterNUICallback(eventName, function(data, cb)
        handler(data, cb)
    end)
end

function Resource.NUI.Toggle(action)
    Resource.NUI.IsOpen = not Resource.NUI.IsOpen
    SetNuiFocus(Resource.NUI.IsOpen, Resource.NUI.IsOpen)
    SendNUIMessage({
        action = action,
        data = Resource.NUI.IsOpen
    })
end

function Resource.NUI.Close()
    Resource.NUI.IsOpen = false
    SetNuiFocus(false, false)
end

Resource.NUI.Register("demo-card:close", function(_, cb)
    Resource.NUI.Close()
    cb({ status = "ok" })
end)
