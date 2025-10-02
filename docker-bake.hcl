group "default" {
    targets = ["site"]
}

target "docker-metadata-action" {}

target "site" {
    inherits = ["docker-metadata-action"]
    context = "."
    dockerfile = "Dockerfile"
    platforms = [
        "linux/amd64",
        "linux/arm64"
    ]
}
