group "default" {
    targets = ["site"]
}

target "site" {
    context = "."
    dockerfile = "Dockerfile"
    platforms = [
        "linux/amd64"
    ]
    output = [ "." ]
}
