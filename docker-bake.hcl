group "default" {
    targets = ["uikit-site"]
}

target "uikit-site" {
    inherits = ["docker-metadata-action"]
    context = "."
    dockerfile = "Dockerfile"
    platforms = [
        "linux/amd64",
        "linux/arm64"
    ]
}

target "docker-metadata-action" {}
