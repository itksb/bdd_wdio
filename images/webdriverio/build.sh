#!/usr/bin/env bash

C_IMAGE_NAME='itksb.com/webdriverio';
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )";

docker build . -t "${C_IMAGE_NAME}" --build-arg http_proxy=${http_proxy} --build-arg https_proxy=${https_proxy}
