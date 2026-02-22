Resource = Resource or {}

RegisterCommand("boilerplate", function(_, args)
    if args[1] == "nui" then
        Resource.NUI.Toggle("demo-card:toggle")
    end
end, false)
